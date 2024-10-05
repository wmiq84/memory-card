import React, { useEffect } from 'react';

const PokemonImages = () => {
	useEffect(() => {
		for (let i = 1; i <= 12; i++) {
			const pokemonImage = document.createElement('img');

			fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
				.then((response) => response.json())
				.then((data) => {
					console.log('Fetched data:', data); // Debugging step
					const imageUrl = data.sprites.front_default;
					pokemonImage.setAttribute('src', imageUrl);
					document.body.appendChild(pokemonImage);
				});
		}
	}, []);

	return null;
};

export default PokemonImages;
