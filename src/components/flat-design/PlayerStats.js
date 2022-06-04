import React from 'react'
export default function PlayerStats(props) {
	return (
		<div className="player-stat">
			<span className="player-stat-title">{props.title}</span>
			<span className="player-stat-number">{props.value}</span>
		</div>
	)
}
