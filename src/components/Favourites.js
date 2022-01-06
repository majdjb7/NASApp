import React from 'react'
import '../styles/favourites.css'
import MediaCard from './MediaCard';

export default function Favourites(props) {
    console.log(props);
    let favourites = props.savedData
    return (
        <div>
            <h1>Favourites</h1>
            {favourites.map(f => <MediaCard
                                key={f.index}
                                isFavourite={true}
                                astronomyObject={f}
                                showDesc={false}
                                deleteFromDB={props.deleteFromDB}/>
                            )}
        </div>
    )
}
