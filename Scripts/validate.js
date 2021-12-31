//function to check for mandatory fileds
function isEmpty(element){
  var val = element.value;
  var valError = document.getElementById(element.id+"Error");
  if(val.length==0 || val==""){
    valError.innerHTML = element.id + " can not be empty";
    return true;
  }
  else{
    valError.innerHTML = "";
	return false;
  }
}

// Format: Name@SiteName.domain
function validateEmail(element){
  var val = element.value;
  var valError = document.getElementById(element.id+"Error");
  var pattern = /^[a-zA-Z0-9\- ]+\@[a-zA-Z0-9 \-\.]+\.([a-zA-Z]{2,4})$/;
  if(pattern.test(val)){ 
   valError.innerHTML = "";
   return true;
  }else{
   valError.innerHTML = "Invalid input for "+element.id;
   return false;
  }
 }

//function which allows only numbers,tab and backspace
function allowNumeric(e2){
  var charcode = (e2.which)?e2.which:e2.keyCode;
  if(charcode>47&&charcode<58||charcode==8||charcode==9)
	  return true;
  else{
	  alert("This field takes only numbers");
	  return false;
  }
 }

//function which clears the browsers history
function logout(){
	//history.go(-1);
	window.location.href = "validate";
}

//function to open a new popup Window
function fnPopUp(strUrl,h,w)
{
	window.open(strUrl,"PopUp","menubar=no,toolbar=no,scrollbars=Yes,resizable=Yes,status=Yes,height="+h+",width="+w+",top=0,left=0").focus();
}
