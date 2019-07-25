import { TestBed } from '@angular/core/testing';

import { RedditListService } from './reddit-list.service';

describe('RedditListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditListService = TestBed.get(RedditListService);
    expect(service).toBeTruthy();
  });
});
