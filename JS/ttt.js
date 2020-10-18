var player = "X";
var board = [[],[],[]]
var playerX_score = 0;
var playerY_score = 0;

function ttt_doMove(row, col) {
    var r = row;
    var c = col;
    var id = "ttt_"+r+c;
    player = player == "X" ? "Y":"X";
    document.getElementById(id).textContent = player;
    board[r-1][c-1] = player;
    ttt_checkWin();
}

function ttt_checkWin() {
    var isBoardFull = false;

    if (board[0][0] == board[0][1] && board[0][1] === board[0][2] && board[0][0] != null) {
        ttt_showWin("11","12","13", board[0][0]);
    }
    else if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][0] != null) {
        ttt_showWin("21","22","23", board[1][0]);
    }
    else if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][0] != null) {
        ttt_showWin("31","32","33", board[2][0]);
    }
    else if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0] != null) {
        ttt_showWin("11","21","31", board[0][0]);
    }
    else if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1] != null) {
        ttt_showWin("12","22","32", board[0][1]);
    }
    else if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != null) {
        ttt_showWin("13","23","33", board[0][2]);
    }
    else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != null) {
        ttt_showWin("11","22","33", board[0][0]);
    }
    else if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != null) {
        ttt_showWin("13","22","31", board[2][0]);
    }
    else {
        for (x=0;x<3;x++) {
            for (y=0;y<3;y++) {
                if (typeof board[x][y] === "undefined") {
                    return;
                }
                else {
                    isBoardFull = true;
                }
            }
        }
    }

    if (isBoardFull) {
        for (r=1;r<4;r++){
            for (c=1;c<4;c++){
                var id = "ttt_"+r+c;
                var button = document.getElementById(id);
                button.classList.add("btn-danger");
            }
        }
        ttt_disableBoard();
    }
}

function ttt_disableBoard() {
    for (r=1;r<4;r++){
        for (c=1;c<4;c++){
            var id = "ttt_"+r+c;
            var button = document.getElementById(id);
            button.disabled = true;
        }
    }
    document.getElementById("newgame").classList.add("btn-success");
}

function ttt_showWin(pos1, pos2, pos3, p) {
    ttt_disableBoard();
    var scoreX = document.getElementById("playerX");
    var scoreY = document.getElementById("playerY");

    for (r=1;r<4;r++){
        for (c=1;c<4;c++){
            var id = "ttt_"+r+c;
            var button = document.getElementById(id);
            button.disabled = true;
        }
    }

    for (var a=0;a<3;a++) {
        var aa = arguments[a];
        var id = "ttt_"+aa;
        var button = document.getElementById(id);
        button.classList.remove("btn-dark");
        button.classList.add("btn-success");
    }

    playerX_score += p == "X" ? 1 : 0;
    playerY_score += p == "Y" ? 1 : 0;

    scoreX.innerHTML = playerX_score;
    scoreY.innerHTML = playerY_score;
}

function ttt_clearBoard(){
    board = [[],[],[]];
    player = player == "X" ? "X":"Y";

    for (r=1;r<4;r++){
        for (c=1;c<4;c++){
            var id = "ttt_"+r+c;
            var button = document.getElementById(id);
            button.textContent = "";
            button.classList.remove("btn-success");
            button.classList.remove("btn-danger");
            button.classList.add("btn-outline-dark");
            button.disabled = false;
        }
    }

    document.getElementById("newgame").classList.remove("btn-success");
    document.getElementById("starting_player").innerHTML = " "+player;
}