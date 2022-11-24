//https://teachablemachine.withgoogle.com/models/HmPxLvyFH/
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

function speak() {

    var snyth = window.speechSysnthesis

    peaskdaat = "te first perdisction is " + prediction1

    sssspeakdaaaaaaaaaaaaaaatea = "te not first but almost first perdisction is " + prediction2

    var producevibrationswithmentaldigitalinflusencesfromthisdigitalitem = new SpeechSynthesisUtterance(peaskdaat + sssspeakdaaaaaaaaaaaaaaatea)

    snyth.speak(producevibrationswithmentaldigitalinflusencesfromthisdigitalitem)

}
function check() {

    var img = document.getElementById("pictureresult")
    
    classifier.classify(img, gotResult)

}

function gotResult(error, results) {

    if (error) {

        console.log(error)

    }

    else{

        console.log(results)

        document.getElementById("result_emoion_name").innerHTML = results[0].label

        document.getElementById("result_emoion_name_but_not_as_good").innerHTML = results[1].label
        
        perdiction1= results[0].label

        perdiction2= results[1].label

        speak()

        if (results[0].label == "Piece") {
         
            document.getElementById("update_emoji").innerHTML = "&#9994;"
        
        }
       
        if (results[0].label == "yAy") {
         
            document.getElementById("update_emoji").innerHTML = "&#9996;"
        
        }
       
        if (results[0].label == "nICe") {
         
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        
        }
      
        if (results[0].label == "clep") {
         
            document.getElementById("update_emoji").innerHTML = "&#128079;"
        
        }
   
        if (results[0].label == "PAWNCH") {
         
            document.getElementById("update_emoji").innerHTML = "&#128077;"
        
        }

        if (results[1].label == "Piece") {
         
            document.getElementById("update_emoji_but_its_wrong_haha").innerHTML = "&#9994;"
        
        }
       
        if (results[1].label == "yAy") {
         
            document.getElementById("update_emoji_but_its_wrong_haha").innerHTML = "&#9996;"
        
        }
       
        if (results[1].label == "nICe") {
         
            document.getElementById("update_emoji_but_its_wrong_haha").innerHTML = "&#128076;"
        
        }
      
        if (results[1].label == "clep") {
         
            document.getElementById("update_emoji_but_its_wrong_haha").innerHTML = "&#128079;"
        
        }
   
        if (results[1].label == "PAWNCH") {
         
            document.getElementById("update_emoji_but_its_wrong_haha").innerHTML = "&#128077;"
        
        }
    }
}