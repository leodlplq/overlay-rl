export const convertTime = (timer) => {
	let mins = parseInt(timer / 60)
	let secs = Math.ceil(timer % 60)
	if (secs < 10) {
		secs = '0' + secs
	}
	if (secs === 60) {
		secs = '00'
		mins++
	}

	return `${mins}:${secs}`
}
