/**
 * Minions Ideator SDK
 *
 * Agent to help brainstorm ideas and plan features
 *
 * @module @minions-ideator/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Ideator.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
