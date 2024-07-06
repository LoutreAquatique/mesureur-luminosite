input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    if (input.lightLevel() > 128) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
        datalogger.log(datalogger.createCV("temperature", input.lightLevel()))
    } else if (input.lightLevel() > 128 / 2) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    }
})
