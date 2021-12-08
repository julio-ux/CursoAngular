import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

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
  habilitacionCuadro = false;

  usuRegistrado = false;
  Textoregistrado = "No hay nadie registrado";
  setTextoRegistrado(event: any){
    if((<HTMLInputElement>event.target).value == "si"){
      this.Textoregistrado = "Se ha registrado el usuario";
    }else{
      this.Textoregistrado = "No hay nadie registrado";
    }
    
  }
  getRegistroUsuario(){
    this.usuRegistrado = false;
  }
  setusuarioRegistrado(){
    alert("Se ha registrado un usuario");
  }
  // private edad = 29;
  empresaTrabajador = "Google";
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
  // cambiaEmpresa(evento: any): void{
  //   this.empresaTrabajador = (<HTMLInputElement>evento.target).value;
  // }

  constructor() { }
  ngOnInit(): void {
  }

}
