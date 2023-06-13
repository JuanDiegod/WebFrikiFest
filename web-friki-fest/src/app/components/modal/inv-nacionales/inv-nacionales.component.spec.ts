import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvNacionalesComponent } from './inv-nacionales.component';

describe('InvNacionalesComponent', () => {
  let component: InvNacionalesComponent;
  let fixture: ComponentFixture<InvNacionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvNacionalesComponent]
    });
    fixture = TestBed.createComponent(InvNacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
