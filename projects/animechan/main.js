function getQuote() {
  fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
      const quoteTable = document.getElementById('quote-table');
      const quoteRow = document.createElement('tr');
      const quote = document.createElement('td');
      const character = document.createElement('td');
      const anime = document.createElement('td');
      
      quote.innerText = data.quote;
      character.innerText = data.character;
      anime.innerText = data.anime;
      
      quoteRow.appendChild(quote);
      quoteRow.appendChild(character);
      quoteRow.appendChild(anime);
      
      quoteTable.innerHTML = '';
      quoteTable.appendChild(quoteRow);
    });
}

getQuote();