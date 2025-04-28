import React, { useState, useEffect } from 'react';

export default function NotasWordpress() {
  const [categoryId, setCategoryId] = useState(15); // Valor predeterminado
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [currentUrl, setCurrentUrl] = useState('');
  const urlmenu = 'https://www.mobo.com.mx/blog';
  const [selectedCategory, setSelectedCategory] = useState(15); // Estado para la categoría seleccionada
  const [loading, setLoading] = useState(false); // Estado para la animación de carga
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Estado para el ancho de la ventana

  const getCategoryIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('categoryId');
    return id ? parseInt(id, 10) : null; // Devuelve el categoryId si existe, de lo contrario, null
  };

  const fetchPosts = async (id) => {
    if (id !== null) {
      setLoading(true); // Inicia la animación de carga
      try {
        const response = await fetch(`https://blog.mobo.com.mx/wp-json/wp/v2/posts?categories=${id}`);
        const data = await response.json();

        const currentDomain = window.location.origin;

        const postsWithImagesAndLinks = await Promise.all(
          data.map(async (post) => {
            const mediaResponse = await fetch(`https://blog.mobo.com.mx/wp-json/wp/v2/media/${post.featured_media}`);
            const media = await mediaResponse.json();
            const featured_image_url = media.source_url;

            // Obtener el nombre de la categoría a partir de wp:term
            const categoryResponse = await fetch(post._links['wp:term'][0].href);
            const categoryData = await categoryResponse.json();
            const categoryName = categoryData.length > 0 ? categoryData[0].name : 'Sin categoría'; // Manejo de caso en que no hay categoría

            return {
              ...post,
              featured_image_url: featured_image_url,
              full_url: `${currentDomain}/blog/post/${post.slug}`,
              date: post.date,
              name: categoryName, // Agregar el nombre de la categoría
            };
          })
        );

        setPosts(postsWithImagesAndLinks);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); // Detiene la animación de carga
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    const idFromUrl = getCategoryIdFromUrl();
    if (idFromUrl) {
      setCategoryId(idFromUrl); // Actualiza el categoryId con el de la URL
      setSelectedCategory(idFromUrl); // Establece la categoría seleccionada
    }
  }, []);

  useEffect(() => {
    fetchPosts(categoryId); // Fetch posts con el categoryId actual
  }, [categoryId]);

  // Reinicia visiblePosts cuando se actualizan los posts
  useEffect(() => {
    setVisiblePosts(4);
  }, [posts]);

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 4);
  };

  const styles = {
    loadingSpinner: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      height: '600px',
      alignItems: 'center',
    },
    button: {
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '30px',
      border: 'none',
      backgroundColor: 'transparent',
      color: '#333',
      fontWeight: 'bold',
    },
    selectedButton: {
      color: '#007bff', // Color del texto seleccionado (azul)
    },
    postsGrid: {
      display: windowWidth >= 1024 ? 'grid' : 'block', // Cambia a block en pantallas menores a 1024px
      gridTemplateColumns: 'repeat(2, 1fr)', // Dos columnas
      gap: '10px', // Espacio entre los elementos
      marginTop: '20px',
    },
    postItem: {
      textDecoration: 'none',
      color: '#333',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: windowWidth >= 1024 ? '' : '10px',
    },
    postImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '15px',
    },
    postInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5px',
    },
    titleNota: {
      fontSize: '1em',
      fontWeight: 'bold',
      margin: '5px 0',
    },
    loadMoreText: {
      cursor: 'pointer',
      color: '#007bff',
      margin: '20px 0',
      display: 'block',
      textAlign: 'center',
    },
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    buttonsContainer: {
      display: 'flex',
      gap: windowWidth >= 1024 ? '15px' : '10px',
    },
    logo: {
      width: '300px',
      marginBottom: '20px',
    }
  };

  const handleClick = (id) => {
    setCategoryId(id);
    setSelectedCategory(id); // Actualiza el estado de la categoría seleccionada
  };

  return (
    <div>
      <div style={styles.menuContainer}>
        <img src='/arquivos/Mobo_News.png' style={styles.logo} alt="Mobo News" />
        <div style={styles.buttonsContainer}>
          <div 
            style={{ ...styles.button, ...(selectedCategory === 15 ? styles.selectedButton : {}) }} 
            onClick={() => handleClick(15)}
          >
            Noticias
          </div>
          <div 
            style={{ ...styles.button, ...(selectedCategory === 16 ? styles.selectedButton : {}) }} 
            onClick={() => handleClick(16)}
          >
            Reseña
          </div>
          <div 
            style={{ ...styles.button, ...(selectedCategory === 17 ? styles.selectedButton : {}) }} 
            onClick={() => handleClick(17)}
          >
            Tips
          </div>
        </div>
      </div>

      {loading ? (
        <div style={styles.loadingSpinner}>
          <div className="spinner"></div>
          <style>{`
            .spinner {
              border: 8px solid rgba(0,0,0,0.1);
              border-left-color: #007bff;
              border-radius: 50%;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <div style={styles.postsGrid}>
          {posts.slice(0, visiblePosts).map((post) => (
            <a key={post.id} href={post.full_url} style={styles.postItem}>
              {post.featured_image_url && (
                <img src={post.featured_image_url} alt={post.title.rendered} style={styles.postImage} />
              )}
              <div style={styles.postInfo}>
                <span>{post.name}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 style={styles.titleNota}>{post.title.rendered}</h2>
            </a>
          ))}
        </div>
      )}

      {visiblePosts < posts.length && !loading && (
        <span style={styles.loadMoreText} onClick={loadMorePosts}>
          Cargar más
        </span>
      )}
    </div>
  );
}
