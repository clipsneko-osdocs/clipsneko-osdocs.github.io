---
layout: doc
---

# 选择显卡驱动
GNU/Linux 发行版的一大话题就是和 NVIDIA 不相容，显卡驱动安装难度高。而 ClipsNeko Linux 通过在 Live CD 中集成 NVIDIA 驱动与安装程序中的自动化安装，使您不需要忍受手动安装的痛苦 ->
![](../img/nvidia.webp)
如果您使用的是 **Intel 或 AMD 的显卡**，则**不需要 NVIDIA 驱动**。在这种情况下，安装 NVIDIA 驱动后模块不会加载，除了占空间之外没有其他坏处，不过仍建议您选择不进行 NVIDIA 驱动的安装。

## 驱动与内核的兼容性
因为安装方式的差异，使得部分内核只能使用 dkms 安装。兼容性如下表所示：
| 内核 | 可选驱动 |
| --- | --- |
| linux | nvidia-open、nvidia-open-dkms |
| linux-lts | nvidia-open-lts、nvidia-open-dkms |
| linux-zen | nvidia-open-dkms |
| linux-hardened | nvidia-open-dkms |

您可以放心安装 nvidia-open-dkms, 它兼容所有内核。
