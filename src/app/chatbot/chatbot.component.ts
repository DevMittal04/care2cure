import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})

export class ChatbotComponent implements OnInit {


  email1;
  constructor() { 
    this.email1 = localStorage.getItem('useremail');
  }
  

  ngOnInit() {
    if(localStorage.getItem("useremail")==null){
      alert("Please Login to use Chatbot!")
    }
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"74d6f87685f0e90c644c28b15f45553f","popupWidget":true,"automaticChatOpenOnNavigation":true,
          "onInit": function () {
            var css = ".mck-msg-right .mck-msg-box{background-color: #006655!important;color:white!important;}"; 
            var chatContext = {
                email: localStorage.getItem('useremail')
            };
            (window as any).Kommunicate.customizeWidgetCss(css);

            (window as any).Kommunicate.updateChatContext(chatContext);
        }};

      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
       h.appendChild(s);
       (window as any).kommunicate = m;
       m._globals = kommunicateSettings;
  })(document, (window as any).kommunicate || {});
   

  }

}
