import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config =  {
      apiKey: "AIzaSyCAnQDkK1bu1XVxQJNiA1VxCuhYG3jk2Wc",
      authDomain: "library-openclassroom-b3483.firebaseapp.com",
      databaseURL: "https://library-openclassroom-b3483.firebaseio.com",
      projectId: "library-openclassroom-b3483",
      storageBucket: "library-openclassroom-b3483.appspot.com",
      messagingSenderId: "673111618019",
      appId: "1:673111618019:web:ba4acb8fe2da195be3b0d6"
    };
    firebase.initializeApp(config);
  }

}
