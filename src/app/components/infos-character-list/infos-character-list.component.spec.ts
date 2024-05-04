import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCharacterListComponent } from './infos-character-list.component';

describe('InfosCharacterListComponent', () => {
  let component: InfosCharacterListComponent;
  let fixture: ComponentFixture<InfosCharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfosCharacterListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfosCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
