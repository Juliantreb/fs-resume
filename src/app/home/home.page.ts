import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ionViewDidEnter() {
    this.Date = "12/27/2000";
  }
  pressMe() {
    alert("Getting This Part Done");
  }
  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
    imgToast: HTMLElement;
    name: string;
    brithday: any;
    constructor(private toastController: ToastController) {
      this.brithday = new Date().toISOString();
    }
    ngOnInit() {
      this.imgToast = document.getElementById('imgSection');
      this.imgToast.addEventListener('mousemove', ev => {
        this.showToastOnImage();
      });
    }
    async showToastOnImage() {
      const toast = await this.toastController.create({
        message: 'On MouseOver event on an image',
        duration: 2000,
        position: 'middle',
      });
      toast.present();
    }
    async showToast(position: string) {
      const toast = await this.toastController.create({
        message: 'DING. Your toast is ready!',
        duration: 1500,
        position: position,
      });
      toast.present(toast);
    }
    async save() {
        const toast = await this.toastController.create({
          message: 'User profile was saved successfully',
          position: 'bottom',
          duration: 3000
        });
      }
    }
