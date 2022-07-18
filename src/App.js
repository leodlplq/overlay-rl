import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Configurator from './components/configurator/Configurator'

import FlatDesignOverlay from './components/flat-design/FlatDesignOverlay'
import FlatDesignOverlayNoAnim from './components/flat-design-without-anim/FlatDesignOverlayNoAnim'
import Home from './components/homepage/Home'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/flat-design" element={<FlatDesignOverlay />} />
			<Route
				path="/flat-design-no-anim"
				element={<FlatDesignOverlayNoAnim />}
			/>
			<Route path="/configurator" element={<Configurator />} />
		</Routes>
	)
}
