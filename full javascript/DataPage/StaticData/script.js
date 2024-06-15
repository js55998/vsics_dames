class empData {
  emp1 = {
    name: "Rahul",
    empId: 3567,
    mailId: "mailme@gmail.com",
    Address: {
      "City Name": "Vijayawada",
      District: "Krishna district",
      pin: 526894,
    },
    Hobbies: ["Netflix", "Tennis", "Coding"],
  };
  emp2 = {
    name: "Ravi",
    empId: 9867,
    mailId: "ravimail@gmail.com",
    Address: {
      "City Name": "Guntur",
      District: "Prakasham district",
      Pin: 685479,
    },
    Hobbies: ["Reading", "Swimming", "Baking"],
  };
  emp3 = {
    name: "Santosh",
    empId: 8876,
    mailId: "santoshmail@gmail.com",
    Address: {
      "City Name": "Warangal",
      District: "Hanamkonda district",
      Pin: 996587,
    },
    Hobbies: ["Gym", "Reading Novels"],
  };
  emp4 = {
    name: "Surya",
    empId: 3469,
    mailId: "suryamail@gmail.com",
    Address: {
      City: "Nazamabad",
      District: "Nazamabad district",
      Pin: 648597,
    },
    Hobbies: ["Badminton", "E-Sports", "Netflix"],
  };
  emp5 = {
    name: "Kiran",
    empId: 8864,
    mailId: "kirammail@gmail.com",
    Address: {
      city: "Karimnagar",
      district: "Karimnagar district",
      pin: 666954,
    },
    Hobbies: ["Gaming", "Cooking", "Music"],
  };
}

const elements = new empData();
//target the Body or Document
const body = document.querySelector("#body");
//console.log("body:", body);
//Create Main Box
const mainBox = document.createElement("div");
//Add Css Class
mainBox.className = "mainBox";
//Add this Main box to the div
body.appendChild(mainBox);

Object.keys(elements).map((element, index) => {
  const empBox = document.createElement("div");
  empBox.className = `emp ${index + 1}`;
  const addBox = document.createElement("div");
  addBox.className = "addressBox";

  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const h3Address = document.createElement("h3");

  h2.innerHTML = `Name:${elements[element].name}`;
  h3.innerHTML = `Employee Id:${elements[element].empId}`;
  h3Address.innerHTML = "Address:";
  addBox.appendChild(h3Address);

  Object.keys(elements[element].Address).map((singleAddress, index) => {
    const addComponent = document.createElement("p");
    addComponent.innerHTML = `<b>${singleAddress}:${elements[element].Address[singleAddress]}</b>`;
    addBox.appendChild(addComponent);
  });

  const hobbies = document.createElement("p");
  const hobbiesHeading = document.createElement("span");
  hobbiesHeading.innerHTML = `<b>Hobbies:</b>`;
  hobbies.appendChild(hobbiesHeading);

  elements[element].Hobbies.map((hobby,index) => {
    const hobbiesLength=elements[element].Hobbies.length;
    const eachHobby=document.createElement('span');
    if(index+1 !== hobbiesLength){ 
      eachHobby.innerHTML=`${hobby},`;  
    }else{ 
      eachHobby.innerHTML=`${hobby}.`;
    }
    hobbies.appendChild(eachHobby);
  });

  empBox.appendChild(h2);
  empBox.appendChild(h3);
  empBox.appendChild(addBox);
  empBox.appendChild(hobbies)
  mainBox.appendChild(empBox);
});

//!Static Approach
//console.log('elements:', elements)
//console.log('elements:', elements['emp1'])
//console.log('elements:', elements['emp1'].name)
//console.log('elements:', elements['emp1'].Address)

//!Dynamic Approach
//to get all key in Array format
//console.log(Object.keys(elements))
// Object.keys(elements).map((element,index)=>{
//   //console.log(index);
//   //console.log(element);
//   //console.log(elements[element]);
//   //console.log(`<h2>${elements[element].Address}</h2>`)
//   Object.keys(elements[element].Address).map((singleAddress,index)=>{
//     console.log(`${singleAddress}:${elements[element].Address[singleAddress]}`)
//   });
// });
