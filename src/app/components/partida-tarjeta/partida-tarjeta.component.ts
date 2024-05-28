import { Component, Input, OnInit } from '@angular/core';
import { Partida } from 'src/app/pages/partidas/partidas.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partida-tarjeta',
  templateUrl: './partida-tarjeta.component.html',
  styleUrls: ['./partida-tarjeta.component.scss'],
  imports: [MatDividerModule, MatButtonModule, MatIconModule, MatCardModule, CommonModule],
  standalone: true,
})
export class PartidaTarjetaComponent  implements OnInit {

  @Input() partida!: Partida;
  @Input() numeroPartida!: number;
  
  constructor() { }

  ngOnInit() {}

}
