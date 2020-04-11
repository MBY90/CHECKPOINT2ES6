var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

getAge=(pet)=>
{
  return new Date().getFullYear() - pet.bornOn; 
}

pets.forEach(pet => petwithedge = getAge(pet));

pet.map(pet=>console.log(pet.petwithedge));

const dogs=pets.filter(pet=>pet.type==="dog");
dogs.map(item=>console.log(item));

const jasper=pets.find(pet=>pet.name==="jasper");
console.log("Jasper is " + jasper.petwithedge + " years old");

