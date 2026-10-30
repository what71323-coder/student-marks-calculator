// Get HTML elements
const marksForm = document.getElementById("marksForm");
const errorMessage = document.getElementById("errorMessage");
const resultSection = document.getElementById("resultSection");

// Calculate result when form is submitted
marksForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student name
    const studentName = document.getElementById("studentName").value.trim();

    // Get subject marks and convert them into numbers
    const htmlMarks = Number(document.getElementById("subject1").value);
    const cssMarks = Number(document.getElementById("subject2").value);
    const javascriptMarks = Number(document.getElementById("subject3").value);
    const phpMarks = Number(document.getElementById("subject4").value);
    const mysqlMarks = Number(document.getElementById("subject5").value);

    // Store all marks in an array
    const marks = [
        htmlMarks,
        cssMarks,
        javascriptMarks,
        phpMarks,
        mysqlMarks
    ];

    // Validate student name
    if (studentName === "") {
        errorMessage.textContent = "Please enter student name.";
        resultSection.style.display = "none";
        return;
    }

    // Validate marks
    for (let i = 0; i < marks.length; i++) {

        if (
            document.getElementById("subject" + (i + 1)).value.trim() === "" ||
            !Number.isFinite(marks[i]) ||
            marks[i] < 0 ||
            marks[i] > 100
        ) {
            errorMessage.textContent = "Please enter valid marks between 0 and 100.";
            resultSection.style.display = "none";
            return;
        }
    }

    errorMessage.textContent = "";

    // Calculate total marks
    let totalMarks = htmlMarks + cssMarks + javascriptMarks + phpMarks + mysqlMarks;

    // Calculate average and percentage
    let average = totalMarks / 5;
    let percentage = (totalMarks / 500) * 100;

    // Assign practice category
    let category;

    if (percentage >= 80) {
        category = "Excellent";
    }
    else if (percentage >= 60) {
        category = "Good";
    }
    else {
        category = "Needs Improvement";
    }

    // Display results on webpage
    document.getElementById("resultName").textContent = studentName;
    document.getElementById("totalMarks").textContent = totalMarks + " / 500";
    document.getElementById("averageMarks").textContent = average.toFixed(2);
    document.getElementById("percentage").textContent = percentage.toFixed(2) + "%";
    document.getElementById("category").textContent = category;

    resultSection.style.display = "block";

    // Display information in browser console
    console.log("Student Name:", studentName);
    console.log("Total Marks:", totalMarks);
    console.log("Average:", average);
    console.log("Percentage:", percentage);
    console.log("Practice Category:", category);

});