

function animate_skills_bar(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});
}

function load_content(sections){
	for(var i=0; i<sections.length; i++){ 
		var selector = '#' + sections[i].id
		$(selector).append(sections[i].content);
	}
}

function get_page_sections(){
	sections = [
		{	"id": "about", "content": bio.display_about() },
		{	"id": "minicontact", "content": bio.display_mini_contact() },
		{	"id": "work", "content": work.display()	},
		{	"id": "education", "content": education.display()	},
		{	"id": "technicalskills", "content": skills.display_technical() },
		{	"id": "softskills", "content": skills.display_soft() },
		{	"id": "projects", "content": projects.display_all() },
		{	"id": "links", "content": bio.links.join('') },
		{	"id": "sociallinks", "content": bio.links.join('') }
	]

	return sections;
}

//-------------------page content----------------------------------

var bio = {
	name: "Brandon Deen",
	summary: "<h4>I'm a major nerd that loves to write code, solve problems, and re-enact scenes from Frozen with my daughter. <em>**note she has recently discovered Ninja Turtles, so...WIN!**</em> <br><br>I am always looking for ways to improve myself in any way possible. <br>~Whether its learning a new language or api, or getting better at an existing skill.~ <br><br>When I'm not working I'm usually reading, playing games, or trying to make a game. <br><br>I am a huge baseball fan, Go Rangers!<br><br> I openly challenge anyone I can find to some Star Trek and/or Star Wars trivia. <br><br> Did I mention I am kind of a nerd?</h4>",
	links: [ 
		"&nbsp; <i class='fa fa-5x fa-square'></i>" ,
		"&nbsp; <a data-toggle='tooltip' title='My Github Profile' target='_blank' href='https://github.com/brandonDeen'><i class='fa fa-5x fa-github-square'></i></a>",
		"&nbsp; <i class='fa fa-5x fa-square'></i>",
		"&nbsp; <a data-toggle='tooltip' title='My LinkedIn Profile' target='_blank' href='https://www.linkedin.com/in/brandon-deen-116b7254'><i class='fa fa-5x fa-linkedin-square'></i></a>",
		"&nbsp; <i class='fa fa-5x fa-square'></i>"
	],
	display_about: function(){
		return "<div>" + bio.summary + "</div>";
	},
	display_mini_contact: function(){
		return bio.links.join('');
	}
}

var work = {
	jobs: [
		{	title: 'Senior Software Engineer', company: 'Fidelity Investments', 
			start: 'June 2015', end: 'Present', location: 'Westlake, TX', 
			description: "<p class='top_description'>Provide analytical problem-solving through object oriented programming concepts for the fourth largest mutual fund and financial services group in the world. Developing and customizing software for a diverse client base, both internal and external.</p>"+
				"<ul>"+
				"<li> Lead developer and scrum master on several projects and initiatives, designing solutions, and guiding other developers in their implementation</li>"+
				"<li> Design, develop, and test enhancements and new functionality (Java, Spring, Angular, SQL)</li>"+
				"<li> Provide support by investigating application issues and developing data fixes to correct issues (PL/SQL) </li>"+
				"<li> Developed and maintained software automation suite (Sahi/Selenium, Java)</li>"+
				"<li> Developed and customized new routing strategies for Fidelity’s Next Generation Call Center from requirements gathering through successful deployment (Javascript) </li>"+
				"<li>  Designed and developed custom software tools to increase the productivity of the Next Generation Call Center team and their customers (C#, .NET) </li>"+
				"<li> Developed and customized new routing strategies for Fidelity’s Next Generation Call Center from requirements gathering through successful deployment.</li>"+
				"<li> Introduced methodologies and best practices that enhanced team productivity and decreased the number of defects produced. </li>"+
				"<li> Contributed to the quote auditing and reporting tool that saved the firm over $1 million in stock exchange fees.</li>"+
				"<li> Leap Graduate: Leap training consists of classroom training and project development in the following technologies: "+
				"<ul><li>Object Oriented Design and Analysis, Requirements</li><li>Java (jaxb, Spring, JDBC, iBatis)</li>  <li>C# (.NET, LINQ, WPF)</li> <li>Web development (HTML5, CSS3, & Javascript)</li><li> Web Services (SOAP & REST) </li><li> SQL and PL/SQL</li></ul></li></ul>"

		},
		{title: 'Combat Engineer (12b)', company: 'U.S. Army', start: 'June 2008', end: 'July 2012', location: 'Ft. Leonard Wood, MO', description: ''},
		// {title: '', company: '', start: '', end: '', location: '', description: ''},
	],
	display: function(){
		s = "";

		for(job in work.jobs){
			s += "<br><div class='item'>"
				+ "<h4><strong>" + work.jobs[job].title + " at "+ work.jobs[job].company +"</strong></h4>"
				+ "<p class='top_description'>" + work.jobs[job].start + " - " + work.jobs[job].end + " in " + work.jobs[job].location
				+ "</p><hr>" + work.jobs[job].description
				+ "</div>"
			;
		}
		return s;
	}
}

var education = {
	schools: [
		{
			name: 'University of Texas at Arlington', location: 'Arlington, TX', 
			degree: 'B.S.', major: 'Software Engineering', gpa: '3.35', 
			graduation_date: 'May 2015', image: 'resources/uta.jpg',
			description: 
				"<ul><strong>Academic Achievements:</strong><li>Dean’s List (4 semesters)</li></ul>"+
				"<ul><strong>Senior Project:</strong><li>Developed software for an Android application to securely communicate with a Microsoft PixelSense application, using leds, photo diodes,  for the purpose of securely managing virtual casino chips while playing Blackjack. C# (PixelSense SDK), Java (Android SDK).</li></ul>"+
				"<ul><strong>Coursework:</strong><li>Java/Python/C Programming, Design Patterns, Software Testing, Database Development</li></ul>"
		},
		{	name: 'Stephen F. Austin State University', location: 'Nacogdoches, TX', 
			degree: 'B.S.', major: 'Physics', gpa: '3.2', graduation_date: 'Dec 2010', image: 'resources/sfa.jpg',
			description: 
				"<ul><strong>Academic Achievements:</strong><li>Phi Eta Sigma Honor Society</li><li>Dean’s List (4 semesters)</li></ul>"+
				// "<ul><strong>Senior Research:</strong><li>The Physics of Shaped Charges</li></ul>"+
				"<ul><strong>Coursework:</strong><li>Statics, Dynamics, Modern Physics, Electricity and Magnetism, Quantum Mechanics, Astronomy, Calculus (1, 2, & 3), & Differential Equations</li></ul>"
		},
	],
	display: function(){
		s = "";
		for(school in education.schools){
			s += "<br><div class='item'>"
				// + "<img src='"+ education.schools[school].image +"'> " 
				+ "<h4><strong>" + education.schools[school].name + "</strong></h4>"
				+ "<p class='top_description'>" + education.schools[school].degree + " - " + education.schools[school].major
				+ "<br>Graduated: " + education.schools[school].graduation_date + " with GPA - " + education.schools[school].gpa
				+ "</p><hr>" + education.schools[school].description
				+ "</div>"
			;
		}
		return s;
	}
}

var skills = {
	// skill levels 20: Beginner, 40: Familiar, 60: Proficient, 80: Expert, 100: Master
	technical: [
		{name: "Java", level: 80, level_str: "Proficient", color: "lightgreen" }
		,{name: "Python", level: 70, level_str: "Proficient", color: "lightgreen" }
		,{name: "C#", level: 70, level_str: "Proficient", color: "lightgreen" }
		,{name: "SQL", level: 80, level_str: "Proficient", color: "lightgreen" }
		,{name: "HTML", level: 75, level_str: "Proficient", color: "lightblue" }
		,{name: "CSS", level: 60, level_str: "Familiar", color: "lightblue" }
		,{name: "Javascript", level: 80, level_str: "Proficient", color: "lightblue" }
	],
	soft: [ 
		{ name: 'Communication', icon: "<i class='fa fa-2x fa-comments-o'></i>" }, 
		{ name: 'Creativity', icon: "<i class='fa fa-2x fa-gears'></i>" },
		{ name: 'Adaptability', icon: "<i class='fa fa-2x fa-wrench'></i>" },
		{ name: 'Collaboration', icon: "<i class='fa fa-2x fa-group'></i>" },
		{ name: 'Leadership', icon: "<i class='fa fa-2x fa-flag'></i>" },		
		{ name: 'Organization', icon: "<i class='fa fa-2x fa-sitemap'></i>" }
		// { name: 'Analytical Thinking', icon: "<i class='fa fa-2x fa-calculator'></i>" },
		],
	display_technical: function(){
		s = "";
		skills_arr = skills.technical;
		for(skill in skills_arr){
			s += "<div class='skillbar clearfix' data-percent='"+ skills_arr[skill].level +"%'>"
					+"<div class='skillbar-title'>"
						+"<span>"+	skills_arr[skill].name	+"</span>"
					+"</div>"
					+"<div class='skillbar-bar' style='background: "+ skills_arr[skill].color +";'></div>"
					+"<div class='skill-bar-percent'>"+	skills_arr[skill].level_str +"</div>"
				+"</div>";
		}
		return s;
	},
	display_soft: function(){
			s = [];
			for(var i=0; i<skills.soft.length; i+=3){
				s.push("<br><div class='row'>");
				s.push("<div class='col-sm-4'><h5>"+ skills.soft[i].name +"</h5>"+ skills.soft[i].icon +"</div>");
				s.push("<div class='col-sm-4'><h5>"+ skills.soft[i+1].name +"</h5>"+ skills.soft[i+1].icon +"</div>");
				s.push("<div class='col-sm-4'><h5>"+ skills.soft[i+2].name +"</h5>"+ skills.soft[i+2].icon +"</div>");
				s.push("</div>");
			}
			return s.join('');	
		}
};

var projects = {
		"projects":[
			{
				name: "PixelSense Transfer System", 
				description: "The Lynx is a 2 way communication device using an Arduino and an array of LEDs, photodiodes, and a Nexus 5. The Lynx communicated with the Microsoft PixelSense Table, taking commands from both the PixelSense and the Nexus 7 on the Lynx. The demo application was a blackjack game.", 
				github: "https://github.com/brandonDeen/DemoSoftware", 
				technologies_used: "C#, Microsoft PixelSense SDK, Java, Android SDK, Visual Studio & Eclipse",
				image: "resources/Argus.png"
			},	
			{
				name: "HackerRank", 
				description: "My repo of code challenges & problems I do for fun.", 
				github: "https://github.com/brandonDeen/Hacker_Rank", 
				technologies_used: "Java, Javascript, Python",
				image: "resources/hackerrank.png"
			},		
			{
				name: "Paper, Rock, Scissors, Spock, Lizard", 
				description: "A web version of the game, made famous on the show The Big Bang Theory, rock, paper, scissors, spock, lizard. <a target='_blank' href='https://brandondeen.github.io/RockPaperScissorsSpockLizard/'>Play it now!!!</a>",
				github: "https://github.com/brandonDeen/RockPaperScissorsSpockLizard",
				technologies_used: "HTML, CSS(Bootstrap & Font Awesome), Javascript (JQuery)",
				image: "resources/rpssl.jpg"
			},
			{
				name: "pyRPG: A Tale in Text", 
				description: "A text based role playing game, that runs in the console. You can create a character, customize their race, name and gender. Then go through a series of battles against tougher and tougher enemies, all while gaining gold that you can use to buy new equipment and upgrade you character with.", 
				github: "https://github.com/brandonDeen/Text_RPG_Python", 
				technologies_used: "Python, SQLite, Future: Incorporate Flask to create a web project",
				image: "resources/console.jpg"
			},
			{
				name: "DroidMD", 
				description: "An Android application that allows the user to log their diet, add medications with reminders, and alerts the users family if a medication has been missed. Users can enter their doctors information, allowing their physician to get daily, weekly, or monthly updates on everything the user tracks", 
				github: "#", 
				technologies_used: "Java, Android SDK, Eclipse",
				image: "resources/droidmd.jpg"
			},
			{
				name: "Angular Resume Page", 
				description: "A resume page utilizing AngularJS. HTML, CSS, Javascript(AngularJS)", 
				github: "https://github.com/brandonDeen/Resume_Angular_App", 
				technologies_used: "HTML, CSS - Bootstrap, Javascript - AngularJS, Sublime Text",
				image: "resources/angular.png"
			},
			{
				name: "Caesar Cipher", 
				description: "A simple webpage that allows a user to encrypt or decrypt a message using the Caesar Cipher method of encryption.  <a target='_blank' href='https://brandondeen.github.io/CaesarCipher/'>See it in action!</a>", 
				technologies_used: "HTML, CSS - Bootstrap, Javascript - JQuery", 
				github: "https://github.com/brandonDeen/CaesarCipher",
				image: "resources/caeser.jpg"
			},
			{
				name: "Guessing Game", 
				description: "A simple guessing game, where you have 20 chances guess a number between 1 and 1 million. Then the \"AI\" tries to guess the number too. Least number of guesses wins and overall scores are stored in localStorage. <a target='_blank' href='https://brandondeen.github.io/GuessingGame/'>Play it now!</a> ", 
				technologies_used: "HTML, CSS - Bootstrap, Javascript - JQuery", 
				github: "https://github.com/brandonDeen/GuessingGame",
				image: "resources/guessinggame.png"
			},
			{
				name: "My Personal Webpage", 
				description: "This page right here!", 
				github: "https://github.com/brandonDeen/brandonDeen.github.io", 
				technologies_used: "HTML, CSS - Bootstrap, FontAwesome, & W3 Schools, Javascript - JQuery",
				image: "resources/personal.jpg"
			},
			{
				name: "TicTacToe", 
				description: "A web tic tac toe game you can play against the computer. <a target='_blank' href='http://brandonDeen.github.io/TicTacToe'>Get your War Games on!</a>",
				github: "https://github.com/brandonDeen/TicTacToe",
				technologies_used: "HTML, CSS(Bootstrap and FontAwesome), Javascript(JQuery)",
				image: "resources/tictactoe.png"
			},
			{
				name: "Genesys Rules Interpreter", 
				description: "Takes in a bulky and user unfriendly xml file and translates it into json and outputs the new business rules into a table with the ability to export to excel.", 
				technologies_used: "C# - .NET & WPF, HTML, Javascript - JQuery & Datatables, CSS - Bootstrap", 
				github: "#",
				image: "resources/rules.png"
			},
			{
				name: "Quote Audit Reporting Tool (QUARTz)", 
				description: "This tool allows analysts to run a wide variety of reports used in both stock exchange audits and market decisions.", 
				technologies_used: "Java - Spring MVC & JDBC, HTML, CSS - Bootstrap, Javascript - JQuery & Datatables", 
				github: "#",
				image: "resources/quartz.jpg"
			},
			{
				name: "Email Spoofer", 
				description: "An Email Spoofer used for testing email routing in Fidelity's Next Generation Call Center, using SMTP.", 
				technologies_used: "C# - .NET & WPF, HTML, Javascript - JQuery, CSS - Bootstrap", 
				github: "#",
				image: "resources/spoofer.png"
			},
			{
				name: "Hangman", 
				description: "A web hangman game, that consumes an opensource random word api.", 
				github: "https://github.com/brandonDeen/Hangman", 
				technologies_used: "HTML, CSS(Bootstrap and FontAwesome), Javascript(JQuery)",
				image: "resources/hangman.png"
			},
			{
				name: "Android Calendar Application", 
				description: "A simple calendar application that allows the user to create events, event reminders, and shared events. Java", 
				github: "#", 
				technologies_used: "Java, Android SDK, Eclipse",
				image: "resources/calendar.jpg"
			},
			// {
			// 	name: "Portfolio Page", 
			// 	description: "Portfolio page following the Udacity HTML & CSS course",
			// 	github: "https://github.com/brandonDeen/Portfolio_Page",
			// 	technologies_used: "",
			// 	image: "http://placehold.it/255x255"
			// },
			// {
			// 	name: "Resume Page", 
			// 	description: "Resume page following the Udacity Javascript Beginner course",
			// 	github: "https://github.com/brandonDeen/frontend-nanodegree-resume",
			// 	technologies_used: "",
			// 	image: "http://placehold.it/255x255"
			// },			
			// {
			// 	name: "Fidelity: Email Test Automation", 
			// 	description: "A step further from manual email spoofing for Call Center routing tests.", 
			// 	technologies_used: "Ruby, Cucumber, RubyMine", 
			// 	github: "#",
			// 	image: "http://placehold.it/255x255"
			// },
		],
		
		display_single: function(index){ 
			var description = "<p><strong>Description:</strong> "+ projects.projects[index].description +"</p>"
							+"<p><strong>Technology Used:</strong> "+ projects.projects[index].technologies_used +"</p>"
							+"<p> View source code - "
			if( projects.projects[index].github != '#'){
				description += "<a target='_blank' href='"+ projects.projects[index].github +"'><i class='fa fa-3x fa-github'></i></a> </p>" 
			} else{
				description += "<a data-toggle='tooltip' title='This repository is private!'><i class='fa fa-3x fa-lock'></i></a></p>"
			}
			return "<div class='col-sm-4'>" 
						+"<a href='#project-"+index+"' data-toggle='collapse'>"             
							+"<img class='img-circle' src='"+ projects.projects[index].image +"' alt='Project' width='100' height='100'>"      
						+"</a>"
						+"<p class='text-center'><strong>"+ projects.projects[index].name +"</strong></p>" 
						+"<div id='project-"+ index +"' class='collapse'>" 					
							+ description    
						+"</div>" 
					+"</div>";
		},
		display_all: function(){
			s = [];
			for(var i=0; i<projects.projects.length; i+=3){
				s.push("<br><div class='row'>");
				s.push(projects.display_single(i));
				s.push(projects.display_single(i+1));
				s.push(projects.display_single(i+2));
				s.push("</div>");
			}
			return s.join('');
		}

	};

function handleMailto(){
	var email = 'brandon.deen47@gmail.com';
	var subject = $('#subject').val() || '';
	var body = $('#comments').val() || '';
	window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
}

function initializeMap(map, marker) {
	var mapProp = {
		center: new google.maps.LatLng(32.5632, -97.1417),
		zoom: 10,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};  

	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	marker = new google.maps.Marker({
		position: mapProp.center
	});

	marker.setMap(map);

	// return to marker after 5 seconds
	google.maps.event.addListener(map,'center_changed',function() {
		window.setTimeout(function() {
			map.panTo(marker.getPosition());
		},1000);
	});		

	google.maps.event.addListenerOnce(map, 'idle', function() {
		google.maps.event.trigger(map, 'resize');
	});
}

function loadGoogleMap(){
	var map = null, marker = null;

	google.maps.event.addDomListener(window, 'load', initializeMap(map, marker));	
}
//---------------------ON LOAD-----------------------------------

$(document).ready(function(){
	load_content( get_page_sections() );
});
