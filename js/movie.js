const moviePoster = document.getElementById('movie-poster');
const title = document.getElementById('title');
const released = document.getElementById('released');
const genre = document.getElementById('genre');
const director = document.getElementById('director');
const plot = document.getElementById('plot');
const plotTitle = document.getElementById('plot-title');
const ratingFields = document.getElementById('rating-fields');
const ratingsTitle = document.getElementById('ratings-title');
const apiKey = '4efdd0b3';

document.getElementById('search-btn').addEventListener('click', async () => {
	const searchInput = document.getElementById('search-input');
	const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput.value}`;

	// omdb api call to bring the movie
	const response = await axios.get(apiUrl);
	// display movie details
	displayMovieDetails(response.data);

	// Ratings
	ratings(response.data.Ratings);

	// clear the search input field
	searchInput.value = '';
});

function displayMovieDetails(movieDetails) {
	const { Title, Released, Genre, Director, Plot, Poster } = movieDetails;
	//show movie poster
	moviePoster.setAttribute('src', Poster);
	moviePoster.classList.remove('d-none');
	//Summary
	plotTitle.classList.remove('d-none');
	plot.textContent = `${Plot}`;
	//Add movie details
	title.textContent = `${Title}`;
	released.textContent = `Released: ${Released}`;
	genre.textContent = `Genre: ${Genre}`;
	director.textContent = `Director: ${Director}`;
}

function ratings(ratings) {
	ratingFields.textContent = '';
	ratingsTitle.classList.remove('d-none');
	ratings.forEach((rating) => {
		ratingFields.innerHTML += `<li>${rating.Source} - ${rating.Value}</li>`;
	});
}

// async function getMovie() {
// 	const searchInput = document.getElementById('search-input');
// 	const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput.value}`;

// 	// omdb api call to bring the movie
// 	const response = await axios.get(apiUrl);
// 	return response;
// }
