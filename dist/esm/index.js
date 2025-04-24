import { registerPlugin } from '@capacitor/core';
const SystemBeep = registerPlugin('SystemBeep', {
    web: () => import('./web').then((m) => new m.SystemBeepWeb()),
});
export * from './definitions';
export { SystemBeep };
//# sourceMappingURL=index.js.map