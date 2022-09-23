import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getHello() {
    await this.cacheManager.set('cached_item', { foo: 'bar' });
    const cachedItem = await this.cacheManager.get('cached_item');
    console.log(cachedItem);
    await this.cacheManager.del('cached_item');
    await this.cacheManager.reset();
    return 'Hello World!';
  }
}
