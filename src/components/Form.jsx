import React, { useState } from 'react';

function Form({ movieSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        movieSearch(searchTerm);
        setSearchTerm(''); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter a movie title"
            />
            <input type="submit" value="Search" />
        </form>
    );
}

export default Form;
