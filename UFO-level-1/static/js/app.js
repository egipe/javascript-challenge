// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Add the table data
tableData.forEach((user_search)=> {
    var row = tbody.append("tr");
    Object.entries(user_search).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Create event handler
button.on("click", run_filter);

// Filter Function
function run_filter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log (inputValue);

    tbody.html("")

    var filtered_date = tableData.filter(selection => selection.datetime === inputValue);
    filtered_date.forEach((user_match) => {
        var row = tbody.append("tr");
        Object.entries(user_match).forEach(([key,value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};