var firebaseConfig = {
      apiKey: "AIzaSyAhfn0bhQaJPs6rsaGmMwmJPW-lvWSqlHc",
      authDomain: "the-c-app-7d79e.firebaseapp.com",
      databaseURL: "https://the-c-app-7d79e-default-rtdb.firebaseio.com",
      projectId: "the-c-app-7d79e",
      storageBucket: "the-c-app-7d79e.appspot.com",
      messagingSenderId: "252201426128",
      appId: "1:252201426128:web:fe34bafa90274fbc18d2d5",
      measurementId: "G-XPBLECRWM4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room.name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
      function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {
              childKey  = childSnapshot.key; 
            childData = childSnapshot.val();
             if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  

//End code
      } });  }); }
getData();
