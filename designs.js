//Function to build a grid.
function makeGrid() {

  //Values for grid height and grid width
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  //Limited values for a less distorted grid
  if (height <= 80 && width <= 80) {

    //Cleans the canvas for a new grid
    $('table').children().remove();

    //Adding children <tr> and <td> to the table
    for(let i = 0; i < height; i++) {
      let row = $('<tr></tr>');

      for(let j = 0; j < width; j++) {
        row.append($('<td></td>'));
      }

      $('table').append(row);
    }
  } else {
    alert("Maximum value is 80.")
  }
}

//---------- Submit event of the form itself
const sizePicker = $("#sizePicker");
sizePicker.on("submit", function(e) {
  e.preventDefault();
  makeGrid();
});

//Color Picker input updates its value itself, no need for an event listener
const colorPicker = $("#colorPicker");

//Add background-color to the selected table cell
$("table").on("mousemove", "td", function() {
  //Doesn't start drawing instantly
  let isDrawing = false;

  $("table").on("mousedown","td", function(){
    isDrawing = true;
    $(this).css("background-color", colorPicker.val());
  });

  $("table").on("mousemove", "td", function(){
    if (isDrawing){
      $(this).css("background-color", colorPicker.val());
    }
  });

  $("table").mouseup(function(){
    isDrawing = false;
  });

  //---------- Add colour to a single cell
  $("table").on("click", "td", function() {
    $(this).css("background-color", colorPicker.val());
  });

  //---------- Removes colour from the cell
  $("td").on("dblclick", function() {
    $(this).css("background", "none");
  })
});
