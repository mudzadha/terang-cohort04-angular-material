import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  findPhoto(): Observable<Users[]> {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }

  findPhotoById(id: number): Observable<UserID> {
    return this.http.get<UserID>('https://jsonplaceholder.typicode.com/users');
  }
}
