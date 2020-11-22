
function myFunction() {
    var RN = document.getElementById("roll").value;

    var RNS = RN.slice(RN.indexOf("-") + 1);
    var BC_SUM;
    var RNS_SUM;
    var RN_Sum;
    var uname = document.getElementById("uname").value;
    var lname = document.getElementById("lname").value;
    uname = uname.toUpperCase();
    lname = lname.toLowerCase();
    var Name_F_ASCII_U = uname[0]+" ➔ "+uname.charCodeAt(0);
    var Name_F_ASCII_L = lname[0]+" ➔ "+lname.charCodeAt(0);
    var sec = document.getElementById("section").value;
    var S_ASCII = sec[0]+" ➔ "+sec.charCodeAt(0);
    var gtag = document.getElementById("gtag").value;
    var G_TAG_ASCII = gtag[0]+" ➔ "+gtag.charCodeAt(0);
    var m1 = document.getElementById("m1").value;
    var m2 = document.getElementById("m2").value;
    var m3 = document.getElementById("m3").value;
    var Avg_CGPA_Group = average(m1,m2,m3);
    var ASCII_NAME_Upper;
    var ASCII_NAME_LOWER;
ASCII_NAME_Upper = ascii(uname);
ASCII_NAME_Upper = asciiseries(ASCII_NAME_Upper,uname);

ASCII_NAME_LOWER = ascii(lname);
ASCII_NAME_LOWER = asciiseries(ASCII_NAME_LOWER,lname);

    var CGPA = document.getElementById("cgpa").value;

    document.getElementById("1").innerText = CGPA;
    document.getElementById("2").innerText = RN;

    var BC = RN.substring(0, RN.indexOf("-"));

    document.getElementById("3").innerText = BC;
    document.getElementById("4").innerText = RNS;
    BC_SUM = sum(BC);
    var BBC_SUM = sumseries(BC_SUM,BC);

    RNS_SUM = sum(RNS);
    var RRNS_SUM = sumseries(RNS_SUM,RNS);
    document.getElementById("5").innerText = BBC_SUM;
    document.getElementById("6").innerText = RRNS_SUM;

     RN_Sum = BC_SUM +"+"+ RNS_SUM + "=" + (parseInt(BC_SUM) + parseInt(RNS_SUM));
     
    document.getElementById("7").innerText = RN_Sum;
    document.getElementById("8").innerText = Name_F_ASCII_U;
    document.getElementById("9").innerText = Name_F_ASCII_L;
    document.getElementById("10").innerText = S_ASCII;
    document.getElementById("11").innerText = gtag;
    document.getElementById("12").innerText = G_TAG_ASCII ;
    document.getElementById("13").innerText  = Avg_CGPA_Group;
    document.getElementById("14").innerText = ASCII_NAME_Upper;
    document.getElementById("15").innerText  = ASCII_NAME_LOWER;

  


}
function export2Word( element ) {

    var html, link, blob, url, css;
 
    css = (
      '<style>' +
      '@page WordSection1{size: 841.95pt 595.35pt;mso-page-orientation: landscape;}' +
      'div.WordSection1 {page: WordSection1;}' +
      '</style>'
    );
 
    html = element.innerHTML;
    blob = new Blob(['\ufeff', css + html], {
      type: 'application/msword'
    });
    url = URL.createObjectURL(blob);
    link = document.createElement('A');
    link.href = url;
    link.download = 'Document';  // default name without extension 
    document.body.appendChild(link);
    if (navigator.msSaveOrOpenBlob ) navigator.msSaveOrOpenBlob( blob, 'Document.doc'); // IE10-11
        else link.click();  // other browsers
    document.body.removeChild(link);
  };

function average(a,b,c){
var average;
if(c == 0 ){
average = ((parseFloat(a)+parseFloat(b))/2);
}
else if(c != 0 || b != 0 || a != 0){
    average = ((parseFloat(a) + parseFloat(b) + parseFloat(c))/3);
}
else if(a == 0 ){
    average = ((parseFloat(b) + parseFloat(c))/2);
    }
else if(b == 0 ){
        average = ((parseFloat(a) + parseFloat(c))/2);
        }
return average;
}
function ascii(b){
    
    var sum = parseInt(b.charCodeAt(0));
    for (var i = 1; i < b.length; i++) {
        if(b.charCodeAt(i) != 32){
        sum += parseInt(b.charCodeAt(i)); 
        }
    }
    return sum;
}
function asciiseries(a,b) {
    var sum;
    sum = b.charCodeAt(0);
    for (var i = 1; i < b.length; i++) {
        if(b.charCodeAt(i) != 32){
        sum += "+" + b.charCodeAt(i); 
        }
    }
    return (sum + "=" + a);
}

function sumseries(a,b) {
    var sum;
    sum = b[0];
    for (var i = 1; i < b.length; i++) {
        sum += "+" + b[i]; 
    }
    return (sum + "=" + a);
}
function sum(b) {
    var sum = 0;
    parseInt(b);
    //batch code sum and roll sum
    for (var i = 0; i < b.length; i++) {
        sum += parseInt(b[i]); 
    }
   
    return sum;
}


