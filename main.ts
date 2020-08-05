function Sequence02 () {
    music.playMelody("A E C E A C E C ", bpm)
    music.playMelody("F C A E C F C E ", bpm)
    music.playMelody("C G E C G E C G ", bpm)
    music.playMelody("G D B D E B D B ", bpm)
}
input.onButtonPressed(Button.A, function () {
	
})
function Sequence01 () {
    music.playMelody("E B G E B G E B ", bpm)
    music.playMelody("C G E C G E C G ", bpm)
    music.playMelody("G D B D E B D B ", bpm)
}
function Sequence03 () {
    music.playMelody("A E C E A C E C ", bpm)
    music.playMelody("D A F A D A D A ", bpm)
    music.playMelody("C E G E B G B E ", bpm)
    music.playMelody("F C E A C E A C ", bpm)
}
let bpm = 0
bpm = 400
basic.forever(function () {
    Sequence01()
    Sequence02()
    Sequence03()
})
