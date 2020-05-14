import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FCM } from '@ionic-native/fcm/ngx';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { socket_config } from 'config';
const config: SocketIoConfig = { url: socket_config.SOCKET_URL, options: {} };
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { Toast } from '@ionic-native/toast/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule,SocketIoModule.forRoot(config)],
  providers: [
    FCM,
    StatusBar,
    HttpClient,
    SplashScreen,
  
    InAppBrowser,
    // PayPal,
    Stripe,
    ApplePay,Toast,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
