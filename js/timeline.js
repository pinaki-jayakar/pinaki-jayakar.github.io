const green1 = document.getElementById("green1");
const green2 = document.getElementById("green2");
const green3 = document.getElementById("green3");
const green4 = document.getElementById("green4");
const red1 = document.getElementById("red1");
const red2 = document.getElementById("red2");
const red3 = document.getElementById("red3");
const blue1 = document.getElementById("blue1");
const blue2 = document.getElementById("blue2");
const blue3 = document.getElementById("blue3");
const blue4 = document.getElementById("blue4");

green1.addEventListener("mouseover", showPopup);
green1.addEventListener("mouseout", hidePopup);

green2.addEventListener("mouseover", showPopup1);
green2.addEventListener("mouseout", hidePopup1);

green3.addEventListener("mouseover", showPopup2);
green3.addEventListener("mouseout", hidePopup2);

green4.addEventListener("mouseover", showPopup3);
green4.addEventListener("mouseout", hidePopup3);

blue1.addEventListener("mouseover", showPopup4);
blue1.addEventListener("mouseout", hidePopup4);

blue2.addEventListener("mouseover", showPopup5);
blue2.addEventListener("mouseout", hidePopup5);

blue3.addEventListener("mouseover", showPopup6);
blue3.addEventListener("mouseout", hidePopup6);

blue4.addEventListener("mouseover", showPopup7);
blue4.addEventListener("mouseout", hidePopup7);

red1.addEventListener("mouseover", showPopup8);
red1.addEventListener("mouseout", hidePopup8);

red2.addEventListener("mouseover", showPopup9);
red2.addEventListener("mouseout", hidePopup9);

red3.addEventListener("mouseover", showPopup10);
red3.addEventListener("mouseout", hidePopup10);

const info = document.getElementById("info");
const date = document.getElementById("date");
const data = document.getElementById("data");

function showPopup(evt) {
  date.innerHTML = "12<sup>th</sup>May";
  data.innerHTML =
    "Declaration of Competition Guidelines by Shell Eco-marathon.";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup(evt) {
  info.style.visibility = "hidden";
}

function showPopup1(evt) {
  date.innerHTML = "20<sup>th</sup>May";
  data.innerHTML =
    "Segregation of topics in campaign videos and advertisement video";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup1(evt) {
  info.style.visibility = "hidden";
}

function showPopup2(evt) {
  date.innerHTML = "23<sup>rd</sup>May";
  data.innerHTML =
    "Commencement of QnA session on Instagram and Twitter till 21st June.";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup2(evt) {
  info.style.visibility = "hidden";
}

function showPopup3(evt) {
  date.innerHTML = "1<sup>st</sup>June";
  data.innerHTML =
    "Final Registration and submission of RT2050 Bonus Challenge.";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup3(evt) {
  info.style.visibility = "hidden";
}

function showPopup4(evt) {
  date.innerHTML = "14<sup>th</sup>May to 19<sup>th</sup>May";
  data.innerHTML = "Research over ideas groupwise.";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup4(evt) {
  info.style.visibility = "hidden";
}

function showPopup5(evt) {
  date.innerHTML = "30<sup>th</sup>May";
  data.innerHTML = "Finalization of animation ";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup5(evt) {
  info.style.visibility = "hidden";
}

function showPopup6(evt) {
  date.innerHTML = "22<sup>nd</sup>May";
  data.innerHTML = "Commencement of campaign on social media platforms";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup6(evt) {
  info.style.visibility = "hidden";
}

function showPopup7(evt) {
  date.innerHTML = "27<sup>th</sup>May";
  data.innerHTML = "Cinematic shoot for advertisement.";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup7(evt) {
  info.style.visibility = "hidden";
}

function showPopup8(evt) {
  date.innerHTML = "13<sup>th</sup>May";
  data.innerHTML =
    "Brainstorming Sessions, dividing futuristic potential ideas into groups.";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup8(evt) {
  info.style.visibility = "hidden";
}
function showPopup9(evt) {
  date.innerHTML = "21<sup>st</sup>May";
  data.innerHTML = "Commencement of animation work.";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup9(evt) {
  info.style.visibility = "hidden";
}
function showPopup10(evt) {
  date.innerHTML = "28<sup>th</sup>May";
  data.innerHTML = "Finalisation of 30 sec video layout.";
  info.style.visibility = "visible";
  info.style.animation = "trial 3s infinite alternate";
}

function hidePopup10(evt) {
  info.style.visibility = "hidden";
}
