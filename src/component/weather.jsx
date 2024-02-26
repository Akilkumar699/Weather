import { useState } from "react"
import axios from "axios"
const Weather=()=>{
    const [city,setcity] = useState("")
    const [weather,setweather] = useState("")
    const [tem,settem] = useState("")
    const [disc,setdisc] = useState("")
    const handlechange = (e) =>{
        setcity(e.target.value)
    }

    const getcity = () =>{
        const data=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15e22cb87bfa6b0f5d21d6485d73f543`)
        data.then(function(weatherdata){
            console.log(weatherdata.data)
            setweather(weatherdata.data.weather[0].main)
            settem(weatherdata.data.main.temp)
            setdisc(weatherdata.data.weather[0].description)
        })
    }
    return(
        <div className=" bg-black p-20">
            <div className=" bg-green-500 p-10 rounded-lg">
                <h1 className=" font-bold text-xl">Weather Report</h1>
                <p className=" font-medium my-2">I can give you a weather report about your city !</p>
                <input value={city} onChange={handlechange} placeholder="city" className=" rounded-sm block p-2 mb--2"></input>
                <button onClick={getcity} className=" bg-black text-white p-2 mt-2 rounded-md">Get Report</button>
                <h5 className="mt-2 font-bold">Weather :{weather}</h5>
                <h5 className="mt-2 font-bold">Temperature :{tem}</h5>
                <h5 className="mt-2 font-bold">Description :{disc}</h5>
            </div>
        </div>
    )
}

export default Weather