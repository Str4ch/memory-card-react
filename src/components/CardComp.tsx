import styles from "./CardComp.module.css"
import type { Tcard } from "../types/card.types"

export type TCardProps = {
	clickProp: () => void
	card: Tcard
}

const CardComp = ({clickProp, card}: TCardProps)=> {
	const handleClick = () => {
		console.log("Card clicked", card)
		clickProp()
	}

	return (
		<article onClick={handleClick} className={styles.card}>
			CardComp
		</article>
	)
}

export default CardComp
