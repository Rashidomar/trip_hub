
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string) {
    return await this.users.find((user) => user.username === username);
  }

  async findAll(){
    return this.users
  }
}
