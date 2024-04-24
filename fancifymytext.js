function bigger(){
alert("Hello, world!");
document.getElementById("TextField").style.fontSize = "24pt";
}

function fancy(){
    alert("Fancy world");
    if(document.getElementById("FancyRadio").checked){
        document.getElementById("TextField").style.fontWeight="bold";
        document.getElementById("TextField").style.color="blue";
        document.getElementById("TextField").style.textDecoration="underline";

    }
}

function boring(){
    alert("Boring world");
    if(document.getElementById("BoringRadio").checked){
        document.getElementById("TextField").style.fontWeight="normal";
        document.getElementById("TextField").style.color="black";
        document.getElementById("TextField").style.textDecoration="none";
        
    }
}

function moo(){
    document.getElementById("TextField").value = document.getElementById("TextField").value.toUpperCase();

    var textField = document.getElementById("TextField");
    var text = textField.value;
    var str = text.split(".");
    for(var i = 0; i< str.length; i++){
        var trimStr = str[i].trim();
        var words = trimStr.split(" ");
        var lastword = words.pop();
        lastword+= "-Moo";
        var modifiedSentence = words.join(" ");
        modifiedSentence += " " + lastword;
        str[i] = modifiedSentence;
    }
    var modifiedStr = str.join(".");
    textField.value = modifiedStr;
}