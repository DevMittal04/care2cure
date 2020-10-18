import { Component, OnInit } from '@angular/core';


declare global {
  interface Window {
      kommunicate:any;
  }
}


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})

export class ChatbotComponent implements OnInit {


  email;
  constructor() { }
  

  ngOnInit() {
    (function(d, m){
    
      var kommunicateSettings = 
          {"appId":"74d6f87685f0e90c644c28b15f45553f","popupWidget":true,"automaticChatOpenOnNavigation":true};

      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
       h.appendChild(s);
      window.kommunicate = m;
       m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
   
  this.email = localStorage.getItem('useremail');

  }

}
