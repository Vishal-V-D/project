import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../../auth/roles.decorator';  // Adjust path if necessary
import { Role } from '../../user/user.entity';  // Adjust path if necessary

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler());
    if (!requiredRoles) {
      return true;  // If no roles are required, allow access
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}
