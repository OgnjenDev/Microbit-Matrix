let drops: number[] = [0, 0, 0, 0, 0]

basic.forever(function () {
    basic.clearScreen()

    for (let x = 0; x < 5; x++) {
        // Random chance to start a drop
        if (Math.randomRange(0, 10) > 7) {
            drops[x] = 0
        }

        // Move drop
        if (drops[x] <= 4) {
            led.plot(x, drops[x])
            drops[x] += 1
        }
    }

    basic.pause(120)
})