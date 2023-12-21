# (Linux) Vehicle to Home Charger Hacking

[!ref icon=":rocket:" text="GitHub Repo"](https://github.com/rand12345/BeagleBone-V2H)

![Nissan Leaf domestic bi-directional charger - DALL·E 3](/assets/images/leaf_charger.png)

## 🌟 Project Overview

The [BeagleBone-V2H](https://github.com/rand12345/BeagleBone-V2H) project focused on the reverse engineering and experimentation of an [Indra Vehicle to Grid (V2G)](https://www.indra.co.uk/v2g/) bi-directional charging system. The aim was to replicate the functionality of the existing system with local control only. This involved building a completely new BeagleBone firmware image, writing custom kernel overlays for hardware support, and developing a bespoke application in Rust. Additionally, a [SvelteKit](https://github.com/rand12345/v2h_webui) webUI was prototyped to provide local user control through a websockets interface. Upon completing a proof of concept, a load matching [Vehicle to Home (V2H)](https://www.indra.co.uk/v2h/) feature was added so that the connected electric vehicle could safely power an entire home and charge from excess solar automatically.

### 🔑 Stages

||| **🔧 Reverse Engineering Commercial CHAdeMO V2G System:**

- [Dumped eMMC image](https://github.com/rand12345/Ardni-V2H) of existing firmware, extracted configs, and decompiled main executable
- [Ghidra](https://ghidra-sre.org) for reverse engineering existing C++ CHAdeMO V2G firmware
- Extracted boot and runtime logs through TTL UART
|||  
||| **🛠 Implementing Peripherals and Drivers:**

- Retained access to hardware components using bespoke Linux kernel overlays
- Designed custom libraries for EV DC rapid charging [CHAdeMO CAN](https://crates.io/crates/chademo-rs), [PRE 6kW bi-directional CAN charger](https://www.chademo.com/wp2016/wp-content/uploads/2018/05/V2G%206kW%20-%2010kW%20datasheet.pdf), [STMicro STPM3x SPI energy monitor](https://www.st.com/resource/en/datasheet/stpm32.pdf), [Analog Devices AD7237 SPI ADC](https://www.analog.com/en/products/ad7237.html), and [Philips PCA95xx I2C GPIO extender](https://paginas.fe.up.pt/~ee00013/microPCI/files/I2C/Philips%20Semiconductors%20I2C%20Handbook.pdf)
|||
|||- **💡 Designing Replacement Application:**

- Developed a ground-up replacement application in Rust with the aim of cloud disconnection and local control only.

||| **🔬 Experimenting with CCS Adaption:**

- Conducted experiments on adapting the CHAdeMO interface using [pyPLC](https://github.com/uhi22/pyPLC) to enable CCS for EV charging using GreenPHY for protocol communication.
|||

### 🛠️ Technical Stack

||| **💻 Programming and Runtime:**

- [Rust](https://www.rust-lang.org) with [Tokio](https://tokio.rs) async runtime.
- [SQLx](https://github.com/launchbadge/sqlx) for database interactions.
- [Async SocketCAN](https://github.com/idletea/tokio-socketcan) for CAN network communication.
- [I2C and SPI](https://github.com/rust-embedded/linux-embedded-hal) for interfacing with STMicro energy monitor, Analog Devices ADC, and Philips GPIO panel interface.
- [Tokio Tungstenite](https://github.com/snapview/tokio-tungstenite) websocket API.
- [SvelteKit](https://github.com/rand12345/v2h_webui) web interface.
|||
||| **📊 Database Management:**

- SQLite3 for local events recording and datalogging.
- JSON based charging/discharging scheduler.

||| **🔌 Hardware Platform:**

- Existing [BeagleBone Green](https://www.beagleboard.org/boards/seeedstudio-beaglebone-green) - Texas Instruments (Ti) System-on-Chip (SoC).

||| **💻 Operating System:**

- Linux [Debian 10](https://www.beagleboard.org/distros/am5729-debian-10-3-2020-04-06-1gb-sd-console) - SD boot.
|||
