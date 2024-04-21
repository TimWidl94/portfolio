import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektsComponent } from './projekts.component';

describe('ProjektsComponent', () => {
  let component: ProjektsComponent;
  let fixture: ComponentFixture<ProjektsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjektsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
