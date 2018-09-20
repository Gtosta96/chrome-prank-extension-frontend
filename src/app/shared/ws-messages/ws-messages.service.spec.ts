import { TestBed } from '@angular/core/testing';

import { WsMessagesService } from './ws-messages.service';

describe('WsMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsMessagesService = TestBed.get(WsMessagesService);
    expect(service).toBeTruthy();
  });
});
