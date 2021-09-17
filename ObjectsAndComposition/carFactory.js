function carFactory(inputObj) {
   const existingComponents = {
       engine : {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
       } ,
       carriage : {
        hatchback: { type: 'hatchback', color: '' },
        coupe: { type: 'coupe', color: '' }
       },
   }

   let constructCar = {};
   constructCarFunct(constructCar);

   function constructCarFunct() {
       let {model} = inputObj;
       constructCar.model = model;

       if (inputObj.power <= 90) {
        constructCar.engine = existingComponents.engine['Small engine'];
       } else if (inputObj.power <= 120) {
        constructCar.engine = existingComponents.engine['Normal engine'];
       } else if (inputObj.power <= 200) {
        constructCar.engine = existingComponents.engine['Monster engine'];
       }
       
       constructCar.carriage = existingComponents.carriage[inputObj.carriage];
       constructCar.carriage.color = inputObj.color;
       let wheelSize = inputObj.wheelsize;

       if(wheelSize % 2 == 0) {
        wheelSize -= 1;
       }

       constructCar.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
   }    

  return constructCar;
}

console.log(carFactory({ model: 'VW Golf II',power: 90,color: 'blue',carriage: 'hatchback',wheelsize: 14 }));
console.log('------------');
console.log(carFactory({ model: 'Opel Vectra',power: 110,color: 'grey',carriage: 'coupe',wheelsize: 17 }));  