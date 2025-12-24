import { User } from '../model/user';

export interface UserInfo extends User {
  /**
   * # 令牌
   */
  token: string;
}
