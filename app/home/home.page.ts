import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';

  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
    });  // O la variable que provenga del login
  }

  editarPerfil() {
    console.log('Editar Perfil clicked');
    // Aquí iría la lógica para redirigir o editar el perfil
  }

  verEstadisticas() {
    console.log('Ver Estadísticas clicked');
    // Aquí iría la lógica para mostrar estadísticas
  }

  cerrarSesion() {
    console.log('Cerrar Sesión clicked');
    // Aquí iría la lógica para cerrar la sesión del usuario
    this.router.navigate(['/login']);
  }
}



