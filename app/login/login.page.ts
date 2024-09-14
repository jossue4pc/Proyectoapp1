import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  ingresar() {
    console.log('Ingresar clicked');
    if (this.usuario && this.contrasena) {
      this.router.navigate(['/home'], { queryParams: { usuario: this.usuario } });
    } else {
      alert('Por favor, ingrese sus credenciales');
    }
  }

  restablecerContrasena() {
    console.log('Restablecer clicked');
    this.router.navigate(['/reset-password']);
  }
}





