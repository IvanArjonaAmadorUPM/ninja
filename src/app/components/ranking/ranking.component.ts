import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class RankingComponent implements OnInit {
  players: Player[] = [
    { name: 'Santi', wins: 8 },
    { name: 'Peter', wins: 8 },
    { name: 'Diego', wins: 8 },
    { name: 'Zuru', wins: 6 },
    { name: 'Iván', wins: 6 },
    { name: 'Edui', wins: 5 },
    { name: 'Edudi', wins: 3 },
    { name: 'Dani', wins: 2 },
    { name: 'Edudo', wins: 1 },
    { name: 'Sete', wins: 1 },

  ];

  diamondPlayers: Player[] = [];
  goldPlayers: Player[] = [];
  silverPlayers: Player[] = [];
  bronzePlayers: Player[] = [];

  constructor() {}

  ngOnInit(): void {
    this.assignPlayersToCategories();
  }

  assignPlayersToCategories(): void {
    this.players.forEach(player => {
      if (player.wins >= 8 && player.wins <= 10) {
        this.diamondPlayers.push(player);
      } else if (player.wins >= 5 && player.wins <= 7) {
        this.goldPlayers.push(player);
      } else if (player.wins >= 2 && player.wins <= 4) {
        this.silverPlayers.push(player);
      } else {
        this.bronzePlayers.push(player);
      }
    });
  }
  
}
interface Player {
  name: string;
  wins: number;
}