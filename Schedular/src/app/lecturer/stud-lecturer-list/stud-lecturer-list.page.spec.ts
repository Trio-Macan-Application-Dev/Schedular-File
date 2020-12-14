import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudLecturerListPage } from './stud-lecturer-list.page';

describe('StudLecturerListPage', () => {
  let component: StudLecturerListPage;
  let fixture: ComponentFixture<StudLecturerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudLecturerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudLecturerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
