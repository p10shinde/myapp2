import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent implements OnInit {
  emptyCart: boolean;
  cartProducts: Product[];
  invoice: Invoice = {price: 0, totalDelCharges: 0, amountPayable: 0};
  day: number;
  days: string;
  sum = 0;
  totalDeliveryCharges = 0;
  deliveryCharges;
  daysList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  constructor(private gService: GeneralService) { }

  ngOnInit() {
    this.emptyCart = false;
    this.gService.updateWishlistCount();
    this.gService.updateCartCount();

    this.cartProducts = this.gService.getCartProducts();
    this.getDeliveryDate();

    this.updateInvoice();
  }

  getDeliveryDate() {
    this.cartProducts.forEach( dt => {
      const delDate = this.gService.getDeliveryDate();
      dt.delivery = {day: 0, days: ''};
      dt.delivery.day = delDate.day;
      dt.delivery.days = delDate.days;
      dt.deliveryCharges = delDate.delCharges;
    });
  }

  totalPrice() {
    this.sum = 0;
    this.cartProducts.filter( dt => {
      this.sum += dt.price;
    });
    return this.sum;
  }

  getType(obj) {
    return typeof obj;
  }

  updateInvoice() {
    this.invoice.price = this.totalPrice();
    this.invoice.totalDelCharges = this.getTotalDeliveryCharges();
    this.invoice.amountPayable = this.sum + (typeof this.invoice.totalDelCharges === 'number' ? this.invoice.totalDelCharges :
                                0);
  }

  getTotalDeliveryCharges() {
    let totalDelCharges = 0;
    let totalDelChargesString: string;
    this.cartProducts.filter( dt => {
      if (typeof dt.deliveryCharges === 'number' ) {
        totalDelCharges += dt.deliveryCharges;
      } else if (typeof dt.deliveryCharges === 'string') {
          totalDelChargesString = dt.deliveryCharges;
      }
    });
    if (totalDelCharges > 0) {
      return totalDelCharges;
    } else {
      return totalDelChargesString;
    }
  }

  removeFromCart(id) {
    this.gService.removeFromCart(id);
    this.cartProducts = this.gService.getCartProducts();
    if (this.cartProducts.length === 0) {
      this.emptyCart = true;
    } else {
      this.updateInvoice();
    }

    // this.cartProducts = this.cartProducts.filter( dt => {
    //   return (dt.id !== id);
    // });
    // this.updateInvoice();

  }

  amountPayable() {
    return this.sum + this.totalDeliveryCharges;
  }

}
