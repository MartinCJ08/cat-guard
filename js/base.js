function getQuote(url) {
  // https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let len = Math.floor(Math.random() * data.length);
      let quote = '&ldquo;' + data[len].text + '&rdquo;';
      let author = '&mdash;' + data[len].author;

      let quoteChild = document.createElement('blockquote');
      let authorChild = document.createElement('footer');

      quoteChild.innerHTML = quote;
      authorChild.innerHTML = author;

      quoteChild.appendChild(authorChild);

      document.getElementById("quote").appendChild(quoteChild);
    });
}

function getCat(url, key) {
  fetch(url, {
    headers: {
      'x-api-key': key
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let imagesData = data;
      imagesData.map(function (imageData) {

        let image = document.createElement('img');
        //use the url from the image object
        image.src = `${imageData.url}`;

        let gridCell = document.createElement('div');
        // gridCell.classList.add('row');
        // gridCell.classList.add('col-lg');
        gridCell.appendChild(image)

        document.getElementById('myCatImg').appendChild(gridCell);

      });
    })
    .catch(function (error) {
      console.log(error);
    });
}