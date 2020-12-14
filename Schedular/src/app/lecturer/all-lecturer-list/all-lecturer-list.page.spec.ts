import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllLecturerListPage } from './all-lecturer-list.page';

describe('AllLecturerListPage', () => {
  let component: AllLecturerListPage;
  let fixture: ComponentFixture<AllLecturerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLecturerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllLecturerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
