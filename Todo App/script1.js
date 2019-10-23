//alert('connected')

var ul = document.getElementById('list');
var li;


var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllItem);

//added dismissal card

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>


function addItem (){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item == ''){
        alert('first enter new ToDo');
    }
     else {
        //create li  and class mycheck
        li = document.createElement('li');
        li.setAttribute('class', 'mycheck');

        //create input of type checkbox and id check
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item');

        //add elements on webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 200);


        input.value = '';

    }

}

function removeItem (){
    li= ul.children;
   for (let index = 0; index < li.length; index++) {
    //  const element = list[index];
    //  console.log(element);
    while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index])
    }
   }
}

function removeAllItem (){
    li= ul.children;
   for (let index = 0; index < li.length; index++) {
    while (li[index]) {
        ul.removeChild(li[index])
    }
   }
}



