import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component ( {
  selector : 'trg-photo-detail',
  templateUrl : './users-detail.page.html',
  styleUrls :[ './users-detail.page.scss'],

})
export class UsersDetailPage implements OnInit{

  mainForm: FormGroup;
  submitted: false;
  user$ : Observable(User) = null;

  constructor(private form: FormBuilder,
              private userService : UserService,
              private route : ActivatedRoute
              ){

    this.route.params.subscribe((param :(id: string)) =>{
      this.user$ = userService.findPhotoById(param.id)
    });

  }
  ngOnInit() {
  }    onsubmit(value: any){
  }
  }
