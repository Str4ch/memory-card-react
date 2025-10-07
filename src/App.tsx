import { useEffect, useState } from "react"

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

	const [flippedCards, setFlippedCards] = useState<Tcard["name"][]>([])

	const [moves, setMoves] = useState(0)

	const [matches, setMatches] = useState(0)

	const handleCardClick = (clickedCard: Tcard) => {
		if(clickedCard.matched) return

		if(flippedCards.length === 2) return

		setGameCards((prev) =>
			prev.map((card) =>
				card.id === clickedCard.id ? { ...card, flipped: !card.flipped} : card
			)
		)
		setFlippedCards((prev) => [...prev, clickedCard["name"]])
	}

	useEffect(()=>{
		if(flippedCards.length === 2) {
			setMoves((prev) => prev+1)
			const [first, second] = flippedCards
			if(first === second){
				setMatches((prev) => prev+1)
				console.log("match")
				setFlippedCards([])

				setGameCards((prev) => 
					prev.map((card) =>
					card.name === first ? {...card, matched: true}: card))
			} else {
			setTimeout(()=>{
				setGameCards((prev)=>
				prev.map((card)=>
					flippedCards.some((fc) => fc === card.name)
					? { ...card, flipped: false }
					: card
				)
				)
				setFlippedCards([])
			}, 1000)

		}
		}
		if(matches == gameCards.length / 2){alert("You won")}
		}, [flippedCards])


	return (
		<div className="main_section">
			<h1>Memory Game</h1>
			<p> Number of moves: {moves}</p>
			<p> Number of matches: {matches}</p>
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
