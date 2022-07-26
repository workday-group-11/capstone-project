import * as React from "react"
import "./GameplayScreen.css"
import PinMap from "../PinMap/PinMap"
import StreetViewMap from "../StreetViewMap/StreetViewMap"
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { CitiesContextProvider, useCitiesContext } from "../contexts/cities"
import axios from "axios";
import { GEOAPIFY_KEY } from "../constants";
import LoadingSpinner from "../LoadingPage/LoadingSpinner"

export default function GameplayScreen({positions ,setPositions, latitude, setLatitude, longitude, setLongitude}) {
  const [guessed,setGuessed] = useState(false)
  const {cities, setCities} = useCitiesContext();
  const[error, setError] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState([]);
  // console.log("Data for cities", cities)
  // console.log(cities[0].place_id)
  // const temp = cities[0].place_id
  // console.log(temp)


  const navigate = useNavigate()
  function navSummary(){
    if (guessed==true)
    {
      navigate("/gameSummary")
    }
  }
  useEffect(() => {
    setIsFetching(true)
    fetchData();
  }, []);
    const fetchData = async () => {
      const { data } = await axios.get(`https://api.geoapify.com/v2/places?categories=tourism&filter=place:${cities[0].place_id}&limit=5&apiKey=b85c900cef3a4e65bc26bc65b8b647c4`)
      setData(data);
      //console.log(data);
      setLatitude(data.features[0].properties.lat)
      setLongitude(data.features[0].properties.lon)
      setIsFetching(false)
  }

        // console.log("Latitude:", latitude)
        // console.log("Longitude:", longitude)


    //   if (res?.data) {
    //     setLatitude(res.data.features[0].properties.lat)
    //     setLongitude(res.data.features[0].properties.lon)
    //     console.log("res:", res)
    //   } else {
    //     setError("Error fetching products.")
    //   }
    // }
    // catch (err) {
    //   console.log(err)
    //   const message = err?.response?.data?.error?.message
    //   setError(message ?? String(err))
    // } finally {
    //   setIsFetching(false)
    // }

  return (
    <div className="gameplay-screen">
      {isFetching && <LoadingSpinner/>}
      {!isFetching && (
        <div className="google_street">
        <StreetViewMap latitude={latitude} longitude={longitude}/>
        {/* <StreetViewMap/> */}
        </div>
      )};
        <div className="google_map">
          <PinMap guessed={guessed} setGuessed={setGuessed} positions={positions}  setPositions={setPositions}/>

          <button onClick={navSummary}>Guess</button>
        </div>
      </div>
  )
      }


