import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'userType';
export const Role = (userType: string) => SetMetadata(ROLES_KEY, userType);
