import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { JugadoresComponent } from 'src/app/pages/jugadores/jugadores.component';
import { PartidasComponent } from 'src/app/pages/partidas/partidas.component';
import { RankedComponent } from 'src/app/pages/ranked/ranked.component';
import { ReglasComponent } from 'src/app/pages/reglas/reglas.component';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    MatTabsModule,
    JugadoresComponent,
    PartidasComponent,
    RankedComponent,
    ReglasComponent,
  ],
})
export class TabsComponent implements OnInit {
  ngOnInit() {}
}
