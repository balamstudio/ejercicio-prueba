import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  URL = 'http://localhost/api/';
  isLogged = false;

  constructor(private http: HttpClient) {}

  obtenerUsuario(acceso) {
    // console.log(acceso);
    // return this.http.get(`${this.URL}getruta.php`);
    return this.http.get(
      `${this.URL}seleccionarUsuario.php?email=${acceso.email}`
    );
  }
  obtenerRutas() {
    return this.http.get(`${this.URL}getruta.php`);
  }
}
