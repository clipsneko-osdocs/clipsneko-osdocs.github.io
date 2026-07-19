---
layout: doc
---

# Select a graphics driver
NVIDIA compatibility and the difficulty of installing its graphics driver are major topics in GNU/Linux distributions. ClipsNeko Linux integrates NVIDIA drivers into the Live CD and automates installation in the installer, so you do not have to endure a painful manual setup ->
![](../img/nvidia.webp)
If you use an **Intel or AMD graphics card**, you **do not need an NVIDIA driver**. Installing one in this case will not load the module and has no effect other than using disk space, but we still recommend choosing not to install an NVIDIA driver.

## Driver and kernel compatibility
Because installation methods differ, some kernels can only use a DKMS installation. Compatibility is shown below:
| Kernel | Available drivers |
| --- | --- |
| linux | nvidia-open, nvidia-open-dkms |
| linux-lts | nvidia-open-lts, nvidia-open-dkms |
| linux-zen | nvidia-open-dkms |
| linux-hardened | nvidia-open-dkms |

You can safely install nvidia-open-dkms; it is compatible with all kernels.
