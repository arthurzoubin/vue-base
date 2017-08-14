/*
 * Github Constants
 * Each action has a corresponding type, which the Mutation knows and picks up on.
 * To avoid weird typos between the Mutation and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * Mutation accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_NAME = 'vue-base/Github/CHANGE_NAME'
export const LOAD_REPOS = 'vue-base/Github/LOAD_REPOS'
export const LOAD_REPOS_SUCCESS = 'vue-base/Github/LOAD_REPOS_SUCCESS'
export const LOAD_REPOS_ERROR = 'vue-base/Github/LOAD_REPOS_ERROR'
