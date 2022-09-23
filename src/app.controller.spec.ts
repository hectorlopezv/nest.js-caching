import { CACHE_MANAGER } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
  del: jest.fn(),
  reset: jest.fn(),
};
describe('App Service', () => {
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        AppService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    appService = moduleRef.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  it('should set a value in the cache', async () => {
    await appService.getHello();
    expect(mockCacheManager.set).toHaveBeenCalled();
  });
});
