let quote = document.getElementById('quote');
let author = document.querySelector('.author');
let getBtn = document.querySelector('.get-btn');

getBtn.addEventListener('click', getquote);

async function getquote() {
    let url = 'https://api.quotable.io/random';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerText = data.content;
    author.innerText = `- ${data.author}`;
}
