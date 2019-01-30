import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { ModeOfDeliveryComponent } from './mode-of-delivery.component';
import { SpinnerComponent } from "../../../common/spinner/spinner.component";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { LinegraphComponent } from "../../../common/linegraph/linegraph.component";
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ModeOfDeliveryComponent', () => {
  let component: ModeOfDeliveryComponent;
  let fixture: ComponentFixture<ModeOfDeliveryComponent>;
  let inputEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModeOfDeliveryComponent, SpinnerComponent, LinegraphComponent],
      imports: [HttpClientTestingModule],
      providers: [CookieService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeOfDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.getModeOfDeliveryData();
    expect(component.getModeOfDeliveryData).toBeDefined();
  });


});
