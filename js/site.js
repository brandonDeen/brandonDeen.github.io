$(document).ready(function(){

	load_content( get_page_sections() );
	animate_skills_bar();
});

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
		 {	"id": "header", 		"content": get_header()		}
		,{	"id": "footer", 		"content": get_footer()		}
		,{	"id": "home", 			"content": get_home()		}
		,{	"id": "about", 			"content": get_about()		}
		,{	"id": "projects",		"content": get_portfolio()	}
		,{	"id": "contact",		"content": get_contact()	}
	]

	return sections;
}

//-------------------page content----------------------------------

function get_header(){
	return	"<div class='container-fluid'>"
			+	"<div class='navbar-header'>" 
				+	"<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>"
					+	"<span class='icon-bar'></span>"
					+	"<span class='icon-bar'></span>"
					+	"<span class='icon-bar'></span>"
				+	"</button>"
				+	"<a class='navbar-brand' href='#myPage'>"+ bio.name +"</a>"
			+	"</div>"
			+	"<div class='collapse navbar-collapse' id='myNavbar'>"
				+	"<ul class='nav navbar-nav navbar-right'>"
					+	"<li><a href='#home'>Home</a></li>"
					+	"<li><a href='#about'>About</a></li>"					
					+	"<li><a href='#projects'>Projects</a></li>"
					+	"<li><a href='#contact'>Contact Me</a></li>"
					+	"<li class='dropdown'><a class='dropdown-toggle' data-toggle='dropdown' href='#'"
				+	"</ul>"
			+	"</div>"
		+	"</div>"
}

function get_footer(){
	return	"<a class='up-arrow' href='#myPage' data-toggle='tooltip' title='TO TOP'>"
			+	"<span class='glyphicon glyphicon-chevron-up'></span>"
		+	"</a>"
		// +	"<br><br><p>This site was built by the man himself...<em>Brandon Deen</em></p>"
}

function get_home(){
	// this is just a single image in the carousel
	return 	"<div class='carousel-inner' role='listbox'>"
				+"<div class='item active'>"
					+"<img id='top-image' src='"+ bio.big_image +"' alt='Brandon-0' width='1200' height='700'>"
					+"<div class='carousel-caption'> <p>"+ bio.philosophy +"</p> </div>"
				+"</div>"
			+"</div>"
}

function get_carousel(){
	return carousel_indicators() + carousel_slides() +	carousel_controls();
}

function carousel_indicators(){
	return "<ol class='carousel-indicators'>"
			+	"<li data-target='#myCarousel' data-slide-to='0' class='active'></li>"
			+	"<li data-target='#myCarousel' data-slide-to='1'></li>"
			+	"<li data-target='#myCarousel' data-slide-to='2'></li>"
		+	"</ol>"
}

function carousel_slides(){
	return	"<div class='carousel-inner' role='listbox'>"
			+	"<div class='item active'>"
				+	"<img src='resources/top-image.jpg' alt='Brandon-0' width='1200' height='700'>"
				// +	"<div class='carousel-caption'>"
				// 	+	"<h3>Me 0</h3>"
				// 	+	"<p>caption lorem ipsum.</p>"
				// +	"</div>"
			+	"</div>"
			+	"<div class='item'>"
				+	"<img src='resources/434841.jpg' alt='Brandon-1' width='1200' height='700'>"
				// +	"<div class='carousel-caption'>"
				// 	+	"<h3>Me 1</h3>"
				// 	+	"<p>caption lorem ipsum.</p>"
				// +	"</div>"
			+	"</div>"
			+	"<div class='item'>"
				+	"<img src='resources/178116.jpg' alt='Brandon-2' width='1200' height='700'>"
				// +	"<div class='carousel-caption'>"
				// 	+	"<h3>Me 2</h3>"
				// 	+	"<p>caption lorem ipsum.</p>"
				// +	"</div>"
			+	"</div>"
		+	"</div>"
}

function carousel_controls(){
	return	"<a class='left carousel-control' href='#home' role='button' data-slide='prev'>"
    		+	"<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>"
    		+	"<span class='sr-only'>Previous</span>"
    	+	"</a>"
    	+	"<a class='right carousel-control' href='#home' role='button' data-slide='next'>"
    		+	"<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>"
    		+	"<span class='sr-only'>Next</span>"
    	+	"</a>"
}

function get_about(){
	return	"<h2 class='text-center'>About</h2>"
		+"<div class='row'>"    
			+"<div class='col-sm-1'></div>" 
			+"<div class='col-sm-4'>" 
				+ bio.display()
			+"</div>"   
			+"<div class='col-sm-6'>"     
				+"<h3 class='text-center'>Skills</h3>"     
				+ skills.string()
			+"</div>" 
			+"<div class='col-sm-1'></div>" 
		+"</div><br>";
}

function get_portfolio(){
	return "<h2 class='text-center'>Projects</h2>"
		+"<div class='row'>" 
			+ projects.display_latest()
		+"</div><br><br>"
		+"<button type='button' class='btn btn-default' href='https://github.com/brandonDeen'>More Projects</button>"
	;
}

function get_contact(){
	return	"<h2 class='text-center'>Contact Me</h2><br><br><br>" + bio.big_links.join('')

}

var bio = {
	name: "Brandon Deen",
	summary: "I'm a technology enthusiast that loves to write code, solve problems, and re-enact scenes from Frozen with my daughter. <img src='resources/kaizensmall.png'> <br>",
	philosophy: "~ Constantly strive to become the best version of yourself ~", //, Love what you do, not how much you get paid to do it ~",
	interests: ["Artificial Intelligence", "Machine Learning", "Web Development", ],
	links: [
		"&nbsp; <a href='mailto:brandon.deen47@gmail.com'><i class='fa fa-envelope'></i></a>", 
		"&nbsp; <a href='https://github.com/brandonDeen'><i class='fa fa-github'></i></a>" , 
		"&nbsp; <a href='https://www.linkedin.com/in/brandon-deen-116b7254'><i class='fa fa-linkedin'></i></a>" , 
		"&nbsp; <a href='https://twitter.com/BruceWayne4Prez'><i class='fa fa-twitter'></i></a>" , 
		"&nbsp; <a href='resources/myResume.pdf' download='BrandonDeen_Resume'><i class='fa fa-file-pdf-o'></i></a>" 
	],
	big_links: [
		"&nbsp; <a href='mailto:brandon.deen47@gmail.com'><i class='fa fa-5x fa-envelope'></i></a>"
		,"&nbsp; <a href='https://github.com/brandonDeen'><i class='fa fa-5x fa-github'></i></a>" 
		,"&nbsp; <a href='https://www.linkedin.com/in/brandon-deen-116b7254'><i class='fa fa-5x fa-linkedin'></i></a>" 
		,"&nbsp; <a i href='https://twitter.com/BruceWayne4Prez'><i class='fa fa-5x fa-twitter'></i></a>" 
		,"&nbsp; <a href='resources/myResume.pdf' download='BrandonDeen_Resume'><i class='fa fa-5x fa-file-pdf-o' data-toggle='tooltip' title='my resume (pdf)'></i></a>"
	],
	image: "resources/pic.jpg",
	big_image: "resources/top-image.jpg",
	display: function(){
		return "<div class='card'>"              
					+"<img class='card-img-top' src='"+ bio.image +"' alt='Brandon' width='255' height='255'>"      
					+"<div class='card-block'>"  
						+"<em class='card-title'>Hey, I'm "+ bio.name.split(' ')[0] +"</em>"                 
					// +"</div>" 
						+"<ul class='list-group list-group-flush dark'>"
							+"<li class='list-group-item'>"+ bio.summary +"</li>"
							// +"<li class='list-group-item'>"+ bio.interests.join(' | ') +"</li>"
							+"<li class='list-group-item'>"+ bio.links.join('') +"</li>"
						+"</ul>"
					+"</div>" 
				+"</div>"
	}
}

var skills = {
	// skill levels 0-24:Beginner, 25-40:Familiar, 40-70:Proficient, 70-95:Expert, 90+:Master
	skills: [
		{name: "Java", level: 70, level_str: "Pretty Good", color: "lightgreen" }
		,{name: "Python", level: 80, level_str: "Strong", color: "lightgreen" }
		,{name: "C#", level: 70, level_str: "Pretty Good", color: "lightgreen" }
		,{name: "SQL", level: 60, level_str: "Proficient", color: "lightgreen" }
		,{name: "HTML", level: 60, level_str: "Proficient", color: "lightblue" }
		,{name: "CSS", level: 50, level_str: "More to Learn", color: "lightblue" }
		,{name: "Javascript", level: 80, level_str: "Strong", color: "lightblue" }
		// ,{name: "JQuery", level: 50, level_str: "Proficient", color: "lightblue" }	
		// ,{name: "JQuery", level: 50, level_str: "Proficient", color: "lightblue" }
		// ,{name: "JQuery", level: 50, level_str: "Proficient", color: "lightblue" }	
	],
	string: function(){
		s = "";
		skills_arr = skills.skills;
		for(skill in skills_arr){
			s += "<div class='skillbar clearfix' data-percent='"+ skills_arr[skill].level +"%'>"
					// +"<div class='skillbar-title' style='background: "+ skills_arr[skill].color +";'>"
					+"<div class='skillbar-title'>"
						+"<span>"+	skills_arr[skill].name	+"</span>"
					+"</div>"
					+"<div class='skillbar-bar' style='background: "+ skills_arr[skill].color +";'></div>"
					+"<div class='skill-bar-percent'>"+	skills_arr[skill].level_str +"</div>"
				+"</div>";
		}
		return s;
	}
};

var projects = {
		"projects":[
			// {
			// 	name: "Fidelity: Next Generation Call Center (NGCC) Migration", 
			// 	description: "Migrating several Fidelity Client Service Teams, Business Units, and Portfolio Managers to the Next Generation Call Center using the Genesys Platform. Routing calls more accurately based on business rules. Javascript, scxml, Genesys", 
			// 	github: "#", 
			// 	image: "http://placehold.it/255x255"
			// },
			// {
			// 	name: "Fidelity: Email Spoofer", 
			// 	description: "An Email Spoofer used for testing email routing in Fidelity's Next Generation Call Center. C# (WPF & .NET)", 
			// 	github: "#", 
			// 	image: "http://placehold.it/255x255"
			// },
			// {
			// 	name: "Fidelity: Email Test Automation", 
			// 	description: "A step further from manual email spoofing for Call Center routing tests, using Ruby and Cucumber", 
			// 	github: "#", 
			// 	image: "http://placehold.it/255x255"
			// },
			// {
			// 	name: "Fidelity: Genesys Rules Interpreter", 
			// 	description: "Takes in a bulky and user unfriendly xml file and translates it into json and outputs the new business rules into a table with the ability to export to excel. C# (.NET & WPF), HTML, Javascript(JQuery), CSS(Bootstrap)", 
			// 	github: "#", 
			// 	image: "http://placehold.it/255x255"
			// },
			// {
			// 	name: "Fidelity: Quote Audit Reporting Tool (QUARTz)", 
			// 	description: "This tool allows analysts to run a wide variety of reports used in both stock exchange audits and market decisions. Java, Spring, SQL, HTML, CSS(Bootstrap), Javascript(JQuery)", 
			// 	github: "#", 
			// 	image: "http://placehold.it/255x255"
			// },
			// {
			// 	name: "Fidelity: Buy Local Bonds", 
			// 	description: "Fidelity's Leap Training Casestudy project. Java, Spring, SQL, HTML, CSS, Javascript", 
			// 	github: "#", 
			// 	image: "http://placehold.it/255x255"
			// },
			{
				name: "PixelSense Transfer System", 
				description: "The Lynx is a 2 way communication device using an Arduino and an array of LEDs, photodiodes, and a Nexus 5. The Lynx communicated with the Microsoft PixelSense Table, taking commands from both the PixelSense and the Nexus 7 on the Lynx. The demo application was a blackjack game.", 
				github: "https://github.com/brandonDeen/DemoSoftware", 
				technologies_used: "C#, Microsoft PixelSense SDK, Java, Android SDK",
				image: "resources/Argus.png"
			},			
			{
				name: "pyRPG: A Tale in Text", 
				description: "A text based role playing game, that runs in the console. You can create a character, customize their race, name and gender. Then go through a series of battles against tougher and tougher enemies, all while gaining gold that you can use to buy new equipment and upgrade you character with.", 
				github: "https://github.com/brandonDeen/Text_RPG_Python", 
				technologies_used: "Python, SQL, Future: Incorporate Flask to create a web project",
				image: "resources/console.jpg"
			},
			{
				name: "DroidMD", 
				description: "An Android application that allows the user to log their diet, add medications with reminders, and alerts the users family if a medication has been missed. Users can enter their doctors information, allowing their physician to get daily, weekly, or monthly updates on everything the user tracks", 
				github: "#", 
				technologies_used: "Java, Android SDK",
				image: "resources/droidmd.jpg"
			},
			{
				name: "Angular Resume Page", 
				description: "A resume page utilizing AngularJS. HTML, CSS, Javascript(AngularJS)", 
				github: "https://github.com/brandonDeen/Resume_Angular_App", 
				technologies_used: "",
				image: "http://placehold.it/255x255"
			},
			{
				name: "Portfolio Page", 
				description: "Portfolio page following the Udacity HTML & CSS course",
				github: "https://github.com/brandonDeen/Portfolio_Page",
				technologies_used: "",
				image: "http://placehold.it/255x255"
			},
			{
				name: "Resume Page", 
				description: "Resume page following the Udacity Javascript Beginner course",
				github: "https://github.com/brandonDeen/frontend-nanodegree-resume",
				technologies_used: "",
				image: "http://placehold.it/255x255"
			},			
			{
				name: "Android Calendar Application", 
				description: "A simple calendar application that allows the user to create events, event reminders, and shared events. Java", 
				github: "#", 
				technologies_used: "",
				image: "http://placehold.it/255x255"
			},
		],
		
		display_single: function(index){ 
			return "<div class='col-sm-4'>" 
						+"<a href='#project-"+index+"' data-toggle='collapse'>"             
							+"<img class='img-circle' src='"+ projects.projects[index].image +"' alt='Project' width='255' height='255'>"      
						+"</a>"
						+"<p class='text-center'><strong>"+ projects.projects[index].name +"</strong></p>" 
						+"<div id='project-"+ index +"' class='collapse'>" 							
							+"<p><strong>Description:</strong> "+ projects.projects[index].description +"</p>"
							+"<p><strong>Technology Used:</strong> "+ projects.projects[index].technologies_used +"</p>"                   
						+"</div>" 
					+"</div>";
		},
		display_latest: function(){
			s = [];
			for(var i=0; i<3; i++){
				s.push(projects.display_single(i));
			}
			return s.join('');
		},
		display_all: function(){
			s = "";
			for(project in projects.projects){

			}
			return s;
		}

	};