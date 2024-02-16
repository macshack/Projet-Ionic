export class Manga {
  id?: string;
  keyart: string;
  mangaka: string;
  releaseDate: string;
  synopsis: string;
  title: string;

  constructor() {
    this.keyart = '';
    this.mangaka = '';
    this.releaseDate = '';
    this.synopsis = '';
    this.title = '';
  }
}
