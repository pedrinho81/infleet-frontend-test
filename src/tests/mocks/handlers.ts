import { db } from './db';

export const handlers = [
  ...db.character.toHandlers('rest'),
]