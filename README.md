# Control Gree and partners Air Conditioning with homekit

This plugins is based on https://github.com/duculete/homebridge-gree-ac.
Diff:
- uses HeaterCooler instead Thermostat;
- no need external temperature sensor and mqtt.

Should work with all Gree and partners (EWPE Smart APP) AC. 

## Requirements 
- NodeJS (>=8.9.3) with NPM

For each AC device you need to add an accessory and specify the IP address of the device.


## Usage Example:
```
{
    "bridge": {
        "name": "Homebridge",
        "username": "CC:22:3D:E3:CE:30",
        "port": 51826,
        "pin": "123-45-568"
    },
    "accessories": [
        {
            "accessory": "GreeHeaterCooler",
            "host": "192.168.1.X",
            "name": "Living room AC",
            "acModel": "Gree V2",
            "acTempSensorShift": 40,
            "updateInterval": 10000
        },
        {
            "accessory": "GreeHeaterCooler",
            "host": "192.168.1.Y",
            "name": "Bedroom AC",
            "acModel": "C&H",
            "acTempSensorShift": 40,
            "updateInterval": 10000
        }
    ]
}
```

