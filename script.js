const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyrIs87-kGsHMEkq9mosUPpF9N0CWjOjmnuMG6x39Dza5bx4Q_6D1cqSPZ30us3hqlr/exec";
const form = document.getElementById("reviewForm");
const successBox = document.getElementById("successBox");
const commentBox = document.getElementById("comment");

window.onload = () => {

const randomComment =
feedbackComments[
Math.floor(
Math.random() *
feedbackComments.length
)
];

commentBox.value = randomComment;

};
form.addEventListener("submit", async (e) => {

e.preventDefault();

const name = document
.getElementById("name")
.value
.trim();

const mobile = document
.getElementById("mobile")
.value
.trim();

const rating = document.querySelector(
'input[name="rating"]:checked'
).value;

const comment = commentBox.value.trim();

if(name===""){

alert("Please enter your name.");

return;

}

if(!/^[0-9]{10}$/.test(mobile)){

alert("Please enter a valid 10 digit mobile number.");

return;

}

if(comment===""){

alert("Please write your feedback.");

return;

}

const reviewData = {

name:name,

mobile:mobile,

rating:rating,

comment:comment

};
  try{

const response = await fetch(WEB_APP_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(reviewData)

});

const result = await response.json();

if(result.success){

form.style.display="none";

successBox.style.display="block";

}else{

alert("Something went wrong. Please try again.");

}

}catch(error){

console.error(error);

alert("Network error. Please try again.");

}

});
setTimeout(() => {

form.reset();

const randomComment =
feedbackComments[
Math.floor(
Math.random() *
feedbackComments.length
)
];

commentBox.value = randomComment;

form.style.display = "block";

successBox.style.display = "none";

document.getElementById("star5").checked = true;

},3000);
document
.getElementById("mobile")
.addEventListener("input",function(){

this.value=this.value
.replace(/[^0-9]/g,"")
.substring(0,10);

});

