const jokeEl = document.getElementById('joke');
const btn = document.getElementById('getJokeBtn');
async function fetchJoke() {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await response.json();

    jokeEl.textContent = data.joke;

  } catch (error) {
    jokeEl.textContent = 'Oops! Could not fetch a joke 😢';
    console.error('Error fetching joke:', error);
  }
}
btn.addEventListener('click', fetchJoke);
