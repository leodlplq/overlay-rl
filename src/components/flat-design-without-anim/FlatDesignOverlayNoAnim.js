import './FlatDesign.css'
import { useState, useEffect } from 'react'

import Scoreboard from './Scoreboard'
import PlayerCard from './PlayerCard'
import TinyPlayerCard from './TinyPlayerCard'
import Goal from './Goal'
import Boost from './Boost'
import GameRecap from './GameRecap'

export default function FlatDesignOverlayNoAnim() {
	const [teamOne, setTeamOne] = useState({
		name: '',
		score: 0,
		players: [],
		point: 0,
	})
	const [teamTwo, setTeamTwo] = useState({
		name: '',
		score: 0,
		players: [],
		point: 0,
	})
	const [currentPlayer, setCurrentPlayer] = useState({
		name: '',
		stats: {
			score: 0,
			goals: 0,
			saves: 0,
			shots: 0,
		},
		boost: 0,
		speed: 0,
		team: 0,
	})
	const [showPlayerCard, setShowPlayerCard] = useState(false)
	const [showOverlay, setShowOverlay] = useState(true)
	const [isReplay, setIsReplay] = useState(false)
	const [isGameOver, setIsGameOver] = useState(false)
	const [timer, setTimer] = useState(0)
	const [goal, setGoal] = useState(0)
	const [scorer, setScorer] = useState({
		scorer: {
			name: '',
			speed: 0,
		},
		assister: {
			name: '',
		},
		ballSpeed: 0,
		team: 0,
	})
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	})
	// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
	const title = params.title
	const type = params.type
	useEffect(() => {
		const ws = new WebSocket('ws://localhost:49122')
		ws.onopen = () => {
			console.log('Connection open')
		}
		ws.onerror = (error) => {
			console.log(`WebSocket error:`)
			console.log(error)
		}
		ws.onmessage = (e) => {
			let jEvent = JSON.parse(e.data)
			console.log(jEvent)
			if (jEvent.event === 'game:initialized') {
				console.log('init')
				console.log(jEvent)
				setShowOverlay(() => true)
				setIsGameOver(() => false)
			}
			if (jEvent.event === 'game:update_state') {
				// console.log(jEvent.data)
				if (Object.keys(jEvent.data.players).length !== 0) {
					setTeamOne((prevTeamOne) => {
						return {
							...prevTeamOne,
							name: jEvent.data.game.teams[0].name,
							score: jEvent.data.game.teams[0].score,
							players: Object.values(jEvent.data.players).filter(
								(a) => a.team === 0
							),
						}
					})
					setTeamTwo((prevTeamTwo) => {
						return {
							...prevTeamTwo,
							name: jEvent.data.game.teams[1].name,
							score: jEvent.data.game.teams[1].score,
							players: Object.values(jEvent.data.players).filter(
								(a) => a.team === 1
							),
						}
					})
				}
				if (jEvent.data.game.target !== '') {
					setShowPlayerCard(() => true)
					setCurrentPlayer(() => {
						let player =
							jEvent.data.players[jEvent.data.game.target]
						return {
							name: player.name,
							stats: {
								score: player.score,
								goals: player.goals,
								assists: player.assists,
								saves: player.saves,
								shots: player.shots,
							},
							boost: player.boost,
							speed: player.speed,
							team: player.team,
						}
					})
				} else {
					setShowPlayerCard(() => false)
				}
				// console.log(teamOne.players)
				setTimer(() => jEvent.data.game.time_seconds)
			}
			if (jEvent.event === 'game:match_ended') {
				setIsReplay(() => false)
				setShowOverlay(() => false)
				setTimeout(() => {
					setIsGameOver(() => true)
				}, 7000)
				if (jEvent.data.winner_team_num === 0) {
					setTeamOne((prevTeamOne) => {
						return {
							...prevTeamOne,
							point: prevTeamOne.point + 1,
						}
					})
				} else {
					setTeamTwo((prevTeamTwo) => {
						return {
							...prevTeamTwo,
							point: prevTeamTwo.point + 1,
						}
					})
				}
			}
			if (jEvent.event === 'game:round_started_go') {
			}
			if (jEvent.event === 'game:goal_scored') {
				console.log('BUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUT 2')
				setGoal((prevGoal) => prevGoal + 1)
				setScorer(() => {
					return {
						scorer: {
							name: jEvent.data.scorer.name,
							speed: jEvent.data.ball_last_touch.speed,
						},
						assister: {
							name: jEvent.data.assister.name,
						},
						ballSpeed: Math.ceil(jEvent.data.goalspeed),
						team: parseInt(jEvent.data.scorer.teamnum),
					}
				})
			}
			if (jEvent.event === 'game:replay_start') {
				setIsReplay(() => true)
			}
			if (jEvent.event === 'game:replay_end') {
				setIsReplay(() => false)
			}
		}
		return () => {
			ws.close()
		}
	}, [])
	return (
		<div className="overlay-match">
			{showOverlay ? (
				<Scoreboard
					teamOne={teamOne}
					teamTwo={teamTwo}
					timer={timer}
					title={title}
					type={type}
				/>
			) : (
				''
			)}
			{showPlayerCard ? <PlayerCard currentPlayer={currentPlayer} /> : ''}
			{!isReplay && showOverlay ? (
				<div className="tiny-cards team-one-tiny-cards">
					{teamOne.players.map((player) => {
						return (
							<TinyPlayerCard
								key={player.name}
								boost={player.boost}
								name={player.name}
								team={player.team}
							/>
						)
					})}
				</div>
			) : (
				''
			)}
			{!isReplay && showOverlay ? (
				<div className="tiny-cards team-two-tiny-cards">
					{teamTwo.players.map((player) => {
						return (
							<TinyPlayerCard
								key={player.name}
								boost={player.boost}
								name={player.name}
								team={player.team}
							/>
						)
					})}
				</div>
			) : (
				''
			)}
			{showPlayerCard ? <PlayerCard currentPlayer={currentPlayer} /> : ''}
			{showPlayerCard ? <Boost currentPlayer={currentPlayer} /> : ''}
			{isReplay ? <Goal goal={goal} scorer={scorer} /> : ''}
			{isGameOver ? (
				<GameRecap
					teamOne={teamOne}
					teamTwo={teamTwo}
					timer="0"
					title={title}
					type={type}
				/>
			) : (
				''
			)}
		</div>
	)
}
