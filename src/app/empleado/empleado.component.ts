import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //template: "<p>Aquí iría un empleado</p>",
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Julio";
  apellido = "Castillo";
  edad = 5;
  // private edad = 29;
  // empresa = "Aspire Systems";
  // getEdad(): number{
  //   return this.edad;
  // }

  // callPhone(nombre : string, apellido : string, edad: string, empresa: string): void{
  //     this.nombre = nombre;
  //     this.apellido = apellido;
  //     this.edad = parseInt(edad);
  //     // this.empresa = empresa;
  // }

  llamarEmpresa(empresa: string): void{

  }
  constructor() { }
  ngOnInit(): void {
  }

}
