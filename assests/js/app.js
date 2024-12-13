function generateResult() {
    // get values from input field
    var name = document.getElementById("name").value ;
    var sub1 = document.getElementById("sub1").value ;
    var sub2 = document.getElementById("sub2").value ;
    var sub3 = document.getElementById("sub3").value ;


// check if any field is empty
sub1 = Number(sub1)
sub2 = Number(sub2)
sub3 = Number(sub3)

// calculte total and percentage    
var total = sub1 + sub2 + sub3;
var percentage = (total/300) *100;

//Determine grade and status
var grade; 
var status;

if (percentage >= 90) {
    grade = "A+";
    status = "pass"
} else if (percentage >= 80) {
    grade = "A";
    status = "pass"
} else if (percentage >= 70) {
    grade = "B";
    status = "pass"
} else if (percentage >= 60) {
    grade = "C";
    status = "pass"
} else if (percentage >= 50) {
    grade = "D";
    status = "pass"
} else {
    grade = "F";
    status = "Fail"
}


//Show result

var resultDiv = document.getElementById("result");
resultDiv.innerHTML = 
"<p>Student Name: " + name + "</p>" +
"<p>Total Marks:" + total + " / 300</p>" +
"<p>Percentage:" + percentage.toFixed(2) + "%</p>" +
"<p>Grade:" + grade +  "</p>" +
"<p class= ' " + (status === "pass" ? "pass" : "fail") + "'>Status:" + status + "</p>"

}