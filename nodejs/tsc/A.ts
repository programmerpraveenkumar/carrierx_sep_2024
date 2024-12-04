class CityDetails{
        name:string
        country:string;
}

//inherit the props from cityDetails
class Banglore extends CityDetails{
    print(){
        console.log(this.name,this.country);
        
    }
}

//inherit the props from cityDetails
class Indore extends CityDetails{
    print(){
        console.log(this.name,this.country);
    }
}

let b = new Banglore();
b.name = "banglore";
b.country = "india";
b.print();

let i = new Indore();
i.name = "indore";
i.country = "india";
i.print();