import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ICallResponse {
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Array<ICallResponse>>('https://random-data-api.com/api/v2/users?size=10&is_xml=true');
  }
}
