 class UserService{
     details = [
        {"id":1,"name":"asdf"},
        {"id":2,"name":"adfasdf"},
        {"id":3,"name":"23423"},
        {"id":4,"name":"cvxbv"}
    ]

    constructor(){}
        login(email,password){
            if(email =='admin@gmail.com' && password == 'admin'){
                    return "you are correct."
            }else{
                    return "you are wrong";
            }
        }

        getAllUser(){
            //`this` for accessing global vairable
            return this.details;
        }

        getUserWithFilter(user_id){
            let user = details.filter((user)=>user.id==user_id);
            return user;
        }
}

module.exports = UserService;