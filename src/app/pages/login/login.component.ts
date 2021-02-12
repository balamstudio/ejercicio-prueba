import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutasService } from '../../services/rutas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  public formError = false;
  public formsucces = false;
  formMsj = '';

  constructor(private rutasService: RutasService, private fb: FormBuilder) {
    this.creaFormulario();
  }

  ngOnInit(): void {}
  creaFormulario() {
    this.forma = this.fb.group({
      email: ['balamstudiooo@gmail.com', [Validators.required]],
      pass: ['1234', [Validators.required]],
    });
  }

  onSubmit() {
    this.formError = false;
    this.formsucces = false;
    if (this.forma.valid) {
      this.rutasService.obtenerUsuario(this.forma.value).subscribe(
        (result) => {
          console.log(result[0].pass);
          if (this.forma.get('pass').value === result[0].pass) {
            this.rutasService.isLogged = true;
            this.formsucces = true;
          } else {
            this.rutasService.isLogged = false;
            this.formError = true;
            this.formMsj = 'Los accesos están equivocados';
          }
        },
        (error) => {
          console.log(error);
          this.rutasService.isLogged = false;
          this.formError = true;
          this.formMsj = 'Los accesos están equivocados';
        }
      );
    } else {
      this.formError = true;
      this.formMsj = 'Debe llenar todos los campos';
    }
  }
}
