import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../services/rutas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  rutas = [];
  constructor(private rutasService: RutasService) {}

  ngOnInit(): void {
    this.rutasService.obtenerRutas().subscribe((resp: any[]) => {
      resp.forEach((elem) => {
        const { name, image, url } = elem;
        this.rutas.push({ name, image, url });
      });
      console.log(this.rutas);
    });
  }
}
