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

    //Validate date inputs
    var form = document.getElementById('form');
    var errorMsg;
    if (month > 12 || day > 31) {
        errorMsg = "Kindly input correct date and month!"
        console.log(errorMsg);
        form.querySelector('#error').innerText = errorMsg;
        return false;
    };


    var weekday = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
    console.log(weekday)
    var gender = document.querySelector("#gender").value;
    // var dayOfWeek = 

});
