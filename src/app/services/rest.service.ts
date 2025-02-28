import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url = 'http://localhost:3000';

  constructor(private _http: HttpClient, private _state: StateService) { }

  login(data: any) {
    return this._http.post(this.url + '/admin/login', data);
  }

  getAdmins() {
    const headers = new HttpHeaders({})
      .set('Authorization', 'Bearer ' + this._state.token);
    return this._http.get(this.url + '/admin/getalladmins', { headers });
  }

  addAdmin(data: any) {
    const headers = new HttpHeaders({})
      .set('Authorization', 'Bearer ' + this._state.token);
    return this._http.post(this.url + '/admin/addadmin', data, { headers });
  }

  deleteAdmin(id: number) {
    const headers = new HttpHeaders({})
      .set('Authorization', 'Bearer ' + this._state.token);
    return this._http.delete(this.url + '/admin/deleteadmin/' + id, { headers });
  }

}
