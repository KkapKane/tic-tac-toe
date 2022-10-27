let Turn = 0;
let GameBoard = {
    
    board: [' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '],
    showBoard() {
        console.log(this.board);
    }

}

function placeMarker(spot) {
    return {
        
        gridSpot: document.querySelector('#grid' + spot),
        player: "X",
        bot: "O",
        draw: function () {
            if (GameBoard.board[spot] == ' ') {
                if (Turn % 2 == 0) {
                    GameBoard.board[spot] = this.player;
                    (this.gridSpot.textContent = this.player), GameBoard.showBoard();
                    Turn++;
                } else if (Turn % 2 !== 0) {
                    GameBoard.board[spot] = this.bot;
                    (this.gridSpot.textContent = this.bot), GameBoard.showBoard();
                    Turn++;
                }
            }
            
            
        }
    }
}


//placeMarker(4).draw();
