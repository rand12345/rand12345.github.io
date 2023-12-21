# (ESP32) ABB Power-One Aurora Solar Inverter to MQTT

[!ref icon=":rocket:" text="Repo"](https://github.com/rand12345/abb_to_mqtt)

Used for reading solar energy data and outputting to MQTT states using the Aurora protocol. Can be configured to read multiple RS485 instruments.

Hardware: Espressif ESP32C3 - M3Stamp-C3 <https://docs.m5stack.com/en/core/stamp_c3>  
Software: Rust, ESP-IDF-HAL <https://github.com/esp-rs/esp-idf-hal>
![Home Assistant MQTT data](/assets/images/ABB_HA.png)
![Raw MQTT states](/assets/images/ABB_MQTT.png)

Based on an old reverse engineering project which extracted the master access code from a given serial number to elevate privileges. Algorithm and hardcoded seed was found by decompiling ABB management software (VB.net) and porting to Python, and integrating into an existing Aurora library.

[!ref icon=":rocket:" text="ABB Export Limit"](https://github.com/rand12345/ABB_export_limit)

```python
def resolve_password(self, inv_serial):
        password_array = [0, 0, 0, 0, 0, 0]
        this_seed = '919510'
        if len (inv_serial) > 6:
            inv_serial = inv_serial[:6]
        byt_ = 0
        while byt_ < 6:
            byt_2 = ord (inv_serial[byt_])
            if byt_2 > 57 or byt_2 < 48:
                byt_2 = 48
            byt_2 -= 48
            byt_3 = ord ((this_seed[byt_]))
            byt_3 -= 48
            if byt_ % 2 == 0:
                byt_4 = byt_2 + byt_3
            else:
                byt_4 = byt_2 - byt_3
            if byt_4 < 0:
                byt_4 *= -1
            byt_5 = byt_4 % 10
            password_array[byt_] = int (byt_5 + 48)
            byt_ += 1
        return password_array
```
