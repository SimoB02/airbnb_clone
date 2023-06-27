import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import {useState, useEffect} from "react";

import axios from "axios";

//import api 
const apiKey = process.env.GOOGLE_API_KEY

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapComponent( {google}) {

    const [apartments, setApartments] = useState([]);
    const [selectedApartment, setSelectedApartment] = useState();
    
    //infoWindows gestione 
    const [infoWindowVisible, setInfoWindowVisible] = useState(false);

    useEffect(() => {
        const fetchApartments = async () => {
          try {
            const response = await axios.get('http://localhost:3000/Mock');
           
            setApartments(response.data);
          } catch (error) {
            console.error('Errore durante il recupero dei dati degli appartamenti', error);
          }
        };
    
        fetchApartments();
      }, []);

      useEffect(() => {
        console.log(selectedApartment)    
      })

      // gestione delle infowindows 
      const onMarkerClick = (apartment) => {
        setSelectedApartment(apartment);
        setInfoWindowVisible(true);
      };
      
    
  return (
    <LoadScript
      googleMapsApiKey= {apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
         
      {apartments.map((apartment) => (
        <Marker
          key={apartment.id}
          position={{ lat: apartment.lat, lng: apartment.lng }}
          onClick={() => onMarkerClick(apartment)}
          
          icon={{
            path:
              "M8,0C4.688,0,2,2.688,2,6c0,6,6,10,6,10s6-4,6-10C14,2.688,11.312,0,8,0z M8,8C6.344,8,5,6.656,5,5s1.344-3,3-3s3,1.344,3,3 S9.656,8,8,8z" ,
          scale : 2,
            }}
        />
      ))}

{infoWindowVisible && selectedApartment && (
  <InfoWindow
    position={{ lat: selectedApartment.lat, lng: selectedApartment.lng }}
    onCloseClick={() => setInfoWindowVisible(false)}
  >
    <div>
      <h4>{selectedApartment.location}</h4>
      <p>Days: {selectedApartment.days}</p>
      <p>Price: {selectedApartment.price}</p>
      <p>Rating: {selectedApartment.rating}</p>
      
    </div>
  </InfoWindow>
)}

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)