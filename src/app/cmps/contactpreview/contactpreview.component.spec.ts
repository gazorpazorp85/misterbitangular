import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpreviewComponent } from './contactpreview.component';

describe('ContactpreviewComponent', () => {
  let component: ContactpreviewComponent;
  let fixture: ComponentFixture<ContactpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
