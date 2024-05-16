document.getElementById("add").onclick = function() {
    let text = document.getElementById("input").value; 
    let li = "<li>" + text + "</li>";
    document.getElementById("list").insertAdjacentHTML('beforeend', li);
    document.getElementById("input").value = "";
  }