// Get elements
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search input[type="text"]');
const searchResults = document.querySelector('.song-list');

// Add event listener for search form submission
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  // Get search query
  const query = searchInput.value.trim();

  // Clear previous search results
  searchResults.innerHTML = '';

  // Check if query is empty
  if (query === '') {
    return;
  }

  // Filter songs based on query
  const filteredSongs = songs.filter((song) => {
    return song.title.toLowerCase().includes(query.toLowerCase()) ||
           song.artist.toLowerCase().includes(query.toLowerCase());
  });

  // Display filtered songs
  filteredSongs.forEach((song) => {
    const songElement = document.createElement('li');
    songElement.classList.add('song');
    songElement.innerHTML = `
      <div class="song-info">
        <img src="${song.cover}" alt="${song.title} cover">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      </div>
      <div class="song-actions">
        <button><i class="fas fa-heart"></i></button>
        <p>${song.duration}</p>
      </div>
    `;
    searchResults.appendChild(songElement);
  });
});

// Sample songs data
const songs = [
  {
    id: 1,
    title: 'Shiva Tandava Stotram',
    artist: 'Uma Mohan',
    cover: 'https://www.freepngimg.com/thumb/music/51138-music-icon-free-png-image.png',
    duration: '6:38'
  },
  {
    id: 2,
    title: 'Shree Hari Stotram',
    artist: 'G. Gayathri Devi, Saindh...',
    cover: 'https://www.freepngimg.com/thumb/music/51138-music-icon-free-png-image.png',
    duration: '4:38'
  },
  {
    id: 3,
    title: 'Hare Ram Hare Krishna',
    artist: 'Suresh Wadkar, Lalitya ...',
    cover: 'https://www.freepngimg.com/thumb/music/51138-music-icon-free-png-image.png',
    duration: '6:46'
  },
  // Add more songs here
];
