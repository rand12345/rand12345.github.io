# (STM32) Energy Storage

[!ref icon=":rocket:" text="GitHub Repo"](https://github.com/rand12345/toucan_stm32f407)

## 🌟 Project Overview

Project [Toucan](https://github.com/rand12345/toucan_stm32f407) is a fully asynchronous EV battery to ESS storage CAN bus protocol converter. Built on the Rust Embassy-rs framework. This project was developed to enable domestic solar hybrid inverters to use unmodified EV batteries. Some have coined the term second life batteries, which represents used EV batteries being given a second chance after losing much of their capacity and being remanufactured into a new form factor. This project rejects that idea and aims to use unmodified EV packs much like [commercial BESS systems](https://www.energy-storage.news/renault-batteries-find-megawatt-scale-2nd-life-use-in-belgium/). Each EV pack contains industry compliant contactors and battery management, and in turn presents real time data for health monitoring and fault detection.

This project combines the utility of EV batteries and uses inexpensive STMicro dual CAN bus controllers to safely manage each pack and emulate domestic battery CAN protocols required to operate a solar hybrid inverter. A further rationale behind this project is the per price per kWh for lithium battery storage. As of 2023, PylonTech batteries cost approximately [£300/kWh](https://www.itstechnologies.shop/collections/pylontech-us2000-us3000-phantom/products/pylon-tech-us3000c-3-5kwh-li-ion-solar-wind-battery-storage) where as used EV packs can be sourced from EV recycling businesses for approximately £60/kWh and range in size from 22kWh for an early Renault Zoe, to 82kWh from a Tesla Model 3.

Hardware: STM32F407 <https://www.aliexpress.com/item/1005001620616382.html?channel=twinner>  
Software: Rust no_std, [Embassy](https://embassy.dev)

## ⚡️ Hardware Support

**Compatible EV batteries** | **Solar Hybrid battery emulation**
----|----
Renault Zoe Ph1 (22kWh -> 44kWh) | BYD
Renault Zoe Ph2 (52kWh) | Triple Power (Solax), FoxESS V1 & V2
Renault Kangoo | PylonTech
Tesla Model 3 (WIP - Contactors 100% ok) | Victron (LVDC)

![](/assets/images/stm32f407_pcb.png)  ![](/assets/images/toucan_stm32f4.png)
