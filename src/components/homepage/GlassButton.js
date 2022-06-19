import React from 'react'

export default function GlassButton(props) {
	return (
		<a className="btn glass" href={props.link}>
			{props.name}
		</a>
	)
}
