import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  usuario: string = '';

  constructor(private router: Router) {}

  recuperar() {
    console.log('Recuperar clicked');
    if (this.usuario) {
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, ingrese su nombre de usuario');
    }
  }
}

