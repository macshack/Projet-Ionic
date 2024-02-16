import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangaNewPage } from './manga-new.page';

describe('MangaNewPage', () => {
  let component: MangaNewPage;
  let fixture: ComponentFixture<MangaNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MangaNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
