import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  wishlistCount = 0;
  cartlistCount = 0;
  isLoggedIn = false;

  constructor(private gService: GeneralService) { }

  ngOnInit() {
    this.gService.getWishListCountUpdatedListener().subscribe(val => {
      this.wishlistCount = val;
    });

    this.gService.getCartUpdatedListener().subscribe(val => {
      this.cartlistCount = val;
    });

    this.gService.isLoggedInListener().subscribe(val => {
      this.isLoggedIn = val;
    })

  }

}
