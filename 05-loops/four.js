const obj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// For in loop 

for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`)
}

const arr = ["js", "rb", "py", "java", "cpp"]
for (const key in arr) {
    console.log(`Index of ${arr[key]} is ${key}`)
}