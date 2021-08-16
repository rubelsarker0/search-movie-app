// 1. api call
//2. loop thorough all the data get from API
//3. get all the details from thr data
// Add the image in the first colum n
//Add the details in the 2nd column

// let title, year, release;
// title = document.getElementById('title');
// year = document.getElementById('year');
// release = document.getElementById('release');

// select the search input field
// const searchBtn = document.getElementById('search-btn');
const apiKey = '4efdd0b3';

document.getElementById('search-btn').addEventListener('click', async () => {
	const searchInput = document.getElementById('search-input').value;

	// omdb api call to bring the movie
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput}`
	);
	const movie = response.data;
	console.log(movie);

	// clear the search input field
	searchInput.value = '';
});
