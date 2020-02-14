import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNavBarComponent } from './contact-nav-bar.component';

describe('ContactNavBarComponent', () => {
  let component: ContactNavBarComponent;
  let fixture: ComponentFixture<ContactNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
