import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangasListPage } from './mangas-list.page';

describe('MangasListPage', () => {
  let component: MangasListPage;
  let fixture: ComponentFixture<MangasListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MangasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
