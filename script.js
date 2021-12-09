todoListSaved = new Array();
let removeCompleted = "Delete";
let changeType = false;
let userTxt = document.getElementById("todoItems");

//list is added
function addList() {
  userInput = document.getElementById("todoItems").value;
  debugger;

  document.getElementById("todoItems").value = "";
  if (userInput.length == 0) {
    alert("Please add to do something");
  } else {
    todoListSaved.push(userInput);
  }
  displayItem(todoListSaved); //each items come here
  //console.log(todoListSaved, "add list");
}
//make a password field make password visible and invisible (toggle)
function changeTypeStatus() {
  if (changeType === false) {
    userTxt.type = "password";
    document.getElementById("toggleBtn").innerHTML = "Password";
    console.log(userTxt.type);
    changeType = true;
  } else {
    userTxt.type = "text";
    document.getElementById("toggleBtn").innerHTML = "Text";
    console.log(userTxt.type);
    changeType = false;
  }
}

//make password accept one upper & lower case,one number and atleast one special character (regex)
function checkPwd() {
  let userPwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (userTxt.value.match(userPwd)) {
    alert("Yes,Your password is strong!");
  } else {
    alert(
      "Please make your password strong by 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, Thank you! "
    );
  }
}

//the user input is pushed to the array
function displayItem(todoListSaved) {
  let list = " ";
  for (i = 0; i < todoListSaved.length; i++) {
    list =
      list +
      `<div style="display:flex;margin-top:5px"><li style="margin-right:10px">${todoListSaved[i]}</li>
      <button onclick=deleteCompleted(${i})>${removeCompleted}</button></div>` +
      "<br>";
  }
  document.getElementById("displayItems").innerHTML = list;
  console.log(list, "this is");
}

//delete each items
function deleteCompleted(index) {
  todoListSaved.splice(index, 1);
  displayItem(todoListSaved);
}

let h2 = document.createElement("h2");
let headingTxt = document.createTextNode("To do List");
h2.appendChild(headingTxt);
let body = document.querySelector("body");
let input = document.querySelector("#todoItems");
let form = document.querySelector("form");
let div = document.querySelector("div");
body.insertBefore(h2, input);
//body.style.background = "#ffd89f";
//body.insertBefore(h2, form);
input.style.margin = "15px";
input.style.background = "#fff000";
