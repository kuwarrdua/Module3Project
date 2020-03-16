class VacationRental{
	constructor(name,price,rating,location,rooms,availability,features){
		this.name=name;
		this.price=price;
		this.rating=rating;
		this.location=location;
		this.rooms=rooms;
		this.availability=availability;
		this.features=features;
	}
}


VacationRental.prototype.description = function(){
		console.log('Welcome to the beautiful ' + this.name + ' in ' + this.location + '. It has a rating of ' + this.rating + ' .It has ' + this.rooms + ' rooms and People like it because of its ' + this.features[0] + ' and ' + this.features[1]);
};

VacationRental.prototype.available = function(){
	console.log('The rental property ' + this.name + ' ' + 'is ' + this.availability);
};

let rental = new VacationRental('World famous Seashell House', 750 ,4.5, 'Casa Caracol', 6, 'available',['Scenery','Shell-shape']);
let rental1 = new VacationRental('Underground Hygge', 350 ,4.2, 'Orondo', 1, 'not available',['View','Exoticness']);


class SpecialRate extends VacationRental{
	constructor(name,price,rating,location,rooms,availability,features,type){
		super(name,price,rating,location,rooms,availability,features);
		this.type=type;	
	}
	reducedRate(){
		alert(this.price= this.price*0.8);
	}
}

let special = new SpecialRate('World famous Seashell House', 750 ,4.5, 'Casa Caracol', 6, 'Available',['Scenery','Shell-shape'],'Special Rate');

class SuperHost extends VacationRental{
	constructor(name,price,rating,location,rooms,availability,features,type){
		super(name,price,rating,location,rooms,availability,features);
		this.type=type;
	}
	rating(){
		alert('The rating of the superhost is ' + this.rating);
	}
}

let superDuperHost = new SuperHost('Kristie', 100 ,4.5, 'Washington', 6, 'Available',['Sweet','Humble'],'SuperHost');

//I want to call the button element which is having an id #btn1
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click',function(){
		console.log('Welcome to the beautiful ' + rental.name + ' in ' + rental.location + '. It has a rating of ' + rental.rating + ' .It has ' + rental.rooms + ' rooms and People like it because of its ' + rental.features[0] + ' and ' + rental.features[1]);
})


let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(){
	console.log('The rental property ' + rental.name + ' ' + 'is ' + rental.availability);
})
