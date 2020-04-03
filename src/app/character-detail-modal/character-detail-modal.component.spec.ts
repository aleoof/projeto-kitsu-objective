import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailModalComponent } from './character-detail-modal.component';

describe('CharacterDetailModalComponent', () => {
  let component: CharacterDetailModalComponent;
  let fixture: ComponentFixture<CharacterDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
