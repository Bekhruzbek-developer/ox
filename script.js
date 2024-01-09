const cells = document.querySelectorAll(".cell")
const Status  = document.querySelector(".status")
let nextStep = "X"
let isFinished = false;

const StatusGame = (status) =>{
    Status.innerHTML = "Next move: " + status
}



const WinLines = [

    // horizont
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //diagonal
    [0,4,8],
    [2,4,6]

]



const CheckWin = () =>{
  const win =   WinLines.find((winline)=>{
        const first = cells[winline[0]].innerText;
        const second = cells[winline[1]].innerText;
        const third = cells[winline[2]].innerText;
        
     return  first === second && second === third &&  third !== '';
    })

    if(!win){
        return false
    }

    const winner = nextStep === 'X' ? 'O' : 'X';

    StatusGame('Game finished !!!, Winner is: ' + winner);

    isFinished = true;
}




const handleClick = (cell) =>{
    if(cell.innerText === "" && !isFinished){
        cell.innerHTML = nextStep === "X" ? "X" : "O";;
        nextStep = nextStep === "X" ? "O" : "X";
        StatusGame(nextStep)
        CheckWin()
    }
    else{
        alert(isFinished ? `O'yin tugagan` : "Bu yacheyka belgilangan")
    }
}



cells.forEach(cell=>{
    cell.addEventListener("click", ()=>handleClick(cell))
})