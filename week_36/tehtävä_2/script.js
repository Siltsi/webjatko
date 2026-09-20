const apiUrl = 'https://api.chucknorris.io/jokes/random';

const jokeElement = document.getElementById('joke');
const button = document.getElementById('joke-button');
const imageElement = document.getElementById('chuck-image');
const statusElement = document.getElementById('status');

const images = [
    'images/chuck1.jpg',
    'images/chuck2.jpg',
    'images/chuck3.jpg',
    'images/chuck4.jpg'
];

async function displayJoke() {
    button.disabled = true;
    statusElement.textContent = 'Loading joke...';

    try {
        const randomIndex = Math.floor(Math.random() * images.length);
        imageElement.src = images[randomIndex];

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        jokeElement.textContent = data.value;

        statusElement.textContent = 'Joke loaded.';

    } catch (error) {
        console.error('Error fetching joke:', error);

        jokeElement.textContent =
            'Could not load joke.';

        statusElement.textContent =
            'Could not connect to API.';

    } finally {
        button.disabled = false;
    }
}

button.addEventListener('click', displayJoke);

displayJoke();