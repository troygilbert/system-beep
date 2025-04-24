import { WebPlugin } from '@capacitor/core';

import type { SystemBeepPlugin } from './definitions';

export class SystemBeepWeb extends WebPlugin implements SystemBeepPlugin {
  async playBeep(): Promise<void> {
    console.log('beep!');
  }
}
