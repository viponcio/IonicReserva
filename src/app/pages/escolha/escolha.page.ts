import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product';
import {Subscription} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {LoadingController, ToastController} from '@ionic/angular';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
  private loading: any;
  public products = new Array<Product>();
  private productSubscription: Subscription;

  constructor(
      private authService: AuthService,
      private loadingCtrl: LoadingController,
      private productService: ProductService,
      private toastCtrl: ToastController
  ) {
    this.productSubscription = this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Aguarde...'});
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({message, duration: 2000});
    toast.present();
  }
}
