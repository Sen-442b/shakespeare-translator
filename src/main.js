const API_URL = 'https://api.funtranslations.com/translate/shakespeare.json'
const QUERY = '?text='
const input = document.querySelector('.input')
const  btnConvert = document.querySelector('#btn-convert')
const output = document.querySelector('.output')




btnConvert.addEventListener('click',()=>{
    fetch(generateURL())
    .then((result)=> result.json())
    .then((data)=>displayData(data))
})




function generateURL(){
    const userText  = input.value
    const requestLink = API_URL + QUERY + userText
     return requestLink

}

function displayData(data){
   output.innerHTML = data.contents.translated
}