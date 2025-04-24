package com.lunchdrop.systembeep;

import android.content.Context;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SystemBeep")
public class SystemBeepPlugin extends Plugin {

    @PluginMethod
    public void playBeep(PluginCall call) {
        try {
            Context context = getContext();
            SystemBeep.playNotificationSound(context);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to play beep: " + e.getMessage());
        }
    }
}
