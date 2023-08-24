const schoolnumber= document.getElementById("schoolnmbr");
const schoolsDiv = document.querySelector(".schools");
const cvSchoolList = document.getElementById("cvschoollist");



schoolnumber.addEventListener("change",function(){
const chosenschool= Number(schoolnumber.value) ;
let newContent = "";

for (let i = 1; i <= chosenschool; i++) {
    newContent += `
      <div class="section" id="school${i}">
        <label for="school${i}">${i}. Okul :</label>
        <input type="text" name="school${i}" id="school${i}">
        <input type="text" name="abt-school${i}" id="abt-school${i}" placeholder="Açıklama">
      </div>
    `;
  }

  let newlist="";

  for (let i = 1; i <= chosenschool; i++) {
    newlist += `
    <li id="item${i}"> 
    <span></span>
    <br>
    <ul>
      <li id="date${i}">
      <span></span></li>
    </ul>
  </li>
    `;
  }

  cvSchoolList.innerHTML=newlist;

  schoolsDiv.innerHTML=newContent;


  schoolsDiv.addEventListener("input", function (event) {
    const target = event.target; // Değişen input elementini al
  
    const inputName = target.getAttribute("name");
  
    if (inputName.startsWith("school")) {
      const inputNumber = parseInt(inputName.substring(6));
      const listitem = document.getElementById(`item${inputNumber}`);
      listitem.querySelector('span').innerHTML = target.value;
      
    } else if (inputName.startsWith("abt-school")) {
       
      const inputNumber = parseInt(inputName.substring(10));
      const listitem = document.getElementById(`date${inputNumber}`);
      listitem.querySelector('span').innerHTML = target.value;
    }
  });


});




const skillNumber= document.getElementById("skillnmbr");
const skillsDiv = document.querySelector(".skills");
const cvSkillList = document.getElementById("cvskilllist");


skillNumber.addEventListener("change",function(){
const chosenSkills= Number(skillNumber.value) ;
let newContent = "";

for (let i = 1; i <= chosenSkills; i++) {
    newContent += `
      <div class="section" id="skill${i}">
        <label for="skill${i}">${i}. Yetenek :</label>
        <input type="text" name="skill${i}" id="skill${i}">
        <input type="text" name="abt-skill${i}" id="abt-skill${i}" placeholder="Açıklama">
      </div>
    `;
  }
  let newlist="";

  for (let i = 1; i <= chosenSkills; i++) {
    newlist += `
    <li id="itemskill${i}"> 
    <span></span>
    <br>
    <ul>
      <li id="abtskill${i}">
      <span></span></li>
    </ul>
  </li>
    `;
  }

  cvSkillList.innerHTML=newlist;

  skillsDiv.innerHTML=newContent;


  skillsDiv.addEventListener("input", function (event) {
    const target = event.target; // Değişen input elementini al
  
    const inputName = target.getAttribute("name");
  
    if (inputName.startsWith("skill")) {
      const inputNumber = parseInt(inputName.substring(5));
      console.log(inputNumber);
      const listitem = document.getElementById(`itemskill${inputNumber}`);
      listitem.querySelector('span').innerHTML = target.value;
      
    } else if (inputName.startsWith("abt-skill")) {
       
      const inputNumber = parseInt(inputName.substring(9));
      console.log(inputNumber);
      const listitem = document.getElementById(`abtskill${inputNumber}`);
      listitem.querySelector('span').innerHTML = target.value;
    }
  });
});

const sectionInputs = document.querySelectorAll(".section input,.section textarea");
const cvElements = document.querySelectorAll(".cv-ppr box");



sectionInputs.forEach(input => {

    input.addEventListener("input", function(event) {
      const section = input.closest(".section");
      const inputName = input.getAttribute("name");
      const cvId = "cv" + inputName.toLowerCase();
      const cvElement=document.getElementById(cvId);
      
      if (section && cvElement) {
        cvElement.textContent = event.target.value;
      }
    });
  });



//görünümün değiştiği kısım
const cvSeciton=document.querySelector(".cv-ppr");
const leftColmn=document.querySelector(".left-col");
const imageBox=document.getElementById("img-box");

const nameBox=document.querySelector(".namebox");
const headers=cvSeciton.querySelectorAll("h4");
const hrTitle=document.querySelector(".namebox hr");


const backgroundclr=document.getElementById("backgroundclr");
const leftcolclr=document.getElementById("leftcolclr");
const nameclr=document.getElementById("nameclr");
const nametxtclr=document.getElementById("nametxtclr");


const font=document.getElementById("font");

const photoframe=document.getElementById("photoframe");

const lineclr=document.getElementById("lineclr");

const lineshape=document.getElementById("lineshape");

backgroundclr.addEventListener("input",function(){

    cvSeciton.style.backgroundColor=backgroundclr.value;
});


leftcolclr.addEventListener("input",function(){

    leftColmn.style.backgroundColor=leftcolclr.value;
});

nameclr.addEventListener("input",function(){

    nameBox.style.backgroundColor=nameclr.value;
});

nametxtclr.addEventListener("input",function(){

    nameBox.style.color=nametxtclr.value;

    hrTitle.style.borderColor=nametxtclr.value;
});

font.addEventListener("change",function(){
    cvSeciton.style.fontFamily=font.value;
});

photoframe.addEventListener("change",function(){

    imageBox.style.borderRadius=photoframe.value;
});


lineclr.addEventListener("input", function () {
 
    headers.forEach(header => {
        header.style.borderBottomColor = lineclr.value;
    });
  });

  lineshape.addEventListener("change", function () {

    headers.forEach(header => {
        header.style.borderBottomStyle = lineshape.value;
    });
  });