---
layout: doc
---

# Network settings
We are a rolling-release distribution and install over the network, so you can obtain the latest packages and security updates directly.

Therefore, the installation requires a network connection.

If your computer has an Ethernet cable plugged in, you may see a page like this ->
![](../img/network.webp)

This means that you are connected to the network and can continue directly.

If it shows **Disconnected**, you need to configure the network. Wired networks usually work, so this article focuses only on wireless networks. For unusual problems, contact your network provider for help.

## Use Network Manager TUI
On the **Disconnected** page, press **Enter** to open Network Manager TUI automatically, which runs the `nmtui` command.
![](../img/nmtui.webp)
Select **Activate a connection**. Under **Wi-Fi**, you can see the SSIDs of wireless networks in range. Select your network, press **Enter**, and enter the password.

Press **Tab** to move the cursor to **Back**, then choose **Quit** to exit `nmtui`; the network status will refresh automatically. Once connected, you can continue.

If no SSIDs appear even though you know wireless networks are nearby, the RFKill subsystem may have disabled the wireless adapter in software. Try switching to workspace 2 with **SUPER + 2**, opening another kitty with **SUPER + T**, and running ->
```zsh
sudo rfkill unblock all
```
to remove the wireless restriction.

Press **SUPER + 1** to switch back to workspace 1, exit `nmtui`, and try again. If it still does not work, the hardware is very likely newer than the support available in the Linux mainline driver tree. You can look for a community driver or replace the wireless adapter, but both options require some technical expertise. The changing nature of hardware and the scope of this article prevent us from explaining them in detail.