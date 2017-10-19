import React, {Component} from 'react';

const ShowCards = ({model}) => {
	console.log('hola')
		return (
		<div className="container text-center">
			<div className="number"><p>{model.numberRandom()}</p></div>
			<PrintCards model={model}/>
			<NumberBinary model={model} />
		</div>
	)
} 

const PrintCards = ({model}) => {
	console.log(model.cards);
	let listCards = model.cards.map((card, index) => {
		return (
			<div className="col" key={index}>
				<p>{card.srcImg}</p>
			</div>
		)
	})
	return(
		<div className="row">{listCards}</div>
	)
}

const NumberBinary = ({model}) => {
	let num = model.cards.map((card, index) => {
		return ( <label key={index}>{card.value}</label> )
	})
	return (
		<div>{num}</div>
	)
}

export default ShowCards;