import { Box } from "@chakra-ui/react";
import mapboxgl from "mapbox-gl";
import { ZoomControl, CompassControl } from "mapbox-gl-controls";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function LocationMap() {
  const { location } = useSelector((store) => store);

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FnYXJqYWluNzM4IiwiYSI6ImNsMGtwMDNnczA0ZWMzaXFkb2dyZGFlbTkifQ.7F9Y1lACkG3HPWhViJ9bVg";

  const map = useRef("");
  const mapContainer = useRef("");

  const [zoom, setZoom] = useState(11);

  const mapLoader = async () => {
    if (map.current) return;
    map.current = await new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.856255, 18.516726],
      zoom: zoom,
    });

    map.current.addControl(new ZoomControl(), "top-right");
  };

  useEffect(() => {
    mapLoader();
  }, []);

  return (
    <div
      style={{
        minWidth: "100%",
        minHeight: "32rem",
      }}
      ref={mapContainer}
      className="map-container"
    ></div>
  );
}
