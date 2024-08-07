import React, { useState, useEffect } from 'react';

export default function Coordenadas({ onDataUpdate }) {
    const [pickupPoints, setPickupPoints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api-ecomm.mobo.com.mx/map/consulta');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const formattedData = data.map(point => ({
                Calle: point.Calle, // Asegúrate de que el campo en la respuesta sea "street" o ajusta según el nombre real
                Email: point.Email, // Asegúrate de que el campo en la respuesta sea "email" o ajusta según el nombre real
                Horario: point.Horario, // Asegúrate de que el campo en la respuesta sea "businessHours" o ajusta según el nombre real
                Nombre: point.Nombre, // Asegúrate de que el campo en la respuesta sea "name" o ajusta según el nombre real
                Telefono: point.Telefono, // Asegúrate de que el campo en la respuesta sea "phone" o ajusta según el nombre real
                latitud: point.latitud, // Asegúrate de que el campo en la respuesta sea "latitude" o ajusta según el nombre real
                longitud: point.longitud // Asegúrate de que el campo en la respuesta sea "longitude" o ajusta según el nombre real
            }));

            onDataUpdate(formattedData); // Actualiza los datos en StoreLocT
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
            setLoading(false);
            console.log('Error fetching data. See console for details.');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return null; // Retorna null en lugar del bloque anterior
}
