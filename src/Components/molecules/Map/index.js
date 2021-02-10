import MapBox from 'mapbox-gl'
import React, { useEffect, useRef } from 'react';
import "./map.scss"

const Map = () => {
  const mapContainer = useRef();
  useEffect(() => {
    MapBox.accessToken = "pk.eyJ1IjoiZG9tbmljYW1hbGFuIiwiYSI6ImNra3hkM3dyajF6dzYyb3BjM3UyZ2F3eWQifQ.5CyQIRPCT3irnbNAv9CW7Q"
    const map = new MapBox.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/domnicamalan/ckkxdjzw50fzm17pp20s5z918',
      attributionControl: false
    });
  }, [])

  return (
    <div className="mapbox-container" ref={mapContainer}></div>
  )
}

export default Map