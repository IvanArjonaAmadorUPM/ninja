import { AfterViewInit, Component, Input } from '@angular/core';
import * as d3 from 'd3';
import { PodiumData } from 'src/app/pages/ranked/ranked.component';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.scss'],
  standalone: true,
})
export class PodiumComponent implements AfterViewInit {
  @Input() podiumData!: PodiumData[];

  constructor() {}

  ngAfterViewInit() {
    this.createPodium();
  }

  createPodium(): void {
    const container = d3.select('#podium');

    const columns = container
      .selectAll('.position')
      .data(this.podiumData)
      .enter()
      .append('div')
      .attr('class', 'position')
      .style('width', '100px')
      .style('margin', '0 10px')
      .style('text-align', 'center')
      .style('background-color', (d) => d.color)
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
      .text((d) => d.name)
      .style('position', 'absolute')
      .style('top', (d, i) => (d.position === '🥇' ? '-40px' : '-40px'))
      .style('width', '100%')
      .style('text-align', 'center')
      .style('font-size', '24px')
      .style('font-weight', 'bold')
      .style('color', 'white')
      .style('text-shadow', '2px 2px 4px rgba(0,0,0,0.5)');

    columns
      .append('div')
      .text((d) => d.position)
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
      .style('height', (d) => `${d.height}px`);
  }
}
