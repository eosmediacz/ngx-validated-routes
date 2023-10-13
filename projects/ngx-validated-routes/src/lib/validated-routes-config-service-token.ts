import { InjectionToken } from '@angular/core';
import { ValidatedRoutesConfig } from './router-data-types';

/**
 * Defines Injection token of `ValidatedRoutesConfig` for configuring module
 */
export const validatedRoutesConfigService = new InjectionToken<ValidatedRoutesConfig>('ValidatedRoutesConfig');
