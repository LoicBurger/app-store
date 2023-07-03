import { UserStore } from "../store";
import { User } from "../user";

export class DemoUserStore extends UserStore {
  public async getUsers(queryUser: User): Promise<User[]> {
    return [
      {
        userId: queryUser.userId,
        appSlug: queryUser.appSlug,
      },
    ];
  }

  public async add(user: User): Promise<void> {}
}
