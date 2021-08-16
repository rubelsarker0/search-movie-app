const moviePoster = document.getElementById('movie-poster');
const title = document.getElementById('title');
const released = document.getElementById('released');
const genre = document.getElementById('genre');
const director = document.getElementById('director');
const plot = document.getElementById('plot');
const plotTitle = document.getElementById('plot-title');
const ratingFields = document.getElementById('rating-fields');
const ratingsTitle = document.getElementById('ratings-title');
const searchInput = document.getElementById('search-input');
const apiKey = '4efdd0b3';

document.getElementById('search-btn').addEventListener('click', async () => {
	const response = await getMovie();
	// display movie details
	displayMovieDetails(response.data);
	// Ratings
	ratings(response.data.Ratings);
});

// document
// 	.getElementById('searchInput')
// 	.addEventListener('keypress', async (e) => {
// 		var keyNum = e.keyCode || e.which;
// 		if (keyNum === 13) {
// 			e.preventDefault();
// 			const response = await getMovie();
// 			// display movie details
// 			displayMovieDetails(response.data);
// 			// Ratings
// 			ratings(response.data.Ratings);
// 		}
// 	});

async function getMovie() {
	const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput.value}`;
	// omdb api call to bring the movie
	const response = await axios.get(apiUrl);
	// clear the search input field
	searchInput.value = '';
	return response;
}

function displayMovieDetails(movieDetails) {
	const { Title, Released, Genre, Director, Plot, Poster } = movieDetails;
	//show movie poster
	moviePoster.classList.remove('d-none');
	moviePoster.setAttribute('src', Poster);
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
