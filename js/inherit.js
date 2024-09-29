class Forest{
    name;
    country;

    //to access global variable need to use `this`
    printDetail(){
        console.log("Forest name is ",this.name,this.country);
    }
}
class Lion extends Forest{
   animalName = "Lion" 
}
class Tiger  extends Forest{
animalName = "Tiger" 
}
lion = new Lion();
lion.name = "amazon";
lion.country = "africa";
lion.printDetail()

tiger = new Tiger();
tiger.name = "bengal";
tiger.country = 'india';
tiger.printDetail()

class PersonDetail{
name;
address;
mobile;
constructor(name,address,mobile){
    this.name = name;
    this.address = address;
    this.mobile = mobile;
}
}

class Anand extends PersonDetail{
printDetail(){
    console.log(this.name,this.address,this.mobile);
}
}

class Sangeetha extends PersonDetail{
printDetail(){
    console.log(this.name,this.address,this.mobile);
}
}

let a = new Anand('anand','banglore','6546464546');
let s = new Sangeetha('Sangeetha','Mumbai','989797');
a.printDetail();
s.printDetail()