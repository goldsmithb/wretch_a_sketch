const container = document.getElementById('container');

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
    let width = ((container.clientHeight) / size)  + "px";
    temp.style.width = width;
    temp.style.height = width;
    temp.addEventListener('mouseover', () => temp.style.backgroundColor = "black");
  
    container.appendChild(temp);
    divs[i] = temp;
  }
}

const sizeBtn = document.getElementById("sizeBtn");
sizeBtn.addEventListener('click', () => drawCanvas());

drawCanvas(16);