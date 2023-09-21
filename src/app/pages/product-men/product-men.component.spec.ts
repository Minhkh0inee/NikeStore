import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMenComponent } from './product-men.component';

describe('ProductMenComponent', () => {
  let component: ProductMenComponent;
  let fixture: ComponentFixture<ProductMenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMenComponent]
    });
    fixture = TestBed.createComponent(ProductMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
