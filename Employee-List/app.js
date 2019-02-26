

const employeeList = [{
  name: 'Jan',
  officeNum: 1,
  phoneNum: '222-222-2222'
},
{
  name: 'Juan',
  officeNum: 304,
  phoneNum: '489-789-8789'
},
{
  name: 'Margie',
  officeNum: 789,
  phoneNum: '789-789-7897'
},
{
  name: 'Sara',
  officeNum: 32,
  phoneNum: '222-789-4654'
},
{
  name: 'Tyrell',
  officeNum: 3,
  phoneNum: '566-621-0452'
},
{
  name: 'Tasha',
  officeNum: 213,
  phoneNum: '789-766-5675'
},
{
  name: 'Ty',
  officeNum: 211,
  phoneNum: '789-766-7865'
},
{
  name: 'Sarah',
  officeNum: 345,
  phoneNum: '222-789-5231'
}
];
console.log(employeeList[1]);
console.log("hey");
// function render (newString){
// let command = " ";
// const print = function () {
//   let newString = " ";
//   for (let i = 0; i < employeeList.length; i++) {
//     newString += `<div class="entry"><p> ${employeeList[i].name}</p><p> ${employeeList[i].officeNum}</p><p> ${employeeList[i].phoneNum}</p></div> `;
//   }
//   render(newString);
// }
// }
// print();

console.log(employeeList[4]);

// Using JavaScript programmatically append each drinkList item to the 'drink-options' div

for (let i = 0; i < employeeList.length; i++) {
  const newDiv = $('<div>');
  newDiv.text(`${employeeList[i]['name']+ " " + employeeList[i]['officeNum']+ " " + employeeList[i]['phoneNum']}`);
  $('#list').append(newDiv);
};
$(document).ready(function(){
  $("#view").click(function(){
    $("#name, #office, #phone,#search").hide();
});
  });
//show verify
$(document).ready(function(){
  $("#verify").click(function(){
    $("#office, #phone,#list").hide();
});
  });
const runCommand = function () {
  console.log("add");
  event.preventDefault();
  switch (command) {
    case 'add':
      add();
      break;
    case 'verify':
      verify();
      break;
    case 'update':
      update();
      break;
      case 'Delete':
      Delete();
      break;
  }
}
const setView = function () {
  $('#list').empty();
  command = " ";
  $('form').hide();
  print();
}

const setAdd = function () {
  $('#list').empty();
  command = "add ";
  $('form').show();
  $('.nav flex-column').show();
  print();
}

const setVerify = function () {
  $('#list').empty();
  command = "veify ";
  $('form').show();
  $('.nav flex-column').hide();
  print();
}

const setDelete =function(){
  $('#list').empty();
  command = "delete ";
  $('form').show();
  $('.nav flex-column').hide();
}

const setUpdate =function(){
  $('#list').empty();
  command = "update ";
  $('form').show();
  $('.nav flex-column').hide();
}

const add = function () {
  const userName = $('#name').val();
  const officeNum = $('#officeNumber').val();
  const phoneNum = $('#phoneNumber').val();
  employeeList.push({
    name: userName,
    officeNum: officeNum,
    phoneNum: phoneNum
  })
  print();
}
const remove =function(){
  const userName =$('#name').val();
  let newString ='no';
  for (let i = 0; i < employeeList.length; i++){
    if(employeeList[i].name === userName){
      employeeList.splice;
    }
  }

const verify =function(){
  const userName =$('#name').val();
  let newString ='no';
  for (let i = 0; i < employeeList.length; i++){
    if(employeeList[i].name === userName){
      newString ='yes';
    }
  }
  render(newString);
}
const render = function (newString) {
  $('#list').html(newString);
}

$('#view').on('click', setView);
$('#add').on('click', setAdd);
$('#update').on('click', setUpdate);
$('#delete').on('click', setDelete);
$('#verify').on('click', setVerify);
}
// for (let i = 0; i < employeeList.length; i++) {
//   const newDiv = $('<div>');
//   newDiv.text(`${employeeList[i]}`);
//   $('#employeeList').append(newDiv);
// };

// $('#form').html('Drink List');

// for(let i=0; i<employeeList.length; i++){
// const newDiv = $('<div>');
// newDiv.html(employeeList[i]);
// $('#form').append(newDiv);
// newDiv.attr('class', 'drink');
// };

   

// for (let i = 0; i < employeeList.length; i++){
//   const Employee= employeeList[i];
//   alert(Employee);
// }
//update

// //Hide and Show Functions
// (function(){
//   $("#View").hide();
// })();

// const showVerify = function() {
//   $("#View").hide();
//   $("#Update").hide();
//   $("#Delete").hide();
//   $("Verify").show();
// };

// $("#View").on("click",showVerify);
