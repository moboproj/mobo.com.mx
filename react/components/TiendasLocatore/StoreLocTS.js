import React, { useState } from 'react'
import Coordenadas from './Coordenadas'
import { Helmet } from 'react-helmet'

import Mapcomp from './Mapcomp'
export default function StoreLocTS() {
  const [pickupPointsData, setPickupPointsData] = useState([])

  const handleDataUpdate = (data) => {
    setPickupPointsData(data)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Mapcomp pickupPoints={pickupPointsData} />{' '}
      {/* Pasando los datos a MapComponent */}
      <div>
        <Coordenadas onDataUpdate={handleDataUpdate} />{' '}
        {/* Pasando la función handleDataUpdate a Coordenadas */}
      </div>
      <Helmet>
      <title>Encuentra tu Tienda Mobo shop más cercana | MOBO</title>
    </Helmet>
    </div>
  )
}
