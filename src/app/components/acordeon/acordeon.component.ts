import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss'],
  imports: [MatExpansionModule, MatIconModule, CommonModule],
  standalone: true,
})
export class AcordeonComponent {
  @Input() cartas: Item[] = [];
  @Input() personajes: Item[] = [];
  @Input() generales: Item[] = [];


  editItem(type: string, item: any): void {
    console.log(`Editing ${type}:`, item);
  }
}

export interface Item {
  nombre: string;
  descripcion: string;
}

export interface AcordeonData {
  cartas: Item[];
  personajes: Item[];
}
