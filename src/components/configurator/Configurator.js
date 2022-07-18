import React from 'react'

import Header from '../homepage/Header'
import Footer from '../homepage/Footer'

import { pages } from '../../config/pages'
import bg3 from '../../assets/images/bg/bg3.png'

export default function Configurator() {
	return (
		<main>
			<Header pages={pages} />

			<div className="main-configurator">
				<h1>
					Here you can get your custom{' '}
					<span className="text-gradient">URL</span> to put in your
					OBS source
				</h1>
			</div>
			<Footer />

			<img src={bg3} alt="" className="blurred bg3" />
		</main>
	)
}
