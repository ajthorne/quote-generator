import $ from 'jquery';

//working with vanilla to build and manipulate DOM
let container = document.getElementById('container');

let fact = document.createElement('h3');
container.appendChild(fact);
fact.innerHTML = 'Start your learning...';

let factBtn = document.createElement('button');
container.appendChild(factBtn);
factBtn.innerHTML = 'Learn a new fact';


factBtn.addEventListener('click', function (e) {
  console.log('You need to access your API');
  // fact.innerHTML = 'Bare Bones';
  // ajax call
  $.ajax({
    type: 'GET',
    url: `http://www.catfact.info/api/v1/facts.json?`,
    data: {
      page: Math.floor(Math.random() * 439),
      //rounding number, 439 is range of pages
      per_page: 1
    },
    dataType: 'json',
    success: function(response) {
      fact.innerHTML = response.facts[0].details;
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

//thanks http://www.catfact.info/ for helping me build this
