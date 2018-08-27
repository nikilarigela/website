(function() {
  var config = {
    apiKey: "AIzaSyAVnspoShH0PRIt1bTKUU7M_VNW47WdVws",
    authDomain: "persnal-website.firebaseapp.com",
    databaseURL: "https://persnal-website.firebaseio.com/",
    projectId: "persnal-website",
    storageBucket: "",
    messagingSenderId: "45726555813"
  };
  firebase.initializeApp(config);

  var dbref = firebase
    .database()
    .ref()
    .child("test");
  dbref.on("value", snap => console.log(snap.val()));
})();
