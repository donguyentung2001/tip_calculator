let calculate_button=document.querySelector('.calculate'); 
let add_person=document.querySelector('.add_person');
let info=document.querySelector('.info');
let person=1;
let receipt=1;
let last_person=0;
add_person.addEventListener('click',function() { 
    person+=1;
    let new_name=document.createElement("input"); 
    let new_amount=document.createElement("input"); 
    let new_tip=document.createElement("input"); 
    let new_para=document.createElement("div");
    let new_para2=document.createElement("div");
    let new_para3=document.createElement("div");
    new_amount.type="number"; 
    new_amount.className="amount" + person; 
    new_tip.type="number";
    new_tip.className="tip" + person;
    new_name.type="text"; 
    new_name.className="name"+person;
    new_para.style.whiteSpace="pre"
    new_para.textContent= "\r\n" + "Person " + person + "\r\n" + "Name"; 
    new_para.appendChild(new_name); 
    new_para2.textContent+="\r\n" + "Total amount"; 
    new_para2.appendChild(new_amount); 
    new_para3.textContent+= "\r\n"+ "Tip (in %)" 
    new_para3.appendChild(new_tip); 
    info.appendChild(new_para);
    info.appendChild(new_para2);
    info.appendChild(new_para3);
})

function one_calculate(name,amount,tip) { 
    let name2=document.querySelector(name); 
    let amount2=document.querySelector(amount);
    let tip2=document.querySelector(tip);
    let result=document.createElement('p'); 
    let totalamount=Number(amount2.value)+amount2.value*tip2.value/100;
    let taxamount=amount2.value*tip2.value/100;
    result.style.whiteSpace="pre";
    result.id="result" + receipt;
    result.textContent=name2.value+ "\r\n" + "Total amount (including tip): " + totalamount
    + "\r\n" + "Tip amount: " + taxamount;
    document.body.appendChild(result);
    receipt+=1;
}

calculate_button.addEventListener("click",function() { 
    if (receipt>1) { 
        receipt=1;
        for (let k=1 ; k < person; k++) {
            let clas="result"+ k;
            document.getElementById(clas).outerHTML="";
        }
    }
    for (let i=1 ; i<=person ; i++) { 
        name_para=".name" + i; 
        amount_para=".amount" + i; 
        tip_para=".tip" + i;
        one_calculate(name_para,amount_para,tip_para);
    }
})




