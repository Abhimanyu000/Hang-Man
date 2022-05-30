//taking item from local storage
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

//set player score
player1_score=0;
player2_score=0;

//set player name
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

//update score
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

//set turn of players
document.getElementById("player_question").innerHTML="Question asked by "+player1_name;
document.getElementById("player_answer").innerHTML="Question answered by "+player2_name;

//function sending answer
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("Lower case version of word just entered is "+word);
    //above is lower case
    CharAT1=word.charAt(1);
    console.log("SECOND LETTER OF WORD ENTERED IS "+CharAT1);
    //above is second letter
    LENGTHBy2withoutdecimalvaluesothereisnoconfusion=Math.floor(word.length/2);
    CharAT2=word.charAt(LENGTHBy2withoutdecimalvaluesothereisnoconfusion);
    console.log("THE NExT LETTER FROM THE WORD YOU ENTERED IS "+CharAT2);

    lengthminus=word.length-1;
    CharAT3=word.charAt(lengthminus);
    console.log("THE NEXT LETTER IS "+CharAT3);

    removecarrot1=word.replace(CharAT1, "_");
    removecarrot2=removecarrot1.replace(CharAT2, "_");
    removecarrot3=removecarrot2.replace(CharAT3, "_");
    console.log(removecarrot3);

    question_word="<h4 id='word_display'>Q. "+removecarrot3+"</h4>"
    answer_word="<br>Ans: <input type='text' id='input_check_box'>"

    checkbtn="<br><br><button class='btn btn-success' onclick='check()'>Send Your Answer</button>"

    row=question_word+answer_word+checkbtn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    getanswer=document.getElementById("input_check_box").value;
    finalanswer=getanswer.toLowerCase();
    console.log(finalanswer+"-this is the final answer that will get checked by the system");
    if(finalanswer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question asked by "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question asked by "+player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Question answered by "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Question answered by "+player1_name;
    }

    document.getElementById("output").innerHTML="";
}