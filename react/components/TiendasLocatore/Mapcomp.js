import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faSun,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

const Mapcomp = ({ pickupPoints = [] }) => {
  const [loading, setLoading] = useState(true)
  const [mapHtml, setMapHtml] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPoint, setSelectedPoint] = useState(null)

  useEffect(() => {
    const loadInitialMap = async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://api-ecomm.mobo.com.mx/map')

        if (response.status === 200) {
          setMapHtml(response.data)
          setErrorMessage('')
        } else {
          throw new Error('Failed to load initial map.')
        }
      } catch (error) {
        console.error('There was an error fetching the initial map!', error)
        setErrorMessage('Error fetching initial map.')
      } finally {
        setLoading(false)
      }
    }

    loadInitialMap()
  }, [])

  useEffect(() => {
    const loadMapWithMarkers = async () => {
      setLoading(true)
      try {
        const coordinates = pickupPoints.map((point) => ({
          name: point.name,
          latitude: point.address.location.latitude,
          longitude: point.address.location.longitude,
        }))

        const response = await axios.post(
          'https://api-ecomm.mobo.com.mx/map/map?',
          coordinates
        )

        if (response.status === 200) {
          setMapHtml(response.data)
          setErrorMessage('')
        } else {
          throw new Error('Failed to update map.')
        }
      } catch (error) {
        console.error('There was an error fetching the map!', error)
        setErrorMessage('Error updating map.')
      } finally {
        setLoading(false)
      }
    }

    if (pickupPoints.length > 0) {
      loadMapWithMarkers()
    }
  }, [pickupPoints])

  const tiendaSelect = async (point) => {
    setLoading(true)
    setSelectedPoint(point)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const coordinates = {
        latitude: point.address.location.latitude,
        longitude: point.address.location.longitude,
      }

      const response = await axios.post('https://api-ecomm.mobo.com.mx/map/Selec?', [
        coordinates,
      ])

      if (response.status === 200) {
        setMapHtml(response.data)
        setErrorMessage('')
      } else {
        throw new Error('Failed to select store.')
      }
    } catch (error) {
      console.error('Error:', error)
      setErrorMessage('Error selecting store.')
    } finally {
      setLoading(false)
    }
  }

  const filteredPoints = pickupPoints.filter((point) => {
    const { name, address } = point

    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      address.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      address.postalCode.includes(searchTerm)
    )
  })

  const getScheduleText = (businessHours) => {
    if (!businessHours || businessHours.length === 0)
      return { weekdaysText: '', weekendsText: '' }

    const weekdays = businessHours.filter(
      (item) => item.dayOfWeek >= 1 && item.dayOfWeek <= 5
    )

    const weekends = businessHours.filter(
      (item) => item.dayOfWeek === 6 || item.dayOfWeek === 7
    )

    const isConsistent = (days) => {
      if (days.length === 0) return false

      return days.every(
        (day) =>
          day.openingTime === days[0].openingTime &&
          day.closingTime === days[0].closingTime
      )
    }

    let weekdaysText = ''
    let weekendsText = ''

    if (isConsistent(weekdays)) {
      weekdaysText = `Lunes a Viernes: ${weekdays[0].openingTime} - ${weekdays[0].closingTime}`
    } else {
      weekdaysText = 'Horario de Lunes a Viernes varía.'
    }

    if (weekends.length > 0) {
      if (isConsistent(weekends)) {
        weekendsText = `Sábado y Domingo: ${weekends[0].openingTime} - ${weekends[0].closingTime}`
      } else {
        weekendsText = 'Horario de Sábado y Domingo varía.'
      }
    }

    return { weekdaysText, weekendsText }
  }

  return (
    <div className='content-general'>


      {/* Componente de búsqueda */}
      <div
      className="search-container"
      style={{
        color: 'black',
        width: '100%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3 className='td1' style={{ margin: '10px 0' ,fontSize:'40px'}}>Nuestras tiendas</h3>
      <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
        <input
          type="text"
          placeholder="Busca tu tienda por nombre o ciudad"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          style={{
            width: '100%',
            padding: '10px 40px 10px 10px', // Adding space for the icon
            borderRadius: '30px',
            border: '3px solid #ccc',
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            position: 'absolute',
            right: '10px', // Position the icon inside the input field
            top: '40%', // Center vertically
            transform: 'translateY(-50%)', // Adjust the vertical alignment
            fontSize: '18px',
            color: '#ccc',
          }}
        />
              </div>

      </div>

      {/* Contenedor del mapa y lista */}
      <div
  className="content-container"
  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '800px', }}
>
  <div
    className="map-container"
    style={{ display: 'flex', height: 'auto', width: '100%' }}
  >
    <div
      className="scrollbar"
      style={{
        justifyContent:"center",
        height: '795px',
        overflowY: 'scroll',
        flex: '1',
        padding: '10px',
        boxSizing: 'border-box',
      }}
    >
      <ul
        className="list"
        style={{
          margin: '0 auto',
        }}
      >
        {/* Mapeo de puntos de recogida */}
        {filteredPoints.map((point, index) => {
          if (!point) return null // Verificación para evitar errores
          const { weekdaysText, weekendsText } = getScheduleText(
            point.businessHours
          )

          // Estilos
          const backgroundColor =
            selectedPoint === point ? '#0433ff' : '#e1e2e3'

          const textColor =
            backgroundColor === '#0433ff' ? 'white' : 'black'

          const itemStyle = {
            backgroundColor,
            color: textColor,
            padding: '10px',
            borderBottom: '1px solid #ccc',
          }
          const containerStyle = {
            display: 'flex',
            alignItems: 'flex-start', // Alinea el icono y el texto al principio
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '-15px',
          };
        
          const iconStyle = {
            marginRight: '12px',
            flexShrink: 0
          };
        
          const textStyle = {
            margin: 0,
            lineHeight: '1.5' // Ajusta el espaciado entre líneas
          };
          const iconColor =
            backgroundColor === '#0433ff' ? 'white' : 'blue'

          // Expresiones regulares para extraer teléfono y email
          const phoneRegex = /(?:Teléfono:\s*)?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/
          const emailRegex = /Email:\s*([\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/
    
          // Extracción de datos
          const phoneMatch = point.description
            ? point.description.match(phoneRegex)
            : null

          const emailMatch = point.description
            ? point.description.match(emailRegex)
            : null

          const phone = phoneMatch
            ? `(${phoneMatch[1]})${phoneMatch[2]}-${phoneMatch[3]}`
            : 'No disponible'

          const email = emailMatch ? emailMatch[1] : 'No disponible'
          // Iconos con nuevo color

          return (
            <li key={index} className="list-item" style={itemStyle}>
             <h2
            style={{
              color: backgroundColor === '#0433ff' ? 'white' : '#0433ff', textAlign:"left",    fontWeight: "bold"
            }}
          >
            <strong>{point.name}</strong>
          </h2>       
          <div style={containerStyle}>
      <FontAwesomeIcon icon={faMapMarkerAlt} color={iconColor} style={iconStyle} />
      <p style={textStyle}>
        Calle: {point.address.street}, {point.address.postalCode}
      </p>
    </div>
<p>
  <FontAwesomeIcon icon={faEnvelope} color={iconColor} style={{ marginRight: '12px' }} />
  Email: {email}
</p>
<p>
  <FontAwesomeIcon icon={faPhoneAlt} color={iconColor} style={{ marginRight: '12px' }} />
  Teléfono: {phone}
</p>
<p className="hidden">Latitude: {point.address.location.latitude}</p>
<p className="hidden">Longitude: {point.address.location.longitude}</p>
<div style={containerStyle}>
<FontAwesomeIcon icon={faSun} color={iconColor} style={iconStyle}  />
<p style={textStyle}>
  {weekdaysText}
  </p>
  </div>
{weekendsText && (
  <div style={containerStyle}>
    <FontAwesomeIcon icon={faSun} color={iconColor} style={{ marginRight: '12px' }} />

  <p style={textStyle}>
    {weekendsText}
    </p>
  </div>
)}

              <div className="button-container" style={{marginBottom: '10px', marginTop: '10px',}}>
            <button
              className={backgroundColor === '#0433ff' ? '' : 'secondary'}
              style={{
                backgroundColor:
                  backgroundColor === '#0433ff' ? '#e1e2e3' : '#0433ff',
                color:
                  backgroundColor === '#0433ff' ? '#000000' : 'white',
              }}
              onClick={() => tiendaSelect(point)}
            >
              CÓMO LLEGAR
            </button>
          </div>
            </li>
          )
        })}
      </ul>
    </div>
    <div
      className="map"
      style={{ height: '795px', flex: '2' }}
      dangerouslySetInnerHTML={{ __html: mapHtml }}
    />
  </div>

      </div>
      <style jsx>
{`

  .hidden {
    display: none;
  }
  .map-container {
    display: flex;
    flex-direction: row;
    height: 795px; /* Altura original del contenedor */
    margin-bottom: 80px;
    gap: 20px; /* Espacio entre el mapa y la lista */
  }
    .list-item p {
  margin-left: 5px;
}

  .map {
    flex: 2;
    height: 795px;
    border: none;
  }
  .scrollbar {
    flex: 1;
    height: 795px; /* Altura igual al mapa */
    overflow-y: scroll;
    padding: 10px;
    box-sizing: border-box;
  }
  .list-item {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .list {
    list-style: none;
    padding: 5px;
    margin: 0;
    width: 100%;
  }
  .search-input {
    width: calc(100% - 22px);
    height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
    .button-container {
  display: flex;
  justify-content: center; /* Centra el botón dentro del contenedor */
  width: 100%;
}

.button-container button {
  background-color: #0433ff; /* Estilo de fondo por defecto del botón */
  color: white;
  width: 70%; /* Ajusta el ancho del botón */
  padding: 10px;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

/* Ajustes específicos para el botón */
.button-container button.secondary {
  background-color: #e1e2e3;
  color: #000000;
}


  @media (max-width: 1700px) {
   .scrollbar {
    height: 660px !important; 
    }
  }
      @media (max-width: 1500px) {
   .scrollbar {
    height: 580px !important; 
    }
  }
         @media (max-width: 1300px) {
   .scrollbar {
    height: 500px !important; 
    }
  }
  @media (max-width: 1024px) {
  .td1{
    font-size: 20px !important;
  }
    .map-container {
      flex-direction: column;
      align-items: center;
      gap: 10px; /* Espacio entre el mapa y la lista */
    }
    .map {
      width: 100%;
      height: 400px;
      order: 2;
    }

    .scrollbar {
      width: 100%;
      height: 400px; /* Igual altura al mapa */
      padding-left: 0;
      margin-top: 10px; /* Espacio entre el mapa y la lista */
      margin-left: 0;
      overflow-y: scroll;
      order: 3;
    }
    .search-container {
      order: 1;
    }
    .list{
      margin-right: -10px !important;
    }
    .list-item {

      width: calc(100% - 20px);
      margin: 5px 0; /* Reduce el espacio vertical entre los elementos de la lista */
    }

  }

  @media (min-width: 471px) and (max-width: 1100px) {
    .map-container {
      flex-direction: column;
      align-items: center;
      gap: 10px; /* Espacio entre el mapa y la lista */
    }
    .map {
      width: 100%;
      height: 400px; /* Ajusta la altura del mapa */
    }
    .scrollbar {
      width: 100%;
      height: 400px; /* Ajusta la altura de la lista */
      margin-top: 10px; /* Espacio entre el mapa y la lista */
    }
  }
`}
</style>



      </div>
  )
}

export default Mapcomp
