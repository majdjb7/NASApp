import React, {useState, useEffect} from 'react';
import '../styles/home.css'
import axios from 'axios'
import MediaCard from './MediaCard';
const API_KEY = "gNMncZvQy1d1KpqbW5LE2ndgC155lmhvWnwEGeaE"

export default function Home(props) {
    const [astronomyObject, setAstronomyObject] = useState([])


    useEffect(async () =>{
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((response) => {
            let title = response.data.title
            let imageURL = response.data.url
            let description = response.data.explanation
            let astronomyObject = {title: title, imageURL: imageURL, description: description}
            setAstronomyObject(astronomyObject)
        })

    }, [])

    return (
        <div>
            <MediaCard astronomyObject={astronomyObject} showDesc={true}/>
        </div>
    )
}
