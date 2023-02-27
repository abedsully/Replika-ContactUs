function validasi(){
    let fname = document.getElementById("f-name").value.trim();
    let lname = document.getElementById("l-name").value.trim();
    let email = document.getElementById("e-address").value.trim();
    let num = document.getElementById("p-number").value.trim();
    let reason = document.getElementById("reasons").value.trim();
    let ordernumber = document.getElementById("order-number").value.trim();
    let subject = document.getElementById("subjects").value.trim();
    let question = document.getElementById("question").value.trim();
    let contacted = document.getElementById("contacted").value.trim();


    if(fname == ""){
        alert("First Name can not be empty!")
        return false
    }

    if(lname == ""){
        alert("Last Name can not be empty!")
        return false
    }

    if(fname.length < 3){
        alert("First Name should contain at least 3 characters!")
        return false
    }

    if(lname.length < 3){
        alert("Last Name should contain at least 3 characters!")
        return false
    }

    if(email == ""){
        alert("Email can not be empty!")
        return false
    }
    
    else if(email.split("@").length !== 2){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }
    else if(email.split("@")[0].length === 0){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }
    else if(email.split("@")[1].length === 0){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }
    
    else if(!email.split("@")[1].includes(".")){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }
    else if(email.split("@")[1][0] === '.'){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }

    if(isNaN(num) === true){
        alert("Phone number can only contain numbers")
        return false
    }

    if(num.startsWith("08") === false){
        alert("Phone number should start with 08")
        return false
    }


    if(reason == ""){
        alert("Reason can not be empty!")
        return false
    }

    if(ordernumber.startsWith("IDN") === false){
        alert("Order Number should start with 'IDN'")
        return false
    }

    if(subject.value = ""){
        alert("Subjects can not be empty!")
        return false
    }

    if(question.length < 50){
        alert("Question should contain at least 50 characters")
        return false
    }

    if(question.length > 1000){
        alert("Question can not contain more than 1000 characters")
        return false
    }

    if(contacted.value == ""){
        alert("Please choose how you prefer to be contacted!")    
        return false
    }

    alert("Thanks for reaching us, we'll get back to you soon!")
    return true
}

function validasi3(){
    let a = " Characters left"
    var y = document.getElementById("question").value.length;
    document.getElementById("demo").innerHTML = "(Maximum characters: 1000) You have " + (1000-y) + a;

    
}


function validasi2(){

    let email2 = document.getElementById("email2").value.trim();

    if(email2 == ""){
        alert("Email can not be empty!")
        return false
    }
    
    else if(email2.split("@").length !== 2){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }
    else if(email2.split("@")[0].length === 0){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }
    else if(email2.split("@")[1].length === 0){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }
    
    else if(!email2.split("@")[1].includes(".")){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }
    else if(email2.split("@")[1][0] === '.'){
        alert("Wrong email format, email format should be: email@address.com")
        return false
    }

    alert("Thanks for registering your email, enjoy our news and special offers!")
    return true


}