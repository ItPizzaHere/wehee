package com.wehee.domain.chat.utils;

import java.util.Date;
import java.util.concurrent.TimeUnit;

public class TimeUtil {

    public static String convert(Date now, Date timestamp) {
        long diff = Math.abs(now.getTime() - timestamp.getTime());

        long min = TimeUnit.MINUTES.convert(diff, TimeUnit.MILLISECONDS);
        if (min < 1) {
            return "방금";
        }

        long hour = TimeUnit.HOURS.convert(diff, TimeUnit.MILLISECONDS);
        if (hour < 1) {
            return String.format("%d분 전", (int) min);
        }

        long day = TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
        if (day < 1) {
            return String.format("%d시간 전", (int) hour);
        }

        return String.format("%d일 전", (int) day);
    }
}
