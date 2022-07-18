import React from 'react'
import GlassButton from './GlassButton'
import Header from './Header'
import Footer from './Footer'
import PartnerSlider from './PartnerSlider'
import './Home.css'

import bg1 from '../../assets/images/bg/bg1.png'
import bg2 from '../../assets/images/bg/bg2.png'
import bg3 from '../../assets/images/bg/bg3.png'
import octane from '../../assets/images/octane.png'
import overlay from '../../assets/images/overlay.png'

import { pages } from '../../config/pages'

export default function Home() {
	return (
		<main>
			<Header pages={pages} />

			<div className="banner">
				<img src={bg1} alt="bg1" className="blurred img" />

				<div className="inner-banner">
					<div className="left">
						<h1>
							Get{' '}
							<span className="text-gradient">
								perfect overlays
							</span>{' '}
							<br />
							for your Rocket League <br /> casts !
						</h1>
						<GlassButton name="Discover" link="/overlays" />
					</div>
					<div className="right">
						<img
							src={octane}
							alt="Octane"
							className="image-top octane"
						/>
					</div>
				</div>
			</div>

			<div className="second-banner">
				<div className="inner-banner">
					<div className="left">
						<img
							src={overlay}
							alt="Octane"
							className="image-top overlay"
						/>
					</div>
					<div className="right">
						<h1>A vast possibility of choices</h1>
						<GlassButton name="Discover" link="/overlays" />
					</div>
				</div>
			</div>

			<div className="testimonials">
				<h1 className="title">
					They <span className="text-gradient">trust us</span>
				</h1>
				<PartnerSlider />
				<img src={bg2} alt="bg2" className="blurred img" />
			</div>

			<div className="bot-banner">
				<h1 className="title">
					<span className="text-gradient">Special </span>request ?
				</h1>
				<span>
					Do you need a custom overlay for your competition, your
					cast, your esport team ?
				</span>
				<GlassButton name="Contact us" link="/contact" />
			</div>

			<Footer />

			<img src={bg3} alt="" className="blurred bg3" />
		</main>
	)
}
