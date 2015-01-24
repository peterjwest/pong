// This is how fast the game runs
var fps = 60;

// The code in here runs once at the start
var setup = function(arena, ball, player1, player2) {
    ball.velocity.top = 3;
    ball.velocity.left = 3;
};

// The code in here runs every frame
var game = function(arena, ball, player1, player2) {
    if (ball.position.top > arena.size.height) {
        ball.velocity.top = -3;
    }
};
