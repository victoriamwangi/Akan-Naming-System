btn.addEventListener("click", function (e) {
    e.preventDefault()
    var year = document.querySelector("#yob").value;
    var stringCentury = String(document.getElementById("yob").value).slice(0, 2);
    var stringYear = String(document.getElementById("yob").value).slice(2, 4);
    var century = parseInt(stringCentury);
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var gender = document.querySelector("#gender").value;

    if (month > 12 || day > 31 || month < 1 || day < 1 || month == "" || day == "" || year == "") {
        message = "Kindly input correct dates!";
        modErrTitle = "Oops!";
        form.querySelector('#exampleModalLabel').innerText = modErrTitle;
        form.querySelector('#error').innerText = message;
        return false;
    }

    day = parseInt(document.getElementById('day').value);
    month = parseInt(document.getElementById('month').value);
    year = parseInt(document.querySelector("#yob").value);
    console.log(day);
    console.log(month);

    khanName(day, month, year, form);

});
function khanName(day, month, year, form) {
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var message;
    var fName;
    var mName;
    var modTitle;
    modSuccTitle = "Great!!";
    var charDay;
    var dayOutput;
    for (fName = 0; fName < femaleNames.length; fName++) {

    }
    for (mName = 0; mName < maleNames.length; mName++) {

    }
    var numDay = (day + parseInt(((month + 1) * 26) / 10) +
        year + parseInt(year / 4) + 6 * parseInt(year / 100) +
        parseInt(year / 400) - 1) % 7;


    switch (numDay) {
        case 0:
            var n = gender == "male" ? maleNames[0] : femaleNames[0];
            charDay = "Sunday therefore your Akan name is " + n;
            break;
        case 1:
            var n = gender == "male" ? maleNames[1] : femaleNames[1];
            charDay = "Monday therefore your Akan name is " + n;
            break;
        case 2:
            var n = gender == "male" ? maleNames[2] : femaleNames[2];
            charDay = "Tuesday therefore your Akan name is " + n;
            break;
        case 3:
            var n = gender == "male" ? maleNames[3] : femaleNames[3];
            charDay = "Wednesday therefore your Akan name is " + n;
            break;
        case 4:
            var n = gender == "male" ? maleNames[4] : femaleNames[4];
            charDay = "Thursday therefore your Akan name is " + n;
            break;
        case 5:
            var n = gender == "male" ? maleNames[5] : femaleNames[5];
            charDay = "Friday therefore your Akan name is " + n;
            break;
        case 6:
            var n = gender == "male" ? maleNames[6] : femaleNames[6];
            charDay = "Saturday therefore your Akan name is " + n;

    }

    dayOutput = "You were born on a " + charDay;
    form.querySelector('#exampleModalLabel').innerText = modSuccTitle;
    form.querySelector('#dayOutput').innerText = dayOutput;

}