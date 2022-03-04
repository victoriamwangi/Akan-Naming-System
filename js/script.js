var btn = document.getElementById("btn");

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
        var form = document.getElementById('form');
        var message;
        var modTitle;
        var floatDay = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
        var numDay = Math.trunc(floatDay);
        var charDay;
        var dayOutput;
        switch (numDay) {
            case 0:
                charDay = "Sunday";
                break;
            case 1:
                charDay = "Monday";
                break;
            case 2:
                charDay = "Tuesday";
                break;
            case 3:
                charDay = "Wednesday";
                break;
            case 4:
                charDay = "Thursday";
                break;
            case 5:
                charDay = "Friday";
                break;
            case 6:
                charDay = "Saturday"

        };
        //Validate date inputs and display outputs
        if (month > 12 || day > 31 || month < 1 || day < 1 || month == "" || day == "" || century == "") {
            message = "Kindly input correct dates!";
            modErrTitle = "Oops";
            form.querySelector('#exampleModalLabel').innerText = modErrTitle;
            form.querySelector('#error').innerText = message;

        } else {
            modSuccTitle = "Great!!";
            dayOutput = "You were born on a: " + charDay;
            form.querySelector('#exampleModalLabel').innerText = modSuccTitle;
            form.querySelector('#dayOutput').innerText = dayOutput;
            // akName = "Your Akan name therefore is"; //+ akaName
            // form.querySelector("#akName").innerText = akName;

        };



    };
    khanName();
    var gender = document.querySelector("#gender").value;

});
