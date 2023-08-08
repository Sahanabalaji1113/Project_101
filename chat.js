// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyAlZB8u8Ia7QQ7-Er1D7pRt8Hoc8NJt1SU",
  authDomain: "letschatwebapp-3cb14.firebaseapp.com",
  databaseURL: "https://letschatwebapp-3cb14-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-3cb14",
  storageBucket: "letschatwebapp-3cb14.appspot.com",
  messagingSenderId: "391168001839",
  appId: "1:391168001839:web:51832bdde57dba61d1c3da"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



