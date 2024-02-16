import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MangaService } from 'src/app/manga.service';
import { Manga } from 'src/app/models/manga.model';

@Component({
  selector: 'app-manga-new',
  templateUrl: './manga-new.page.html',
  styleUrls: ['./manga-new.page.scss'],
})
export class MangaNewPage implements OnInit {
  public manga!: Manga;

  constructor(
    private mangaService: MangaService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.manga = new Manga();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Manga enregistré',
      duration: 2000,
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/mangas']);
      }, 2000);
    });
  }

  add() {
    this.mangaService.saveNewManga(this.manga).subscribe(() => {
      this.manga = new Manga();
      this.presentToast();
    });
  }
}
