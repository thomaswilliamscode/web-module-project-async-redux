import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import reducer from '../reducers'
import { useSelector, useDispatch } from 'react-redux'
import  { getNewImg } from '../actions/actions.js'

const baseURL = 'https://api.waifu.im/search';
const includedTags = '?included_tags=';

const Mvp = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);
	const img = data && data.images && data.images[0] ? data.images[0].url : "";
	const altText = data && data.images && data.images[0] && data.images[0].tags && data.images[0].tags[0] ? data.images[0].tags[0].description : "";
	const initialHeight = data.images[0].height
	const initialWidth = data.images[0].width

	const [option, setOption] = useState('random');
	const [url, setURL] = useState(baseURL);
	const [height, setHeight] = useState(initialHeight)
	const [width, setWidth] = useState(initialWidth)
	const [loading, setLoading] = useState(false)

	console.log(`Height: ${height}`)

	const onChange = (e) => {
		setOption(e.target.value);
	};

	const findSizes = () =>{
		console.log('in the size function')

		let newHeight = data.images[0].height;
		let newWidth = data.images[0].width;
		while(newHeight > 600) {
			newHeight /= 2;
			newWidth /= 2;
		}
		setHeight(newHeight);
		setWidth(newWidth);
	}

	useEffect(() => {
		setLoading(true)
		findSizes();
		setLoading(false)
	}, [data]);

	const urlFix = () => {
		switch (option) {
			case 'waifu':
				setURL(`${baseURL}${includedTags}waifu`);
				break;
			case 'maid':
				setURL(`${baseURL}${includedTags}maid`);
				break;
			case 'marin-kitagawa':
				setURL(`${baseURL}${includedTags}marin-kitagawa`);
				break;
			case 'mori-calliope':
				setURL(`${baseURL}${includedTags}mori-calliope`);
				break;
			case 'raiden-shogun':
				setURL(`${baseURL}${includedTags}raiden-shogun`);
				break;
			case 'oppai':
				setURL(`${baseURL}${includedTags}oppai`);
				break;
			case 'selfies':
				setURL(`${baseURL}${includedTags}selfies`);
				break;
			case 'uniform':
				setURL(`${baseURL}${includedTags}uniform`);
				break;
			default:
				setURL(baseURL);
		}
	};

	const onClick = () => {
		urlFix();
		setLoading(true)
		dispatch(getNewImg(url));
	};



	return (
		<div>
			<div>
				<h1>Linked</h1>
				<select id='link' onChange={onChange}>
					<option value='random'> Random </option>
					<option value='waifu'> Waifu </option>
					<option value='maid'> Maid </option>
					<option value='marin-kitagawa'> Marin-Kitagawa </option>
					<option value='mori-calliope'> Mori-Calliope </option>
					<option value='raiden-shogun'> Raiden-Shogun </option>
					<option value='oppai'> Oppai </option>
					<option value='selfies'> Selfies </option>
					<option value='uniform'> Uniform </option>
				</select>
			</div>
			<div>
				{loading  ? (
					<p>Loading...</p>
				) : (
					<a href={img} target={'_blank'}>
						<img src={img} width={width} height={height} alt={altText}/>
					</a>
				)}
			</div>

			<div>
				<button onClick={onClick}>Click me</button>
			</div>
		</div>
	);
}

export default Mvp;