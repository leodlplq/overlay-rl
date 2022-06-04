import React from 'react'
import { convertTime } from '../../tools/timer'

export default function Scoreboard(props) {
	const pointToWin = (parseInt(props.type) + 1) / 2
	return (
		<div className="scoreboard">
			<div className="team-one">
				<div className="logo">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png"
						alt="Logo de la scald"
					/>
				</div>
				<div className="name">
					<span>{props.teamOne.name}</span>
					<div className="match-point">
						{Array(props.teamOne.point)
							.fill(null)
							.map((value, index) => (
								<div key={`${index}t1b`} className="win"></div>
							))}
						{Array(pointToWin - props.teamOne.point)
							.fill(null)
							.map((value, index) => (
								<div
									key={`${index}t1g`}
									className="notWin"
								></div>
							))}
					</div>
				</div>
				<div className="score">{props.teamOne.score}</div>
			</div>
			<div className="timer">
				<span>{convertTime(props.timer)}</span>
				<div className="match-infos">
					<span>{props.title || ''}</span>
					<span>|</span>
					<span>BO{props.type || ''}</span>
				</div>
			</div>
			<div className="team-two">
				<div className="logo">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png"
						alt="Logo de la Soolit"
					/>
				</div>
				<div className="name">
					<span>{props.teamTwo.name}</span>
					<div className="match-point">
						{Array(props.teamTwo.point)
							.fill(null)
							.map((value, index) => (
								<div key={`${index}t2b`} className="win"></div>
							))}
						{Array(pointToWin - props.teamTwo.point)
							.fill(null)
							.map((value, index) => (
								<div
									key={`${index}t2g`}
									className="notWin"
								></div>
							))}
					</div>
				</div>
				<div className="score">{props.teamTwo.score}</div>
			</div>
		</div>
	)
}
