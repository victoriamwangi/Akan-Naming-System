var btn = document.getElementById("btn");
var form = document.getElementById('form');


// Day of the week(d) = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) mod 7
btn.addEventListener("click", function (e) {
    e.preventDefault()
    var stringCentury = String(document.getElementById("yob").value).slice(0, 2);
    var stringYear = String(document.getElementById("yob").value).slice(2, 4);
    var century = parseInt(stringCentury);
    var year = parseInt(stringYear);
    var month = parseInt(document.getElementById('month').value);
    var day = parseInt(document.getElementById('day').value);



    function khanName() {
        var akanNames = ["Akosua", "Adwoa", "Abenaa", "Yaa", "Afua", "Ama"];
        var message;
        var aName;
        var modTitle;
        var floatDay = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
        var numDay = Math.trunc(floatDay);
        var charDay;
        var dayOutput;
        for (aName = 0; aName < akanNames.length; aName++) {
            console.log(akanNames);
        }
        switch (numDay) {
            case 0:
                charDay = "Sunday hence your name is " + akanNames[0];
                break;
            case 1:
                charDay = "Monday hence your name is " + akanNames[1];
                break;
            case 2:
                charDay = "Tuesday hence your name is " + akanNames[2];
                break;
            case 3:
                charDay = "Wednesday hence your name is " + akanNames[3];
                break;
            case 4:
                charDay = "Thursday hence your name is " + akanNames[4];
                break;
            case 5:
                charDay = "Friday hence your name is " + akanNames[5];
                break;
            case 6:
                charDay = "Saturday hence your name is " + akanNames[6]

        };
        //Validate date inputs and display outputs
        if (month > 12 || day > 31 || month < 1 || day < 1 || month == "" || day == "" || century == "") {
            message = "Kindly input correct dates!";
            modErrTitle = "Oops";
            form.querySelector('#exampleModalLabel').innerText = modErrTitle;
            form.querySelector('#error').innerText = message;

        } else {
            modSuccTitle = "Great!!";
            dayOutput = "You were born on a " + charDay;
            form.querySelector('#exampleModalLabel').innerText = modSuccTitle;
            form.querySelector('#dayOutput').innerText = dayOutput;

        };



    };
    khanName();
    var gender = document.querySelector("#gender").value;

});


function close() {
    window.location.reload();
}