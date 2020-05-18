import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { LocalStorageService, User } from 'app/providers/localStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Title]
})
export class LoginComponent implements OnInit {
  
  @ViewChild('notifications') notifications: NotificationsComponent;
  titulo: string = 'Curso virtual VCUR';
  usuario: Usuario;
  hide: boolean = true;

  constructor(private authService: AuthService,
              private router: Router,
              private title: Title,
              private localStorage: LocalStorageService ) {
    this.title.setTitle('Curso Virtual VCUR - Inicia sesión')
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.notifications.showNotification('check_circle',`Hola ${this.authService.usuario.username} ya estás autenticado!`,'bottom', 'right', 2)
      // swal('Login', `Hola ${this.authService.usuario.username} ya estás autenticado!`, 'info');
      this.router.navigate(['/dashboard']);
    }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      this.notifications.showNotification('notification_important','Debes llenar todos los campos','bottom', 'right', 3)
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      let user: User = { name: response.nombre,
                  lastName: response.apellido,
                  document: 1012459317 }

      this.localStorage.setUserInfo(user)
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/dashboard']);
      swal('Login', `Hola ${usuario.username}, has iniciado sesión con éxito!`, 'success');
    }, err => {
      if (err.status == 400) {
        swal('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );
  }

}
