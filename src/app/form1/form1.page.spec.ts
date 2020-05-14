import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Form1Page } from './form1.page';

describe('Form1Page', () => {
  let component: Form1Page;
  let fixture: ComponentFixture<Form1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Form1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
