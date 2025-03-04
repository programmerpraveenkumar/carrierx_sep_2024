let firstname = 'asdfasf';//variable declaraion
console.log(firstname);//print the value

function add(a,b){
    console.log(a+b);
}
add(6,7);

//arrow function
add=(a,b,cb)=>{
    console.log(a+b);
    cb();//call the function after the addition.
}

//function as a parameter(callback..)
add(6,7,()=>{
    console.log("sample calling..");
});

//call back