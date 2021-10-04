const container = document.querySelector("#container");

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        cell.innerText = i + 1;
        //cell.addEventListener("mouseover", cell.style.backgroundColor = "black");
        container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

// const numberSquares = 16;

// for (i = 0; i < numberSquares; i++) {
//   const row = document.createElement("div");
//   container.appendChild(row);
//   for (i = 0; i < numberSquares; i++) {
//     const square = document.createElement("div");
//     row.appendChild(square);
//     square.addEventListener(
//       "mouseover",
//       (square.style.backgroundColor = "black")
//     );
//   }
// }
