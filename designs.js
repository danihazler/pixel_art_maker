const inputHeight = document.getElementById("input_height");
const inputWidth = document.getElementById("input_width");
const colorPicker = document.getElementById("colorPicker");
const table = document.getElementById("pixel_canvas");
const form = document.getElementById("sizePicker");

//Function to build a grid.
function makeGrid() {
  //Values for grid height and grid width
  let height = +inputHeight.value;
  let width = +inputWidth.value;

  //Limited values for a less distorted grid
  if (height <= 80 && width <= 80) {
    //Cleans the canvas for a new grid
    table.innerHTML = "";

    //Adding children <tr> and <td> to the table
    for (let i = 0; i < height; i++) {
      let row = document.createElement("tr");

      for (let j = 0; j < width; j++) {
        let tableData = document.createElement("td");
        row.appendChild(tableData);
      }

      table.appendChild(row);
    }
  } else {
    alert("Maximum value is 80.");
  }
}

//---------- Submit event of the form itself
form.addEventListener("submit", function (e) {
  e.preventDefault();
  makeGrid();
});

//Add color to the selected table cell
table.addEventListener("mousemove", () => {
  //Doesn't start drawing instantly
  let isDrawing = false;

  table.addEventListener("mousedown", (e) => {
    isDrawing = true;
    e.target.style.background = colorPicker.value;
  });

  table.addEventListener("mousemove", (e) => {
    if (isDrawing) e.target.style.background = colorPicker.value;
  });

  table.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  table.addEventListener("dblclick", (e) => {
    e.target.style.background = "none";
  });
});
