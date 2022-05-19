import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userWhoRequested = this.usersRepository.findById(user_id);

    if (!userWhoRequested.admin) {
      throw new Error("Access denied for the user.");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
