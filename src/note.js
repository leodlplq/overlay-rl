<Scoreboard
				teamOne={teamOne}
				teamTwo={teamTwo}
				timer={timer}
				title={title}
				type={type}
			/>
			{showPlayerCard ? <PlayerCard currentPlayer={currentPlayer} /> : ''}

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

			{showPlayerCard ? <PlayerCard currentPlayer={currentPlayer} /> : ''}
			{showPlayerCard ? <Boost currentPlayer={currentPlayer} /> : ''}