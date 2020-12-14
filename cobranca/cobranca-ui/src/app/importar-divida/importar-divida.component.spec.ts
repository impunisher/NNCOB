import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarDividaComponent } from './importar-divida.component';

describe('ImportarDividaComponent', () => {
  let component: ImportarDividaComponent;
  let fixture: ComponentFixture<ImportarDividaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportarDividaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarDividaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
