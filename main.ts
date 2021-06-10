let Light_State = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Light_State == 0) {
        Light_State = 1
    } else {
        Light_State = 0
    }
})
basic.forever(function () {
    if (Light_State == 1) {
        pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P1))
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
