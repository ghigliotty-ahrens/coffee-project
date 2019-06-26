"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

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
        if (selectedRoast === "all") {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
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
function myFunction() {
//     var content = coffees[0].name;
//     console.log(content);
//     var filter = content.indexOf(document.getElementById("searchCoffee").innerText)!==-1;
//     if (filter) {
//         document.getElementById("show").style.display = 'block';
//     } else {
//         document.getElementById("show").style.display = 'none';
//     }


    // switch (i) {
    //     case (document.getElementById("searchCoffee").innerText):
    // }
    var input, filter, td, i;
    input = document.getElementById("searchCoffee");
    filter = input.value.toUpperCase();
    console.log(filter);
    //table = document.getElementById("coffeeDiv");
    // tr = document.getElementById("coffees").;
    // console.log(tr);
    var filteredCoffeeNames = [];

    for (i = 0; i < coffees.length; i++) {
        td = coffees[i].name;
        console.log(td);
        // txtValue = td.innerText;
        // console.log(txtValue);
        if (td.toUpperCase().indexOf(filter) > -1) {
            console.log("hello");
        } else {
            console.log("no");
        }
    }
    coffees.forEach(function (coffee) {
        if (coffee === coffee.name) {
            filteredCoffeeNames.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffeeNames);
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
