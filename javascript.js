
// 1. Change Message
function changeMessage() {
    document.getElementById("message").innerHTML =
        "Hello! Welcome to JavaScript Programming.";
}

// 2. Change Title Color
function changeColor() {
    document.getElementById("title").style.color = "red";
}

// 3. Display Current Date and Time
function showDate() {
    document.getElementById("date").innerHTML =
        new Date().toLocaleString();
}

// 4. Add Two Numbers
function addNumbers() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    var sum = a + b;

    document.getElementById("result").innerHTML =
        "Sum = " + sum;
}

// 5. Change Box Background Color
function changeBox() {
    document.getElementById("box").style.backgroundColor =
        "orange";
}
