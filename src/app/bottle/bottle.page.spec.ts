import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottlePage } from './bottle.page';

describe('BottlePage', () => {
  let component: BottlePage;
  let fixture: ComponentFixture<BottlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
