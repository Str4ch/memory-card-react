import { useState } from "react"

import CardComp from "./components/CardComp"
import cards from "./data/cards.json"

import type { Tcard, Tcards } from "./types/card.types"

const App = () => {
	const createGameCards = (): Tcards => {
		const pairs = cards.flatMap((card) => [
			{ ...card, id: card.id },
			{ ...card, id: card.id + 100 },
		])
		return pairs
	}

	const shuffleCards = (cards: Tcards): Tcards =>{
		return cards.sort(()=>Math.random() - 0.5)
	}

	const [gameCards, setGameCards] = useState<Tcards>(shuffleCards(createGameCards()))

	const handleCardClick = (clickedCard: Tcard) => {
		setGameCards((prev) =>
			prev.map((card) =>
				card.id === clickedCard.id ? { ...card, flipped: !card.flipped} : card
			)
		)
	}

	return (
		<div className="main_section">
			<h1>Memory Game</h1>
			<div className="card_container">
			{
				gameCards.map(
					(card: Tcard) => (
						<CardComp clickProp={handleCardClick} card={card} key={card.id}/>
					)
				)
			}
			</div>
		</div>
	)
}

export default App
