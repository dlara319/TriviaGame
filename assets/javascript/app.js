var tagOne = {
	question:  "What travels around the world but stays in one spot?",
	choice1: "Air",
	choice2: "The Sun",
	choice3: "Birds",
	choice4: "Time",
	answer: "Time",
	info: "<img src='assets/images/Clock.jpg'"
};

var tagTwo = {
	question: "I disappear every time you say my name. What am I?",
	choice1: "Wind",
	choice2: "Silence",
	choice3: "Beetlejuice",
	choice4: "Spectre",
	answer: "Silence",
	info: "<img src='assets/images/Silence.jpg'>"
}

var tagThree = {
	question: "I am an instrument that you can hear but not touch or see. What am I?",
	choice1: "Trumpet",
	choice2: "Your Voice",
	choice3: "Whistle",
	choice4: "Wind",
	answer: "Your Voice",
	info: "<img src='assets/images/voice.jpeg'>"

};

var tagFour = {
	question: "If you have me, you want to share me. Once you share me, you won't have me. What am I?",
	choice1: "A Secret",
	choice2: "Alcohol",
	choice3: "Snacks",
	choice4: "Gum",
	answer: "A Secret",
	info: "<img src='assets/images/secret.jpg'>"
};

var tagFive = {
	question: "I am full of holes but still hold water. What am I?",
	choice1: "A Cup",
	choice2: "Koral",
	choice3: "Hellraiser",
	choice4: "A Sponge",
	answer: "A Sponge",
	info: "<img src='assets/images/secret.jpg'>"
};

var tagSix = {
	question: "I am constantly overlooked by everyone but everyone has me. What am I?",
	choice1: "Nails",
	choice2: "Money",
	choice3: "Your Nose",
	choice4: "Pinkies",
	answer: "Your Nose",
	info: "<img src='assets/images/nose.jpg'>"
};

var tagSeven = {
	question: "I sit in a corner while traveling around the world. What am I?",
	choice1: "A package",
	choice2: "Germs",
	choice3: "A stamp",
	choice4: "A chewd piece of gum",
	answer: "A stamp",
	info: "<img src='assets/images/stamp.jpg'>"
};

var tagEight = {
	question: "If you lose me you may cause people around me to lose me too. What am I?",
	choice1: "Your temper",
	choice2: "The Invisable Man",
	choice3: "Rorschach",
	choice4: "A penny",
	answer: "Your temper",
	info: "<img src='assets/images/temper.jpg'>"
};

var tagNine = {
	question: "I belong to you but others use me more often then you do. What am I?",
	choice1: "Your Ora",
	choice2: "Your money",
	choice3: "Your name",
	choice4: "Handkerchief",
	answer: "Your Name",
	info: "<img src='assets/images/name.jpg'>"
};

var tagTen = {
	question: "I cannot be burned by fire or drowned in water. What am I?",
	choice1: "Ice",
	choice2: "Lava Girl",
	choice3: "The Human Torch",
	choice4: "Wind",
	answer: "Ice",
	info: "<img src='assets/images/ice.jpg'>"
};



var startQuestions = [tagOne, tagTwo, tagThree, tagFour, tagFive, tagSix, tagSeven, tagEight, tagNine, tagTen];


var questions = [];


var num = 0;
var time = 30;
var numbercorrect = 0;
var numberwrong = 0;
var numtimeout = 0;


function nextquestion() {
	time = 30;
	counter = setInterval(increment, 1000);
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>");
	$(".question").html(questions[num].question);
	$(".ans1").html(questions[num].choice1);
	$(".ans2").html(questions[num].choice2);
	$(".ans3").html(questions[num].choice3);
	$(".ans4").html(questions[num].choice4);
	$(".info").empty();
};


function increment() {
	time--
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>")
	if (time == 0) {
		timeout();
		stop();
		$(".choice").empty();
	} else if (time < 10) {
		$(".timer").addClass("red");
		setTimeout(function(){$(".timer").removeClass("red")}, 500)
	};
};

function stop() {
	clearInterval(counter);
	num++;
	if (num == questions.length) {
		setTimeout(endgame, 5000);
	} else {
		setTimeout(nextquestion, 5000);
	};
};


function correctanswer() {
	$(".question").html("<p>Correct!</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}


function wronganswer() {
	numberwrong++;
	$(".question").html("<p>Wrong! <br> The correct answer was: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
};


function timeout() {
	numtimeout++;
	$(".question").html("<p>Time is up sucka! <br> The correct answer was: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}


function endgame() {
	$(".question").html("<h2>You got " + numbercorrect + " answers correct!</h2>"
		+ "<h2>You got " + numberwrong + " wrong!</h2>" + "<h2>You didn't answer " + numtimeout + " questions!</h2>");
	$(".choice").empty();
	$(".timer").empty();
	$(".info").empty();
	num = 0;
	numbercorrect = 0;
	numberwrong = 0;
	numtimeout=0;
	$("button").show();
};



$(".startButton").click(function() {
	questions = startQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});



$(".choice").click(function() {

	if ($(this).text() == questions[num].answer) {
		numbercorrect++;
		correctanswer();
		stop();
	} else {
		wronganswer();
		stop();
	};

	$(".choice").empty();
});