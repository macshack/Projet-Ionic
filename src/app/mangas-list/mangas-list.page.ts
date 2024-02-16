import { Component, OnInit } from '@angular/core';
import { Manga } from '../models/manga.model';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-mangas-list',
  templateUrl: './mangas-list.page.html',
  styleUrls: ['./mangas-list.page.scss'],
})
export class MangasListPage implements OnInit {
  mangas!: Array<Manga>;

  constructor(private manga: MangaService) {}

  ngOnInit() {
    this.manga.getAll().subscribe((data: any) => {
      this.mangas = data;
    });
  }
}
