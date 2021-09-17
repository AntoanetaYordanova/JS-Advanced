const department = {
    name : 'Engineering',
    data : {
        director : {
            name : 'John',
            position : 'Engineering Director'
        } ,
        employees : [],
    }
};

const {data : {director}} = department;
console.log(director);