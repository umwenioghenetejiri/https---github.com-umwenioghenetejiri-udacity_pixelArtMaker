//assign keywords to elements
const colorPicker = document.getElementById("colorPicker");
const cells = document.getElementsByClassName('cell');
const size = document.getElementById('sizePicker');
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
var pixelCanvas = document.getElementById("pixelCanvas");

//function to create grid
function makeGrid(height, width) {
    const table = pixelCanvas
    let grid = '';

    // create rows with loops
    for (let x = 1; x <= height; x++) {
        let row = document.createElement('tr')
        pixelCanvas.appendChild(row) // rows appear
        //creates cells with loops
        for (let y = 1; y <= width; y++) {
            let col = document.createElement('td')
            row.appendChild(col) // columns appear
            grid += '<td class="cell" id="row-' + x + '_cell-' + y + '"></td>';
        }
        grid += '</tr>';
    }
    //add table grid 
    table.innerHTML = grid;

    // To enable click function in cell
    addClickCells();   
}

// Default grid
makeGrid(25, 25)

//function to add click events to cells
function addClickCells() {
    for (let a = 1; a < cells.length; a++) {
        cells[a].addEventListener("click", 
        function (event) {
            let cellClick = event.target;
            cellClick.style.backgroundColor = colorPicker.value; // click function is enabled
        });
    }
}

//submitButton function
size.onsubmit = function () {
    submitBtn(); // submit button  is enabled
};

//to input values of height and weight with submitBtn
function submitBtn() {
    const height = inputHeight.value;
    const width = inputWidth.value;
    event.preventDefault(); //IMPORTANT: prevents page from reloading after clicking submit button
    makeGrid(height, width);
}


