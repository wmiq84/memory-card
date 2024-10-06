import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import '../styles/PokemonImages.css';

function PokemonImages({updateScore}) {
	const [pokemonData, setPokemonData] = useState([]);
	const [clickedPokemon, setClickedPokemon] = useState([]);
	// const [score, updateScore] = useState(0);

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

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const handleCardClick = (id) => {
		if (clickedPokemon.includes(id)) {
			console.log('Resetting score');
			updateScore(0);
			setClickedPokemon([]);
		} else {
			const newScore = clickedPokemon.length + 1;
			console.log('Updating score to:', newScore);
			updateScore(newScore);
			setClickedPokemon([...clickedPokemon, id]);
		}
		setPokemonData(shuffleArray([...pokemonData]));
	};

	return (
		<div id="pokemon">
			{pokemonData.map((pokemon) => (
				<PokemonCard
					key={pokemon.id}
					pokemon={pokemon}
					onClick={() => handleCardClick(pokemon.id)}
				/>
			))}
		</div>
	);
}

export default PokemonImages;
