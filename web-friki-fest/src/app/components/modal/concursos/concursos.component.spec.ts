import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursosComponent } from './concursos.component';

describe('ConcursosComponent', () => {
  let component: ConcursosComponent;
  let fixture: ComponentFixture<ConcursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcursosComponent]
    });
    fixture = TestBed.createComponent(ConcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
