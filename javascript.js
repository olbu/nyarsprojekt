function startTimer() {
    var nyår=new Date("January 1, 2019 00:00:00");
    var nyårstid=nyår.getTime();
    var idagtm=new Date();
    var idagtid=idagtm.getTime();
    var tidkvar=nyårstid-idagtid;
    var kvardagar = tidkvar/86400000;
    var kvartimmar=23-idagtm.getHours();
    var kvarmin=59-idagtm.getMinutes();
    var kvarsec=59-idagtm.getSeconds();
    if (Math.floor(kvardagar) <= -1) {
        //Ändrar titeln med ett fint budskap
        document.getElementById("msg").innerHTML="Happy New Year 2019"; 
        //fyrverkerier videon spelas upp i bakgrunden
        $(".fireworks").fireworks({ sound: true, opacity: 0.5, width: '100%', height: '100%' });
        return;
    } else {
        document.getElementById('days').innerHTML= återställ(Math.floor(kvardagar), -3);
        document.getElementById('hours').innerHTML= återställ(kvartimmar, -2);
        document.getElementById('mins').innerHTML= återställ(kvarmin, -2);
        document.getElementById('secs').innerHTML= återställ(kvarsec, -2);
    }
    setTimeout('startTimer()',999);
    //Refreshar timern en gång i sekunden
}

//Gör så att klockan får ett finare slut genom att visa 000 dagar osv.
function återställ(str, pad) {
    str = (Math.pow(10, Math.abs(pad)) + str.toString()).slice(pad);
    return str.replace(/\w/g, "<span>$&</span>");
}

