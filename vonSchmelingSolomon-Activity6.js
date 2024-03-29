//Global variables
var prevCalc = 0;
var calc = "";

window.onload = function() {

    document.getElementById("btn1").onclick = ()=>  {showNum(1)};
    document.getElementById("btn2").onclick = ()=>  {showNum(2)};
    document.getElementById("btn3").onclick = ()=>  {showNum(3)};
    document.getElementById("btn4").onclick = ()=>  {showNum(4)};
    document.getElementById("btn5").onclick = ()=>  {showNum(5)};
    document.getElementById("btn6").onclick = ()=>  {showNum(6)};
    document.getElementById("btn7").onclick = ()=>  {showNum(7)};
    document.getElementById("btn8").onclick = ()=>  {showNum(8)};
    document.getElementById("btn9").onclick = ()=>  {showNum(9)};
    document.getElementById("btn0").onclick = ()=>  {showNum(0)};
    document.getElementById("btnIncrement").onclick = increment;
    document.getElementById("btnDecrement").onclick = decrement;
    document.getElementById("btnPlus").onclick = add;
    document.getElementById("btnMinus").onclick = subtract;
    document.getElementById("btnTimes").onclick = multiply;
    document.getElementById("btnSqrt").onclick = sqrt;
    document.getElementById("btnFloor").onclick = floor;
    document.getElementById("btnDivide").onclick = divide;
    document.getElementById("btnRound").onclick = round;
    document.getElementById("btnPow").onclick = power;
    document.getElementById("btnPow2").onclick = power2;
    document.getElementById("btnDecimal").onclick = decimal;
    document.getElementById("btnReset").onclick = clear;
    document.getElementById("btnCalc").onclick = calculate;

}

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}

function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiply";
    }
}

function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}

function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var total = Math.floor(num);
        document.frmCalc.txtNumber.value = total;
    }
}

function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var total = Math.round(num);
        document.frmCalc.txtNumber.value = total;
    }
}

function decimal() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var total = num + ".";
        document.frmCalc.txtNumber.value = total;
    }
}

function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }
}

function power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var total = Math.pow(num,2);
        document.frmCalc.txtNumber.value = total;
    }
}

function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var total = Math.sqrt(num);
        document.frmCalc.txtNumber.value = total;

    }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add") {
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
             if (calc == "Subtract") {
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Multiply") {
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Divide") {
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }

            if (calc == "Power") {
                var total = Math.pow(prevCalc,num);
                document.frmCalc.txtNumber.value = total;
            }

        }
}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}