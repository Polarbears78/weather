radio.setGroup(10)
basic.forever(function () {
    radio.sendValue("x", input.temperature())
    radio.sendValue("y", Environment.ReadWindSpeed(AnalogPin.P0))
})
