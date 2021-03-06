import React, { Component } from "react";
import ReactStreetview from "react-streetview";
import { GOOGLE_API_ } from "../constants";
import "./GoogleStreetMaps.css"

class GoogleMapsStreetView extends React.Component {
  render() {
    
    const data = this.props;
    // 
    var stringLat = JSON.stringify(data.latitude);
    var latitude = parseFloat(stringLat);
    var stringLon = JSON.stringify(data.longitude);
    var longitude = parseFloat(stringLon);
    //
    //
    const mapStyles = {
        width: '100%',
        height: '86.2vh',
        backgroundColor: "#eeeeee"
      };
 

    const streetViewPanoramaOptions = {
      position: { lat: latitude, lng: longitude },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
      zoomControl: false
    };

    return (
        <div className="google">
    <div
        style={mapStyles}
      >
        <ReactStreetview
          apiKey={GOOGLE_API_}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>

        </div>
    
    );
  }
}

export default GoogleMapsStreetView;
