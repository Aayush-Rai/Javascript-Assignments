
let numberOfStudents = parseInt(prompt("Enter the number of students in class:"));
let students = [];


for (let i = 0; i < numberOfStudents; i++) {
    let input = prompt(`Enter the name, mathematics score, science score, and arts score for student ${i + 1} (comma separated):`);
    
    let inputArray = input.split(",").map(item => item);
   
    let name = inputArray[0];
    let mathScore = parseInt(inputArray[1]);
    let scienceScore = parseInt(inputArray[2]);
    let artsScore = parseInt(inputArray[3]);
    

    

    let totalScore = mathScore + scienceScore + artsScore;
    
    students.push({ name: name, mathScore: mathScore, totalScore: totalScore });
}


students.sort((a, b) => {
    if (b.totalScore === a.totalScore) {
        if (b.mathScore === a.mathScore) {
            return a.name.localeCompare(b.name);
        }
        return b.mathScore - a.mathScore;
    }
    return b.totalScore - a.totalScore;
});

document.write("<h2>Student:</h2>");

students.forEach(student => {
    document.write(`<li>${student.name}: Total Marks = ${student.totalScore}, Mathematics = ${student.mathScore}</li>`);
});

