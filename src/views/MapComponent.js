import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapComponent = ({ google }) => {
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);

  useEffect(() => {
    const fetchApartments = async () => {
      // Simula il caricamento dei dati degli appartamenti
      const response = await fetchApartmentsData();
      setApartments(response);
    };

    fetchApartments();
  }, []);

  const fetchApartmentsData = () => {
    // non fetcha ma è simulato avendo i dati degli appartamenti nella costante 
    return new Promise((resolve) => {
      const apartmentsData = [
        { id: 1, name: 'Appartamento 1', lat: 37.7749, lng: -122.4194 },
        { id: 2, name: 'Appartamento 2', lat: 37.7891, lng: -122.4089 },
        { id: 3, name: 'Appartamento 3', lat: 37.7859, lng: -122.4082 },
        { id: 4, name: 'Appartamento 4', lat: 37.7800, lng: -122.4032 },
      ];
      resolve(apartmentsData);
    });
  };

  const onMarkerClick = (apartment) => {
    setSelectedApartment(apartment);
  };

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }}
    >
      {apartments.map((apartment) => (
        <Marker
          key={apartment.id}
          position={{ lat: apartment.lat, lng: apartment.lng }}
          onClick={() => onMarkerClick(apartment)}
          icon={{
            url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_CZw6QoE9pY66dOlNnkmJDgplB4prqrqsDAPvWwR-Q&s',
            scaledSize: new google.maps.Size(30, 30),
          }}
        />
      ))}

      {selectedApartment && (
        <InfoWindow
          position={{ lat: selectedApartment.lat, lng: selectedApartment.lng }}
          visible={true} 
        >
          <div>
            <h4>{selectedApartment.name}</h4>
            {<p> Descrizione appartamento.......</p>}
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: '/',
})(MapComponent);
