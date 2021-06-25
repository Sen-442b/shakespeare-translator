const API_URL = 'https://api.funtranslations.com/translate/shakespeare.json'
const QUERY = '?text='
const input = document.querySelector('.input')
const  btnConvert = document.querySelector('#btn-convert')
const output = document.querySelector('.output')




btnConvert.addEventListener('click',()=>{
    fetch(generateURL())
    .then((result)=> result.json())
    .then((data)=>displayData(data))
    .catch((error) => displayError(error))
})




function generateURL(){
    const userText  = input.value
    const requestLink = API_URL + QUERY + userText
     return requestLink

}

function displayData(data){
    
   output.innerHTML = data.contents.translated
}

async function displayError(error){
    console.log(error)
    alert(`The server is not responding due some error kindly try again later`)
}