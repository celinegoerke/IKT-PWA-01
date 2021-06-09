import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDbPicsComponent } from './show-db-pics.component';

describe('ShowDbPicsComponent', () => {
  let component: ShowDbPicsComponent;
  let fixture: ComponentFixture<ShowDbPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDbPicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDbPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
