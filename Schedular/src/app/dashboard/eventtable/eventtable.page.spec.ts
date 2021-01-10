import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventtablePage } from './eventtable.page';

describe('EventtablePage', () => {
  let component: EventtablePage;
  let fixture: ComponentFixture<EventtablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventtablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventtablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
