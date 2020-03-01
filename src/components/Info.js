import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ info }) => {
	if (Object.keys(info).length === 0) return null;

	const {
		strArtistThumb,
		strGenre,
		strBiographyES,
		strBiographyEN,
		strFacebook,
		strTwitter,
		strLastFMChart,
	} = info;

	return (
		<>
			<div className='card border-light'>
				<div className='card-header bg-primary text-light font-weight-bold'>
					Informacion Artista
				</div>
				<div className='card-body'>
					<img src={strArtistThumb} alt='Logo Artista' />
					<p className='card-text'>Género: {strGenre}</p>
					<h2 className='cart-text'>Biografía:</h2>
					<p className='card-text'>
						{strBiographyES === null ? strBiographyEN : strBiographyES}
					</p>
					<p className='card-text'>
						<a
							href={`https://${strFacebook}`}
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-facebook' />
						</a>
						<a
							href={`https://${strTwitter}`}
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-twitter' />
						</a>
						<a
							href={`${strLastFMChart}`}
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-lastfm' />
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

Info.propTypes = {
	info: PropTypes.object.isRequired,
};

export default Info;
