import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import HeaderLogado from "../header/headerLogado";

const containerStyle = {
  marginTop: '120px',
  width: '100vw',
  height: '90vh'
};

const center = {
  lat: -4.969783,
  lng: -39.017864
};

const restrictionBounds = {
  north: -4.949599,
  south: -5.006883,
  east: -38.987455,
  west: -39.041461
};

const Eventos = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })
  return isLoaded ? (
    <div>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
          latLngBounds: restrictionBounds,
          strictBounds: true
        }}
      >

      </GoogleMap>
      <HeaderLogado />
    </div>
    ) : <></>

    
}

export default Eventos

