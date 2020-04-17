const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through empties and call drag addEventListener
for(const empty of empties){
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// drag funcitons
function dragStart(){
  // console.log('start');
  this.class += ' hold';
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(){
  this.className = "fill";
}

function dragOver(e){
  e.preventDefault();
}

function dragEnter(e){
  e.prentDefault();
  this.className += ' hovered';
}

function dragLeave(){
  this.className = 'empty';
  }

function dragDrop(){
 this.className = 'empty';
 this.append(fill);
}
