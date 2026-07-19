---
layout: doc
---

# Launch the installer
After entering the Hyprland desktop, use our shortcut **SUPER + T** to launch our kitty terminal.
::: tip Tip
You can treat the SUPER key as the Windows key on a PC keyboard or the Command key on a Mac keyboard. Our shortcuts require holding SUPER first, then pressing the other key.
:::
After kitty starts successfully, enter ->
```bash
clipsneko-installer
```

The installer normally runs as the regular `installer` user in the Live environment. A few conveniences mean that it does not require a password; both the `installer` user and root have no password.

Therefore, experienced users can also SSH into the target machine from another computer and install remotely, which is one reason we use a TUI. In that case, you need to set a password for the user used for the connection (this does not affect the installer's privilege escalation).

Shortcut help is shown at the bottom of the installer, and may differ between steps. Use `Tab` to switch focus between the content area and bottom buttons, the arrow keys to select items, and `Enter` to confirm.