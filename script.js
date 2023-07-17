var pl1={
    name:"Player 1",
    p1_c:0,
    p1_val:[]
};

var pl2={
    name:"Player 2",
    p2_c:0,
    p2_val:[]
};

var count=0;

function playoddeven(){
    var p1=Math.floor(Math.random()*100+1);
    var p2=Math.floor(Math.random()*100+1);
    pl1.p1_val.push(p1);
    pl2.p2_val.push(p2);
    if(count==4){
        count++;
        if (p1%2==0)  pl1.p1_c++;
        if (p2%2==0)  pl2.p2_c++;
        if(pl1.p1_c>pl2.p2_c)document.getElementById("res").textContent=pl1.name+" Wins";
        else if(pl1.p1_c<pl2.p2_c)document.getElementById("res").textContent=pl2.name+" Wins";
        else document.getElementById("res").textContent="Match Draw";
    }
    else if(count<4){
        count++;
        console.log(count);
        if (p1%2==0) pl1.p1_c++;
        if (p2%2==0) pl2.p2_c++;
    }
    document.getElementById('score').innerText=pl1.p1_c+'-'+pl2.p2_c;
    updateCircle();
}



function updateCircle() {
    var p1cir=document.getElementById("p1").children;
    var p2cir=document.getElementById("p2").children;
    pl1.p1_val.forEach((a,ind)=> {
        if (a%2==0) {
            p1cir[ind].style.backgroundColor="green";
        } else {
            p1cir[ind].style.backgroundColor="red";
        }
    });
    pl2.p2_val.forEach((a,ind) => {
        if (a%2==0) {
            p2cir[ind].style.backgroundColor="green";
        } else {
            p2cir[ind].style.backgroundColor="red";
        }
    });
}



// function refresh() {
//     document.getElementById("res").textContent="Wait for the result!!!";
//     count=0;
//     pl1={
//         name:"Player 1",
//         p1_c:0,
//         p1_val:[]
//     };

//     pl2={
//         name:"Player 2",
//         p2_c:0,
//         p2_val:[]
//     };
// }