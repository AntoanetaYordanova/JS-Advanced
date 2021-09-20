function filterEmployees (employees, criteria) {
    const employeesArr = JSON.parse(employees);
    const [key, value] = criteria.split('-');

    if(criteria === 'all') {

        for(let i = 0; i < employeesArr.length; i++) {
            let employee = employeesArr[i];
            console.log(`${i}. ${employee.first_name} ${employee.last_name}: ${employee.email}`);
        }

    } else {
        let filteredArr = employeesArr.filter(hasCondition);
        
        for(let i = 0; i < filteredArr.length; i++) {
            let employee = filteredArr[i];
            console.log(`${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }
    }


    function hasCondition(employee) {
           if(employee[key] === value) {
               return true;
           } 
    }
}

// filterEmployees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]` , "gender-Female"
// )

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)