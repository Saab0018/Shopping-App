 document.addEventListener("DOMContentLoaded", function(ev){
     document.getElementById("addBtn").addEventListener("click", add);
     
     display();
     
    
     
     
 });

function getEntry(ev) {
    var entry = new Array;
    var entryStorage = localStorage.getItem('grocery-saab0018');
    if (entryStorage !== null){
        entry = JSON.parse(entryStorage);
    }
    return entry;
}

function add(ev){
    event.preventDefault();
    var input = document.getElementById('input').value;
    var entry = getEntry();
    
    if (input!= ""){
    entry.push(input);
    localStorage.setItem('grocery-saab0018', JSON.stringify(entry));
    document.getElementById("input").value = '';
    
    display();
    
    return false;
    }
}

function display() {
  var entry = getEntry();
  var html = "<ul>";
  for (var i=0; i < entry.length; i++){
      html += '<li><input type="checkbox" id="checkBox" />' + entry[i] + '<button class="remove" id="' + i  + '">-</button></li>';
  };
  html += '</ul>';    
  document.getElementById("list").innerHTML = html;
    
var buttons = document.getElementsByClassName("remove")
for (var i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", remove);
};
    
}

function remove(){
    var id = this.getAttribute("id");
var entry = getEntry();
entry.splice(id, 1)
localStorage.setItem("grocery-saab0018", JSON.stringify(entry));
display();

return false;

}
                           