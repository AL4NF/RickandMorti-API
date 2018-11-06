'use strict';
//
// const API_URL= "https://rickandmortyapi.com/api/location";
// const list=document.querySelector(".list");
//
// fetch(API_URL)
// .then(function(respuesta){
//   console.log('La api nos respondio:)')
//   return respuesta.json()
// })
// .then(function(resp){
//   console.log(resp)
//   printLocation(resp.results);
// })
// .catch(function(){
//   console.log('La Api no nos respondio t_t')
// })
//
// function printLocation(locations) {
//   for(let location of locations) {
//     // console.log(location.name + " (" + location.type + ")");
//     if(location.type == 'Space station') {
//
//     } else{
//       list.innerHTML += `
//       <li class="location ${location.type}"> ${location.name} (${location.type}) </li>
//       `
//     }
//   }
// }


// ------------------------------------------------------------------------------------

//Como ejercicio nosotros usaremos la Api de Personajes

const API_CHARACTERS ='https://rickandmortyapi.com/api/character/';
const listCharacter=document.querySelector(".listCharacter")

function characterRequest(info)
{
  fetch(info)
  .then(function(respuesta){
    console.log("La API funciono");
    return respuesta.json()
  })
  .then(function(resp){
    console.log(resp);
    console.log(resp.info);

    printCharacters(resp.results);
    requestNextPage(resp.info);
  })
  .catch(function(){
    console.log("La Api no respondio:(");
  })
}

characterRequest(API_CHARACTERS);

function requestNextPage(final)
{
  if(final.next==''){
  console.log('Eso es todo');
  }else {
    console.log(final.next);
    characterRequest(final.next);
  }
}

function printCharacters(characters)
{
  for(let character of characters)
  {
    if(character.status=='Dead')
    {
      listCharacter.innerHTML+=`
      </br>
      </br>
      <section class="characterDead">
      </br><h2 class="characterName">${character.name}</h2>
      </br><img class="characterImage" src="${character.image}">
      </br><h3>Status:${character.status}
      </br>Species:${character.species}
      </br>Gender:${character.gender}
      </br>Location:${character.location.name}
      </br>Origin:${character.origin.name}</h3>
      </br>
      </br>

      `

    }else
    {
        listCharacter.innerHTML+=`
        </br>
        </br>
        <section class="character">
        </br><h2 class="characterName">${character.name}
        </br><img class="characterImage"src="${character.image}">
        </br><h3>Status: ${character.status}
        </br>Species: ${character.species}
        </br>Gender: ${character.gender}
        </br>Location: ${character.location.name}
        </br>Origin: ${character.origin.name}</h3>
        </br>
        </br>

</section>
</br>
</br>
      `
    }
  }
}

// --------------------------------------------------------------------------------
