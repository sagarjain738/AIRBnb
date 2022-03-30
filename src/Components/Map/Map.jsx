import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { useSelector } from "react-redux";
export default function Maps() {
  const { lat, lang } = useSelector((store) => store);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lang,
    zoom: 8,
  });

  return (
    <Box>
      <ReactMapGL
        style={{ width: "41vw", height: "77vh" }}
        mapStyle="mapbox://styles/sagarjain738/cl0kpglov003q14ldra5mnk4g"
        mapboxAccessToken={
          "pk.eyJ1Ijoic2FnYXJqYWluNzM4IiwiYSI6ImNsMGtwMDNnczA0ZWMzaXFkb2dyZGFlbTkifQ.7F9Y1lACkG3HPWhViJ9bVg"
        }
        {...viewport}
        onMove={async (nextLocation) => {
          await setViewport(nextLocation.viewState);
        }}
      ></ReactMapGL>
    </Box>
  );
}

// export function Maps(props) {
//   return (
//     <Box width="100%" height="100%">
//       <Map
//         google={props.google}
//         style={{ width: "10rem", height: "12rem" }}
//         zoom={10}
//         initialCenter={{
//           lat: 28.7,
//           lng: 77.1,
//         }}
//       ></Map>
//     </Box>
//   );
// }
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCOhddz3vHP4LY1eKf8NmFN6FT6X04PUo4",
// })(Maps);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  /* <MapWrapper
      
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAzrjls-Z52U3J0OC-8DwGwdEC-abQtuU&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<Box style={{ height: "100%", width: "100%" }}></Box>}
        containerElement={<Box style={{ height: "100%", width: "100%" }}></Box>}
        mapElement={<Box style={{ height: "100%", width: "100%" }}></Box>}
      /> */
}

// function GoogleMaps() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 26.4499, lng: 74.6399 }}
//     />
//   );
// }
// const MapWrapper = withScriptjs(withGoogleMap(GoogleMaps));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function OldMap() {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 3.5,
//   });

//   return (
//     <Box style={{ width: "100%", height: "100%" }}>
//       <ReactMapGL
//         style={{ width: "100%", height: "100%" }}
//         mapStyle="mapbox://styles/sagarjain738/cl0kpglov003q14ldra5mnk4g"
//         mapboxAccessToken={
//           "pk.eyJ1Ijoic2FnYXJqYWluNzM4IiwiYSI6ImNsMGtwMDNnczA0ZWMzaXFkb2dyZGFlbTkifQ.7F9Y1lACkG3HPWhViJ9bVg"
//         }
//         {...viewport}
//         onMove={async (nextLocation) => {
//           await setViewport(nextLocation.viewState);
//         }}
//       ></ReactMapGL>
//     </Box>
//   );
// }

// http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1&token=PasteYourTokenHere

// db.citydetails.aggregate([{$lookup:{from:"airbnbdatas",localField:"city",foreignField:"cityName",as:"cityInfo"}}])
