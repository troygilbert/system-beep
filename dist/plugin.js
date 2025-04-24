var capacitorSystemBeep = (function (exports, core) {
    'use strict';

    const SystemBeep = core.registerPlugin('SystemBeep', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.SystemBeepWeb()),
    });

    class SystemBeepWeb extends core.WebPlugin {
        async playBeep() {
            console.log('beep!');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SystemBeepWeb: SystemBeepWeb
    });

    exports.SystemBeep = SystemBeep;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
