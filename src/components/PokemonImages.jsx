import React, { useEffect, useState } from 'react';
import '../styles/PokemonImages.css'

function PokemonImages() {
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		const fetchPokemonData = async () => {
			const fetchedData = [];
			for (let i = 1; i <= 12; i++) {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
				const data = await response.json();
				fetchedData.push(data);
			}
			setPokemonData(fetchedData);
		};

		fetchPokemonData();
	}, []);

	return (
		<body>
			<div id="pokemon">
				{pokemonData.map((pokemon) => (
					<img
						key={pokemon.id}
						src={pokemon.sprites.front_default}
						alt={pokemon.name}
					/>
				))}
			</div>
		</body>
	);
}

export default PokemonImages;
