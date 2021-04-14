let readlineSync = require("readline-sync"); 
let axios= require("axios");
let download= require("image-downloader");

let username= readlineSync.question("What is your github username?   ");
let url = "https://api.github.com/users/"+ username 

axios.get(url).then(
    function(response){
        console.log(response.data.name);
        let places={
            url: response.data.avatar_url,
            dest: './photos via image-downloader library/'+username+'.jpg'
        }
        download.image(places);
    }
).catch(
    function(error){
        console.log(error);
    }
)
