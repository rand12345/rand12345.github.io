# (STM32) Nissan Leaf EV CAN Spy

[!ref icon=":rocket:" text="Repo"](https://github.com/rand12345/leaf_to_mqtt)

Used for reading Nissan EV battery controller data from OBD2 port and outputting to a JSON payload.

JSON payload is received by a ESP01/NodeMCU flashed with [Tasomota](https://tasmota.github.io/docs/) firmware. Payload is then forwarded as an MQTT message which is then used by OpenEVSE for SoC monitoring and Home Assistant for datalogging. Due to the dual CAN interfaces of this board, both Leaf CAN buses can be monitored for realtime datalogging.

Hardware: STMF32105 - aka £9 AliExpress CAN filter <https://www.aliexpress.com/item/1005005919692162.html?channel=twinner>  
Software: Rust no_std, [Embassy](https://embassy.dev)

![Home Assistant MQTT data](/assets/images/OpenEVSE_data.png)
![OpenEVSE charge limiting](/assets/images/OpenEVSE_bat_limit.png)

[!ref](https://github.com/rand12345/leaf_to_mqtt/blob/c96a5119b10d8872694dc31cae214e9ab922c2ba/README.md)
