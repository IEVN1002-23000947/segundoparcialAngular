import { Component, OnInit } from '@angular/core';
import { IEntradas } from '../entradas';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule }  from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis implements OnInit {
  formulario:FormGroup
  compra:IEntradas={
    nombre:'',
    compradores:'',
    tarjepuntos:'no',
    boletos:''
  }
  valorPagar: number=0
  mensaje:string=''
  procesado:boolean=false

  ngOnInit(): void {
    this.formulario= new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      tarjepuntos: new FormControl('no'),
      boletos: new FormControl('')
    })
  }

  procesarCompra():void{
    this.mensaje=''
    this.procesado=false
    
    let nombre = this.formulario.value.nombre
    let compradores = this.formulario.value.compradores
    let tarjeta = this.formulario.value.tarjepuntos
    let boletos = this.formulario.value.boletos

    if (boletos > compradores * 7) {
      this.mensaje = 'No puedes comprar más de 7 boletos por persona'
      return
    }

    let total = boletos * 12.000
    if (boletos >= 3 && boletos <= 5){
      total = total * 0.90
    }
    else if (boletos > 5){
      total = total * 0.85
    }

    if (tarjeta === 'si'){
      total = total * 0.90
    }

    this.valorPagar = total
    this.procesado = true
  }

  salir(): void {
    this.formulario.reset({
      nombre: '',
      compradores: '',
      tarjepuntos: 'no',
      boletos: ''
    })
    this.valorPagar = 0
    this.mensaje = ''
    this.procesado = false
  }
}