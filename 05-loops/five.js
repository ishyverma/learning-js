const coding = ["js", "python", "cpp", "ruby"];

coding.forEach(function(val) {
    console.log(val)
})

coding.forEach(printMe) //We only have to give the reference of the function.

function printMe(item) {
    console.log(item);
}

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
});

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
];

myCoding.forEach((val) => {
    console.log(val["languageFileName"], val.languageName);
})