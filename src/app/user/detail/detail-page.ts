import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component ( {
  selector : 'detail-page',
  templateUrl : './detail-page.html',

})
export class DetailPage implements OnInit,OnDestroy{

  detailPage : Observable<Joke>; //TODO i added this

  constructor(private  :, private router : Router){

    this.joke$ = this.jokeservice.findJoke();
    console.log("Constructor is running ...")

    // this.joke$.subscribe(data=>{
    //   console.log(data)
    // })

  }
  goToNextPage(){
    this.router.navigate(['/academy/apprentices/',new Date().getTime()]);
    console.log("Push me")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is running ...")
  }
  ngOnInit(): void {
    console.log("ngOnInit is running ...")

  }
}
