import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import {ToCollection} from '../pipes/to-collection';

export const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 35,
  slidesPerView: 2.4,
  initialSlide: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false,
      renderBullet:  (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
  },
  breakpoints: {

    1300: {
      spaceBetween: 10,
      slidesPerView: 1,
    }
  }
};


@NgModule({
  declarations: [
    AppComponent,
    ToCollection
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
