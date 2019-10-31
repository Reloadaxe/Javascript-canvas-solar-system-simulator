var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;
var context = canvas.getContext("2d");
var planets = [];

var sizeRatio = 2 / 4878;

var intervalNb = 10;
var daybySec = 30; // days number by second
var ratioDaysSec = 1 / daybySec;


var sun = new Planet(0, 50, "orange");
planets.push(sun);

var mercure = new Planet(55, 3, "maroon", 89.97, sun);
planets.push(mercure);

var venus = new Planet(65, 12102 * sizeRatio, "beige", 224, sun);
planets.push(venus);

var earth = new Planet(80,  6794 * sizeRatio, "dodgerblue", 365, sun);
planets.push(earth);

var moon = new Planet(5,  1, "white", 30, earth);
planets.push(moon);

var mars = new Planet(95, 12756 * sizeRatio, "red", 687, sun);
planets.push(mars);

var jupiter = new Planet(170, 142700 * sizeRatio, "yellow", 11 * 365 + 315, sun);
planets.push(jupiter);

var saturn = new Planet(280, 102660 * sizeRatio, "orange", 29 * 365 + 167, sun);
planets.push(saturn);

var uranus = new Planet(350, 51120 * sizeRatio, "orange", 84 * 365 + 7.4, sun);
planets.push(uranus);

var neptune = new Planet(400, 50000 * sizeRatio, "orange", 164 * 365 + 281.6, sun);
planets.push(neptune);

var pluton = new Planet(430, 2, "blue", 247 * 365 + 249.7, sun);
planets.push(pluton);

update = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    planets.forEach(planet => {
        planet.draw();
        planet.update();
    });
    context.fillStyle = "white";
    context.font = "30px Arial";
    context.fillText(daybySec + " days / second", 10, 40);
}

setInterval(update, intervalNb);