import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMeetComponent } from './google-meet.component';

describe('GoogleMeetComponent', () => {
  let component: GoogleMeetComponent;
  let fixture: ComponentFixture<GoogleMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
