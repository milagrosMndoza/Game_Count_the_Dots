import React, {Component} from 'react';

const ShowCards = ({model}) => {
		return (
		<div className="container text-center">
			<div className="number"><p>model.numberRandom()</p></div>
			<PrintCards />
			<NumberBinary />
		</div>
	)
}

const PrintCards = ({model}) => {
	let listCards = model.cards.map((card, index) => {
		return (
			<div className="col" key={index}>
				<img src={card.srcImg} />
			</div>
		)
	})
	return(
		<div className="row">{listCards}</div>
	)
}

const NumberBinary = ({model}) => {
	return (
		<div><p>
			{model.cards.one.value} - {model.cards.two.value} - 
			{model.cards.four.value} - {model.cards.eight.value} - 
			{model.cards.sixten.value}
		</p></div>
	)
}

export default ShowCards;