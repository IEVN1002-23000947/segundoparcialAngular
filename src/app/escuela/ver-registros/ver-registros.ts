import { Component, OnInit } from '@angular/core';
import { IEntradas } from '../entradas';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-ver-registros',
  styleUrl: './ver-registros.css',
  templateUrl: './ver-registros.html',
})
export class VerRegistros implements OnInit {
  formulario!: FormGroup;
  entradas: IEntradas[] = []
  indiceEdicion: number = -1
  nuevaEntrada: IEntradas = {
    nombre: '',
    compradores: '',
    tarjepuntos: 'no',
    boletos: ''
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarEntradas();

    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      tarjepuntos: new FormControl('no'),
      boletos: new FormControl('')
    });
  }

  cargarEntradas(): void {
    const datos = localStorage.getItem('entradas');
    if (datos){
      this.entradas = JSON.parse(datos);
    }
  }

  editarEntrada(index: number): void {
    const entrada = this.entradas[index];
    this.nuevaEntrada = {
      ...entrada
    }

    this.formulario.patchValue({
      nombre: entrada.nombre,
      compradores: entrada.compradores,
      tarjepuntos: entrada.tarjepuntos,
      boletos: entrada.boletos
    })

    this.indiceEdicion = index;
  }

  guardarCambios(): void {
    if (
      this.nuevaEntrada.nombre === '' ||
      this.nuevaEntrada.compradores === '' ||
      this.nuevaEntrada.boletos === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (
      Number(this.nuevaEntrada.compradores) <= 0 ||
      Number(this.nuevaEntrada.boletos) <= 0
    )

    if (
      Number(this.nuevaEntrada.boletos) >
      Number(this.nuevaEntrada.compradores) * 7
    ) {
      alert('No puedes comprar más de 7 boletos por persona');
      return;
    }

    if (this.indiceEdicion !== -1) {
      this.entradas[this.indiceEdicion] = {
        ...this.nuevaEntrada
      };

      localStorage.setItem('entradas', JSON.stringify(this.entradas));
      this.limpiarCampos();
    }
  }

  eliminarEntrada(index: number): void {
    this.entradas.splice(index, 1);
    localStorage.setItem('entradas', JSON.stringify(this.entradas));
    if (this.indiceEdicion === index) {
      this.limpiarCampos();
    }
    else if (this.indiceEdicion > index) {
      this.indiceEdicion--;
    }
  }

  limpiarCampos(): void {
    this.nuevaEntrada = {
      nombre: '',
      compradores: '',
      tarjepuntos: 'no',
      boletos: ''
    };

    this.formulario.reset({
      nombre: '',
      compradores: '',
      tarjepuntos: 'no',
      boletos: ''
    });

    this.indiceEdicion = -1;
  }

  regresar(): void {
    this.router.navigate(['/escuela/cinepolis']);
  }
}