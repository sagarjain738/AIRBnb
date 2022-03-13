import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";

export default function Maps() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3.5,
  });

  return (
    <Box>
      <ReactMapGL
        style={{ width: "560px", height: "495px" }}
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
// http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1&token=PasteYourTokenHere
