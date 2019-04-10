import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../user-model';

@Component ( {
  selector : 'trg-detail',
  templateUrl : './detail-page.html',
  styleUrls :[ './detail-page.css'],

})
export class UsersDetailPage implements OnInit{

  mainForm: FormGroup;
  submitted: false;
  user$ : Observable<User> = null;

  constructor(private form: FormBuilder,
              private userService : UserService,
              private route : ActivatedRoute
              ){

    this.route.params.subscribe((param :{id: number}) =>{
      this.user$ = userService.findUserByID(param.id)
    });

  }
  ngOnInit() {
  }    onsubmit(value: any){
  }
  }
