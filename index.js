
const input = document.querySelector(`#input`);
input.addEventListener (`keypress`, enter);


function enter(e){
    if(e.keyCode===13){
        getInfo(input.value)
    }
    
}

async function getInfo(data) {

    const res = await fetch(`${"https://api.agify.io/"}?name=${data}`);
    const result = await res.json();
    const resTwo = await fetch(`${"https://api.nationalize.io/"}?name=${data}`);
    const resultTwo = await resTwo.json(); 
    console.log (resultTwo)
    displayResult (result);
    displayResultTwo (resultTwo);
}

function displayResult(result){

    let name  = document.querySelector (`#name`);
    name.textContent = `${result.name}`;

    let age = document.querySelector (`#years`);
    age.textContent= `${result.age}` 
    
}
function displayResultTwo (resultTwo){
    let country = document.querySelector(`#country`);
    country.textContent = `${resultTwo.country[1].country_id}`
}

