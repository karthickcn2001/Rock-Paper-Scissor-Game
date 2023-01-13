//Rock paper scissors game.
let maxPoint = prompt('Set the maximum points as per your wish: ');
if(maxPoint === 0){
    console.log('Max Point can\'t be set to 0.')
}
else{
    console.log(`You've set the max point to ${maxPoint}.'Let\'s start the game. `);  
}

var userPoint = 0;
var computerPoint = 0;
do{
    user = prompt('Enter \'rock\' or \'paper\' or \'scissor\': ');
    comp = Math.floor((Math.random())*3);//0,1,2 
    switch(comp){
    case 0:
        comp = 'rock';
        console.log(`Me: ${user} | Comp: ${comp}`);
        //user get's a point when user(paper) and comp(rock) ->case 1
        if(user === 'paper' && comp){
            userPoint += 1;
            console.log(`You: ${userPoint} / ${maxPoint}  `);
            msg = 'You got a point.';
            console.log(msg);
        }
        //Computer get's a point when user(scissor) and comp(rock) ->case 1
        else if(user === 'scissor' && comp){
            computerPoint += 1;
            console.log(`Computer: ${computerPoint} / ${maxPoint} `);
            msg = 'Computer got a point.'
            console.log(msg);
        }
        //if both get's rock try again!
        else{
            msg = 'Please try again!';
            console.log(msg);
        }
        break;

    case 1:
        comp = 'paper';
        console.log(`Me: ${user} | Comp: ${comp}`);
        //Computer get's a point when user(rock) and comp(paper) ->case 2
        if(user === 'rock' && comp){
            computerPoint += 1;
            console.log(`Computer: ${computerPoint} / ${maxPoint} `);
            msg = 'Computer got a point.';
            console.log(msg);
        }
        //user get's a point when user(scissor) and comp(paper) ->case 2
        else if(user === 'scissor' && comp){
            userPoint += 1;
            console.log(`You: ${userPoint} / ${maxPoint} `);
            msg = 'You got a point.';
            console.log(msg);
        }
        //if both get's paper try again!
        else{
            msg = 'Please try again!';
            console.log(msg);
        }
        break;

    case 2:
        comp = 'scissor'
        console.log(`Me: ${user} | Comp: ${comp}`);
        //user get's a point when user(rock) and comp(scissor) ->case 3 
        if(user === 'rock' && comp){
            userPoint += 1;
            console.log(`You: ${userPoint} / ${maxPoint} `);
            msg = 'You got a point.';
            console.log(msg);
        }
        //Computer get's a point when user(paper) and comp(scissor) ->case 3
        else if(user === 'paper' && comp){
            computerPoint += 1;
            console.log(`Computer: ${computerPoint} / ${maxPoint} `);
            msg = 'Computer got a point.';
            console.log(msg);
        }
        //if both get's scissor try again!
        else{
            msg = 'Please try again!'
            console.log(msg);
        }
        break;
}
}
while( userPoint < maxPoint && computerPoint < maxPoint  );