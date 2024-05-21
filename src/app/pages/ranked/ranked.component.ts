import { Component } from '@angular/core';
import { PodiumComponent } from '../../components/podium/podium.component';
import { IonCardContent, IonCard } from '@ionic/angular/standalone';
import { LastGamesComponent } from '../../components/last-games/last-games.component';
import { RankingComponent } from '../../components/ranking/ranking.component';

@Component({
  selector: 'app-ranked',
  templateUrl: './ranked.component.html',
  styleUrls: ['./ranked.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    PodiumComponent,
    LastGamesComponent,
    RankingComponent,
  ],
})
export class RankedComponent {
  podiumData: PodiumData[] = [
    { position: '🥇', name: 'Iván', height: 150, color: '#FFD700' }, // Gold
    { position: '🥈', name: 'Santi', height: 120, color: '#C0C0C0' }, // Silver
    { position: '🥉', name: 'Zuru', height: 90, color: '#CD7F32' }, // Bronze
  ];

  constructor() {}
}

export interface PodiumData {
  position: string;
  name: string;
  height: number;
  color: string;
}
