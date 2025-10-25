import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    checkCredentials(username: string, password: string): Promise<User | null>;
}
