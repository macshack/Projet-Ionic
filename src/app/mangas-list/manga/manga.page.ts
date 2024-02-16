import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { MangaService } from 'src/app/manga.service';
import { Manga } from 'src/app/models/manga.model';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.page.html',
  styleUrls: ['./manga.page.scss'],
})
export class MangaPage implements OnInit {
  modif: boolean = false;
  manga!: Manga;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private mangaService: MangaService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mangaService.get(id).subscribe((value: any) => {
      this.manga = value;
    });
  }

  async setModif() {
    if (!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Etes vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel',
          },
          {
            text: 'Configurer',
            handler: () => {
              this.modif = !this.modif;
            },
          },
        ],
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000,
    });
    (await toast).present();
  }

  onModif() {
    this.mangaService.update(this.manga).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.mangaService.delete(id);
    this.router.navigate(['/mangas']);
  }
}
