drops: List[number] = [0, 0, 0, 0, 0]

def on_forever():
    basic.clear_screen()
    for x in range(5):
        # Move drop down
        drops[x] += 1
        # Reset if it reaches bottom
        if drops[x] > 4:
            drops[x] = 0
        # Draw the drop
        led.plot(x, drops[x])
    basic.pause(150)
basic.forever(on_forever)
