import React, {useState, useEffect} from 'react'
import '../styles/search.css'
import axios from 'axios'
import MediaCard from './MediaCard'

export default function Search(props) {
    let [input, setInput] = useState("")
    let [astronomySearchRes, setAstronomySearchRes] = useState([])

    const onChange = (event) => {
        setInput(event.target.value)
    }

    const search = async () => {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}`)
        setAstronomySearchRes(response.data.collection.items)
        let results = response.data.collection.items
        let allSearchResults = []
        for(let i in results) {
            if(response.data.collection.items[i].links) {
                let index = i
                let title = response.data.collection.items[i].data[0].title
                let imageURL = response.data.collection.items[i].links[0].href
                let description = response.data.collection.items[i].data[0].description
                let astrologocalObject = {index: index, title: title, imageURL: imageURL, description: description}
                allSearchResults.push(astrologocalObject)
            }
        }
        setAstronomySearchRes(allSearchResults);

    }

    return (
        <div>
            <input type="text" value={input} onChange={onChange} placeholder='Search the Universe'></input>
            <button onClick={search}>Search</button>
            {astronomySearchRes.map(m => <MediaCard key={m.index} astronomyObject={m} showDesc={false} saveToDB={props.saveToDB}/>)}
        </div>
    )
}
