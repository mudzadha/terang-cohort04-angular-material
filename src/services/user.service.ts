import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../app/user/list/user-model";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  findPhoto(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  findPhotoById(id: number): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+id);
  }
}
