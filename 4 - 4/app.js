const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

const waypoint = new Waypoint({
    element: section2,
    offset: 1000,
    handler: function(direction) {
        if (direction === 'down') {
        alert("Are you sure ? Things are wild down there !");
    }
}
});

const waypoint2 = new Waypoint({
    element: section2,
    offset: 100,
    handler: function(direction) {
        if (direction === 'up') {
        alert("I told you !");
    }
}
});