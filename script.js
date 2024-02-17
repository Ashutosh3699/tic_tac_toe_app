const game_info = document.querySelector(".game_info_tab");
const grids_box = document.querySelectorAll(".box");
const game_btn = document.querySelector(".New_btn");

let currentPlayer = "X";
let gamegrid ;
let winningPostion = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]    
];

function init(){

    currentPlayer = "X";
    game_info.innerText = `Current Player - ${currentPlayer}`;
    gamegrid = ["","","","","","","","",""];

    game_btn.classList.remove("active");

    // boxes innerText = "";
    grids_box.forEach((box)=>{

        box.innerText = "";
    })

    grids_box.forEach((index)=>{
        index.style.pointerEvents = 'all';
    });

    // background normal
    grids_box.forEach((index)=>{
        index.classList.remove("win");
    });

}
init();



function swapPlayer(){

    if(currentPlayer === "X"){

        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }

    game_info.innerText = `Current Player - ${currentPlayer}`;

}

function checkGameOver(){

    let answer = "";

    winningPostion.forEach((position) => {

        if((gamegrid[position[0]] !== "" || gamegrid[position[1]] !== "" || gamegrid[position[2]] !== "") 
        && (gamegrid[position[0]] === gamegrid[position[1]] ) && (gamegrid[position[1]] === gamegrid[position[2]])){

            answer = gamegrid[position[0]];

            grids_box[position[0]].classList.add("win");
            grids_box[position[1]].classList.add("win");
            grids_box[position[2]].classList.add("win");

        }
    })

    if(answer !== ""){

        // winner got it
        game_info.innerText = `winner is player- ${answer} `;

        grids_box.forEach((index)=>{
            index.style.pointerEvents = 'none';
        });

        game_btn.classList.add("active");

    }

    let fullfill = 0;

    gamegrid.forEach((e)=>{

        if(e !== ""){
            fullfill++;
        }
    });

    if(fullfill===9){

        game_info.innerText = "Game is tie!!";
        game_btn.classList.add("active");
    }

}

function handleClick(index){

    console.log("click");
    if(gamegrid[index] === ""){

        gamegrid[index] = currentPlayer;
        grids_box[index].innerText = `${currentPlayer}`;

        grids_box[index].style.pointerEvents = 'none';

        // swap the player
        swapPlayer();

        // check game is over or not
        checkGameOver();

    }
}


grids_box.forEach((box,index)=>{

    box.addEventListener('click',()=>{

        console.log("clicked");
        handleClick(index);
    });
})

game_btn.addEventListener("click", init);
























