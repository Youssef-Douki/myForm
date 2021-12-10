//div that containes the buttons of the sign in and log in and the inputs
var signUpDiv = $("<div></div>")
signUpDiv.addClass("container")
$("body").append(signUpDiv);
//sign in button
var signUpBtn = $("<input></input>")
signUpBtn.addClass("signUp")
signUpBtn.attr({"type":"submit","value":"Sign Up"})
$(signUpBtn).appendTo(signUpDiv);
//log in button
var logInBtn = $("<button>Log in</button>")
logInBtn.addClass("logIn")
$(logInBtn).appendTo(signUpDiv);
//div that containes the inputs of the sign in
var signInInputsDiv = $("<div></div>")
signInInputsDiv.addClass("signInInputDiv")
$(signInInputsDiv).appendTo(signUpDiv);
//first name input
var firstNameLabel =$("<label>First name :</label>")
firstNameLabel.addClass("L1")
$(firstNameLabel).appendTo(signInInputsDiv)

var firstNameInput = $("<input></input>")
firstNameInput.addClass("firstNameInput")
firstNameInput.attr({"type": "text","placeholder":"Your first name", "required":"required"})
$(firstNameInput).appendTo(signInInputsDiv);
//last name input
var lastNameLabel =$("<label>Last name :</label>")
lastNameLabel.addClass("L2")
$(lastNameLabel).appendTo(signInInputsDiv)

var lastNameInput = $("<input></input>")
lastNameInput.addClass("lastNameInput")
lastNameInput.attr({"type": "text","placeholder":"Your last name", "required":"required"})
$(lastNameInput).appendTo(signInInputsDiv);
//age input
var ageLabel =$("<label>Age :</label>")
ageLabel.addClass("L3")
$(ageLabel).appendTo(signInInputsDiv)

var ageInput = $("<input></input>")
ageInput.addClass("ageInput")
ageInput.attr({"type": "number","placeholder":"Your age" , "required":"required"})
$(ageInput).appendTo(signInInputsDiv);
//sign in email
var signInEmailLabel =$("<label>Email :</label>")
signInEmailLabel.addClass("L4")
$(signInEmailLabel).appendTo(signInInputsDiv)

var signInEmailInput = $("<input></input>")
signInEmailInput.addClass("signInEmailInput")
signInEmailInput.attr({"type": "email","placeholder":"name@gmail.com", "required":"required"})
$(signInEmailInput).appendTo(signInInputsDiv);
//sign in password
var signInPasswordLabel =$("<label> Password :</label>")
signInPasswordLabel.addClass("L5")
$(signInPasswordLabel).appendTo(signInInputsDiv)

var signInPasswordInput = $("<input></input>")
signInPasswordInput.addClass("signInPasswordInput")
signInPasswordInput.attr({"type": "password","placeholder":"Password" , "required":"required"})

$(signInPasswordInput).appendTo(signInInputsDiv);
//sign in password repeat
var signInPasswordRepeatLabel =$("<label>Confirm password :</label>")
signInPasswordRepeatLabel.addClass("L6")
$(signInPasswordRepeatLabel).appendTo(signInInputsDiv)

var signInPasswordRepeatInput = $("<input></input>")
signInPasswordRepeatInput.addClass("signInPasswordRepeatInput")
signInPasswordRepeatInput.attr({"type": "password","placeholder":"Password", "required":"required"})
$(signInPasswordRepeatInput).appendTo(signInInputsDiv);

var signInBtn2 = $("<input></input>")
signInBtn2.addClass("signIn2")
signInBtn2.attr({"type":"submit","value":"Sign Up"})
$(signInBtn2).appendTo(signInInputsDiv);

var logInDiv = $("<div></div>")
logInDiv.addClass("logInDiv")
$(logInDiv).appendTo("body")

var logInBtn2 = $("<input></input>")
logInBtn2.addClass("logIn2")
logInBtn2.attr({"type":"submit","value":"Log in"})
$(logInBtn2).appendTo(logInDiv)

var logInEmailLabel = $("<label>Email :</label>") 
logInEmailLabel.addClass("Ll1")
logInEmailLabel.appendTo(logInDiv)


var logInEmailInput = $("<input></input>")
logInEmailInput.addClass("logInEmailInput")
logInEmailInput.attr({"type":"email","placeholder":"name@gmail.com"})
logInEmailInput.appendTo(logInDiv)

var logInPasswordLabel = $("<label>Password :</label>") 
logInPasswordLabel.addClass("Ll2")
logInPasswordLabel.appendTo(logInDiv)

var logInPasswordInput = $("<input></input>")
logInPasswordInput.addClass("logInPasswordInput")
logInPasswordInput.attr({"type":"password","placeholder":"********"})
logInPasswordInput.appendTo(logInDiv)

//Home Page
var homePage = $("<div></div>")
homePage.addClass("homePage")
$(homePage).appendTo('body')

var titleName = $("<h1>MyForm</h1>")
titleName.addClass("titleName")
$(titleName).appendTo("body")

var title = $("<h2></h2>")
title.addClass("welcome")
title.css("display","none")
$(title).appendTo(homePage)

var calcDiv = $("<div></div>")
calcDiv.addClass("calc")
$(calcDiv).appendTo(homePage)

var titleIbm = $("<h4>If you want to know your body mass index just click here </h4>")
titleIbm.addClass("titleIbm")
titleIbm.appendTo(homePage)

var ibmBtn = $("<input></input>")
ibmBtn.addClass("ibmBtn")
ibmBtn.attr({"type":"submit","value":"MBI"})
$(ibmBtn).appendTo(homePage);

var sexeLabel = $("<label>gender :</label>")
sexeLabel.addClass("sexeLabel")
$(sexeLabel).appendTo(calcDiv)

var gender = $("<select></select>")
gender.addClass("gender")
$(gender).appendTo(calcDiv)

var man = $("<option>Man</option>")
man.addClass("man")
$(man).appendTo(gender)

var women = $("<option>Women</option>")
women.addClass("women")
$(women).appendTo(gender)

var weightLabel = $("<label>Weight (kg) :</label>")
weightLabel.addClass("weightLabel")
$(weightLabel).appendTo(calcDiv)

var weight = $("<input></input>")
weight.addClass("userWeight")
$(weight).appendTo(calcDiv)

var heightLabel = $("<label>height (cm) : </label>")
heightLabel.addClass("heightLabel")
$(heightLabel).appendTo(calcDiv)

var height = $("<input></input>")
height.addClass("userHeight")
$(height).appendTo(calcDiv)

var noIbmLabel = $("<label>are you :</label>")
noIbmLabel.addClass("noIbmLabel")
$(noIbmLabel).appendTo(calcDiv)

var noIbm = $("<select></select>")
noIbm.addClass("noIbm")
noIbm.attr("name","noIbm")
$(noIbm).appendTo(calcDiv)

var noIbmArr = ["worker/student ","muscle builders","long distance athletes(running over 3 km)","Pregnant women","Elderly(more than 65 years old)","Young children(less than 18 years old)"]

for(var i = 0 ;i<noIbmArr.length;i++){
    $("<option></option>").text(noIbmArr[i]).appendTo(noIbm) 
}

var walkLabel = $("<label>Do you walk every day ?</label>")
walkLabel.addClass("walkLabel")
$(walkLabel).appendTo(calcDiv)

var walk = $("<select></select>")
walk.addClass("walk")
$(walk).appendTo(calcDiv)

var yes = $("<option>Yes</option>")
yes.addClass("yes")
$(yes).appendTo(walk)

var no = $("<option>No</option>")
no.addClass("no")
$(no).appendTo(walk)

var walkDurationLabel = $("<label>Your walk duration daily</label>")
walkDurationLabel.addClass("walkDurationLabel")
$(walkDurationLabel).appendTo(calcDiv)

var walkDuration = $("<select></select>")
walkDuration.addClass("walkDuration")
$(walkDuration).appendTo(calcDiv)

var duration1 = $("<option>30 minutes to 1 hour</option>")
duration1.addClass("duration1")
$(duration1).appendTo(walkDuration)

var duration2 = $("<option>1 hour to 2 hours</option>")
duration2.addClass("duration2")
$(duration2).appendTo(walkDuration)

var duration3 = $("<option>more than 2 hours</option>")
duration3.addClass("duration3")
$(duration3).appendTo(walkDuration)

var ibmBtn2 = $("<input></input>")
ibmBtn2.addClass("ibmBtn2")
ibmBtn2.attr({"type":"submit","value":"MBI"})
$(ibmBtn2).appendTo(calcDiv)

var adviceDiv = $("<div></div>")
adviceDiv.addClass("advice")
$(adviceDiv).appendTo(homePage)

var planDiv = $("<div></div>")
planDiv.addClass("plan")
$(planDiv).appendTo(homePage)

var footer = $("<div></div>")
footer.addClass("footer")
$(footer).appendTo("body")

var about = $("<a>About</a>")
about.addClass("about")
about.attr("href","./about.html")
$(about).appendTo(footer)

var copyR = $("<p></p>")
copyR.text("© Copyright 2021 Djo association. All Rights Reserved. ")
copyR.addClass("copyR")
$(copyR).appendTo(footer)

var contact = $("<a>Contact</a>")
contact.addClass("contact")
contact.attr("href","./contact.html")
$(contact).appendTo(footer)

var plansDiv = $("<div></div>")
plansDiv.addClass("plansDiv")
$(plansDiv).appendTo("body")

var ibmValuesSel = $("<select></select>")
ibmValuesSel.addClass("ibmValuesSel")
ibmValuesSel.attr("name","ibmValuesSel")
$(ibmValuesSel).appendTo(plansDiv)

var ibmValues= ["none","less than 18.5","between 18.5 and 24.9","between 24.9 and 30","more than 30"]
for(var i = 0 ;i<ibmValues.length;i++){
    $("<option></option>").text(ibmValues[i]).appendTo(ibmValuesSel) 
}


var div1 = $("<div></div>")
div1.addClass("div1")
div1.appendTo("body")

var img1 = $("<img>")
img1.addClass("img1")
img1.attr("src","./images/underweight.jpg")
$(img1).appendTo(div1)
$(img1).hide()

var p1 = $("<p></p>")
p1.addClass("p1")
p1.text("this is you plan")
$(p1).appendTo(div1)
$(p1).hide()

var t1 = $("<h4></h4>")
t1.addClass("t1")
t1.text("If you know your BMI check some plans that might help you ")
$(t1).appendTo(div1)
$(t1).hide()

var a1 = $("<a>Try it</a>")
a1.addClass("a1")
a1.attr("href","./underweight.html")
$(a1).appendTo(div1)
$(a1).hide()

var div2 = $("<div></div>")
div2.addClass("div2")
div2.appendTo("body")

var img2 = $("<img>")
img2.addClass("img2")
img2.attr("src","./images/obese.jpg")
$(img2).appendTo(div2)
$(img2).hide()


var a2 = $("<a>Try it</a>")
a2.addClass("a2")
a2.attr("href","./obese.html")
$(a2).appendTo(div2)
$(a2).hide()


var div3 = $("<div></div>")
div3.addClass("div3")
div3.appendTo("body")

var img3 = $("<img>")
img3.addClass("img3")
img3.attr("src","./images/healthy.jpg")
$(img3).appendTo(div3)
$(img3).hide()


var a3 = $("<a>Try it</a>")
a3.addClass("a3")
a3.attr("href","./healthy.html")
$(a3).appendTo(div3)
$(a3).hide()



var div4 = $("<div></div>")
div4.addClass("div4")
div4.appendTo("body")

var img4 = $("<img>")
img4.addClass("img4")
img4.attr("src","./images/overweight.jpg")
$(img4).appendTo(div4)
$(img4).hide()


var a4 = $("<a>Try it</a>")
a4.addClass("a4")
a4.attr("href","./overweight.html")
$(a4).appendTo(div4)
$(a4).hide()



//factory function for store the user data when he sign in with the sign in button is clicked


$(".ibmValuesSel").hide()

var re = /[a-z]/
var r = /[A-Z]/
var n = /[0-9]/
var x = /[!@:;,%<>*#ç/-]/
$(logInDiv).hide()
$(signUpBtn).click(function () {
    $(logInDiv).hide()
    $(logInBtn).hide()
    $(signInBtn2).css({"position":"absolute","right":"46.8%","top":"70.2%"})
    $(".signInInputDiv").css("background", "#00000073").show(2000)
    $(signUpBtn).hide()
    })
    


var signInUsers = [{firstName: 'youssef', lastName: 'douki', age: '20', email: 'youssefdoukii1@gmail.com', password: 'Youssef123@',confirmPassword:'Youssef123@'}]
$(signInBtn2).click(function () {
   
    $(logInDiv).hide()
    if( signInPasswordInput.val() === signInPasswordRepeatInput.val() && signInPasswordInput.val().length > 6 && signInPasswordRepeatInput.val().length > 6 && re.test(signInPasswordRepeatInput.val()) && r.test(signInPasswordRepeatInput.val())&& n.test(signInPasswordRepeatInput.val()) && x.test(signInPasswordRepeatInput.val()) && re.test(signInPasswordInput.val()) && r.test(signInPasswordInput.val()) && n.test(signInPasswordInput.val()) && x.test(signInPasswordInput.val()) && re.test(signInEmailInput.val()) && x.test(signInEmailInput.val()) && parseInt(ageInput.val())<66 && parseInt(ageInput.val())>18){
        signInUsers.push({
        firstName : firstNameInput.val().toLowerCase(),
        lastName : lastNameInput.val().toLowerCase(),
        age : ageInput.val(),
        email : signInEmailInput.val(),
        password : signInPasswordInput.val(),
        confirmPassword : signInPasswordRepeatInput.val()
    })
    $(".signInInputDiv").hide()
    $(logInDiv).show()
    
    
}   
    else{
        alert("Please insert valid inputs")
    }
})

$(logInBtn).click(function(){
    $(logInDiv).show()
    $(".logIn").hide()
    $(".signUp").hide()
})

$(logInBtn2).click(function(){
    for(var i =0;i<signInUsers.length;i++){
    if(logInEmailInput.val() === signInUsers[i].email && logInPasswordInput.val() === signInUsers[i].password){
        $(logInDiv).hide()
        title.text("Welcome "+ signInUsers[i].firstName+" "+ signInUsers[i].lastName +" to myForm")
        $(title).show()
        $(".ibmBtn").show()
        $(".titleIbm").show()
        $(".ibmValuesSel").show()
        $(".t1").show()

        $(".a2").hide()
        $(".img2").hide()
        $(".a3").hide()
        $(".img3").hide()
        $(".a4").hide()
        $(".img4").hide()
        $('.p1').hide()
        $(".img1").hide()
        $(".a1").hide()

        return
    }
    }
    
    alert("Your email or your password is not correct")
})

$(ibmBtn).click(function () { 
    $(".calc").show().css("display","inline-grid")
    $(ibmBtn).hide()
    $(titleIbm).hide()
    $(ibmBtn2).show()
    $(".t1").hide()
    $(".ibmValuesSel").hide()
    $(".a2").hide()
        $(".img2").hide()
        $(".a3").hide()
        $(".img3").hide()
        $(".a4").hide()
        $(".img4").hide()
        $('.p1').hide()
        $(".img1").hide()
        $(".a1").hide()
});



$(walk).click(function () { 
    if(walk.val()==="Yes"){
        $(walkDuration).attr("disabled",false)
    }
    if(walk.val()==="No"){
        $(walkDuration).attr("disabled",true)
    }
    
});
var ibmValue = $("<p></p>")
    ibmValue.addClass("ibmValue")
    
    ibmValue.css("display","none")
    $(ibmValue).appendTo(homePage)
$(ibmBtn2).click(function () {
    $(ibmValue).empty()
    $(".ibmValuesSel").show().css({"position": "absolute",
        "height": "4%",
        "left": "57%",
        "top": "17%",
        "width":"16%"})
    $(".plansDiv").show()
    $(".t1").show().css({"width": "17%",
        "position": "absolute",
        "left": "56.2%",
        "top": "10%",
        "text-align": "center"})

    
    
    
    if(!isNaN(parseInt(weight.val()))  && !isNaN(parseInt(height.val()))){
    if( walk.val()!=="Yes" && noIbm.val()=== "worker/student"  ){
        var ibm = ((parseInt(weight.val())*10000)/(parseInt(height.val())**2)).toFixed(1)
            if(ibm<18.5){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered under-weight')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0            
            }
            else if(ibm>=18.5 && ibm<=19.9 || ibm<=24.9 && ibm>=23.5){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered normal weight')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else if(ibm>=25 && ibm<=29.9){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered over-weight')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else if(ibm>=30){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered obese')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else{
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered healthy weight')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            
    }
    else if( walk.val()!=="No" && noIbm.val()=== "worker/student"  ){
        var ibm = ((parseInt(weight.val())*10000)/(parseInt(height.val())**2)).toFixed(1)
            if(ibm<18.5){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered under-weight')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else if(ibm>=18.5 && ibm<=19.9 || ibm<=24.9 && ibm>=23.5){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered normal weight')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else if(ibm>=25 && ibm<=29.9){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered over-weight')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else if(ibm>=30){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered obese')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else{
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered healthy weight')
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
    }
    else if(walk.val()!=="Yes" && noIbm.val()!== "worker/student"  ){
       
        var ibm = ((parseInt(weight.val())*10000)/(parseInt(height.val())**2)).toFixed(1)
            if(ibm<18.5){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered under-weight . Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else if(ibm>=18.5 && ibm<=19.9 || ibm<=24.9 && ibm>=23.5){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered normal weight Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else if(ibm>=25 && ibm<=29.9){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered over-weight. Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else if(ibm>=30){
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered obese. Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
            else{
                $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered healthy weight. Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                ibm = 0   
            }
        }
        else if( walk.val()!=="No" && noIbm.val()!== "worker/student"  ){
            
            var ibm = ((parseInt(weight.val())*10000)/(parseInt(height.val())**2)).toFixed(1)
                if(ibm<18.5){
                    $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered under-weight . Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                    ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                    ibm = 0   
                }
                else if(ibm>=18.5 && ibm<=19.9 || ibm<=24.9 && ibm>=23.5){
                    $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered normal weight. Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                    ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                    ibm = 0   
                }
                else if(ibm>=25 && ibm<=29.9){
                    $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered over-weight. Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                    ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                    ibm = 0   
                }
                else if(ibm>=30){
                    $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered obese. Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                    ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                    ibm = 0   
                }
                else{
                    $(ibmValue).text("Your Body Mass Index is "+ibm +' . This is considered healthy weight. Don"t take it as consideration because the ' + noIbm.val() + " usually don't need to know their IBM (check about us to know more)")
                    ibmValue.show().css({"position": "absolute",
                    "left": "31%",
                    "width": "22%",
                    "top": "25%",
                    "font-family": "cursive",
                    "font-size": "20px"})
                    ibm = 0   
                }
            }

$(ibmValuesSel).click(function () { 
    if(ibmValuesSel.val()==="less than 18.5"){
        $(".a3").hide()
        $(".a2").hide()
        $(".a4").hide()
        $(".img2").hide()
        $(".img3").hide()
        $(".img4").hide()
        $(".img1").show().css({"position": "absolute",
            "width": "15%",
            "height": "16%",
            "left": "57.5%",
            "top": "21%"})
        $(".p1").show().css({"position": "absolute",
            "left": "57.5%",
            "top": "35.2%",})
        $(".a1").show().css({"position": "absolute",
        "left": "63%",
        "top": "36.8%",})
    }
    else if(ibmValuesSel.val()==="more than 30"){
        $(".a3").hide()
        $(".a1").hide()
        $(".a4").hide()
        $(".img1").hide()
        $(".img3").hide()
        $(".img4").hide()
        $(".img2").show().css({"position": "absolute",
        "width": "15%",
        "height": "16%",
        "left": "57.5%",
        "top": "21%"})
        $(".p1").show().css({"position": "absolute",
        "left": "57.5%",
        "top": "35.2%",})
        $(".a2").show().css({"position": "absolute",
        "left": "63%",
        "top": "36.8%",})
    }
    else if(ibmValuesSel.val()==="between 18.5 and 24.9"){
        $(".a1").hide()
        $(".a2").hide()
        $(".a4").hide()
        $(".img2").hide()
        $(".img1").hide()
        $(".img4").hide()
        $(".img3").show().css({"position": "absolute",
        "width": "15%",
        "height": "16%",
        "left": "57.5%",
        "top": "21%"})
        $(".p1").show().css({"position": "absolute",
        "left": "57.5%",
        "top": "35.2%",})
        $(".a3").show().css({"position": "absolute",
        "left": "63%",
        "top": "36.8%",})
    }
    else if(ibmValuesSel.val()==="between 24.9 and 30") {
        $(".a1").hide()
        $(".a2").hide()
        $(".a3").hide()
        $(".img2").hide()
        $(".img3").hide()
        $(".img1").hide()
        $(".img4").show().css({"position": "absolute",
        "width": "15%",
        "height": "16%",
        "left": "57.5%",
        "top": "21%"})
        $(".p1").show().css({"position": "absolute",
        "left": "57.5%",
        "top": "35.2%",})
        $(".a4").show().css({"position": "absolute",
            "left": "63%",
            "top": "36.8%",})
    }
    else if(ibmValuesSel.val()==="none"){
        $(".t1").show()
        $(".a2").hide()
        $(".img2").hide()
        $(".a3").hide()
        $(".img3").hide()
        $(".a4").hide()
        $(".img4").hide()
        $('.p1').hide()
        $(".img1").hide()
        $(".a1").hide()
    }
})
    }
    else{
        $(walkDuration).attr("disabled",false)
        alert("Please insert your right inputs")
    }
    $(walkDuration).attr("disabled",false)
    
});

$(ibmValuesSel).click(function () { 
    if(ibmValuesSel.val()==="less than 18.5"){
        $(".a3").hide()
        $(".a2").hide()
        $(".a4").hide()
        $(".img2").hide()
        $(".img3").hide()
        $(".img4").hide()
        $(".img1").show()
        $(".p1").show()
        $(".a1").show()
    }
    else if(ibmValuesSel.val()==="more than 30"){
        $(".a3").hide()
        $(".a1").hide()
        $(".a4").hide()
        $(".img1").hide()
        $(".img3").hide()
        $(".img4").hide()
        $(".img2").show()
        $(".p1").show()
        $(".a2").show()
    }
    else if(ibmValuesSel.val()==="between 18.5 and 24.9"){
        $(".a1").hide()
        $(".a2").hide()
        $(".a4").hide()
        $(".img2").hide()
        $(".img1").hide()
        $(".img4").hide()
        $(".img3").show()
        $(".p1").show()
        $(".a3").show()
    }
    else if(ibmValuesSel.val()==="between 24.9 and 30") {
        $(".a1").hide()
        $(".a2").hide()
        $(".a3").hide()
        $(".img2").hide()
        $(".img3").hide()
        $(".img1").hide()
        $(".img4").show()
        $(".p1").show()
        $(".a4").show()
    }
    else if(ibmValuesSel.val()==="none"){
        $(".t1").show()
        $(".a2").hide()
        $(".img2").hide()
        $(".a3").hide()
        $(".img3").hide()
        $(".a4").hide()
        $(".img4").hide()
        $('.p1').hide()
        $(".img1").hide()
        $(".a1").hide()
    }
});







