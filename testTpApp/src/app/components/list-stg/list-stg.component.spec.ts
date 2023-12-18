import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStgComponent } from './list-stg.component';

describe('ListStgComponent', () => {
  let component: ListStgComponent;
  let fixture: ComponentFixture<ListStgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
