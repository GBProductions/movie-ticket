//Business Logic

function Ticket (movie, time, level) {
    this.movie = movie;
    this.time = time;
    this.level = level;
};

//UI Logic

$(document).ready(function() {
    $("form#ticket").submit(function(event) {
        event.preventDefault();
    });
});