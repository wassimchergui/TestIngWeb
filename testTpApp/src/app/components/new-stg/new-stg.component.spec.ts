import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStgComponent } from './new-stg.component';

describe('NewStgComponent', () => {
  let component: NewStgComponent;
  let fixture: ComponentFixture<NewStgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewStgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewStgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
