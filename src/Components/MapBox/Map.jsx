import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { MapboxDirections } from "mapbox-gl";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ZoomControl, CompassControl } from "mapbox-gl-controls";

export default function Map({}) {
  const {
    lat: lattitude,
    lang: langitute,
    location,
  } = useSelector((store) => store);

  // console.log("This is map is Map file", location, lattitude, langitute);
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FnYXJqYWluNzM4IiwiYSI6ImNsMGtwMDNnczA0ZWMzaXFkb2dyZGFlbTkifQ.7F9Y1lACkG3HPWhViJ9bVg";

  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lng, setLng] = useState(73.856255);
  // const [lat, setLat] = useState(18.516726);
  const [zoom, setZoom] = useState(11);

  useEffect(async () => {
    if (map.current) return; // initialize map only once
    map.current = await new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [langitute, lattitude],
      zoom: zoom,
    });
    map.current.addControl(new ZoomControl(), "top-right");
    map.current.addControl(new CompassControl(), "top-right");

    return () => {};
  }, [lattitude, langitute]);

  return (
    <div
      style={{
        height: "90vh",
        width: "42vw",
      }}
      ref={mapContainer}
      className="map-container"
    />
  );
}

// Extra Work To Learn

// useEffect(() => {
//   map.current.on("move", () => {
//     setLng(map.current.getCenter().lng.toFixed(4));
//     setLat(map.current.getCenter().lat.toFixed(4));
//     setZoom(map.current.getZoom().toFixed(2));
//   });
// }, []);

{
  /* <div
        className="sidebar"
        style={{
          background: "rgba(35, 55, 75, 0.9)",
          color: "#fff",
          padding: "6px 12px",
          fontfamily: "monospace",
          zIndex: "1",
          position: "absolute",
          top: "10",
          left: "10",
          margin: "12px",
          borderRadius: "4px",
        }}
      >
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */
}
// ******************************************************************************************************
// map.current.addControl(
//   new MapboxDirections({
//     accessToken: mapboxgl.accessToken,
//   }),
//   "top-left"
// );
// ******************************************************************************************************

// const sucess = (position) => {
//   console.log("sucess", position);
// };
// const failure = () => {
//   console.log("Failure");
// };
// ******************************************************************************************************

// navigator.geolocation.getCurrentPosition(sucess, failure, {
//   enableHighAccuracy: true,
// });
// ******************************************************************************************************

//   getCenter(), a Mapbox GL JS method, to get the new longitude and latitude of the point at the center of the map.
//   getZoom(), a Mapbox GL JS method, to determine the zoom level that the map is set to.
//   toFixed(), a JavaScript method, to truncate the resulting floating point number to the specified number of digits.

{
  /*  */
}
