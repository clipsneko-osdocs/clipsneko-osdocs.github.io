---
layout: doc
---

# Install ClipsNeko Linux

This article explains how to install ClipsNeko Linux using the ClipsNeko Linux Live CD and TUI installer.

::: danger Warning

The target partitions selected during installation will be formatted, causing existing data to be lost. Check for important data in advance, and verify the disk, ESP partition, and installation targets item by item on the final confirmation page. ReSpring ClipsNeko Co., Ltd. cannot be held responsible for resulting data loss.

:::

## Before installation

### Check the hardware requirements

- **An x86_64 PC (a CPU from 2008 or later is recommended) that supports UEFI boot.**
- **At least 2 GiB of RAM** (Hyprland on the Live CD requires 2 GiB of RAM).
- An installation target partition with **more than 20 GiB of available space (not including 20 GiB)** (or use Btrfs RAID0, with the available space calculated as described below).
- **A working network connection.**
- A USB flash drive for creating the boot disk (more than 2 GiB of available space).

The installer supports only UEFI + GPT. Traditional BIOS + MBR installation is not supported.
You can disable Secure Boot if it prevents third-party systems from booting, or configure the appropriate signing trust for the Live image.

#### Btrfs RAID available-space calculation
RAID 0: the smallest selected partition size * 2

RAID 1: the smallest selected partition size
| Example    |   Type  | Size  |
| :--------: | :----: | :----: |
| 8 + 10 GiB | RAID 0 | 16 GiB |
| 8 + 10 GiB | RAID 1 | 8 GiB  |
| 8 + 12 GiB | RAID 1 | 8 GiB  |

### Create the installation media and boot the Live CD

1. Download the ClipsNeko Linux Live CD ISO ->
https://repo.clipsneko.cc/iso/latest/clipsneko-x86_64.iso
2. Use a tool to write it to a USB drive or burn it to an optical disc (not recommended)

    We recommend the writing tools [balenaEtcher](https://mirrors.bfsu.edu.cn/github-release/balena-io/etcher/LatestRelease/)
    or [Ventoy](https://www.ventoy.net/en/download.html)
3. Restart and follow your motherboard manufacturer's instructions to enable USB boot or select USB boot (if this fails, [disable Secure Boot first](https://www.google.com/search?q=how+to+disable+secure+boot))
4. After entering the tty environment, the `installer` user will be logged in automatically. Wait a moment for uwsm to start ->
![alt text](../img/image.webp)
5. Press Enter to enter the Hyprland desktop.

::: tip Tip
If the system keeps rebooting during boot and the Systemd log often stops around the network-related section,

shut down, unplug the power cable, wait at least ten seconds, then plug it back in and start the computer.
:::

