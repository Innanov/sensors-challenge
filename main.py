def on_button_pressed_a():
    if led.brightness() < 100:
        basic.show_leds("""
            . . . . .
            # # . # #
            # # # # #
            . # # # .
            . # # # .
            """)
        soundExpression.twinkle.play()
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

min2 = 0
max2 = 0
max2 += 40
min2 += 10

def on_forever():
    if input.temperature() >= max2:
        basic.show_leds("""
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            """)
    elif input.temperature() <= min2:
        basic.show_leds("""
            . # # # #
            # . . . .
            # . . . .
            # . . . .
            . # # # #
            """)
basic.forever(on_forever)
