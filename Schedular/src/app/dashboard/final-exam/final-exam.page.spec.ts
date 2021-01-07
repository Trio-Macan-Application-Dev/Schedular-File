import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalExamPage } from './final-exam.page';

describe('FinalExamPage', () => {
  let component: FinalExamPage;
  let fixture: ComponentFixture<FinalExamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalExamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
