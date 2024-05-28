import { Component, OnInit } from '@angular/core';
import {
  AcordeonComponent,
  Item,
} from 'src/app/components/acordeon/acordeon.component';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styleUrls: ['./reglas.component.scss'],
  imports: [AcordeonComponent, MatIconModule],
  standalone: true,
})
export class ReglasComponent implements OnInit {

  addItem() {
throw new Error('Method not implemented.');
}

  cartas: Item[] = [
    { nombre: 'Donaruma legendaria', descripcion: 'El mazo de descartes incluye todas las cartas que se hayan jugado hasta el momento' },
    { nombre: 'Tanto', descripcion: ' no se aplican propiedades excepto concentración, puede pararse con una ayuda divina.' },

  ]

  personajes: Item[] = [
    { nombre: 'Bokuden', descripcion: 'Roba carta cuando juega carta Templo no cuando descarta carta Templo, ejemplo: roba carta cuando usa Parada contra un ataque, la cual es carta Templo, no roba cuando descarta una parada por Grito de Batalla.' },
    { nombre: 'Damachahca', descripcion: 'El orden es el siguiente, cuando es atacado primero revela, si no tienen el mismo simbolo ya decide si usar Parada' },
    { nombre: 'Yamato', descripcion: 'Excepto el último punto de resistencia y para parar ataques realizados con Chiguiriki' },
    { nombre: 'Chiyome', descripcion: 'No puede jugar una Máscara contra cartas de acción que no le hacen efecto (Grito de Batalla, Ofrenda, Siete samurais)' },
    { nombre: 'Jess', descripcion: 'Propiedades en juego, (duda propiedades buenas / propiedades malas)' },
    { nombre: 'Daedo', descripcion: 'Máximo 10 puntos de resistencia.' },
    { nombre: 'Saori', descripcion: 'Intercambiar es considerado con cartas en mano, no con cartas en juego.' },
    { nombre: 'Yukimura', descripcion: 'Si ese jugador pierde su último punto de resistencia de este modo, debe entregarte 1 punto de Honor, funciona sin importar cómo pierdas 1 punto de resistencia (Armas, Jiu-jitsu...)' },
    { nombre: 'Kambei', descripcion: 'No se aplican propiedades en tu mano, tambien puedes decartar Bushid, herida sangrante o Maldición' },
    { nombre: 'Masamune', descripcion: 'Revela las cartas de una en una en orden.' },
    { nombre: 'Toshigo', descripcion: 'Solo se puede preguntar una vez no tantear.' },
    { nombre: 'Hiro', descripcion: 'Incluido cuando tu mismo juegues Daymios o Cerezos.' },
    { nombre: 'Yiroko', descripcion: 'No puede usar Máscara contra cartas que no le hacen efecto (Grito de batalla y Siete samurais)' },
    { nombre: 'Yami', descripcion: 'Inclusive propiedades en juego y en mano, propiedades malas.' },
    { nombre: 'Kira', descripcion: 'Propiedades malas.' },
    { nombre: 'Okuni', descripcion: 'Válido para cualquier carta de acción que seas objetivo, incluye poder evitar acciones de robar cartas o poder evitar una Máscara.' },
    { nombre: 'Kaomi', descripcion: 'Puede pararse un ataque con Ayuda divina + Carta Arma Templo.' },
    { nombre: 'Shyma', descripcion: 'Propiedades malas.' },
    { nombre: 'Ranji', descripcion: 'Igual uso que una Máscara, cuando sea posible.' }
  ];
  generales: Item[] = [
    {
      nombre: 'Mazo de descarte',
      descripcion: 'Cuando se acaba el mazo, se quita el mazo de descarte',
    },
    { nombre: 'Fórmula cartas de inicio', descripcion: 'C = 7n - 9' },
    {
      nombre: 'Jugador Inofensivo',
      descripcion:
        'JUGADOR INOFENSIVO = JUGADOR SIN CARTAS / JUGADOR INACTIVO = JUGADOR SIN PUNTOS DE RESISTENCIA  A efectos de las cartas se tratan igual, no obstante un jugador perderá su habilidad cuando este derrotado, sin puntos de resistencia, no sin cartas, exceptuando las siguientes habilidades las cuales se seguirán usando incluso cuando el jugador este sin puntos de resistencia, las habilidades son las siguientes: Taikido, Shaelon, Kunimitsu, Yamato, Wachowski, Kambei, Masamune, Toshigo, Garume, Yamako, Tatamo, Yami y Hideyhosi.',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
