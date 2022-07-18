import React from 'react'
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Boost(props) {
	return (
		<div className="boost">
			<CircularProgressbarWithChildren
				value={100}
				strokeWidth={10}
				styles={buildStyles({
					// Rotation of path and trail, in number of turns (0-1)
					rotation: 0.5,
					pathColor: '#151515',
					trailColor: '#d6d6d6',
					backgroundColor: 'rgba(21, 21, 21, 0.5)',
				})}
			>
				<CircularProgressbarWithChildren
					value={props.currentPlayer.boost}
					circleRatio={0.75}
					background={true}
					strokeWidth={10}
					styles={buildStyles({
						// Rotation of path and trail, in number of turns (0-1)
						rotation: 0.5,

						// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
						strokeLinecap: 'round',

						// How long animation takes to go from one percentage to another, in seconds
						pathTransitionDuration: 0.5,

						// Can specify path transition in more detail, or remove it entirely
						// pathTransition: 'none',

						// Colors
						pathColor:
							props.currentPlayer.team == 1
								? '#ff8b4a'
								: '#2e8eff',
						trailColor: '#d6d6d6',
						backgroundColor: 'rgba(21, 21, 21, 0.5)',
					})}
				>
					<span className="boost-amount">
						{props.currentPlayer.boost}
					</span>
					<span className="current-player-speed">
						{props.currentPlayer.speed}
						<span>km/h</span>
					</span>
				</CircularProgressbarWithChildren>
			</CircularProgressbarWithChildren>
		</div>
	)
}
