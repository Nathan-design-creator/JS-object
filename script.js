var student = {
    name: "Ripley",
    roll: 123,
    grade: '9',
    result: '3.45'
}

document.getElementById('student_info').innerHTML = 'Name:' + student.name + 'Roll:' + student.roll + 'Grade:' + student.grade + 'Result:' + student.result;

document.write("<br>")
// Built in Object
document.write(Math.abs(-59))
document.write("<br>")
document.write(Math.asin(-1))
document.write("<br>")
document.write(Math.acos(-1));
document.write("<br>");

function getProducts() {
    document.write(arguments[0])
    document.write("<br>");
    document.write(arguments[1]);
    document.write("<br>");
    document.write(arguments[2]);
    document.write("<br>");
    document.write(arguments[3]);
    document.write("<br>");
    document.write(arguments[4]);
    document.write("<br>");
    document.write(arguments[5]);

    var product = 1;
    for (var index = 0; index <= 5; index = index + 1) {
        product = product * arguments[index];
    }
    document.write("<br>");
    document.write(product);
}


getProducts(1, 2, 3, 4, 5, 6);