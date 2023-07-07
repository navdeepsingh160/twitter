var firebaseConfig = {
      apiKey: "AIzaSyDRaTwcj8K_nVpghjihTBkD5p_O0of8pXA",
      authDomain: "kiwtter-22719.firebaseapp.com",
      databaseURL: "https://kiwtter-22719-default-rtdb.firebaseio.com",
      projectId: "kiwtter-22719",
      storageBucket: "kiwtter-22719.appspot.com",
      messagingSenderId: "818310494554",
      appId: "1:818310494554:web:b0c63913a20efb0a441b63"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose
: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code


      
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();

function redirecttoname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      window.location="index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");

}