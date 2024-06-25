console.log("Ejercicio 4");

let student1Courses = ['Math', 'English', 'Programming','Math','Science','Physics'];
let student2Courses = ['Geography', 'Spanish', 'Programming', 'Science', 'Geography', 'History'];
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.


const result = student1Courses.filter((word) => {
    for(let i=0; i<student2Courses.length; i++){
        if(word.includes(student2Courses[i])) return word;
    }
});

console.log(result);