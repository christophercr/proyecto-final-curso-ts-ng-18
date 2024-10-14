import { TestBed } from '@angular/core/testing';

import { SolicitudHttpService } from './solicitud-http.service';

xdescribe('SolicitudHttpService', () => {
  let service: SolicitudHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
