import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';

interface WorldMapProps {
  origin: string;
  destination: string;
  mode: string;
}

const containerStyle = {
  width: '100%',
  height: '300px',
};

const defaultCenter = { lat: 20.5937, lng: 78.9629 }; // Default center: India

const WorldMap: React.FC<WorldMapProps> = ({ origin, destination, mode }) => {
  const [path, setPath] = useState<google.maps.LatLngLiteral[]>([]);

  useEffect(() => {
    if (!origin || !destination) return;

    const geocoder = new google.maps.Geocoder();
    
    // Convert origin & destination into lat/lng
    geocoder.geocode({ address: origin }, (originResults) => {
      if (!originResults || originResults.length === 0) return;
      const originLatLng = originResults[0].geometry.location;

      geocoder.geocode({ address: destination }, (destinationResults) => {
        if (!destinationResults || destinationResults.length === 0) return;
        const destinationLatLng = destinationResults[0].geometry.location;

        // Compute the curved path
        const curvedPath = computeCurvedRoute(originLatLng, destinationLatLng);
        setPath(curvedPath);
      });
    });
  }, [origin, destination]);

  // Function to compute a curved route
  const computeCurvedRoute = (start: google.maps.LatLng, end: google.maps.LatLng): google.maps.LatLngLiteral[] => {
    const lat1 = start.lat();
    const lng1 = start.lng();
    const lat2 = end.lat();
    const lng2 = end.lng();

    // Compute the midpoint
    const midLat = (lat1 + lat2) / 2;
    const midLng = (lng1 + lng2) / 2;

    // Apply an offset to the midpoint to create the curve effect
    const curveOffset = 10; // Adjust for more/less curve
    const curvedMidpoint = {
      lat: midLat + (lat1 > lat2 ? -curveOffset : curveOffset) * 0.1, // Curve offset in latitude
      lng: midLng + (lng1 > lng2 ? curveOffset : -curveOffset) * 0.1, // Curve offset in longitude
    };

    // Generate intermediate points for a smooth curve
    const curvedPath = [
      { lat: lat1, lng: lng1 },
      curvedMidpoint,
      { lat: lat2, lng: lng2 },
    ];

    return curvedPath;
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCuy_xXq8q-CcrvzFvPiXTGsYTyQMQn_cQ">
      <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={4}>
        {path.length > 0 && (
          <Polyline 
            path={path}
            options={{
              strokeColor: "#ff0000",
              strokeOpacity: 0.7,
              strokeWeight: 4,
              geodesic: true,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default WorldMap;
