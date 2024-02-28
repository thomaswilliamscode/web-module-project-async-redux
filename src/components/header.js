import React from 'react';
import styled from 'styled-components'


const UlStyled = styled.ul`
	display: flex;
	justify-content: space-around;
	list-style: none;
`;




const Header = () => {
	return (
		<nav>
			<UlStyled>
				<li>Logo</li>
				<li>Waifu App</li>
				<li>MVP</li>
				<li>VS</li>
				<li>Favs</li>
			</UlStyled>
		</nav>
	);
}

export default Header