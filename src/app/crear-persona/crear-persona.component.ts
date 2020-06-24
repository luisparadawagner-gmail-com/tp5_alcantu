import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../clases/Persona';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  constructor( private fb: FormBuilder, private route: ActivatedRoute ) { }

  personaForm: FormGroup;
  persona : Persona;
  consultarPersona: any;

  ngOnInit(): void {
    this.consultarPersona = this.route.snapshot.params;

		if (Object.keys(this.consultarPersona).length) {
			this.persona = this.consultarPersona;
		} else {
			this.persona = this.consultarPersona;
		}

		this.cargarDatos(this.persona);
	}
  
  cargarDatos(editar: Persona){
    this.personaForm = this.fb.group({
      nombre: [editar ? editar.nombre : '', Validators.required],
      apellido: [editar ? editar.apellido : ''],
      edad: [editar ? editar.edad: ''],
      direccion: [editar ? editar.direccion: '']
    });
  }

  submit(){
    debugger;
    this.personaForm.value;
    this.persona = this.personaForm.value;
  }

}
