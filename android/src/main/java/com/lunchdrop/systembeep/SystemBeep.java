package com.lunchdrop.systembeep;

import android.content.Context;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;

public class SystemBeep {

    public static void playNotificationSound(Context context) throws Exception {
        Uri notification = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        Ringtone ringtone = RingtoneManager.getRingtone(context, notification);
        if (ringtone != null) {
            ringtone.play();
        } else {
            throw new Exception("Ringtone not available");
        }
    }
}
