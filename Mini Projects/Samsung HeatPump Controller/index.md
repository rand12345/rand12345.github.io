# (Linux) Samsung Heatpump controller

[!ref icon=":rocket:" text="Repo"](https://github.com/rand12345/samsung_mid)

Samsung MIM-B19N modbus control

Proof of concept command line control of a Samsung heat pump prototyped in Rust.

Uses RS485 on /dev/ttyUSB0 and keyboard entry for modifying temperature parameters and switching between modes (WIP)

Hardware: USB to RS485 converter  
Software: Rust, Tokio  
Samsung Hardware RS485 Interface: <https://www.samsung.com/uk/support/model/MIM-B19N/>
