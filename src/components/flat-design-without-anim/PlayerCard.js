import React from 'react'
import PlayerStats from './PlayerStats'

export default function PlayerCard(props) {
	return (
		<div
			className={`player-card ${
				props.currentPlayer.team ? 'orange' : ''
			}`}
		>
			<div className="player-name">
				<span>{props.currentPlayer.name}</span>
			</div>
			<div className="player-stats">
				<PlayerStats
					title="score"
					value={props.currentPlayer.stats.score}
				/>

				<PlayerStats
					title="goals"
					value={props.currentPlayer.stats.goals}
				/>

				<PlayerStats
					title="assists"
					value={props.currentPlayer.stats.assists}
				/>

				<PlayerStats
					title="saves"
					value={props.currentPlayer.stats.saves}
				/>

				<PlayerStats
					title="shots"
					value={props.currentPlayer.stats.shots}
				/>
			</div>
		</div>
	)
}
