const getName = () => {
    return "John";
}

const getAge = () => {
    return 30;
}

const getPerson = () => {  
    return {
        name: getName(),
        age: getAge()
    };
}   

const person = getPerson();
console.log(person); 
console.log(getPerson().name);

exports.personInfo = person;