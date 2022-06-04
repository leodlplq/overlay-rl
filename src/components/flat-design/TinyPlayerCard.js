import React from 'react'

export default function TinyPlayerCard(props) {
	return (
		<div className={`tiny-player-card ${props.team === 1 ? 'orange' : ''}`}>
			<div className="tiny-top">
				<span className="tiny-name-player">{props.name}</span>
				<span className="tiny-boost-player">{props.boost}</span>
			</div>
			<div className="tiny-boost">
				<div
					className="tiny-boost-filled"
					style={{ width: props.boost + '%' }}
				></div>
			</div>
		</div>
	)
}
