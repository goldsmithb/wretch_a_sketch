let size = prompt("How many pixels do you want?");
if (size > 50) size = 50;
console.log(size);

const container = document.getElementById('container');
const divs = Array(size*size);
for (let i = 0; i < divs.length; i++) {
  const temp = document.createElement('div');

  temp.classList.add('cell');
  let width = (container.offsetWidth / size)  + "px";
  temp.style.width = width;
  temp.style.height = width;
  temp.addEventListener('mouseover', () => temp.style.backgroundColor = "black");

  container.appendChild(temp);
  divs[i] = temp;
}
console.log(divs);