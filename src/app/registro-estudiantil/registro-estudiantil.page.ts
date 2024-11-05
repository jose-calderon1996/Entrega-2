import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistroUsuario } from '../models/usuario.interface';

@Component({
  selector: 'app-registro-estudiantil',
  templateUrl: './registro-estudiantil.page.html',
})
export class RegistroEstudiantilPage {
  userData: null | undefined;

  datosUsuario: RegistroUsuario = {
    nombre: '',
    comuna: '',
    direccion: '',
    fechaNacimiento: '',
    carrera: '',
    correo: '',
    contrasena: ''
  };
 

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navCtrl: NavController,
    private router: Router
  ) {}

  async ngOnInit() {
    this.datosUsuario; 
  }

  async registrar() {
    // Validación simple sin métodos avanzados
    if (
      !this.datosUsuario.nombre || 
      !this.datosUsuario.comuna || 
      !this.datosUsuario.direccion || 
      !this.datosUsuario.fechaNacimiento || 
      !this.datosUsuario.carrera || 
      !this.datosUsuario.correo || 
      !this.datosUsuario.contrasena
    ) {
      this.mostrarToast('Por favor, completa todos los campos');
      return;
    }

    try {
        // Registro de usuario en Firebase Authentication
        const userCredential = await this.authService.register(this.datosUsuario.correo, this.datosUsuario.contrasena);

        if (userCredential.user) {
            // Guardar datos adicionales del usuario en Firestore
            await this.authService.saveUserData(userCredential.user.uid, {
                nombre: this.datosUsuario.nombre,
                comuna: this.datosUsuario.comuna,
                direccion: this.datosUsuario.direccion,
                fechaNacimiento: this.datosUsuario.fechaNacimiento,
                carrera: this.datosUsuario.carrera
            });
            this.mostrarToast('Registro exitoso');
            this.router.navigate(['/home']); // Redirigir al usuario a la página de inicio
        } else {
            this.mostrarToast('Error en el registro');
        }

    } catch (error) {
        this.mostrarToast('Error en el registro');
        console.error('Error en el registro:', error);
    }
  }

  private mostrarToast1(mensaje: string) {
    console.log(mensaje); // Implementación básica
  }


  async mostrarToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    await toast.present();
  }

  // Función para navegar a la página de inicio de sesión
  navigateToLogin() {
    this.navCtrl.navigateBack('/login'); 
  }
}
