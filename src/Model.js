import React from 'react';

class Model {
	constructor(){
		this.numRandom = this.numberRandom();
		this.notify = null;
		this.cards = [ {
				id:16,
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			},
			{
				id: 8,
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			},
			{
				id:4,
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			},
			 {
				id:2,
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			},
			{
				id:1,
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			}
		]
	}
	subscribe (render) {
		this.notify = render;
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

}

export default Model;
