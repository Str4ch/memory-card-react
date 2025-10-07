import { useState, type JSX} from "react"
import styles from "./CardComp.module.css"


function CardComp({ card_id }: { card_id: number }): JSX.Element {

	const [style, setstyle] = useState(styles.card)

	const handleClick = () => {
		console.log("Card clicked", card_id)
		setstyle(styles.flipped)
	}

	return (
		<article onClick={handleClick} className={style}>
			
		</article>
	)
}

export default CardComp
