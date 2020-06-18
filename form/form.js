

function postToGoogle() {
    var field1 = $("#textField").val();
    var field2 = $("#nameField").val();
    var field3 = $("#mobField").val();

    // var field2 = $("#emailField").val();
    // var field3 = $("#mobField").val();
    // var field4 = $("#cinema option:selected").text();
     
    if(field1 == ""){
        alert('Please Fill Your sugestios');
        document.getElementById("textField").focus();
        return false;
    }
    if(field2 == ""){
        alert('Please Fill Your sugestios');
        document.getElementById("nameField").focus();
        return false;
    }
    if(field3 == ""){
        alert('Please Fill Your whatsapp number');
        document.getElementById("mobField").focus();
        return false;
    }

    // if(field2 == ""){
    //     alert('Please Fill Your Email');
    //     document.getElementById("emailField").focus();
    //     return false;
    // }
    // if(field3 == "" || field3.length > 10 || field3.length < 10){
    //     alert('Please Fill Your Mobile Number');
    //     document.getElementById("mobField").focus();
    //     return false;
    // }


    

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd6Iz8C9nEx_yR0ut5a2HL8Y0s3nF23JO6DMtWr7Ru2SWA_lg/formResponse?",
        data: {"entry.1838436314": field1, "entry.906807663": field2, "entry.1320969491": field3},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            {

                //  $('#success-msg').show();
                location.reload(true/false);
                // $('#form').show();
                
            }
    });
    return false;
}