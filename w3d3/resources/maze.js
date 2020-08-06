$(document).ready(function() {

    let gameStarted = false;

    function reset() {
        $('.boundary').removeClass('youlose');
        gameStarted = true;
        $('#status').text('Play!');
    }

    function youWin() {
        if (gameStarted) {
            $('#status').text('You win! :) Click "S" to Begin Again.');
            gameStarted = false;
        }
    }

    function youLost() {
        if (gameStarted) {
            $('.boundary').addClass('youlose');
            $('#status').text('You Lost :( Click "S" to Begin Again.');
        }
        gameStarted = false;
    }

    $('#start').mouseover(reset);
    $('.boundary').mouseenter(youLost);
    $('#maze').mouseleave(youLost);
    $('#end').mouseover(youWin);

});