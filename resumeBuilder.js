


//Work Section
var work = {
	"jobs": [
		{ 
			"employer": "Levin Simes",
			"title": " Research Analyst", 
			"location": "San Francisco, CA",
			"dates": "Jan 2013 - Present",
			"description": "Currently work with pharmaceutical companies"
		}, 
		{
			"employer": "Genentech",
			"title": "Manager", 
			"location": "San Francisco, CA",
			"dates": "Jan 2010 - 2013",
			"description": "Worked as an Equipment Technician"
		}
	]
}

//function displayWork() {
work.display = function(){
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer =HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
	var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle 
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedlocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedlocation);

	var formatteddatesworked=HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formatteddatesworked);

	var fromattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(fromattedDescription);
}
}
//displayWork()
work.display();


//Projects section
var projects = {
	"projects": [
		{
			"title": "Project 1: Interactive resume project",
			"dates": "2016",
			"description": "Created an interactive resume with Javascript. This was our last project in Intro. to Programming degree, and overall it was quite helpful to wrap things up and show us how to use Java Script. Below is the screenshot of how this current page is suppose to look like :) ",
			"picture": "images/sample.jpg"
			
		},
		{
			"title": "Project 2: Stage 3 Poject from Intro. to Programming class",
			"dates": "2015",
			"description": "We (students) created our own page, where we kept our notes for the whole class. (Below is a screenshot of how that project looked like.",
			"picture": "images/sample2.jpg"
			
		}
	]	
}

projects.display = function() {
for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	var formattedpicture = HTMLprojectImage.replace("%data%", projects.projects[project].picture)
	$(".project-entry:last").append(formattedpicture)
	
	}
}

projects.display();



//Education section
var education = {
	"schools": [
		{
			"name": "Mercyhurst", 
			"location": "Erie", 
			"degree": "Bacherlor's of Science",
			"major": "Molecular Biology", 
			"dates" : "2008 - 2012",
			"url" : "xyz.com/"
		},
		{
			"name" : "ABC College",
			"location" : "India",
			"degree": "BS in Science",
			"major" : "Chemistry",
			"dates" : "1995 - 1999",
			"url" : "abc.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to Programming",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com"
		}
	]
};


education.display = function(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool=HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchool); 

		var formattedduration=HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedduration);

		var formattedlocation=HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedlocation)

		var formatteddegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formatteddegree);

		var formattedmajor=HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedmajor)

		//var formattedtitles=HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		//$(".education-entry:last").append(formattedtitles)
	}
}
education.display();



var bio = {
	"name" : "Irfan Haider",
	"role" : "Product Manager",
	"WelcomeMessage" : "Have a great day!",
	"contacts" : {
		"mobile" : "0221647247",
		"email" : "timonmartin@gmail.com",
		"location" : "Germany",
		"twitter" : "@twitter",
		"blog" : "@blog.abc",
	},
	"skills" : ["HTML", "CSS", "Python", "Java Scripts"]
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills);
	$("#skills").append(formattedSkill);

	var formattedRoles = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRoles);

	
	var formattedmobile = HTMLmobile.replace("%data%", bio.contacts[0]);
	$("#footerContacts").append(formattedmobile);

	var formattedemail = HTMLemail.replace("%data%", bio.contacts[1]);
	$("#footerContacts").append(formattedemail);

	//var formattedlocation = HTMLlocation.replace("%data%", bio.contacts[2]);
	//$("#footerContacts").append(formattedlocation;

	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts[3]);
	$("#footerContacts").append(formattedtwitter);

	var formattedblog = HTMLblog.replace("%data%", bio.contacts[4]);
	$("#footerContacts").append(formattedblog);


	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
	$("#header").append(formattedWelcomeMessage);
}

var picture ="images/simpsons.jpg";
var formattedpicture=HTMLbioPic.replace("%data%",picture);
$("#header").prepend(formattedpicture);





//CLICK Values
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY; 

	logClicks(x,y);
});

//console.log(LocationFinder);
$("#mapDiv").append(googleMap);

function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location; 
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));

