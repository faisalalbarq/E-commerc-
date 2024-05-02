import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


//! بامكاني اعمل انتيرسيبتور خاص باللودنج سكرين و الريكويست و الايرورز  

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor() { }
  // request ==> شايل الريكويست الي طالع من الابليكيشن 
  // next ==> مسؤوله انها تبعث الريكويست من الانتيرسيبتور للي بعده  

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem('eToken') != null) {
      let myHeaders: any = { token: localStorage.getItem('eToken') };
      request = request.clone(  // بترجع الريكويست بعد التعديل     // لاوم اوخذ نسخه 
        {
          setHeaders: myHeaders
        }
      )
    }


    return next.handle(request);
  }
}
