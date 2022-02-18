const btnSend = document.getElementById("btnSend");
const btnClear = document.getElementById("btnClear");

btnSend.addEventListener("click", () => {
  const txtRows = Number.parseInt(document.getElementById("txtRows").value);
  const txtCols = Number.parseInt(document.getElementById("txtCols").value);

  console.log(txtRows);
  console.log(txtCols);
  makeRows(txtRows, txtCols);
});

btnClear.onclick = () => clearGrid();

function clearGrid() {
  container.innerHTML = '';
}

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows); //set the property --grid-rows to container
  container.style.setProperty("--grid-cols", cols); //set the property --grid-cols to container
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  hoverColor();
}

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hoverColor() {
  let items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = `${randomColor()}`;
    });
  });
}
