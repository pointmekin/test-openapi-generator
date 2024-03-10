import { Injectable } from '@nestjs/common';
import { DefaultService } from '../generated/api/default.service';
import { AxiosResponse } from 'axios';
import { Post } from 'generated';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private defaultService: DefaultService) {}
  async getHello(): Promise<string> {
    try {
      const response: AxiosResponse<Array<Post>> = await lastValueFrom(
        this.defaultService.postsGet(1, 'title'),
      );
      console.log(response.data);
      return 'Hello World!';
    } catch (error) {
      console.error(error);
    }
  }
}
