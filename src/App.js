import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {
	// Definir el state
	const [busquedaLetra, setBusquedaLetra] = useState({});
	const [letra, setLetra] = useState('');
	const [info, setInfo] = useState({});

	useEffect(() => {
		if (Object.keys(busquedaLetra).length === 0) return;

		const consultarAPILetra = async () => {
			const { artista, cancion } = busquedaLetra;

			const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
			const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

			const [lyrics, informacion] = await Promise.all([
				axios(url),
				axios(url2),
			]);
			setLetra(lyrics.data.lyrics);
			setInfo(informacion.data.artists[0]);

			// console.log(informacion.data.artists);
		};

		consultarAPILetra();
	}, [busquedaLetra, info]);

	return (
		<>
			<Formulario setBusquedaLetra={setBusquedaLetra} />
			<div className='container mt-5'>
				<div className='row'>
					<div className='col-md-6'>
						<Info info={info} />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<Cancion letra={letra} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
