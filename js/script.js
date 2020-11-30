const getPairs = (students) => {
    const womenArr = students.filter(student => {
        return student.charAt(student.length - 1) === "а";
    });

    const menArr = students.filter(student => {
        return student.charAt(student.length - 1) !== "а";
    });

    const pairs = menArr.map((student, i) => {
        return [`${student} i ${womenArr[i]}`];
    });

    return pairs;
};

const giveTopicsToEachPair = (students, themes) => {
    const pairsWithThemes = getPairs(students).map((students, i) =>{
        return [...students, themes[i]];
    });
    return pairsWithThemes;
};

const giveMarksToStudents = (students, marks) => {
    const arrWithStudentsMarks = [...students].map((student, i) => {
        return [student, marks[i]];
    });

    return arrWithStudentsMarks;
};

const giveMarksForProject = (students, themes) => {
    const minMark = 1;
    const maxMark = 5;
    const finallArr = giveTopicsToEachPair(students, themes).map(pairWithTheme => {
        return [...pairWithTheme, Math.floor(Math.random() * (maxMark - minMark + 1)) + minMark];
    });

    return finallArr; 
};

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

console.log(students);
console.log(themes);
console.log(marks);

console.log(getPairs(students));
console.log(giveTopicsToEachPair(students, themes));
console.log(giveMarksToStudents(students, marks));
console.log(giveMarksForProject(students, themes));