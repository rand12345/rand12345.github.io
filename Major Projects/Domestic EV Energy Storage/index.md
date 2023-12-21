# (STM32) Energy Storage

[!ref icon=":rocket:" text="GitHub Repo"](https://github.com/rand12345/toucan_stm32f407)

## 🌟 Project Overview

Project Toucan was developed to enable domestic solar hybrid inverters to use unmodified EV batteries.
Rationale price per kWh.

Hardware: STM32F407 <https://www.aliexpress.com/item/1005001620616382>  
Software: Rust no_std, [Embassy](https://embassy.dev)

Fully asynchronous EV battery to ESS storage CAN bus protocol converter. Built on the Rust Embassy-rs framework.

HVDC EV battery support:

- Renault Zoe Ph1 (22kWh -> 44kWh)
- Renault Zoe Ph2 (52kWh)
- Renault Kangoo
- Tesla Model 3 (WIP - Contactors 100% ok)

Solar Hybrid battery emulation support:

- Victron (LVDC)
- BYD
- PylonTech
- Solax
- FoxESS V1
- FoxESS V2 (New)
