let boxes = document.querySelectorAll(".box");
//let Resetbtn = document.querySelectorAll("#Reset");
let newGamebtn = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
var Resetbtn =document.getElementById('Reset');
let trueO = true;//playero playerX

const winPattern = [   
    [0, 1, 2],          
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(trueO){
            box.innerText = 'O';
            trueO = false;
        }      
        else{
            box.innerText = 'X';
            trueO = true;
        }
        box.disabled = true;  
        checkWinner();
    });
});


const ResetGame = () =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
};


const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};


const checkWinner = () =>{
    for(let patterns of winPattern){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
          if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
        }
    }
}
};

newGamebtn.addEventListener("click",ResetGame);
Resetbtn.addEventListener("click",ResetGame);
    
