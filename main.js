let Turn = 0;
let GameBoard = {
    Display: document.querySelector('.displayWinner'),
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
                    Winner();
                } else if (Turn % 2 !== 0) {
                    GameBoard.board[spot] = this.bot;
                    (this.gridSpot.textContent = this.bot), GameBoard.showBoard();
                    Turn++;
                    Winner();
                }
            }
            
            
        }
    }
}

function Winner() {
  if 
     (GameBoard.board[0] == "X" &&
      GameBoard.board[1] == "X" &&
      GameBoard.board[2] == "X" ||
      GameBoard.board[3] == "X" &&
      GameBoard.board[4] == "X" &&
      GameBoard.board[5] == "X" ||
      GameBoard.board[6] == "X" &&
      GameBoard.board[7] == "X" &&
      GameBoard.board[8] == "X" ||
      GameBoard.board[0] == "X" &&
      GameBoard.board[3] == "X" &&
      GameBoard.board[6] == "X" ||
      GameBoard.board[1] == "X" &&
      GameBoard.board[4] == "X" &&
      GameBoard.board[7] == "X" ||
      GameBoard.board[2] == "X" &&
      GameBoard.board[5] == "X" &&
      GameBoard.board[8] == "X" ||
      GameBoard.board[6] == "X" &&
      GameBoard.board[4] == "X" &&
      GameBoard.board[2] == "X" ||
      GameBoard.board[0] == "X" &&
      GameBoard.board[4] == "X" &&
      GameBoard.board[8] == "X")
  {
    GameBoard.Display.textContent = "Player Wins"
 
    
  }
  else if 
     (GameBoard.board[0] == "O" &&
      GameBoard.board[1] == "O" &&
      GameBoard.board[2] == "O" ||
      GameBoard.board[3] == "O" &&
      GameBoard.board[4] == "O" &&
      GameBoard.board[5] == "O" ||
      GameBoard.board[6] == "O" &&
      GameBoard.board[7] == "O" &&
      GameBoard.board[8] == "O" ||
      GameBoard.board[0] == "O" &&
      GameBoard.board[3] == "O" &&
      GameBoard.board[6] == "O" ||
      GameBoard.board[1] == "O" &&
      GameBoard.board[4] == "O" &&
      GameBoard.board[7] == "O" ||
      GameBoard.board[2] == "O" &&
      GameBoard.board[5] == "O" &&
      GameBoard.board[8] == "O" ||
      GameBoard.board[6] == "O" &&
      GameBoard.board[4] == "O" &&
      GameBoard.board[2] == "O" ||
      GameBoard.board[0] == "O" &&
      GameBoard.board[4] == "O" &&
      GameBoard.board[8] == "O")
     {
      GameBoard.Display.textContent = "Bot wins!"
    
    
  }
 else if (
      GameBoard.board[0] !== " " &&
      GameBoard.board[1] !== " " &&
      GameBoard.board[2] !== " " &&
      GameBoard.board[3] !== " " &&
      GameBoard.board[4] !== " " &&
      GameBoard.board[5] !== " " &&
      GameBoard.board[6] !== " " &&
      GameBoard.board[7] !== " " &&
      GameBoard.board[8] !== " "
  ) {
    GameBoard.Display.textContent = "Draw";
     
      
    }
    
}
const cleargrid = document.querySelectorAll('grid');

function resetGame(element) {
    GameBoard.board = [' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '];
    element.textContent = ' ';
   
}
