<<<<<<< HEAD
import GoogleMapsStreetView from "../googleMaps/googleMaps"
=======
import GoogleMapsStreetView from "../GoogleStreetMaps/GoogleStreetMaps"
>>>>>>> 4f27e4e333eceb5d57c3aa354767d7d134f535cd
import * as React from "react"
import "./StreetViewMap.css"

export default function StreetViewMap() {
  return (
    <div className="streetview-map">
       <GoogleMapsStreetView latitude= { 46.9171876} longitude={17.8951832} />
        
    </div>
  )
}
