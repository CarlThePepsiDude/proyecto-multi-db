import { AuthService } from './auth.service';
import { CheckCredentialsDto } from './dto/check-credentials.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    check(dto: CheckCredentialsDto): Promise<{
        valid: boolean;
        user?: undefined;
    } | {
        valid: boolean;
        user: any;
    }>;
}
