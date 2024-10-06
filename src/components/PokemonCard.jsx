import React from 'react';

function PokemonCard({ pokemon, onClick }) {
	return (
		<div onClick={onClick}>
			<img src={pokemon.sprites.front_default} alt={pokemon.name} />
		</div>
	);
}

export default PokemonCard;
