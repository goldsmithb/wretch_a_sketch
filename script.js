const grid = document.getElementById('container');
const divs = Array(16);
for (let i = 0; i < divs.length; i++) {
  const temp = document.createElement('div');
  temp.classList.add('cell');
  grid.appendChild(temp);
  divs[i] = temp;
}
console.log(divs);