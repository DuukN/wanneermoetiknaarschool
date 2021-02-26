var time = new Date(Date.now());
var a = "";
var b = "";
var when = "";

if (time.getHours() >= 13) {
    when = "morgen";
} else {
    when = "vandaag";
}

time = new Date(Date.now() + 39600000);

if (time.getDay() >= 5 || time.getMonth() === 1) {
    a = b = "niet";
} else {
    if (time.getDate() % 2 === 0) {
        a = "'s middags";
        b = "'s ochtends";
    } else {
        b = "'s middags";
        a = "'s ochtends";
    }
}

document.getElementById("group-a").innerHTML = a;
document.getElementById("group-b").innerHTML = b;
document.getElementById("when-a").innerHTML = document.getElementById("when-b").innerHTML = when;
   /*
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="black">
   */