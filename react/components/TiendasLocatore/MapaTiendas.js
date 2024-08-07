import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faSun,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default function MapaTiendas({ pickupPoints }) {
  const [mapHtml, setMapHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPoints, setFilteredPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    const loadInitialMap = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api-ecomm.mobo.com.mx/map');
        if (response.status === 200) {
          setMapHtml(response.data);
          setErrorMessage('');
        } else {
          throw new Error('Failed to load initial map.');
        }
      } catch (error) {
        console.error('There was an error fetching the initial map!', error);
        setErrorMessage('Error fetching initial map.');
      } finally {
        setLoading(false);
      }
    };

    loadInitialMap();
  }, []);

  useEffect(() => {
    const loadMapWithMarkers = async () => {
      setLoading(true);
      try {
        const coordinates = pickupPoints
          .map(point => {
            const latitude = parseFloat(point.latitud);
            const longitude = parseFloat(point.longitud);

            if (isNaN(latitude) || isNaN(longitude)) {
              console.warn(`Invalid coordinates for ${point.Nombre}: latitud=${point.latitud}, longitud=${point.longitud}`);
              return null;
            }

            return {
              name: point.Nombre,
              latitude,
              longitude
            };
          })
          .filter(coord => coord !== null);

        const response = await axios.post('https://api-ecomm.mobo.com.mx/map/map?', coordinates);
        if (response.status === 200) {
          setMapHtml(response.data);
          setErrorMessage('');
        } else {
          throw new Error('Failed to update map.');
        }
      } catch (error) {
        console.error('There was an error fetching the map!', error);
        setErrorMessage('Error updating map.');
      } finally {
        setLoading(false);
      }
    };

    if (pickupPoints.length > 0) {
      loadMapWithMarkers();
    }
  }, [pickupPoints]);

  useEffect(() => {
    setFilteredPoints(
        pickupPoints.filter(point => 
          point.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          point.Calle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          point.Horario.toLowerCase().includes(searchTerm.toLowerCase()) ||
          point.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          point.Telefono.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  }, [searchTerm, pickupPoints]);

  const tiendaSelect = async (point) => {
    setLoading(true);
    setSelectedPoint(point);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    try {
      const selectedLatitude = parseFloat(point.latitud);
      const selectedLongitude = parseFloat(point.longitud);
  
      if (isNaN(selectedLatitude) || isNaN(selectedLongitude)) {
        throw new Error('Invalid coordinates');
      }
  
      // Coordenadas del punto seleccionado
      const selectedCoordinates = {
        name: point.Nombre,
        latitude: selectedLatitude,
        longitude: selectedLongitude
      };
  
      // Coordenadas de los otros puntos
      const otherCoordinates = pickupPoints
        .filter(p => p !== point)
        .map(p => {
          const latitude = parseFloat(p.latitud);
          const longitude = parseFloat(p.longitud);
  
          if (isNaN(latitude) || isNaN(longitude)) {
            console.warn(`Invalid coordinates for ${p.Nombre}: latitud=${p.latitud}, longitud=${p.longitud}`);
            return null;
          }
  
          return {
            name: p.Nombre,
            latitude,
            longitude
          };
        })
        .filter(coord => coord !== null);
  
      // Crear el payload con las coordenadas separadas
// Añadir selectedCoordinates a otherCoordinates
otherCoordinates.push(selectedCoordinates);

const payload = {
  selected: selectedCoordinates,
  others: otherCoordinates
};

  
      const response = await axios.post('https://api-ecomm.mobo.com.mx/map/Selec?', payload);
  
      if (response.status === 200) {
        setMapHtml(response.data);
        setErrorMessage('');
      } else {
        throw new Error('Failed to select store.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error selecting store.');
    } finally {
      setLoading(false);
    }
  };
  
  
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  
  return (
    <div className="mapa-tiendas-container">
      {/* Search Bar */}
      <div className="search-container">
  <h3 className="search-title">Nuestras tiendas</h3>
  <div className="search-bar">
    <input
      type="text"
      placeholder="Busca tu tienda por nombre o ciudad"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
    <FontAwesomeIcon
      icon={faSearch}
      className="search-icon"
    />
  </div>
</div>


      <div className="main-content">
        {/* Lista de puntos de recogida */}
        <div className="lista-container">
          <ul className="lista-puntos">
            {filteredPoints.map((point, index) => (
              <li
                key={index}
                className={`lista-item ${selectedPoint === point ? 'selected' : ''}`}
                onClick={() => tiendaSelect(point)}
                style={{ cursor: 'pointer' }}  // Cambia el cursor al pasar sobre el <li>
              >
                <h2 style={{ color: selectedPoint === point ? '#fff' : '#0433ff' }}>
                  <strong>{point.Nombre}</strong>
                </h2>
                <br />
                <div className="item-detail">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className={`item-icon ${selectedPoint === point ? 'icon-selected' : ''}`}
                  />
                  <div>Calle: {capitalizeWords(point.Calle.toLowerCase())}</div>
                </div>

                <div className="item-detail">
                  <FontAwesomeIcon
                    icon={faSun}
                    className={`item-icon ${selectedPoint === point ? 'icon-selected' : ''}`}
                  />
                  <div>Horario: {point.Horario}</div>
                </div>
                <div className="item-detail">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`item-icon ${selectedPoint === point ? 'icon-selected' : ''}`}
                  />
                  <div>Email: {point.Email}</div>
                </div>
                <div className="item-detail">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className={`item-icon ${selectedPoint === point ? 'icon-selected' : ''}`}
                  />
                  <div>Teléfono: {point.Telefono}</div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic en el botón también active el clic en el <li>
                    tiendaSelect(point);
                  }}
                  className={`select-button ${selectedPoint === point ? 'selected' : ''}`}
                >
                  CÓMO LLEGAR
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mapa */}
        <div className="map-container">
          {loading ? (
            <p></p>
          ) : errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: mapHtml }} className="map-content" />
          )}
        </div>
      </div>

      <style jsx>{`
      .search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.search-title {
  font-size:40px;
  text-align: center;
  margin-bottom: -10px;
    margin-top: 10px;
}

.search-bar {
  align-items: center;
  margin-top: 10px; /* Espacio entre el título y la barra de búsqueda */
}


.search-icon {
color: #b4b4b4;
  margin-left: -25px; /* Ajusta esto según sea necesario para alinear el icono */
  cursor: pointer;
}

            .select-button.selected {
          background-color: #e1e2e3; /* Color cuando está seleccionado */
          color: #0433ff; /* Cambiar el color del texto si lo deseas */
        }
        .mapa-tiendas-container {
          display: grid;
          grid-template-rows: auto 1fr; /* Search bar and content */
        }

        .search-bar {
          width: 70%;
          padding: 10px;
          background-color: transparent;
          text-align: center;
        }

        .search-input {
          padding: 10px;
              height: 30px;
          border-radius: 30px;
          border: 1px solid #ccc;
          box-sizing: border-box;
          width: 60%;
        }

        .main-content {
          display: grid;
          grid-template-columns: 34% 65% !important; /* 30% for list, 70% for map */
          grid-template-rows: 1fr;
          gap: 10px;
          height: 100%;
          grid-template-columns: 1fr;
        }

        .lista-container {
          padding: 10px;
          overflow-y: auto;
          grid-column: 1;
          grid-row: 1;
          height: 795px;
        }

        .lista-puntos {
          padding: 0;
          list-style-type: none;
          margin: 0;
        }

        .lista-item {
          margin-bottom: 15px;
                  background-color: #e1e2e3;
          border-radius: 10px;
          padding: 10px;
          transition: background-color 0.3s ease;
        }

        .lista-item.selected {
          background-color: #0433ff;
          color: #fff;
        }

        .item-detail {
          display: flex;
          align-items: center;
          margin-bottom:15px;
        }

        .item-icon {
          margin-right: 12px;
          color: #0433ff; /* Color normal */
          transition: color 0.3s ease;
        }

        .item-icon.icon-selected {
          color: #fff; /* Color cuando está seleccionado */
        }

        .select-button {
          margin-top: 10px;
          padding: 5px 10px;
          border: none;
          border-radius: 35px;
          background-color: #0433ff;
          color: #fff;
              width: 40%;
          cursor: pointer;
          display: block;
          margin: 10px auto 0;
        }

        .map-container {
          height: 100%;
          grid-column: 2;
          grid-row: 1;
        }

        .map-content {
          height: 100%;
        }
          @media (max-width: 1500px) {
            .lista-container{
          height:  590px;
            }
          }
        @media (max-width: 1500px) {
            .lista-container{
            height:  530px;
            }
          }
                      @media (max-width: 1355px) {
            .lista-container{
          height:  520px;
            }
          }
         @media (max-width: 1242px) {
            .lista-container{
          height:  495px;
            }
          }
     @media (max-width: 1153px) {
            .lista-container{
        height: 455px;
            }
          }

       @media (max-width: 1024px) {
 
                .search-title {
  font-size:20px;
 
}
          }
        /* Media queries for screens <= 1024px */
        @media (max-width: 1024px) {
          .mapa-tiendas-container {
            grid-template-columns: 1fr; /* One column layout */
            margin-bottom: 10px;
          }
                      .main-content {

                    grid-template-columns: none!important; /* 30% for list, 70% for map */
            grid-template-rows: 1fr;
          }

          .search-bar {
            grid-row: 1;
            grid-column: 1;
          }

          .map-container {
            grid-row: 2;
            grid-column: 1;
          }
        .search-input {
          width: 100%;
        }
          .search-bar {
            width: 80%;
          }
          .lista-container {
            grid-row: 3;
            grid-column: 1;
            height: 50vh; /* Ajusta la altura según lo necesites */
          }
        .search-container {

        margin-bottom: 0px !important;
        }

          .select-button {
       
              width: 80%;
        }
        }
      `}</style>
    </div>
  );
}
