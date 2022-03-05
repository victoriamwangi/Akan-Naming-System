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
    var gender = document.querySelector("#gender").value;



    // Determine and display Akan Name and day of birth 
    function khanName() {
        var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
        var message;
        var fName;
        var mName;
        var modTitle;
        var floatDay = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
        var numDay = Math.trunc(floatDay);
        var charDay;
        var dayOutput;
        for (fName = 0; fName < femaleNames.length; fName++) {

        }
        for (mName = 0; mName < maleNames.length; mName++) {

        }

        //Validate date inputs and display outputs
        if (month > 12 || day > 31 || month < 1 || day < 1 || month == "" || day == "" || century == "") {
            message = "Kindly input correct dates!";
            modErrTitle = "Oops";
            form.querySelector('#exampleModalLabel').innerText = modErrTitle;
            form.querySelector('#error').innerText = message;

        } else {
            modSuccTitle = "Great!!";
            if (gender === "female") {
                switch (numDay) {
                    case 0:
                        charDay = "Sunday therefore your Akan name is " + femaleNames[0];
                        break;
                    case 1:
                        charDay = "Monday therefore your Akan name is " + femaleNames[1];
                        break;
                    case 2:
                        charDay = "Tuesday therefore your Akan name is " + femaleNames[2];
                        break;
                    case 3:
                        charDay = "Wednesday therefore your Akan name is " + femaleNames[3];
                        break;
                    case 4:
                        charDay = "Thursday therefore your Akan name is " + femaleNames[4];
                        break;
                    case 5:
                        charDay = "Friday therefore your Akan name is " + femaleNames[5];
                        break;
                    case 6:
                        charDay = "Saturday therefore your Akan name is " + femaleNames[6]

                };
            } else if (gender === "male") {

                switch (numDay) {
                    case 0:
                        charDay = "Sunday therefore your Akan name is " + maleNames[0];
                        break;
                    case 1:
                        charDay = "Monday therefore your Akan name is " + maleNames[1];
                        break;
                    case 2:
                        charDay = "Tuesday therefore your Akan name is " + maleNames[2];
                        break;
                    case 3:
                        charDay = "Wednesday therefore your Akan name is " + maleNames[3];
                        break;
                    case 4:
                        charDay = "Thursday therefore your Akan name is " + maleNames[4];
                        break;
                    case 5:
                        charDay = "Friday therefore your Akan name is " + maleNames[5];
                        break;
                    case 6:
                        charDay = "Saturday therefore your Akan name is " + femaleNames[6]

                };
            }

            dayOutput = "You were born on a " + charDay;
            form.querySelector('#exampleModalLabel').innerText = modSuccTitle;
            form.querySelector('#dayOutput').innerText = dayOutput;


        };



    };
    khanName();

});


function close() {
    window.location.reload();
}