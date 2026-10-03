import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  
  nombre:string=''
  apellidop:string=''
  apellidom:string=''

  dia:string=''
  mes:string=''
  anio:string=''

  sexo:string=''

  edad:number=0
  signo:string=''
  imagen:string=''

  mostrar:boolean=false

  imprimir():void{ 
    let anioActual=2026 
    this.edad=anioActual - parseInt(this.anio) //calcular edad

    let division= parseInt(this.anio)/12 //toma el año y lo divide entre 12 y lo guarda en division
    let entero= Math.floor(division) //toma el entero de la division
    let multi= entero*12 //multiplica el entero por 12
    let posicion= parseInt(this.anio) - multi //toma el año y le resta la multiplicacion. Resulta posicion del animal en la lista

    let animales=[
      {
        animal:'Mono', //0
        imagen:'https://i.pinimg.com/736x/28/32/f0/2832f012a552a56d4f070fcf9a241277.jpg'
      }, 
      {
        animal:'Gallo',
        imagen:'https://i.pinimg.com/736x/48/74/75/487475ea804fc50bc489b6754fad953c.jpg'
      },
      {
        animal:'Perro',
        imagen:'https://i.pinimg.com/736x/38/2a/22/382a22755cdb66825b05e0a58e7d900e.jpg'
      },
      {
        animal:'Cerdo',
        imagen:'https://i.pinimg.com/736x/f7/87/17/f78717b7a9f9c0844f4d08deeeb8efc5.jpg'
      },
      {
        animal:'Rata',
        imagen:'https://i.pinimg.com/736x/16/69/d7/1669d762e04a0bd797f86f07bd93e09a.jpg'
      },
      {
        animal:'Buey',
        imagen:'https://i.pinimg.com/736x/86/d0/80/86d08087843b22a129bf18792f48895e.jpg'
      },
      {
        animal:'Tigre',
        imagen:'https://i.pinimg.com/736x/81/62/24/816224ba48040af62ceb4ee42efd9728.jpg'
      },
      {
        animal:'Conejo',
        imagen:'https://i.pinimg.com/736x/d8/eb/a6/d8eba63d33cf783b9edf209a0fdcac50.jpg'
      },
      {
        animal:'Dragón',
        imagen:'https://i.pinimg.com/736x/f5/43/d5/f543d5942e91dd848eb98bd2d273ae21.jpg'
      },
      {
        animal:'Serpiente',
        imagen:'https://i.pinimg.com/736x/56/c6/07/56c607bf2c5539d2758c2cc6e7d982fd.jpg'
      },
      {
        animal:'Caballo',
        imagen:'https://i.pinimg.com/736x/e9/35/61/e9356146d1772ce308daf390ca30d9de.jpg'
      },
      {
        animal:'Cabra',
        imagen:'https://i.pinimg.com/736x/2d/1f/15/2d1f15c5587bb460229c5946eae5a0e1.jpg'
      }
    ]
    this.signo = animales[posicion].animal
    this.imagen = animales[posicion].imagen

    this.mostrar=true
  }
}
