import {Component} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {DataSource} from '@angular/cdk/typings/esm5/collections';
import {Observable} from 'rxjs';
import {User} from '../user-model';

// @Component({
//   selector : 'trg-list',
//   templateUrl : './list-page.html',
// })

export class ListPage extends DataSource<any>{

  constructor(private photosService : UserService){
    super();
  }

  connect(): Observable<User[]>{
    return this.photosService.findUser();
  }

  disconnect(){
  }
}
