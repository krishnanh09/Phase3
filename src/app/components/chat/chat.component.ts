import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScrollToBottomDirective } from 'src/app/directive/scroll-to-bottom.directive';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(private service:ApiService){}
  @ViewChild(ScrollToBottomDirective)
  scroll!: ScrollToBottomDirective; 
  isBot:boolean = true;
  chatForm = new FormGroup({
   message: new FormControl('', Validators.required)
  })
  chatHistory:any=[];  
  isData:boolean=false;
  getChatData:any=[];

  selectUser(event:any, user:any){
    if(user === 1){
      this.isBot = true;
    }else{
      this.isBot = false;
    }
  }

  onSend(event:any){
    console.log(this.chatHistory);
    console.log(this.getChatData);
    let length;
    if(this.getChatData.result.length===0){
      length=0;
    }else{
      length=this.getChatData.result.length;
    }
    let latestId= length;
    if(this.chatForm.value.message){ 
      if(latestId===0){
        this.isData = true;
      } 
      let data = {id:latestId+1, message:this.chatForm.value.message,isBot:this.isBot};
      this.service.saveChat(data).subscribe((res:any)=>{
        this.chatForm.reset();  
        if(this.chatHistory.length === 0){
          this.chatHistory = this.getChatData; 
        }               
        this.chatHistory.result.push(data);              
      }, (err:any)=>{        
        console.log(err);
      });     
    }else{
      alert("Enter your questions.")
    }    
  }

  getData(){
    this.service.getChatHistory().subscribe((res:any)=>{      
      this.getChatData = res;
      if(this.getChatData.result.length===0){     
        this.isData = false;
      }else{      
        this.chatHistory = this.getChatData;
        this.isData = true;        
      }
    }, (err:any)=>{
      console.log(err);
    })    
  }
  

  ngOnInit(): void {
    this.getData();    
    
    
  }  
}


interface Data{
  id:number;
  message:string;
  isBot:boolean;  
}