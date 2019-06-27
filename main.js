"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-5 coffee-bg-' + coffee.roast + '">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + ' &nbsp;' + '<span class="h2pt2">' + coffee.roast + '</span>' + '</h2>';
    // html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];
coffees.reverse();

function myFunction() {
    var input, filter, td, i;
    input = document.getElementById("searchCoffee");
    filter = input.value.toUpperCase();
    var filteredCoffeeNames = [];
    var selectedRoast = roastSelection.value;
    for (i = 0; i < coffees.length; i++) {
        td = coffees[i].name;
        if (td.toUpperCase().indexOf(filter) > -1 && selectedRoast === "all") {
            filteredCoffeeNames.push(coffees[i]);
        } else if (td.toUpperCase().indexOf(filter) > -1 && coffees[i].roast === selectedRoast){
            filteredCoffeeNames.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffeeNames);
}
function createCoffee(e) {
    e.preventDefault();
    coffees.unshift({
        id: (coffees.length + 1),
        name: (document.getElementById('create-coffee').value),
        roast: createRoastSelection.value});
    tbody.innerHTML = renderCoffees(coffees);
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var createButton = document.querySelector('#submit-create');
var createRoastSelection = document.querySelector('#roast-selection-create');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
createButton.addEventListener('click', createCoffee);
