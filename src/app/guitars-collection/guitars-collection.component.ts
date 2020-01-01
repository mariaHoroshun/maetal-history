import { Component, OnInit } from '@angular/core';
import { GuitarCard } from './guitar-card';
import { GuitarService } from '../guitar-service.service';

@Component({
  selector: 'app-guitars-collection',
  templateUrl: './guitars-collection.component.html',
  styleUrls: ['./guitars-collection.component.css']
})
export class GuitarsCollectionComponent implements OnInit {
  protected guitarCards: GuitarCard[];

  constructor(private guitarService: GuitarService) { }

  ngOnInit() {
    this.guitarService.getGuitarCards().subscribe(data => {
      this.guitarCards = data;

      setTimeout(() => {
        const elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {});
      }, 3000);

    });
  }

}
