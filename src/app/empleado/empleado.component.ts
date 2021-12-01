import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //template: "<p>Aquí iría un empleado</p>",
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
