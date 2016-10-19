import $ from 'jquery';

//working with vanilla to build and manipulate DOM
let container = document.getElementById('container');

let fact = document.createElement('h3');
container.appendChild(fact);
fact.innerHTML = 'Start your learning...';

let factBtn = document.createElement('button');
factBtn.classList.add('btn');
container.appendChild(factBtn);
factBtn.innerHTML = 'Learn a new fact';


factBtn.addEventListener('click', function (e) {
  // console.log('You need to access your API');
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
})

//thanks http://www.catfact.info/ for helping me build this
