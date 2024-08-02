import React, { useState, useEffect } from 'react';

export default function Coordenadas({ onDataUpdate }) {
    const [pickupPoints, setPickupPoints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/logistics/pvt/configuration/pickuppoints');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const formattedData = data
                .filter(point => point.isActive === true)
                .map(point => ({
                    description: point.description,
                    name: point.name,
                    address: {
                        postalCode: point.address.postalCode,
                        city: point.address.city,
                        state: point.address.state,
                        street: point.address.street + ', ' + point.address.city + ', ' + point.address.state,
                        location: {
                            latitude: point.address.location.latitude,
                            longitude: point.address.location.longitude
                        }
                    },
                    isActive: point.isActive,
                    businessHours: point.businessHours
                }));
            onDataUpdate(formattedData); // Actualiza los datos en StoreLocT

            setLoading(false);
            console.log('Connection to API successful!');
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