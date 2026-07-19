---
layout: doc
---
# Time zone settings
You can set the time zone for the system. The BIOS clock is set to UTC and synchronized with NTP; select a time zone to use local time ->
![](../img/timezone.webp)

## The Windows time issue
If you use a dual-boot system, you may not notice this at first. After installation, rebooting into Windows will show that Windows' clock has been set to UTC.

This happens because Windows uses local time as its default standard and synchronizes the BIOS clock with local time. Normally, the BIOS clock contains local time, so Windows reads it at boot and displays it directly as local time. After ClipsNeko Linux changes the BIOS clock to UTC, Windows displays that UTC value as local time.

If you synchronize the time in Windows, the BIOS clock is changed back to local time. When you return to ClipsNeko Linux, the displayed time will be UTC plus twice the local time-zone offset.

The best solution is to **make Windows use UTC as the basis for operating the BIOS clock as well**.

Use **SUPER + R** to run **cmd**, then enter:
```
reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f
```