function myJsFunction()
{
    var y1 = parseFloat(document.getElementById('myRange').value);
    var rate = Math.pow(y1 / 100, 3) + 0.02;
    var CFs = 10 * (y1 / 100 + 1) - 10;
    var Value = CFs / rate;
    document.getElementById("out1").innerHTML = Value.toFixed(2);
    document.getElementById("out2").innerHTML = CFs.toFixed(2);
}
