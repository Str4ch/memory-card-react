import { useState } from "react"

import CardComp from "./components/CardComp"
import cards from "./data/cards.json"

import type { Tcard, Tcards } from "./types/card.types"

const App = () => {

	const [gameCards, setGameCards] = useState<Tcards>(cards)
	return (
		<div className="main_section">
			<h1>Memory Game</h1>
			<div className="card_container">
			{
				gameCards.map(
					(card: Tcard) => (
						<CardComp clickProp={() => {}} card={card} key={card.id}/>
					)
				)
			}
			</div>
		</div>
	)
}

export default App
