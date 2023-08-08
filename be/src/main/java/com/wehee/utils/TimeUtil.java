package com.wehee.utils;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.TimeZone;

public class TimeUtil {

    public static LocalDateTime calExpiry(LocalDateTime time, long tokenExpiry) {
        long expiry = Timestamp.valueOf(time).getTime() + tokenExpiry;
        return LocalDateTime.ofInstant(
            Instant.ofEpochMilli(expiry), TimeZone.getDefault().toZoneId());
    }
}
