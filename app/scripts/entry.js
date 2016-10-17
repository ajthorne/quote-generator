import $ from 'jquery';

//working with vanilla to build and manipulate DOM
let container = document.getElementById('container');

let fact = document.createElement('h3');
container.appendChild(fact);
fact.innerHTML = 'Fact will go here';

let factBtn = document.createElement('button');
container.appendChild(factBtn);
factBtn.innerHTML = 'Learn a new fact';

// let quoteAdd = document.createElement('input');
// container.appendChild(quoteAdd);
// console.dir(quoteAdd);

factBtn.addEventListener('click', function (e) {
  console.log('You need to access your API');
  fact.innerHTML = 'Bare Bones';
  // ajax call
  $.ajax({
    type: 'GET',
    url: `http://catfacts-api.appspot.com/api/facts?number=1`,
    // dataType: 'jsonp',
    success: function(response) {
      console.log(response);
    }
  })


  //for adding a quote
  // let test = document.createElement('li');
  // quote.appendChild(test);
  // test.innerHTML = 'Bare Bones';
  //
  // test.addEventListener('click', function (e) {
  //   quote.removeChild(e.target);
  // })
})

//API DOCS
//http://www.catfact.info/
//
