var canvas1 = document.getElementById("grid");
var context1 = canvas1.getContext("2d");
context1.beginPath();

context1.fillStyle = 'black';
context1.fillRect(0, 167, 501, 3);
context1.fillRect(0, 334, 501, 3);
context1.fillRect(167, 0, 3, 501);
context1.fillRect(334, 0, 3, 501);