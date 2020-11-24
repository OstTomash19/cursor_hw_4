const getPairs = (group) => {
    const womenArr = [];
    const menArr = [];
    const pairs = [];

    for(let i = 0; i < group.length; i++){
        if(womenStudentsArray.includes(group[i])) womenArr.push(students[i]);
        else menArr.push(group[i]);
    }

    for(let i = 0; i < group.length / 2; i++) {
        pairs.push([`${womenArr[i]} і ${menArr[i]}`]);
    }
    return pairs;
};

const giveTopicsToEachPair = (students, themes) => {
    const pairsWithThemes = [];

    for(let i = 0; i < getPairs(students).length; i++) {
        pairsWithThemes.push(getPairs(students)[i]);
        pairsWithThemes[i].push(themes[i]);
    }
    return pairsWithThemes;
};

const giveMarksToStudents = (students, marks) => {
    const arrWithStudentsMarks = [];

    for(let i = 0; i < students.length; i++) {
        arrWithStudentsMarks.push([students[i], marks[i]]);
    }
    return arrWithStudentsMarks;
};

const giveMarksForProject = (students, themes) => {
    const pairsWithThemes = [...giveTopicsToEachPair(students, themes)];
    const finallArr = [];
    const minMark = 1;
    const maxMark = 5;

    for(let i = 0; i < pairsWithThemes.length; i++) {
        finallArr.push([pairsWithThemes[i][0],
                        pairsWithThemes[i][1],
                        (Math.floor(Math.random() * (maxMark - minMark + 1)) + minMark)]);
    }

    return finallArr; 
};

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const womenStudentsArray = ["Олена", "Іра", "Світлана"];
const menStudentsArray = ["Олександр", "Ігор", "Олексій"];

console.log(students);
console.log(themes);
console.log(marks);

console.log(getPairs(students));
console.log(giveTopicsToEachPair(students, themes));
console.log(giveMarksToStudents(students, marks));
console.log(giveMarksForProject(students, themes));