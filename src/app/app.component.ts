import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import * as json1 from '../data/dataset1.json';
import * as json2 from '../data/dataset2.json';
import * as json3 from '../data/dataset3.json';
import * as json4 from '../data/dataset4.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'srtestfront';
  public config: SwiperConfigInterface = {};
  public months = json1.months;
  public rows = json1.rows;
  public columns = json1.columns;
  styleGrid(offset: number) {
    let fractionCount = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.columns.length + offset; i++) {
      fractionCount = fractionCount + '1fr ';
    }
    return {
     'grid-template-columns': fractionCount,
    };
  }
  styleHeader(offset: number) {
    return {
     'grid-column': (1 + offset) + ' /' + (this.columns.length + 1 + offset)
    };
  }
  styleCell(color: string) {
    if (color === 'Green') {
      return {
        'background-image': 'url(/assets/checked.svg)',

       };
    } else if (color === 'Red') {
      return {
        'background-image': 'url(/assets/cancel.svg)',
       };
    }

  }
  getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  randomizeData() {
    const dataset = this.getRandomInt(1, 4);
    switch (dataset) {
      case 1:
        this.months = json1.months;
        this.rows = json1.rows;
        this.columns = json1.columns;
        break;
      case 2:
        this.months = json2.months;
        this.rows = json2.rows;
        this.columns = json2.columns;
        break;
      case 3:
        this.months = json3.months;
        this.rows = json3.rows;
        this.columns = json3.columns;
        break;
      case 4:
        this.months = json4.months;
        this.rows = json4.rows;
        this.columns = json4.columns;
        break;
    }

  }
}
