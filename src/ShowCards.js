import React, {Component} from 'react';
import './App.css';

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
			<div className="col card" key={index}>
				<div className="carta1 side col-2" onClick={()=>model.showCard(card)} >
				<div clasName="portada"><img id={card.id} src={card.state?card.num:card.srcImg} style={{display: 'block'}} /></div>
				 </div>
			</div>
		)
	})
	return(
		<div className="row card-container">{listCards}</div>
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