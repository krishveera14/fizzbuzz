function post(url, data) {
    data = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.onload = function() {
        resolve({ status: http.status, data: JSON.parse(http.response) });
      };
      http.open("POST", url);
      //Make sure that the server knows we're sending it json data.
      http.setRequestHeader("Content-Type", "application/json");
      http.send(data);
    });
}
 
function get(url) {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.onload = function() {
        resolve({ status: http.status, data: JSON.parse(http.response) });
      };
      http.open("GET", url);
      http.send();
    });
}

let apiLink;
export let userID;
let userURL;
 
function loginUser(){
 
  apiLink = "http://basic-web.dev.avc.web.usf.edu/";
  userID = document.getElementById("usernameID").value;
  userURL = apiLink + userID;
  console.log(userURL);
 
    get(userURL).then(function(response){
        //Put all code that relies on the data from this request in here.
        if(response.status == 200){
        const username = response.data.id; //The username that was requested. In this case it is "myUserName".
        const scores = response.data.score; //The user's current score.
        }
        else{
        //User "myUserName" not found.
        //response.data is null
        post(userURL, { score: 0 }); //create a new user.
        }
        window.location.assign("./fizzBuzz.html");
    }); 
    
}