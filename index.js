var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

getAge=(pet)=>
{
  return new Date().getFullYear() - pet.bornOn; 
}

pets.forEach(pet => pet.petwithedge = getAge(pet));

pets.map(pet=>console.log(pet));

const dogs=pets.filter(pet=>pet.type==="dog");
dogs.map(item=>console.log(item));

const jasper = pets.find(pet=>pet.name==="Jasper");

console.log(`Jasper is ${jasper.petwithedge} years old`);
