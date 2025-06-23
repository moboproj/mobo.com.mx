import React, { useState, useEffect, useRef } from 'react';

export default function WordPressCustom() {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // Para controlar la carga del slider
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 915); // Control de pantalla pequeña

  const sliderRef = useRef(null);

  // Detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 915);

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Obtener el título del post desde el DOM usando un selector CSS con retraso
  useEffect(() => {
    const getTitleFromDOM = () => {
      const titleElement = document.querySelector(".vtex-wordpress-integration-2-x-postTitle.t-heading-1");
      if (titleElement) {
        const extractedTitle = titleElement.textContent || titleElement.innerText;
        setPostTitle(extractedTitle.trim());
      } else {
        // Intentar nuevamente después de un breve retraso
        setTimeout(getTitleFromDOM, 100); // Retraso de 100 ms
      }
    };

    getTitleFromDOM();
  }, []);

  // Obtener el ID de la categoría usando el título del post
  useEffect(() => {
    if (postTitle) {
      fetch(`https://blog.mobo.com.mx/wp-json/wp/v2/posts`)
        .then((response) => response.json())
        .then((data) => {
          const matchedPost = data.find(post => post.title.rendered.trim() === postTitle);
          if (matchedPost && matchedPost.categories && matchedPost.categories.length > 0) {
            setCategoryId(matchedPost.categories[0]);  
          } else {
            console.error('No se encontró ningún post con ese título o sin categoría.');
          }
        })
        .catch((error) => console.error('Error fetching posts:', error));
    }
  }, [postTitle]);

  // Obtener todos los posts de la categoría y cargar imágenes destacadas
  useEffect(() => {
    if (categoryId) {
      fetch(`https://blog.mobo.com.mx/wp-json/wp/v2/posts?categories=${categoryId}`)
        .then((response) => response.json())
        .then((data) => {
          const currentDomain = window.location.origin; // Obtener el dominio actual

          // Mapear los posts para obtener las imágenes destacadas y construir las URLs completas
          const postsWithImagesAndLinks = data.map(post => 
            fetch(`https://blog.mobo.com.mx/wp-json/wp/v2/media/${post.featured_media}`)
              .then((response) => response.json())
              .then((media) => ({
                ...post,
                featured_image_url: media.source_url,
                full_url: `${currentDomain}/blog/post/${post.slug}` // Construir la URL completa usando el dominio actual
              }))
              .catch(() => ({
                ...post,
                featured_image_url: null,
                full_url: `${currentDomain}/blog/post/${post.slug}` // Construir la URL completa usando el dominio actual
              }))
          );

          // Esperar a que todas las imágenes sean resueltas
          Promise.all(postsWithImagesAndLinks)
            .then((postsWithImagesAndLinksResolved) => {
              setPosts(postsWithImagesAndLinksResolved);
              setIsLoaded(true); // Indicar que los datos del slider están listos
            })
            .catch((error) => console.error('Error fetching post images:', error));
        })
        .catch((error) => console.error('Error fetching posts by category:', error));
    }
  }, [categoryId]);

  // Función para desplazar el slider a la izquierda
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  // Función para desplazar el slider a la derecha
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  // Estilos en línea
  const containerStyle = {
    padding: '10px',
    position: 'relative', // Necesario para posicionar los botones de navegación
    textAlign: 'center' // Centrar el texto en el contenedor
  };

  const sliderStyle = {
    display: 'flex',
    overflow: 'hidden',
    scrollBehavior: 'smooth',
    position: 'relative',
    marginTop: '20px' // Espacio entre el texto y el slider
  };

  const sliderItemStyle = {
    flex: '1 0 25%', // Muestra 4 elementos a la vez en pantallas grandes
    boxSizing: 'border-box',
    padding: '10px',
    textAlign: 'center',
  };

  const smallScreenSliderItemStyle = {
    flex: '1 0 100%', // Muestra 1 elemento en pantallas pequeñas
    boxSizing: 'border-box',
    padding: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 10,
  };

  const prevButtonStyle = {
    ...buttonStyle,
    left: 0,
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: 0,
  };

  return (
    <div style={containerStyle}>
      <label style={{ fontSize: '25px' }}>
        También te <strong>podría interesar...</strong>
      </label>
      {isLoaded && ( // Renderizar el slider solo después de que los datos se hayan cargado
        <>
          <button style={prevButtonStyle} onClick={scrollLeft}>◀</button>
          <button style={nextButtonStyle} onClick={scrollRight}>▶</button>
          <div className="slider" style={sliderStyle} ref={sliderRef}>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} style={isSmallScreen ? smallScreenSliderItemStyle : sliderItemStyle}>
                  {post.featured_image_url && (
                    <a href={post.full_url} target="_blank" rel="noopener noreferrer">
                      <img
                        style={imageStyle}
                        src={post.featured_image_url}
                        alt={post.title.rendered}
                      />
                    </a>
                  )}
                  <h2>{post.title.rendered}</h2>
                 
                </div>
              ))
            ) : (
              <p>No posts found for this category.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
