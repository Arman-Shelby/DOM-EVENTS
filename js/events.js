console.log("External-File");

//option two to handle event
function makeYellow() {
  document.body.style.backgroundColor = "Yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "Red";
}

//option three: get element by id and then set onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);

btnMakeBlue.onclick = function btnMakeBlue() {
  document.body.style.backgroundColor = "blue";
};


//Option Three Differce Version
const btnMakePurple = document.getElementById('btn-make-purple');
        btnMakePurple.onclick = makePurple;

        function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }
        