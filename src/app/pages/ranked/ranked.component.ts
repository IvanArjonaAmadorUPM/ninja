import { Component } from '@angular/core';
import { PodiumComponent } from '../../components/podium/podium.component';

@Component({
  selector: 'app-ranked',
  templateUrl: './ranked.component.html',
  styleUrls: ['./ranked.component.scss'],
  standalone: true,
  imports: [PodiumComponent],
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
