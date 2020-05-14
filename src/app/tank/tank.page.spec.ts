import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TankPage } from './tank.page';

describe('TankPage', () => {
  let component: TankPage;
  let fixture: ComponentFixture<TankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
