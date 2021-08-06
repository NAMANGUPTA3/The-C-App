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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "The C App.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; 
             snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room_name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id')>#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row;

            });
      });
}
getData();
function redirectToRoomName(name) { 
      
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "The C App_page.html";
      } 
      function logout() {
             localStorage.removeItem("user_name"); 
             localStorage.removeItem("room_name");
             window.location = "The C App.html";
      }
