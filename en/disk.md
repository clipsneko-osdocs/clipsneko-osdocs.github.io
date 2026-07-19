---
layout: doc
---

# Disk partitioning
You need one or more **free partitions** to install the operating system. ClipsNeko Linux supports software RAID0 and RAID1 based on Btrfs device pools.
::: tip Tip
For a usable experience, you need at least **20 GiB of free space** to install ClipsNeko Linux.
:::
::: danger Warning
Using `cfdisk` modifies the partition table. Check for important data in advance and carefully verify the selected device and each operation. ReSpring ClipsNeko Co., Ltd. cannot be held responsible for resulting partition data loss.
:::
Select a disk to partition with `cfdisk` ->
![](../img/diskpart.webp)
The device path is shown on the far left. If you use a SATA disk, its device path usually looks like **sda**, **sdb**, **sdc**, or another **sd?** path; USB drives also use this form. In that case, verify the model and capacity shown next to it.

If you use an NVMe disk, the device path looks like **nvme0n1** and similar forms. These are the computer's internal disks; select one and press **Enter** to open `cfdisk`.

Press **Enter** on the selected device to open `cfdisk`.

If your disk has no partition table (a new disk) ->
![](../img/cfdisk0.webp)
You will be asked to create a new partition table. Select **gpt**.
::: tip Tip
ClipsNeko Linux uses UEFI, so a GPT partition table is required.
:::

After successfully creating the partition table, you will see ->
![](../img/cfdisk1.webp)
Use the left and right arrow keys to move between options. Use the up and down arrow keys to move between partitions (there are no partitions yet).

Select **New** to create a new partition ->
![](../img/cfdisk2.webp)
Enter the partition size. Units are included: **M** means **MiB**, and **G** means **GiB**.

For ClipsNeko Linux, prepare ->
- **An ESP (EFI System Partition)** with at least **64 MiB** of space.
- **Space for the operating system (one or more partitions)** with at least 20 GiB of free space in total (more than 20 GiB).

After creating the ESP, create another partition for the operating system ->
![](../img/cfdisk3.webp)
Then change the ESP partition type ->
![](../img/cfdisk4.webp)
![](../img/cfdisk5.webp)
Select **EFI System** here to set the ESP partition to the correct type.

Back on the main screen, select **Write** to write the changes to the disk ->
::: danger Warning
This step modifies the partition table. Check that the changes match your expectations first.
:::
Enter **yes** to confirm the partition-table changes.
![](../img/cfdisk6.webp)

Finally, select **Quit** to exit `cfdisk`.

## Installing across multiple partitions
Make sure the partitions you ultimately select have more than 20 GiB of available space after applying the RAID option you choose (not including 20 GiB).

### Btrfs RAID available-space calculation
Btrfs supports two RAID types:
- RAID 0: combines partitions; capacity is the sum of their capacities. Because metadata uses RAID 1, ClipsNeko Linux calculates usable capacity as twice the smallest partition.
- RAID 1: mirrors two disks; total capacity is the capacity of the smallest partition.

Therefore ->
| Example        |   Type  | Size  | Installable |
| :---------: | :----: | :----: | :---: |
| 10 + 10 GiB | RAID 0 | 20 GiB | No    |
| 10 + 12 GiB | RAID 0 | 20 GiB | No    |
| 11 + 12 GiB | RAID 0 | 22 GiB | Yes    |
| 10 + 10 GiB | RAID 1 | 10 GiB | No    |
| 10 + 12 GiB | RAID 1 | 10 GiB | No    |
| 20 + 20 GiB | RAID 1 | 20 GiB | Yes    |
This table illustrates how ClipsNeko Linux calculates available space.

Select Next to enter partition-role assignment ->
![](../img/diskinst.webp)
Here you can see the available partitions.

From left to right, the columns are:

**Device path** **Partition size** **Partition type** **Role** **File system**

At this step, you need to set the **partition role**.

The installer provides these roles:
- **ESP**: the EFI System Partition. There must be exactly one, with the GPT EFI System Partition type and the vfat file system.
- **Installation target**: the system will format it as Btrfs and automatically create the `@` and `@home` subvolumes. You can select one or more.
- **Unassigned**: this partition will not be used by the installer.

Assign roles to the partitions you created earlier.

Press **Enter** to open the role-selection menu, then select a role to assign.

::: warning Note
There can be **only one ESP partition**, but **multiple installation target partitions** can be selected.
:::

Once the partition roles are assigned correctly, you can continue to the next step.