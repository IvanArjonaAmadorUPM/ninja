import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-last-games',
  templateUrl: './last-games.component.html',
  styleUrls: ['./last-games.component.scss'],
  imports: [MatTableModule, CommonModule, MatIconModule ],
  standalone: true,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LastGamesComponent {
 
  constructor() {}

  dataSource = [
    { ganadores: 'Iván, Santi', rol: 'ninja', fecha: '12/05/2024' },
    { ganadores: 'Zuru, Edudi', rol: 'samurai', fecha: '10/05/2024' },
    { ganadores: 'Sete', rol: 'ronin', fecha: '08/05/2024' }
  ];

  displayedColumns: string[] = ['ganadores', 'rol', 'fecha'];

  getRoleColor(role: string): string {
    switch (role.toLowerCase()) {
      case 'ninja':
        return 'ninja-color';
      case 'samurai':
        return 'samurai-color';
      case 'ronin':
        return 'ronin-color';
      default:
        return '';
    }
  }
}
