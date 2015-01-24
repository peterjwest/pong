var Shape = function(elem, score) {
    this.elem = elem;
    this.position = elem.offset();
    this.velocity = { left: 0, top: 0 };
    this.size = { width: elem.outerWidth(true), height: elem.outerHeight(true) };

    if (score) {
	    this.score = parseInt(score.text(), 10);
	}

    this.update = function() {
    	this.position.left += this.velocity.left;
    	this.position.top += this.velocity.top;

    	this.elem.offset(this.position);

        this.elem.width(this.size.width).height(this.size.height);

    	if (score) {
	        score.text(this.score);
	    }
    };
};

var arena = new Shape($(".arena"));
var ball = new Shape($(".ball"));
var player1 = new Shape($(".player1"), $(".player1Score"));
var player2 = new Shape($(".player2"), $(".player2Score"));

setup(arena, ball, player1, player2);

setInterval(function() {

    arena.update();
    ball.update();
    player1.update();
    player2.update();

	game(arena, ball, player1, player2);

}, 1000/fps);
