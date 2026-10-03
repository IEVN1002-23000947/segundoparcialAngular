import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';
import { Usuario } from './formularios/usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Usuario],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
