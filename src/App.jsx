import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import './App.css';

function App() {
    const apiKey = "98e3fb1f";
    const [movie, setMovie] = useState(null);

    const getMovie = async (searchTerm) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        getMovie("Clueless"); 
    }, []);

    return (
        <div className="App">
            <Form movieSearch={getMovie} />
            <MovieDisplay movie={movie} />
        </div>
    );
}

export default App;
