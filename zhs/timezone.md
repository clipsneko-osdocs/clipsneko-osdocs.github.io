# 时区设置
您可以设置系统所处的时区。BIOS 时钟将被设置为 UTC 时间并使用 NTP 同步时间，选择时区以使用本地时 ->
![](../img/timezone.webp)

## Windows 时间问题
如果使用双系统，您也许现在还未注意到，不过当系统安装完毕后，您重启选择 Windows 后，就会看到 Windows 的时间被设为了 UTC 时间。

这是因为 Windows 默认将本地时作为时间标准，并且会向 BIOS 时钟同步本地时。在默认情况下，BIOS 时钟的时间会是本地时，所以在每次开机、未同步时，Windows 就会读取 BIOS 时钟，并且将时间直接作为本地时显示，而此时 BIOS 时钟已被更改为 UTC 时间，所以 Windows 就会直接显示 UTC 时间。

如果这时您选择在 Windows 中同步时间，BIOS 时钟仍会被修改为本地时，回到 ClipsNeko Linux 之后，您会发现此时的时间为 UTC + 两倍的本地时偏移。

因此，最好的方法是**让 Windows 也使用 UTC 作为操作 BIOS 时钟的基准**。

**SUPER + R** 运行 **cmd**, 然后输入：
```
reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f
```