var config = {
    apiKey: "AIzaSyBlLUQBv0OR6glSApZ26eDW8SDD8NooAtQ",
    authDomain: "auth-8a564.firebaseapp.com",
    databaseURL: "https://auth-8a564.firebaseio.com",
    projectId: "auth-8a564",
    storageBucket: "auth-8a564.appspot.com",
    messagingSenderId: "762377372702"
};


class AppConfiguration {

  firebaseConfiguration() {
      return config;
  }

}

// function firebaseConfiguration(){
//   return config;
// }

export let appConfig = new AppConfiguration();
