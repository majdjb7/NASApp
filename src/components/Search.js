import React, {useState, useEffect} from 'react'
import '../styles/search.css'
import axios from 'axios'

export default function Search() {
    let [input, setInput] = useState("")
    let [astronomyVideo, setAstronomyVideo] = useState([])


    const search = async () => {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}`)
        setAstronomyVideo(response.data.collection.items)
    }


    return (
        <div>
            <input type="text" value={input} placeholder='Search the Universe'></input>
            <button onClick={search}>Search</button>
        </div>
    )
}
