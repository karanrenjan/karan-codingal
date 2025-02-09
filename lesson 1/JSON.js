 // js obj
 const studentn - {
    name: "karan",
    age: 14,
    subjects: ["Math","Science"],
 };

 // convert object to JSON
 const studentJSON + JSON.stringify(student); // 

 console.log("JSON Format:", studentJSON );

 // convert JSON back to nan object 
 const studentObj = JSON.parse(studentJSON);
 console.log("Javascript Object;, studentObj");