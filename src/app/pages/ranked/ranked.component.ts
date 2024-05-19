import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

interface PodiumData {
  position: string;
  name: string;
  height: number;
  color: string;
}

@Component({
  selector: 'app-ranked',
  templateUrl: './ranked.component.html',
  styleUrls: ['./ranked.component.scss'],
  standalone: true,
})
export class RankedComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {
    this.createPodium();
  }

  ngAfterViewInit() {
    this.createPodium();
  }

  createPodium(): void {
    const data: PodiumData[] = [
      { position: '🥇', name: 'Iván', height: 150, color: '#FFD700' }, // Gold
      { position: '🥈', name: 'Santi', height: 120, color: '#C0C0C0' }, // Silver
      { position: '🥉', name: 'Zuru', height: 90, color: '#CD7F32' } // Bronze
    ];

    const container = d3.select('#podium');

    const columns = container
      .selectAll('.position')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'position')
      .style('width', '100px')
      .style('margin', '0 10px')
      .style('text-align', 'center')
      .style('background-color', d => d.color)
      .style('position', 'relative') 
      .style('transform', (d, i) => {
        if (d.position === '🥇') {
          return 'translateX(125%) translateY(0%)';
        } else if (d.position === '🥈') {
          return 'translateX(-95px)';
        } else {
          return 'translateX(-15px)';
        }
      });

    columns
      .append('div')
      .text(d => d.name)
      .style('position', 'absolute')
      .style('top', (d, i) => d.position === '🥇' ? '-40px' : '-40px') 
      .style('width', '100%')
      .style('text-align', 'center')
      .style('font-size', '24px') 
      .style('font-weight', 'bold')
      .style('color', 'white')
      .style('text-shadow', '2px 2px 4px rgba(0,0,0,0.5)');

    columns
      .append('div')
      .text(d => d.position)
      .style('position', 'absolute')
      .style('bottom', '10px') 
      .style('width', '100%')
      .style('text-align', 'center')
      .style('font-size', '32px')
      .style('color', 'white')
      .style('text-shadow', '2px 2px 4px rgba(0,0,0,0.5)');

    columns
      .style('height', '0px')
      .transition()
      .duration(1000)
      .style('height', d => `${d.height}px`);
  }
}
