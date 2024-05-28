import { Component, OnInit } from '@angular/core';
import { PartidaTarjetaComponent } from 'src/app/components/partida-tarjeta/partida-tarjeta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.scss'],
  imports: [PartidaTarjetaComponent, CommonModule],
  standalone: true,
})
export class PartidasComponent  implements OnInit {

  partidas: Partida[] = [
    {
      fecha: '2023-05-27',
      ganadores: [{ id: 1, nombre: 'Jugador 1', rol: { rol: 'ninja' } }, { id: 1, nombre: 'Jugador 2', rol: { rol: 'ninja' } }],
      jugadores: [
        { id: 1, nombre: 'Jugador 1', rol: { rol: 'ninja' } },
        { id: 1, nombre: 'Jugador 2', rol: { rol: 'ninja' } },
        { id: 2, nombre: 'Jugador 2', rol: { rol: 'samurai' } },
        { id: 2, nombre: 'Jugador 4', rol: { rol: 'samurai' } },
        { id: 3, nombre: 'Jugador 3', rol: { rol: 'ronin' } }
      ]
    },

    // Agrega más partidas según sea necesario
  ];

  constructor() { }

  ngOnInit() {}

}

export interface Partida {
  fecha: string;
  ganadores: Jugador[];
  jugadores: Jugador[]
}
export interface Jugador {
  id: number;
  nombre: string;
  rol: Rol;
}

export interface Rol {
  rol: 'ninja' | 'samurai' | 'ronin'
}