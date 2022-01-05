import React, {useState, useEffect} from 'react';
import '../styles/home.css'
import axios from 'axios'
import MediaCard from './MediaCard';

export default function Home(props) {

    return (
        <div>
            <MediaCard astronomyObject={props.astronomyObject}  />
        </div>
    )
}
