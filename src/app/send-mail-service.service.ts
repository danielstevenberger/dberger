import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iinfo } from './info.model';


@Injectable({
  providedIn: 'root'
})
export class SendMailServiceService {

  constructor(private http: HttpClient) { }

  sendEmail(obj): Observable<Iinfo> {
    return this.http.post<Iinfo>(environment.sendmailUrl, obj)
  }
}
