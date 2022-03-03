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
    var weekday = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);

    var gender = document.querySelector("#gender").value;


})
