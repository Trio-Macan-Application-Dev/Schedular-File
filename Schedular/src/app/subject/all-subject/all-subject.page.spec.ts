import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllSubjectPage } from './all-subject.page';

describe('AllSubjectPage', () => {
  let component: AllSubjectPage;
  let fixture: ComponentFixture<AllSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
