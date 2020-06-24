import { Component, OnInit } from '@angular/core';
//import { Persona } from '../clases/Persona';
import { Router } from '@angular/router';
import { ConsultarPersonasService } from '../servicios/consultar-personas.service';

export interface Persona {
	nombre: string;
	apellido: string;
  edad: number;
  direccion: string
}

@Component({
  selector: 'app-consultar-personas',
  templateUrl: './consultar-personas.component.html',
  styleUrls: ['./consultar-personas.component.css']
})
export class ConsultarPersonasComponent implements OnInit {

  displayedColumns: string[] = [ 'nombre', 'apellido', 'edad', 'direccion', 'editar' ];
	dataSource: any[] = [];

  constructor(private router: Router, private consultarPersonasServicio: ConsultarPersonasService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
		this.consultarPersonasServicio.getPersonas().subscribe((personas) => {
			debugger;
			this.dataSource = personas;
		});
  }

  /*addPersona(){
    this.dataSource.push(this.persona);
  }*/
  
  editar(element) {
		debugger;
		this.router.navigate([ '/crearPersona', element ]);
	}

}
