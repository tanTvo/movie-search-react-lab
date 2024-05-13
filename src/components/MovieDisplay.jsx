

function MovieDisplay({ movie }) {
    return (
        <div>
            {movie ? (
                <>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>{movie.Genre}</p>
                    <p>{movie.Year}</p>
                </>
            ) : (
                <p>No movie data</p>
            )}
        </div>
    );
}

export default MovieDisplay;
