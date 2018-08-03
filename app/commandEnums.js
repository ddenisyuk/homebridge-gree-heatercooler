module.exports = {
    // power state of the device
    power: {
        code: 'Pow',
        value: {
            off: 0,
            on: 1
        }
    },
    // mode of operation
    mode: {
        code: 'Mod',
        value: {
            auto: 0,
            cool: 1,
            dry: 2,
            fan: 3, 
            heat: 4
        }
    },
    // temperature unit (must be together with set temperature)
    temperatureUnit: {
        code: 'TemUn',
        value: {
            celsius: 0,
            fahrenheit: 1
        }
    },
    // set temperature (must be together with temperature unit)
    temperature: {
        code: 'SetTem'
    },
    //  temperature from internal sensor?
    TemSen: {
        code: 'TemSen'
    },
    // fan speed
    fanSpeed: {
        code: 'WdSpd',
        value: {
            auto: 0,
            low: 1,
            mediumLow: 2,  // not available on 3-speed units
            medium: 3,
            mediumHigh: 4, // not available on 3-speed units
            high: 5
        }
    },
    // controls the swing mode of the vertical air blades
    swingVert: {
        code: 'SwUpDn',
        value: {
            default: 0,
            full: 1, // swing in full range
            fixedTop: 2, // fixed in the upmost position (1/5)
            fixedMidTop: 3, // fixed in the middle-up position (2/5)
            fixedMid: 4, // fixed in the middle position (3/5)
            fixedMidBottom: 5, // fixed in the middle-low position (4/5)
            fixedBottom: 6, // fixed in the lowest position (5/5)
            swingBottom: 7, // swing in the downmost region (5/5)
            swingMidBottom: 8, // swing in the middle-low region (4/5)
            swingMid: 9, // swing in the middle region (3/5)
            swingMidTop: 10, // swing in the middle-up region (2/5)
            swingTop: 11 // swing in the upmost region (1/5)
        },
        fixedValues: [0, 2, 3, 4, 5, 6]
    }
};
