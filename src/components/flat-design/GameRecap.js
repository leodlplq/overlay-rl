import React from 'react'

import Scoreboard from './Scoreboard'

export default function GameRecap(props) {
	let totalTeamOne = {
		score: 0,
		goals: 0,
		assists: 0,
		saves: 0,
		shots: 0,
		demos: 0,
	}

	let totalTeamTwo = {
		score: 0,
		goals: 0,
		assists: 0,
		saves: 0,
		shots: 0,
		demos: 0,
	}

	props.teamOne.players.forEach((player) => {
		totalTeamOne['score'] += player['score']
		totalTeamOne['goals'] += player['goals']
		totalTeamOne['assists'] += player['assists']
		totalTeamOne['saves'] += player['saves']
		totalTeamOne['shots'] += player['shots']
		totalTeamOne['demos'] += player['demos']
	})

	props.teamTwo.players.forEach((player) => {
		totalTeamTwo['score'] += player['score']
		totalTeamTwo['goals'] += player['goals']
		totalTeamTwo['assists'] += player['assists']
		totalTeamTwo['saves'] += player['saves']
		totalTeamTwo['shots'] += player['shots']
		totalTeamTwo['demos'] += player['demos']
	})

	let percentageTab = {}

	Object.keys(totalTeamOne).forEach((el) => {
		const teamone = totalTeamOne[el]
		const teamtwo = totalTeamTwo[el]
		const total = teamone + teamtwo
		const percTeamOne = parseInt((teamone * 100) / total)
		percentageTab[el] = { teamOne: percTeamOne, teamTwo: 100 - percTeamOne }
	})

	return (
		<div className="game-recap">
			<Scoreboard
				teamOne={props.teamOne}
				teamTwo={props.teamTwo}
				timer={props.timer}
				title={props.title}
				type={props.type}
			/>

			<div className="score-grid">
				<div className="players-name-bar">
					<div className="players-name-team-one players-names">
						{props.teamOne.players.map((player) => (
							<span className="score-player-name" key={player.id}>
								{player.name}
							</span>
						))}
					</div>
					<div></div>
					<div className="players-name-team-two players-names">
						{props.teamTwo.players.map((player) => (
							<span className="score-player-name" key={player.id}>
								{player.name}
							</span>
						))}
					</div>
				</div>

				<div className="players-recaps">
					<div className="team-one-recap team-recap">
						{props.teamOne.players.map((player) => (
							<div
								className="player-recap-list"
								key={`${player.id}recap`}
							>
								<span className="player-recap recap-score">
									{player.score}
								</span>
								<span className="player-recap recap-goals">
									{player.goals}
								</span>
								<span className="player-recap recap-assists">
									{player.assists}
								</span>
								<span className="player-recap recap-saves">
									{player.saves}
								</span>
								<span className="player-recap recap-shots">
									{player.shots}
								</span>
								<span className="player-recap recap-demos">
									{player.demos}
								</span>
							</div>
						))}
					</div>

					<div className="recaps-names">
						<div className="recap-name">
							<div
								className="recap-team-one"
								style={{
									width: `${percentageTab['score'].teamOne}%`,
								}}
							></div>
							<div
								className="recap-team-two"
								style={{
									width: `${percentageTab['score'].teamTwo}%`,
								}}
							></div>
							<span>SCORE</span>
						</div>

						<div className="recap-name">
							<div
								className="recap-team-one"
								style={{
									width: `${percentageTab['goals'].teamOne}%`,
								}}
							></div>
							<div
								className="recap-team-two"
								style={{
									width: `${percentageTab['goals'].teamTwo}%`,
								}}
							></div>
							<span>GOALS</span>
						</div>

						<div className="recap-name">
							<div
								className="recap-team-one"
								style={{
									width: `${percentageTab['assists'].teamOne}%`,
								}}
							></div>
							<div
								className="recap-team-two"
								style={{
									width: `${percentageTab['assists'].teamTwo}%`,
								}}
							></div>
							<span>ASSISTS</span>
						</div>

						<div className="recap-name">
							<div
								className="recap-team-one"
								style={{
									width: `${percentageTab['saves'].teamOne}%`,
								}}
							></div>
							<div
								className="recap-team-two"
								style={{
									width: `${percentageTab['saves'].teamTwo}%`,
								}}
							></div>
							<span>SAVES</span>
						</div>

						<div className="recap-name">
							<div
								className="recap-team-one"
								style={{
									width: `${percentageTab['shots'].teamOne}%`,
								}}
							></div>
							<div
								className="recap-team-two"
								style={{
									width: `${percentageTab['shots'].teamTwo}%`,
								}}
							></div>
							<span>SHOTS</span>
						</div>

						<div className="recap-name">
							<div
								className="recap-team-one"
								style={{
									width: `${percentageTab['saves'].teamOne}%`,
								}}
							></div>
							<div
								className="recap-team-two"
								style={{
									width: `${percentageTab['saves'].teamTwo}%`,
								}}
							></div>
							<span>SAVES</span>
						</div>
					</div>

					<div className="team-one-recap team-recap">
						{props.teamTwo.players.map((player) => (
							<div
								className="player-recap-list"
								key={`${player.id}recap`}
							>
								<span className="player-recap recap-score">
									{player.score}
								</span>
								<span className="player-recap recap-goals">
									{player.goals}
								</span>
								<span className="player-recap recap-assists">
									{player.assists}
								</span>
								<span className="player-recap recap-saves">
									{player.saves}
								</span>
								<span className="player-recap recap-shots">
									{player.shots}
								</span>
								<span className="player-recap recap-demos">
									{player.demos}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
