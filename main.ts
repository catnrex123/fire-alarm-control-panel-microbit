radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendNumber(1)
    music.play(music.createSoundExpression(WaveShape.Sine, 1303, 1303, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
    radio.setGroup(1)
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
})
