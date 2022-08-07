var numSelected;
var tileSelected;
var errors = 0;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function(){
    setGame();
}


function setGame() {
    for (let index = 1; index < 10; index++) {
        let number = document.createElement("div");
        number.id = index;
        number.innerHTML = index;
        number.addEventListener('click',selectNumber)
        number.classList.add("number");
        document.getElementById("digits").appendChild(number)
        
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let tile = document.createElement("div");
            tile.id = row.toString() + "-" + col.toString();
            if (board[row][col] != "-") {
                tile.innerText = board[row][col]
                tile.classList.add("tile-start")
            }
            if (row == 2 || row == 5) {
                tile.classList.add("horizontal-line")
            }
            if (col == 2 || col == 5) {
                tile.classList.add("vertical-line")
            }
            tile.addEventListener("click", selectTile)
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile)
            
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected")
    }
    numSelected = this;
    numSelected.classList.add("number-selected")
}

function selectTile() {
    if (numSelected){
        if(this.innerText!=""){
            return;
        }

        let coord = this.id.split("-")
        let rowIndex = parseInt(coord[0])
        let colIndex = parseInt(coord[1])
        if (solution[rowIndex][colIndex] == numSelected.id) {
            this.innerText = numSelected.id
        }else{
            errors++;
            document.getElementById("errors").innerText = errors
        }
    }
}