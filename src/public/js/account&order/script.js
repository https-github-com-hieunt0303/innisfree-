function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["phone"].value;
    var z = document.forms["myForm"]["address"].value;
    if (x == "" || x == null) {
      alert("Please fill your Fulll name");
      return false;
    }
    if (y == "" || y == null) {
        alert("Please fill your Phone number");
        return false;
    }
    if (z == "" || z == null) {
        alert("Please fill your Address");
        return false;
    }
}