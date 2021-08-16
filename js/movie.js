const moviePoster = document.getElementById('movie-poster');
const title = document.getElementById('title');
const released = document.getElementById('released');
const genre = document.getElementById('genre');
const director = document.getElementById('director');
const plot = document.getElementById('plot');
const ratings = document.getElementById('ratings');
const apiKey = '4efdd0b3';

document.getElementById('search-btn').addEventListener('click', async () => {
	const searchInput = document.getElementById('search-input');
	// let searchInput = searchField.value;

	// omdb api call to bring the movie
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput.value}`
	);
	const { Title, Released, Genre, Director, Plot, Poster, Ratings } =
		response.data;

	//show movie poster
	moviePoster.setAttribute('src', Poster);
	moviePoster.classList.remove('d-none');

	//Add movie details
	title.textContent = `${Title}`;
	released.textContent = `Released: ${Released}`;
	genre.textContent = `Genre: ${Genre}`;
	director.textContent = `Director: ${Director}`;
	plot.textContent = `Summary: ${Plot}`;

	// clear the search input field
	searchInput.value = '';
});
