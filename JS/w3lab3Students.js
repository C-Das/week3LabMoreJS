/* Declare all variables */

var deleteButtons = document.getElementsByClassName("btn-default");

/* Add event listener on all buttons */

for (i=0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click",deleteRow)
}

function deleteRow() {
    this.parentElement.parentElement.remove();
}

var addButton = document.getElementById("addButton");

addButton.addEventListener("click",insertRow);

function insertRow () {
    console.log ("We are going to add a row to the table"); 
    
    // Find a <table> element with id="myTable":
    var table = document.getElementById("studentTable");

    // Create an empty <tr> element and add it to the last but one row of the table: last row being the add row
    var rowInsert = table.insertRow(table.rows.length-1);
    var inputs = document.getElementsByClassName ("form-control");

    // Insert new cells (<td> elements) at the 1st, 2nd & Third position of the "new" <tr> element:
    var cell1 = rowInsert.insertCell(0);
    var cell2 = rowInsert.insertCell(1);
    var cell3 = rowInsert.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = inputs[0].value;    
    cell2.innerHTML = inputs[1].value;
    cell3.innerHTML = inputs[2].value;
}

//Deletes first row in random between 5 to 10 seconds 
function randomDelete() {

    var randomValue = Math.floor((Math.random() * 100) + 5)*1000;
    //console.log (randomValue);
    setTimeout(function() {
        console.log ("I am inside setTimeout");
        firstRowForDelete = document.getElementById("firstRow");
        firstRowForDelete.remove();
    }, randomValue);

}




