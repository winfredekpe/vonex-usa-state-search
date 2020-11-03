//   selecting elements

let input = document.querySelector(".input input");
let dataset = document.querySelector(".datacontainer");

// adding event listeners

input.addEventListener("input", search);

// creating functions

async function search(event) {
  let textinput = event.target.value;
  response = await fetch("data.json");
  states = await response.json();

  // filtering states using regular expressions to get matches
  matches = states.filter((state) => {
    regex = new RegExp(`^${textinput}`, "gi");

    // returning matched names by filtering using names and states abbreviations
    return state.name.match(regex) || state.abbr.match(regex);
  });
  if (textinput === "") {
    matches = [];
    dataset.innerHTML = "";
  }

  //   output the result into the html for viewing
  showresult();
  // console.log(matches);
}

function showresult() {
  cities = "";
  matches.map((match) => {
    readycity = `
    <div class='data'>
        <h1>${match.name}</h1>
        <small>${match.abbr}</small>
        <h4>Capital : ${match.capital}</h4> 
        <span>  <small>long : ${match.lat}</small><span/> 
        <span><small>lat :  ${match.long}</small> <span/>
    </div>
    `;
    cities += readycity;
  });

  dataset.innerHTML = cities;
}
