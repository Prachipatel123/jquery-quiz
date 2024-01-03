var score = 0;
var question = [
  "Question 1: What is the captial of India?",
  "Question 2: What is the captial of USA?",
  "Question 3: What is the captial of Canada?",
  "Question 4: What is the captial of Australia?"
];

var opt1 = [
  "Delhi",
  "New York",
  "Vancouver",
  "Melbourne"
];

var opt2 = [
  "Mumbai",
  "Miami",
  "Ottawa",
  "Sydney"
];

var opt3 = [
  "Kolkata",
  "New Jersery",
  "Calgary",
  "Canberra"
];

var opt4 = [
  "Ahmedebad",
  "Washinton DC",
  "Montreal",
  "Gold Coast"
];

var correctans = [
  "Delhi",
  "Washinton DC",
  "Ottawa",
  "Canberra"
];

var qnum = 0;

function setQuestion(){
$("h1").text(question[qnum]);
var button = $(".btn");
$(button[0]).text(opt1[qnum]);
$(button[1]).text(opt2[qnum]);
$(button[2]).text(opt3[qnum]);
$(button[3]).text(opt4[qnum]);
}

setQuestion();

$("h4").text("score: "+score);


$(".btn").click(function(){
  var str = $(this).text();

  if(str == correctans[qnum]){
    qnum++;
    score++;
    $("h4").text("score: "+score);
    setQuestion();
  } else {
    $("h1").text("Wrong Answer! You Failed");
    $(".btn").hide();
  }
});


if(score == 4){
  $("h1").text("You Passed!");
  $(".btn").hide();
}
