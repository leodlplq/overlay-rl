import React from 'react'
import { useLayoutEffect, useRef, useState } from 'react'
import useDidMountEffect from '../../tools/useDidMountEffect'
import { gsap } from 'gsap'
import goalIcon from '../../assets/images/goal.png'
import assistIcon from '../../assets/images/assist.png'

export default function Goal(props) {
	const el = useRef()
	const title = useRef()
	const q = gsap.utils.selector(el)
	const stats = useRef()
	const replay = useRef()

	// wait until DOM has been rendered
	// useLayoutEffect(() => {}, [props.goal])

	useDidMountEffect(() => {
		if (props.goal == 0) {
			return
		}

		var tl = gsap.timeline()
		tl.fromTo(
			q('.stripes'),
			{ y: -1080 },
			{ y: 0, stagger: 0.33, duration: 0.5, delay: 2 }
		)
			.fromTo(
				title.current,
				{ y: -20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.2 }
			)
			.to(title.current, { y: 20, opacity: 0, duration: 0.2, delay: 0.3 })
			.to(q('.stripes'), {
				y: 1080,
				stagger: 0.33,
				duration: 0.5,
			})
		gsap.fromTo(
			stats.current,
			{
				y: -30,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				delay: 5.5,
			}
		)
		gsap.fromTo(
			replay.current,
			{
				y: -30,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				delay: 5,
			}
		)
		// react please run me if 'key' changes, but not on initial render
	}, [props.goal])

	// DOM to render
	return props.goal !== 0 ? (
		<div className="goal-overlay">
			<div
				className={`transition ${
					props.scorer.team === 1 ? 'orange' : ''
				}`}
				ref={el}
			>
				<span className="stripes"></span>
				<span className="stripes"></span>
				<span className="stripes"></span>
				<h1 className="title-goal" ref={title}>
					REPLAY
				</h1>
			</div>
			<div className="replay" ref={replay}>
				<span className="light"></span>
				<span>REPLAY</span>
			</div>
			<div
				className={`goal_stats + ${
					props.scorer.team === 1 ? 'orange' : ''
				}`}
				ref={stats}
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
