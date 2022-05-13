import { TestBed } from '@angular/core/testing';

import { InvoiceSharingService } from './invoice-sharing.service';

describe('InvoiceSharingService', () => {
  let service: InvoiceSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
