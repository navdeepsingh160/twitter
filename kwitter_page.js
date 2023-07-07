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
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name: user_name, 
        message: msg , 
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() 
{
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) 
        {
            childKey  = childSnapshot.key;
            childData  = childSnapshot.val();
            if(childKey != "purpose")
            {
                firebase_message_id = childKey;
                message_data =  childData;

                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];

                name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
                like_button = "<button class='btn btn-warning' id = "+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like : "+ like +"</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;

                document.getElementById('output').innerHTML += row;
            }
        });

    });
}
getData();

function updateLike(message_id)
{
    button_id = message_id;
    likes = document.getElementById(button_id).value ;
    updated_likes = Number(likes) + 1;

        firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
        });
}

function logout(){
    window.location="index.html";
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");

}