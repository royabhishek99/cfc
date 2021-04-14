let axios = require("axios")

axios.get("https://api.github.com/users/royabhishek9khfg9").then(
    function(response){
        console.log(response.data);
    }
).catch(
    function(error){
        console.log(error);
    }
)