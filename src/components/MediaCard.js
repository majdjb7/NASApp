import React from 'react'
import '../styles/mediaCard.css'

export default function MediaCard(props) {
    let astronomyObject = props.astronomyObject
    let showDescription = props.showDesc
    let isFavourite = props.isFavourite

    const saveToDB = () => {
        props.saveToDB(astronomyObject)
    }

    const deleteFromDB = () => {
        props.deleteFromDB(astronomyObject)
    }

    return (
        <div>
            {astronomyObject != undefined ?
                <div className="homePage">
                    <div className="title">{astronomyObject.title}</div>
                    <div className='img-wrapper'>
                        <img width="610" height="385" className='img' src={astronomyObject.imageURL}></img>
                    </div>
                    {showDescription ? <div className='desc'>{astronomyObject.description}</div> : ( isFavourite ? <button onClick={deleteFromDB}>Dislike</button> : <button onClick={saveToDB}>Like</button>)}
                    
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
