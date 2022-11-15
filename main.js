
var prediction1 = ""

var prediction2 = ""

Webcam.set({
    width: 325,

    height:300,

    image_format:"png",

    png_quality:90

})

var camera = document.getElementById("camera")

Webcam.attach('#camera')

function takefoto() {

    Webcam.snap(function (data_uri) {

        document.getElementById("result").innerHTML = '<img id="pictureresult" src="' + data_uri + '">'

    })

}

console.log('ml5 version:', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HmPxLvyFH/.json', loaderingtehmodels)

function loaderingtehmodels() {

    console.log('the digital model has been used as a temporary influence on transistors - ok fine')

}

function speak(avariabletoholdyourapi) {

    var snyth = window.speechSysnthesis

    peaskdaat = "te first perdisction is " + prediction1

    sssspeakdaaaaaaaaaaaaaaatea = "te not first but almost first perdisction is " + prediction2

    var producevibrationswithmentaldigitalinflusencesfromthisdigitalitem = new SpeechSynthesisUtterance(peaskdaat + sssspeakdaaaaaaaaaaaaaaatea)

    snyth.speak(producevibrationswithmentaldigitalinflusencesfromthisdigitalitem)

}