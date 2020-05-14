import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotiService } from '../services/noti/noti.service';
import { ApiService } from '../services/api/api.service';
import { config} from 'config';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { InAppBrowser , InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  response:any;
  items:any;
  errors=['',null,undefined];
  url:any=config.IMAGES_URL;
  video:any;
  fcm_token:any;
  novideos:boolean=false
  constructor(
    private router:Router,
    public notifi:NotiService,
    public apiservice:ApiService,
    private sanitizer: DomSanitizer,
    private iab: InAppBrowser,
    private fcm: FCM,

  ) {
    
   }
   ionViewDidEnter(){

    this.fcm.getToken().then(token => {
      this.fcm_token = token;
      localStorage.setItem('uuid',this.fcm_token);
      console.log('---------------------below is the token----------------');
      console.log(this.fcm_token);
      this.savetoken(this.fcm_token);
    });

    this.getpic();
    this.vip_training();
   }

   savetoken(i){   
    this.apiservice.postdata('updatetokens', {token:i},'').subscribe(data =>{ 
      console.log('--------------------api result----------------');
    console.log(data);
    this.response=data;
    this.notifi.stopLoading();     
    console.log(data);
  if(this.response.status == 1){  
      }else{
  this.notifi.presentToast('Please connect to network and restart the app','danger');
   }

}, (err) => {
  console.log(err)
});

 }

  ngOnInit() {
  }

  getpic(){
    this.notifi.presentLoading();     
    this.apiservice.postdata('getpictures','','').subscribe(data =>{
    
    this.response=data;          
    console.log(data);
if(this.response.status == 1){  
  this.notifi.stopLoading(); 
  this.items= this.response.data;
  console.log(this.items);
 
}else if( this.response.status == 0){
  this.notifi.stopLoading(); 
 this.notifi.presentToast(this.response.msg,'danger');
}

}, (err) => {
this.notifi.stopLoading(); 
console.log(err)
});
  }

  vip_training(){
       
    this.apiservice.postdata('getshort','','').subscribe(data =>{
    var res;
    res= data;

         
   
if(res.status == 1){  
  this.notifi.stopLoading(); 
  this.video= res.data;
 
 
}else{
  this.novideos=true;
  this.video=[];
  this.notifi.stopLoading(); 

}

}, (err) => {
this.notifi.stopLoading(); 
console.log(err)
});
  }

  photoURL(src) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  link(l){
    console.log(l.split('/').pop(-1));
    var lin=l.split('/').pop(-1);
    const iosoption: InAppBrowserOptions = {
      zoom: 'no',
      location:'yes',
      toolbar:'yes',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      disallowoverscroll: 'yes',
      enableViewportScale: 'yes'
    }

    const browser = this.iab.create('https://www.youtube.com/watch?v='+lin,'_blank', iosoption);
 
}

}
