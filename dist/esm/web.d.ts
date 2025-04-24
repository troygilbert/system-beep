import { WebPlugin } from '@capacitor/core';
import type { SystemBeepPlugin } from './definitions';
export declare class SystemBeepWeb extends WebPlugin implements SystemBeepPlugin {
    playBeep(): Promise<void>;
}
