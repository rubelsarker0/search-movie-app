const moviePoster = document.getElementById('movie-poster');
const title = document.getElementById('title');
const year = document.getElementById('year');
const released = document.getElementById('released');
const genre = document.getElementById('genre');
const director = document.getElementById('director');
const plot = document.getElementById('plot');
const ratings = document.getElementById('ratings');
const apiKey = '4efdd0b3';

document.getElementById('search-btn').addEventListener('click', async () => {
	const searchField = document.getElementById('search-input');
	let searchInput = searchField.value;

	// omdb api call to bring the movie
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput}`
	);
	const movie = response.data;
	const { Title, Year, Released, Genre, Director, Plot, Poster, Ratings } =
		movie;

	//show movie poster
	moviePoster.setAttribute('src', Poster);
	moviePoster.classList.remove('d-none');

	//Add movie details
	title.textContent = `${Title}`;
	year.textContent = `Year: ${Year}`;
	released.textContent = `Released: ${Released}`;
	genre.textContent = `Genre: ${Genre}`;
	director.textContent = `Director: ${Director}`;
	plot.textContent = `Plot: ${Plot}`;

	// clear the search input field
	searchInput.value = '';
});
