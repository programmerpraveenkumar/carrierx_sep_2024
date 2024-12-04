class College{
    name:string;
    studentCount:number;
    address:string;

    print(){
        //print those details
        console.log(this.address,this.studentCount,this.address);
    }
}

let c = new College();
// c.name = 23;//eror as it s not accepting the number
c.name = "sample collge";
c.studentCount = 45;
c.address = "new york,usa";
c.print();
