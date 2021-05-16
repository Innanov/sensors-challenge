input.onButtonPressed(Button.A, function () {
    if (led.brightness() < 100) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                # # . # #
                # # # # #
                . # # # .
                . # # # .
                `)
            soundExpression.twinkle.play()
            basic.pause(2000)
            basic.showNumber(led.brightness())
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . . . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
            basic.pause(2000)
            basic.showNumber(led.brightness())
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() >= max) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        soundExpression.giggle.play()
    } else if (input.temperature() <= min) {
        basic.showLeds(`
            . # # # #
            # . . . .
            # . . . .
            # . . . .
            . # # # #
            `)
        soundExpression.mysterious.play()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
let min = 0
let max = 0
max = 40
min = 10
