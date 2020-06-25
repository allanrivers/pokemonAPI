fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(res => res.json())
.then(data => fetchPokemon(data))



const fetchPokemon = (res) => {
  console.log(res)


// This turns the object api into an array
  const arr = [res];

  console.log(arr)


// This creates a variable to map correctly
  const firstArr = arr[0].results

  console.log(firstArr)


// This creates a new array with pokemon name
  const array = firstArr.forEach(pokemon => pokemon.name)
  console.log(array);
//
//   const newArray = array.forEach(pokemon => pokemon.name)
//
// console.log(newArray)


  const html =
  `
    <div>${array}</div>
  `


  const pokemon = document.querySelector('.pokemon');
  pokemon.innerHTML = html;
}
