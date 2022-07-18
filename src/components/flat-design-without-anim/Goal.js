import React from 'react'
import goalIcon from '../../assets/images/goal.png'
import assistIcon from '../../assets/images/assist.png'

export default function Goal(props) {
	// DOM to render
	return props.goal !== 0 ? (
		<div className="goal-overlay">
			<div className="replay">
				<span className="light"></span>
				<span>REPLAY</span>
			</div>
			<div
				className={`goal_stats + ${
					props.scorer.team === 1 ? 'orange' : ''
				}`}
			>
				<div className="scorer">
					<img src={goalIcon} alt="Icon score" />
					{props.scorer.scorer.name}
				</div>
				<div className="ball-sped">
					<span className="speed-title">goal speed</span>
					<span className="speed-value">
						{props.scorer.ballSpeed} km/h
					</span>
				</div>
				{props.scorer.assister.name !== '' ? (
					<div className="assister">
						<img src={assistIcon} alt="Icon assist" />
						{props.scorer.assister.name}
					</div>
				) : (
					''
				)}
			</div>
		</div>
	) : (
		''
	)
}
