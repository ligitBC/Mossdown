var option1 = document.getElementById("o1");
var option2 = document.getElementById("o2");
var option3 = document.getElementById("o3");
var q = document.getElementById("question");
//using hasair as plant var
var hasAir = false;
var hasSword = false;
var hasSwordL = false;
var health;
var array = ['F1','F2',]
var ranFunc;

//Changes the buttons to the default.
function defaultQ() {   
    q.innerHTML = "Press start";
    option1.setAttribute("onclick","L1()");
    option1.innerHTML = "Start";
    option2.setAttribute("onclick", "window.close()");
    option2.innerHTML = "Exit";
}
function L1() {   
    q.innerHTML = "You are stuck, there is a tunnel in front of you.";
    option1.setAttribute("onclick","L1walk1()");
    option1.innerHTML = "Walk";
    option2.setAttribute("onclick", "tryexit()");
    option2.innerHTML = "Exit";
}
defaultQ();
//Get ready for some cluttered code. All of this is deciding which option is which button. It ill demonstrate the first one and then you can figure out the rest:

//function L1wentLeft() {

//This first part is turning the sentence in the middle to what is happening to the player.
//q.innerHTML = "You went left and found a chest. Open it?";    

//This is changing the first button so that when you click it, it sends you to the right option.
//option1.setAttribute("onclick", "L2openChest()");

//This is changing the text of the first button.
//option1.innerHTML = "Yes";

//This is the same as option1.setAttribute("onclick", "L2openChest()"); but for the second button.
//option2.setAttribute("onclick", "L2leaveChest()");

//This is the same as option1.innerHTML = "Yes"; but for the second button.
//option2.innerHTML = "No";
//}


function L1walk1() {
    q.innerHTML = "You Continued and the pathway branches";
    option1.setAttribute("onclick","L2left1()");
    option1.innerHTML = "Go left";
    option2.setAttribute("onclick", "L2right1()");
    option2.innerHTML = "Go right";
	opendoor = false;
}
function gobackstart() {
    q.innerHTML = "You Are Back Where You Started.";
    option1.setAttribute("onclick","L1walk1()");
    option1.innerHTML = "Go back";
    option2.setAttribute("onclick", "tryexit()");
    option2.innerHTML = "Exit";
}
function L1gobackwalk() {
    q.innerHTML = "Which one?";
    option1.setAttribute("onclick","L2left1()");
    option1.innerHTML = "Go left";
    option2.setAttribute("onclick", "L2right1()");
    option2.innerHTML = "Go right";
}
function goback1() {
    q.innerHTML = "You Are At the fork.";
    option1.setAttribute("onclick","L1gobackwalk()");
    option1.innerHTML = "Choose a way";
    option2.setAttribute("onclick", "Gobackstart()");
    option2.innerHTML = "Go back";
}
function tryexit() {
    q.innerHTML = "You cannot exit.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Continue";
    option2.setAttribute("onclick", "L3stay()");
    option2.innerHTML = "I want exit!";
}
function L3stay() {
    q.innerHTML = "You cannot exit.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Yes";
    option2.setAttribute("onclick", "L3stay1()");
    option2.innerHTML = "No";
}
function L3stay1() {
    q.innerHTML = "You cannot exit.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Yes";
    option2.setAttribute("onclick", "L3stay2()");
    option2.innerHTML = "No";
}
function L3stay2() {
    q.innerHTML = "You cannot exit.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Yes";
    option2.setAttribute("onclick", "starvation()");
    option2.innerHTML = "No";
}
function starvation() {
    q.innerHTML = "You died of starvation.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Restart";
    option2.setAttribute("onclick", "window.close()");
    option2.innerHTML = "Close";
    hasSword = false;
}
function L4collectSword() {
    q.innerHTML = "You grabbed the dagger. Would you like to continue forwards or go back?";
    option1.setAttribute("onclick","continue1();");
    option1.innerHTML = "Continue";
    option2.setAttribute("onclick", "goback1();");
    option2.innerHTML = "Go back";
    hasSword = true;
}

function L2left1() {
    if(hasSword == true){
     q.innerHTML = "You are back in the room that you took the dagger from";
     option1.setAttribute("onclick","continue1()");
     option1.innerHTML = "Continue";
     option2.setAttribute("onclick", "goback1()");
     option2.innerHTML = "Go back";
    }
    if(hasSword == false){
        q.innerHTML = "You end up in a new room. There is a old dagger on the ground.";
        option1.setAttribute("onclick","L4collectSword()");
        option1.innerHTML = "Take it";
        option2.setAttribute("onclick","continue1()");
        option2.innerHTML = "Keep walking";
       }
}
function L2right1() {
    if(hasSword == true){
     q.innerHTML = "You end up in a small room with nothing but a hole in the wall. it looks like you dagger may fit in it";
     option1.setAttribute("onclick","continue2()");
     option1.innerHTML = "Stab wall ig";
     option2.setAttribute("onclick", "goback1()");
     option2.innerHTML = "Go back";
    }
    if(hasSword == false){
        q.innerHTML = "You end up in a small room with nothing but a hole in the wall.";
        option1.setAttribute("onclick","goback1()");
        option1.innerHTML = "Go back";
        option2.setAttribute("onclick", "trylookaround()");
        option2.innerHTML = "Look around";
       }

}
function wolffight() {
    q.innerHTML = "You were mauled to death.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Restart";
    option2.setAttribute("onclick", "window.close();");
    option2.innerHTML = "Close";
    var hasSword = false;
}
function stab1() {
    q.innerHTML = "You were mauled to death.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Restart";
    option2.setAttribute("onclick", "window.close();");
    option2.innerHTML = "Close";
    var hasSword = false;
}

function dodge2() {
    q.innerHTML = "There was no attack to dodge!.";
    option1.setAttribute("onclick","d()");
    option1.innerHTML = "Keep fighting";
    option2.setAttribute("onclick", "wolfflee();");
    option2.innerHTML = "Flee";
    var hasSword = false;
}
function wolfflee() {
    q.innerHTML = "You were mauled to death.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Restart";
    option2.setAttribute("onclick", "window.close();");
    option2.innerHTML = "Close";
    var hasSword = false;
}
function trylookaround() {
    q.innerHTML = "There is nothing you can see";
    option1.setAttribute("onclick","goback1()");
    option1.innerHTML = "Go back";
    option2.setAttribute("onclick", "trylookaround2()");
    option2.innerHTML = "Look more";
}
function trylookaround2() {
    q.innerHTML = "There is still nothing you can see";
    option1.setAttribute("onclick","goback1()");
    option1.innerHTML = "Go back";
    option2.setAttribute("onclick", "trylookaround()");
    option2.innerHTML = "Look more";
}

function continue2() {
    q.innerHTML = "The wall turns and ends up in a room with a trapdoor, and nothing else. The wall shuts behind you.";
    option1.setAttribute("onclick","entertrapdoor()");
    option1.innerHTML = "Go in the trapdoor";
    option2.setAttribute("onclick", "tryexit2();");
    option2.innerHTML = "Exit the room";
    opendoor = true;
}
function trappedroom() {
    q.innerHTML = "You are back in the trapdoor room. <br> ironically, you are trapped.";
    option1.setAttribute("onclick","entertrapdoor()");
    option1.innerHTML = "Go in the trapdoor";
    option2.setAttribute("onclick", "tryexit2();");
    option2.innerHTML = "Exit the room";
    opendoor = true;
}
function pexamine2() {
    if(hasAir == true){
     q.innerHTML = "there is a pedestal here. <br> it looks like your plant may fit in a notch.";
     option1.setAttribute("onclick","plantplacetrapped()");
     option1.innerHTML = "Place it on";
     option2.setAttribute("onclick", "crydeath()");
     option2.innerHTML = "Cry";
    }
    if(hasAir == false){
    q.innerHTML = "The Pedestal seems like a pot could fit on it.<br> You are still trapped, with no way out.";
    option1.setAttribute("onclick","crydeath()");
    option1.innerHTML = "Cry";
    option2.setAttribute("onclick", "crydeath();");
    option2.innerHTML = "Cry";
    }

}
function entertrapdoor() {
    q.innerHTML = "You climbed down the ladder leading from the trapdoor. <br> there is a pedestal in this room, <br> but no exits";
    option1.setAttribute("onclick","pexamine2()");
    option1.innerHTML = "Examine it";
    option2.setAttribute("onclick", "trappedroom();");
    option2.innerHTML = "climb the ladder";
}
function plantplacetrapped() {
    q.innerHTML = "You Place the plant, and, miraculously, <br> a hidden door opens up";
    option1.setAttribute("onclick","backtrackend()");
    option1.innerHTML = "Go in";
    option2.setAttribute("onclick", "trappedroom();");
    option2.innerHTML = "climb the ladder";
    hasAir = false;
    hasSword = false;
}
function backtrackend() {
    q.innerHTML = "You Go through the door, and there is sunlight.<br> You got the: Backtracker ending.";
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Restart";
    option2.setAttribute("onclick", "window.close();");
    option2.innerHTML = "Exit";
    hasAir = false;
    hasSword = false;
}
function tryexit2() {
    q.innerHTML = "You are trapped, and cannot exit";
    option1.setAttribute("onclick","continue2()");
    option1.innerHTML = "ok";
    option2.setAttribute("onclick", "entertrapdoor()");
    option2.innerHTML = "ok";
}
function continue1() {
    q.innerHTML = "The path splits again from the room";
    option1.setAttribute("onclick","left1()");
    option1.innerHTML = "Go left";
    option2.setAttribute("onclick", "gardenroom();");
    option2.innerHTML = "Go right";
}
function left1() {
    q.innerHTML = "There is a long hallway this way, <br> but there is a hole in the ground";
    option1.setAttribute("onclick","walkrandom()");
    option1.innerHTML = "Attempt to jump";
    option2.setAttribute("onclick", "continue1();");
    option2.innerHTML = "Go back";
}
function right1() {
    q.innerHTML = "There is another room directly through this doorway"
    option1.setAttribute("onclick","gardenroom()");
    option1.innerHTML = "Go in"
    option2.setAttribute("onclick","left1()")
    option2.innerHTML = "Look at other hall"
}
function placeholder() {
    q.innerHTML = "This part of the game is incomplete, you will be sent back to the start"
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "ok"
    option2.setAttribute("onclick","defaultQ()")
    option2.innerHTML = "ok"
}
function gardenroom() {
    if(hasAir == true){
     q.innerHTML = "You are back in the plant room";
     option1.setAttribute("onclick","keepwalk()");
     option1.innerHTML = "Keep walking";
     option2.setAttribute("onclick", "L2left1()");
     option2.innerHTML = "Go back";
    }
    if(hasAir == false){
    q.innerHTML = "You end up in a room <br> There are musty plants on shelfs"
    option1.setAttribute("onclick","takeplant()");
    option1.innerHTML = "Take one"
    option2.setAttribute("onclick","keepwalk()")
    option2.innerHTML = "Keep going"
       }

}
function keepwalk() {
    if(hasAir == true){
     q.innerHTML = "You are in a room with a pedestal";
     option1.setAttribute("onclick","gardenroom()");
     option1.innerHTML = "Go back";
     option2.setAttribute("onclick", "approach()");
     option2.innerHTML = "Approach";
    }
    if(hasAir == false){
    q.innerHTML = "You end up in a room with a pedestal"
    option1.setAttribute("onclick","angerspirits()");
    option1.innerHTML = "kick it"
    option2.setAttribute("onclick","gardenroom()")
    option2.innerHTML = "Go back"
       }

}

function takeplant() {
    q.innerHTML = "You take a plant"
    option1.setAttribute("onclick","keepwalk()");
    option1.innerHTML = "Keep walking"
    option2.setAttribute("onclick","L2left1()")
    option2.innerHTML = "Go back"
    hasAir = true;
}
function approach() {
    q.innerHTML = "You look at the pedestal"
    option1.setAttribute("onclick","pplace()");
    option1.innerHTML = "place plant"
    option2.setAttribute("onclick","keep1()")
    option2.innerHTML = "Go back"
    hasAir = true;
}
function pplace() {
    q.innerHTML = "You put the plant down. as you do, <br> You hear a grinding noise, but cannot identify from where"
    option1.setAttribute("onclick","hallwalk()");
    option1.innerHTML = "Continue on"
    option2.setAttribute("onclick","trapped2()")
    option2.innerHTML = "Go back"
    hasAir = false;
}
function trapped2() {
    q.innerHTML = "You hasten to exit, but realize the wall has shifted, <br> trapping you!"
    option1.setAttribute("onclick","hallwalk()");
    option1.innerHTML = "Continue on"
    option2.setAttribute("onclick","trapped1()")
    option2.innerHTML = "Move the plant"
}
function trapped1() {
    q.innerHTML = "You hasten to move the plant, but realize it is gone already"
    option1.setAttribute("onclick","hallwalk()");
    option1.innerHTML = "Continue on"
    option2.setAttribute("onclick","crydeath()")
    option2.innerHTML = "Cry"
}
function crydeath() {
    q.innerHTML = "You fall asleep crying<br> and never wake up."
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Restart"
    option2.setAttribute("onclick","window.close()")
    option2.innerHTML = "Exit"
    hasAir = false;
    hasSword = false;
}
function impaledeath() {
    q.innerHTML = "You Are impaled, black out,<br> and never wake up. it seems that<br> the plant was not helpful after all."
    option1.setAttribute("onclick","defaultQ()");
    option1.innerHTML = "Restart"
    option2.setAttribute("onclick","window.close()")
    option2.innerHTML = "Exit"
    hasAir = false;
    hasSword = false;
}
function hallwalk() {
    q.innerHTML = "You start to walk down the hall,<br> but there is a pit of spikes!"
    option1.setAttribute("onclick","impaledeath()");
    option1.innerHTML = "Jump them"
    option2.setAttribute("onclick","crydeath()")
    option2.innerHTML = "Go back"
}

function walkrandom() { // Randomly Execute Function
 ranFunc = array[Math.floor(Math.random() * array.length)];
 if (ranFunc == 'F1') {
        walk2();
 }
 if (ranFunc == 'F2') {
        walk21();
 }
}
function walk21() {
    q.innerHTML = "You do the tripping of into a hole and fall quite a ways";
    option1.setAttribute("onclick","walk2()");
    option1.innerHTML = "Walk";
    option2.setAttribute("onclick", "continue1();");
    option2.innerHTML = "Go back";
}

function walk2() {
    q.innerHTML = "You reach a room with a trapdoor, after jumping the hole";
    option1.setAttribute("onclick","walk2()");
    option1.innerHTML = "Go through it";
    option2.setAttribute("onclick", "continue1();");
    option2.innerHTML = "Go back";
}