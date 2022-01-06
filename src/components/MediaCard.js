import React from 'react'
import '../styles/mediaCard.css'

export default function MediaCard(props) {
    let astronomyObject = props.astronomyObject
    let showDescription = props.showDesc

    const addToDB = () => {

    }

    return (
        <div>
            {astronomyObject != undefined ?
                <div className="homePage">
                    <div className="title">{astronomyObject.title}</div>
                    <div className='img-wrapper'>
                        <img width="610" height="385" className='img' src={astronomyObject.imageURL}></img>
                    </div>
                    {showDescription ? <div className='desc'>{astronomyObject.description}</div> : <button>Like</button>}
                    
                </div>
            : null}

            {/* {astronomySearch != undefined ?
                <div className="homePage">
                    <div className="title">{astronomyObject.title}</div>
                    <div className='img-wrapper'>
                        <img width="610" height="385" className='img' src={astronomyObject.imageURL}></img>
                    </div>
                    <div className='desc'>{astronomyObject.description}</div>
                </div>
            : null} */}
            
            
        </div>
    )
}
