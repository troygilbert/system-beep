import { registerPlugin } from '@capacitor/core';

import type { SystemBeepPlugin } from './definitions';

const SystemBeep = registerPlugin<SystemBeepPlugin>('SystemBeep', {
  web: () => import('./web').then((m) => new m.SystemBeepWeb()),
});

export * from './definitions';
export { SystemBeep };
