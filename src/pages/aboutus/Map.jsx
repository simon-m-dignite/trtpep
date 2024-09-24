import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 42.9836, // Latitude for 105 Galileo Drive
  lng: -78.7279, // Longitude for 105 Galileo Drive
};

const Map = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.0228121422497!2d-78.6860212!3d42.97779310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d375b927ce35bf%3A0x3d3f5974077bac2a!2s8265%20Sheridan%20Dr%2C%20Buffalo%2C%20NY%2014221%2C%20USA!5e0!3m2!1sen!2s!4v1727210393888!5m2!1sen!2s"
        height="240"
        style={{ border: 0, width: "100%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Map;
