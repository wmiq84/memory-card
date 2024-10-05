import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);

for (let i = 1; i <= 12; i++) {
  const pokemonImage = document.createElement('img');

  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    // .then(allpokemon => console.log(allpokemon))
    .then((data) => {
      console.log('Fetched data:', data); // Debugging step
      const imageUrl = data.sprites.front_default;
      pokemonImage.setAttribute('src', imageUrl);
      document.body.appendChild(pokemonImage);
    });
}