import React, {Component} from 'react';

const ShowCards = ({model}) => {
	let numberRandow= model.numRandom;
		return (
		<div className="container text-center">
			<div className="number"><p>{numberRandow}</p></div>
			<PrintCards  model = {model}/> 
			<NumberBinary model = {model}/>
		</div>
	)
}

const PrintCards = ({model}) => {
	let listCards = model.cards.map((card, index) => {
		return (
			<div className="col" key={index}>
				<div onClick={e=>model.selectionCard(index)}> {card.id} </div>
				<img src={card.srcImg} />
			</div>
		)
	})
	return(
		<div className="row">{listCards}</div>
	)
}

const NumberBinary = ({model}) => {
	
		let binary= model.cards.map((cards, index)=>{
			return(
				
				<label key={index}>{cards.value}</label>
			)
		})
		return (
			<div>{binary}</div>
	)
}

export default ShowCards;