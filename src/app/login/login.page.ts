import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  /**
   * Se genera el modelo user con dos claves
   * cada clave tiene su valor inicial
   */
  user={
    usuario:"",
    password:""
  }
  constructor(private router: Router, private loadingCtrl: LoadingController) { } // Se debe instanciar

  ngOnInit() {
  }
  async ingresar(){
    // Se declara e instancia un elemento de tipo NavigationExtras
        const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      cssClass: 'Crescent',
    });

    loading.present();

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/home'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }

  }






