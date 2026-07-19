---
layout: doc
---

# 安装 ClipsNeko Linux

本文介绍如何使用 ClipsNeko Linux Live CD 和 TUI 安装程序完成 ClipsNeko Linux 的安装。

::: danger 警告

安装过程中选中的目标分区会被格式化，造成已有数据丢失。请提前检查是否有重要数据，并在最终确认页面逐项核对磁盘、ESP 分区和安装目标。由此造成的数据丢失，ReSpring ClipsNeko Co., Ltd. 无法对此负责。

:::

## 安装前准备

### 确认硬件条件

- **一台 x86_64 架构（建议为2008年以后的CPU）、支持 UEFI 启动的 PC。**
- **至少 2GiB 的内存**（Live CD 上的 Hyprland 需要 2GiB 的内存）。
- 一个拥有**大于 20 GiB 可用空间（不包括 20 GiB）的安装目标分区**（或使用 Btrfs RAID0，可用空间计算如下述）。
- **一个可用的网络连接。**
- 一个用于制作启动盘的 U 盘（可用空间需大于 2GiB）。

安装程序只支持 UEFI + GPT，不支持传统 BIOS + MBR 安装方式。
您可以关闭会阻止启动第三方系统的安全启动，或者为 Live 镜像配置相应的签名信任。

#### Btrfs RAID 可用空间计算方式
RAID 0 : 选定的最小分区大小 * 2

RAID 1 : 选定的最小分区大小
| 示例       |   类型  |  大小  |
| :--------: | :----: | :----: |
| 8 + 10 GiB | RAID 0 | 16 GiB |
| 8 + 10 GiB | RAID 1 | 8 GiB  |
| 8 + 12 GiB | RAID 1 | 8 GiB  |

### 制作安装介质并启动 Live CD

1. 下载 ClipsNeko Linux Live CD iso ->
https://repo.clipsneko.cc/iso/latest/clipsneko-x86_64.iso
2. 使用工具将其写入到USB驱动器或者刻录光盘（不建议）

    推荐使用写入工具 [balenaEtcher](https://mirrors.bfsu.edu.cn/github-release/balena-io/etcher/LatestRelease/)
    或 [Ventoy](https://www.ventoy.net/en/download.html)
3. 重启后按主板厂商的指引设置USB启动或选择USB启动（若失败请先[关闭安全启动](https://www.google.com/search?q=how+to+disable+secure+boot)）
4. 等待进入 tty 环境之后，会自动登录 installer 用户，稍作片刻等待，就会启动 uwsm ->
![alt text](../img/image.webp)
5. 按 Enter 进入 Hyprland 桌面。

::: tip 提示
如果在引导时循环重启，并且Systemd log输出往往是到和网络相关的部分卡住

关机，然后拔掉电源线，等待十秒以上再插电开机
:::
