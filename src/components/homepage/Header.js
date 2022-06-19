import React from 'react'

import logo from '../../assets/images/logo/logo.png'

export default function Header(props) {
	return (
		<header>
			<div className="header-logo">
				<img src={logo} alt="Rocket Overlay" />
			</div>
			<div className="header-links">
				{props.pages.map((page) => (
					<a className="link" href={page.link} key={page.name}>
						{page.name}
					</a>
				))}
			</div>
		</header>
	)
}
