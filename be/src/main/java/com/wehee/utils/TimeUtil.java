package com.wehee.utils;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.TimeZone;

public class TimeUtil {

    public static long calExpiry(Date time, long tokenExpiry) {
        return time.getTime() + tokenExpiry;
    }
}
