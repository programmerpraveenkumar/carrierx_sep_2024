var jwt = require('jsonwebtoken');
let data = {"name":"sample"};
let private_key = "secret";
var token = jwt.sign(data, private_key);
console.log(token);
