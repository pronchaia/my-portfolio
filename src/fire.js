import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCAaO750e9GY5fQj57LJLAB0JiBI9y9G7s",
    authDomain: "my-portfolio-847bf.firebaseapp.com",
    databaseURL: "https://my-portfolio-847bf.firebaseio.com",
    projectId: "my-portfolio-847bf",
    storageBucket: "my-portfolio-847bf.appspot.com",
    messagingSenderId: "726736282807"
};
var fire = firebase.initializeApp(config);
export default fire;