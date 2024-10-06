import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import PokemonImages from './components/PokemonImages.jsx';
// import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<PokemonImages />
	</StrictMode>
);
