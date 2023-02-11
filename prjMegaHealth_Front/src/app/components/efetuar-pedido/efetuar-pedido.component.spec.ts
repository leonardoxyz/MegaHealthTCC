import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetuarPedidoComponent } from './efetuar-pedido.component';

describe('EfetuarPedidoComponent', () => {
  let component: EfetuarPedidoComponent;
  let fixture: ComponentFixture<EfetuarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfetuarPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfetuarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
