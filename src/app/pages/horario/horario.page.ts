import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product';
import {Subscription} from 'rxjs';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})

// essa page deve salvar a mesa do user no banco com o horario
// salvar o reserva
export class HorarioPage implements OnInit {
  private productId: string = null;
  public product: Product = {};
  private loading: any;
  private productSubscription: Subscription;

  constructor(
      private productService: ProductService,
      private activatedRoute: ActivatedRoute,
      private navCtrl: NavController,
      private authService: AuthService,
      private toastCtrl: ToastController
  ) {
    this.productId = this.activatedRoute.snapshot.params.id;
    if (this.productId) {this.loadProduct(); }
  }

  ngOnInit() {
  }

  loadProduct() {
    this.productSubscription = this.productService.getProduct(this.productId).subscribe(data => {
      this.product = data;
    });
  }

}
