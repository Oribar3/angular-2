import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPrivateMesseageComponent } from './model-private-messeage.component';

describe('ModelPrivateMesseageComponent', () => {
  let component: ModelPrivateMesseageComponent;
  let fixture: ComponentFixture<ModelPrivateMesseageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPrivateMesseageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPrivateMesseageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
