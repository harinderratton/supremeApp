import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotiService } from '../services/noti/noti.service';
import { Stripe } from '@ionic-native/stripe/ngx';
import { ApiService } from '../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  is_submit:boolean=false;
  public myform: FormGroup;
  status:any;
  constructor(
    public formBuilder: FormBuilder,
    public noti:NotiService,
    private stripe: Stripe,
    public api:ApiService,
    public route: ActivatedRoute,
    public router:Router,
    public alertController: AlertController,
    ) {
      this.makeform();
      this.status= this.route.snapshot.paramMap.get('status');
      
    
    
    }

  ngOnInit() {
  }

  makeform(){
    this.myform = this.formBuilder.group({
      mode: [null, Validators.compose([Validators.required])],
      cardno: ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(16)])],      
      expdate: ['', Validators.compose([Validators.required])],
      cvv: [null, Validators.compose([Validators.required,Validators.maxLength(3),Validators.minLength(3)])],
      fname:  ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      zcode: ['', Validators.compose([Validators.required])],
      amount: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
      
  });
  }

  payment(){
    this.is_submit=true;
    var edate = new Date(this.myform.value.expdate);
    let year:any = edate.getFullYear();
    let month:any = edate.getMonth();   
    
    if(this.myform.valid){

        this.noti.presentLoading(); 
        this.stripe.setPublishableKey('qwertyhjhytrewqwertyhytrewzR3NJ8c-sGcVud0kWXq1TsypeZh9s0LAXVEeH-Q0fTv_h5JNdvC5Nm');
  
        var card = {
          number:String(this.myform.value.cardno) ,
          expMonth:month+1,
          expYear: year,
          cvc:String(this.myform.value.cvv),              
        };

        this.stripe.createCardToken(card)
        .then(token => {

          this.api.postdata('getlivestream','','').subscribe(data =>{




            


          }, (err) => {
                    this.noti.stopLoading(); 
                    console.log(err)
                      }
         );


        })
        .catch(error => {
          this.noti.stopLoading(); 
          this.noti.presentToast(error,'danger');
        });
      
      }

  }

  stripepay(){

    this.is_submit=true;

    if(this.myform.valid){
      this.noti.presentLoading();
      var date= new Date(this.myform.value.expdate);
      var month= date.getMonth()
      this.stripe.setPublishableKey('qwertyhjhytrewqwertyhytrewzR3NJ8c-sGcVud0kWXq1TsypeZh9s0LAXVEeH-Q0fTv_h5JNdvC5Nm');
      let card = {
      number:  this.myform.value.cardno,
      expMonth: month++,
      expYear: date.getFullYear(),
      cvc: this.myform.value.cvv,
      }
  
      this.stripe.createCardToken(card)
        .then(token =>{
  
          var reqData= {    
            fname:  this.myform.value.fname,
            address:  this.myform.value.address,
            city:  this.myform.value.city,
            state:  this.myform.value.state,
            zcode:  this.myform.value.zcode,
            stripeToken: token.id,
            status:this.status,
            amount:  this.myform.value.amount,
            email: this.myform.value.email,

          }
  
            this.api.postdata('stripepay', reqData,'').subscribe(data =>{ 
              this.noti.stopLoading();
            var res;
            res =data;
            if(res.status==1){
              this.presentAlert(); 
              this.router.navigate(['/stripe']);
             
            }
            
            
     
      
      }, (err) => {
        this.noti.stopLoading();
        this.noti.nativeToast('Something went wrong, try again later');
      });
  
  
        })
        .catch(error => {
          this.noti.stopLoading();
          this.noti.nativeToast(error);
        });
  


    }
   


}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Donacione done!!',
    subHeader: 'Thanks',
    message: 'Gracias! Su donación ah sido enviada con éxito',
    buttons: ['Close']
  });

  await alert.present();
}

}
