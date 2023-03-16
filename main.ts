radio.onReceivedNumber(function (receivedNumber) {
    你出拳 = receivedNumber
    while (我出拳 == 0) {
        basic.showString("?")
    }
    basic.pause(1000)
    比輸贏()
    basic.pause(3000)
    設定初值()
})
input.onButtonPressed(Button.A, function () {
    if (我出拳 == 0) {
        我出拳 = 3
        basic.showIcon(IconNames.Scissors)
        radio.sendNumber(我出拳)
    }
})
function 設定初值 () {
    basic.showArrow(ArrowNames.East)
    你出拳 = 0
    我出拳 = 0
}
function 比輸贏 () {
    if (我出拳 == 你出拳) {
        basic.showIcon(IconNames.EigthNote)
    } else if (我出拳 == 3 && 你出拳 == 9) {
        basic.showIcon(IconNames.Yes)
    } else if (我出拳 == 6 && 你出拳 == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (我出拳 == 9 && 你出拳 == 6) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (我出拳 == 0) {
        我出拳 = 9
        basic.showIcon(IconNames.Square)
        radio.sendNumber(我出拳)
    }
})
input.onButtonPressed(Button.B, function () {
    if (我出拳 == 0) {
        我出拳 = 6
        basic.showIcon(IconNames.SmallSquare)
        radio.sendNumber(我出拳)
    }
})
let 我出拳 = 0
let 你出拳 = 0
radio.setGroup(254)
設定初值()
