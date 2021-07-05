'use strict'
let form=document.getElementById('form');
let table=document.getElementById('table');

function Student(name,grade,course,status){
    this.name=name;
    this.grade=grade;
    this.course=course;
    this.status=status;
    Student.all.push(this);

}
Student.all=[];


function getData(e){
    e.preventDefault();
    let name=e.target.stud.value;
    let grade=getRandomInt(35,100);
    let course=e.target.select.value;
    let status;
    if(grade >=50){
    status='pass'
    }else 
    {status='fail'}
new Student(name,grade,course,status);

localStorage.setItem('Input',JSON.stringify(Student.all));


 let tr=document.createElement('tr');
 table.appendChild(tr);

 let td1=document.createElement('td');
tr.appendChild(td1)
td1.textContent= name;

 let td2=document.createElement('td');
tr.appendChild(td2)
td2.textContent=grade;

 let td3=document.createElement('td');
tr.appendChild(td3)
td3.textContent=course;

 let td4=document.createElement('td');
tr.appendChild(td4)
td4.textContent=status;


}

form.addEventListener('submit',getData);


function render(){
    let data= JSON.parse(localStorage.getItem('Input'));
    if (data){
        Student.all=data
        for (let i = 0; i < data.length; i++) {

            let tr=document.createElement('tr');
            table.appendChild(tr);
            
            let td1=document.createElement('td');
            tr.appendChild(td1)
            td1.textContent=`${data[i].name}`;
            
            let td2=document.createElement('td');
            tr.appendChild(td2)
            td2.textContent=`${data[i].grade}`;
            
           let  td3=document.createElement('td');
            tr.appendChild(td3)
            td3.textContent=`${data[i].course}`;
            
           let  td4=document.createElement('td');
            tr.appendChild(td4)
            td4.textContent=`${data[i].status}`;
        }
    }
        }


render();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
    
