const Mode = {
  BW: 0,
  Color: 1
}

const container = document.getElementById('container');
let mode = Mode.BW;

function drawCanvas(size = prompt("What size canvas do you want?")) {
  // clear canvas
  const children = Array.from(container.childNodes);
  for (let child of children) {
    child.remove();
  }

  if (size > 50) size = 50;
  divs = Array(size*size);

  for (let i = 0; i < divs.length; i++) {
    const temp = document.createElement('div');
    temp.classList.add('cell');
    // NB use clientHeight instead of offSetHeight to exclude the border pixels
    let width = ((container.clientHeight) / size);
    temp.style.width = width + "px";
    temp.style.height = width + "px";
    if (mode === Mode.BW) {
      temp.addEventListener('mouseover', () => temp.style.backgroundColor = "black");
    }
    else if (mode === Mode.Color) {
      temp.addEventListener('mouseover', colorModeHandler);
    }
  
    container.appendChild(temp);
    divs[i] = temp;
  }
}

function colorModeHandler(e) {
  let color = this.style.backgroundColor;
  this.style.backgroundColor
  console.log(color);
  if (color === "") console.log("equal");
  if (color === "white" || color === "") {
    color = `rgb(${Math.floor(Math.random() * 256)},
             ${Math.floor(Math.random() * 256)},
             ${Math.floor(Math.random() * 256)})`;
  } else {
    const rgb = color.toString().match(/\d+/g);
    color = `rgb(${rgb[0] - 25.5},
                 ${rgb[1] - 25.5},
                 ${rgb[2] - 25.5})`;
  }
  this.style.backgroundColor = color;
  console.log(this);
}

const sizeBtn = document.getElementById("sizeBtn");
const colorBtn = document.getElementById("colorBtn");
sizeBtn.addEventListener('click', () => drawCanvas());
colorBtn.addEventListener('click', () => {
  mode = Mode.Color;
  drawCanvas(); // need reference to size
});

drawCanvas(16);