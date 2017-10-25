import React from 'react';
import Card from './tarjeta1.png';
import dieciseis from './16.png';
import ocho from './8.png';
import cuatro from './4.png';
import dos from './2.png';
import uno from './1.png';

class Model {
	constructor(){
		this.numRandom = this.numberRandom();
		this.notify = null;
		this.cards = [ {
				id:16,
				value: 0,
				state: false,
				srcImg:Card,
				num:dieciseis
			},
			{
				id: 8,
				value: 0,
				state: false,
				srcImg:Card,
				num:ocho
			},
			{
				id:4,
				value: 0,
				state: false,
				srcImg:Card,
				num:cuatro
			},
			 {
				id:2,
				value: 0,
				state: false,
				srcImg:Card,
				num:dos
			},
			{
				id:1,
				value: 0,
				state: false,
				srcImg:Card,
				num:uno
			}
		];
		this.valida = true;
		this.comprobar=0;
	}
	subscribe (render) {
		this.notify = render;
	}
	showCard(card){
		card.state=!card.state;
		if(card.value===0){
			card.value=1;
		}else{
			card.value=0;
		}
		if(card.state){
			this.comprobar+=card.id;
		}else{
			this.comprobar-=card.id;
		}
		console.log(this.comprobar);
		this.notify();
	}
	numberRandom(){
		/*escoge un numero del 1 al 31*/
		let num = Math.floor((Math.random() * 31));
		return num;
	}
	selectionCard (idCard){
		/* si el valor es 0 se convertira en 1 */
		this.cards[idCard].value = (this.cards[idCard].value)? 0 : 1 ;
		/* si es false se convierte en true */
		this.cards[idCard].state = (this.cards[idCard].state)? 0 : 1 ;
		this.notify();
	}

	validaCard (){
		this.valida = true;
	}

}

export default Model;
