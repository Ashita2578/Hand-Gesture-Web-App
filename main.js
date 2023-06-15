Webcam.set({
    width:200,
    height:450,
    image_format:'png',
    png_quality:90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');
function check()    {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='img id="captured_image" src="'+data_uri+'"/>';
        console.log("ml5", ml5.version);
        classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UKWi1Z5LZ/model.json',modelLoaded);
})}
function modelLoaded()  {
    console.log("Model Loaded");
}
function speak()    {
    var synth= window.speechSynthesis;
    speak_data1= "First Prediction is" + Prediction1;
    speak_data2= "Second Prediction is" + Prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak_data1+speak_data2);
}