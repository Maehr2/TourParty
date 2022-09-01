import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-firstload',
  templateUrl: './firstload.page.html',
  styleUrls: ['./firstload.page.scss'],
})
export class FirstloadPage implements OnInit {

  constructor(private router: Router, private loadingCtrl: LoadingController) {
//sensasion splash por que no supe usar 
   setTimeout(()=>{
    this.router.navigateByUrl('login');

   },3000);
  }

  ngOnInit() {
  }


  }

