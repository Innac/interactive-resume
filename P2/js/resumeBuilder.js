var bio = {
	"name":"Ina Semionova",
	"role":"Design Team Lead",
	"contacts": {
		"mobile" : "666 666 666",
		"email" : "inna.semionova@gmail.com",
		"github" : "innac",
		"location" : "Kaunas"
	},
	"bioPic": "images/ina.jpg",
	"welcomeMessage" : "Hello, I'm awesome",
	"skills" : ["design", "team management", "web development"],

	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
	

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);

		var formattedWeclome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWeclome);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			for(skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").prepend(formattedBioPic);

	}
}

bio.display();


var work = {
	"jobs":[{
		"employer" : "UGS Baltic",
		"title" : "Design Team Lead",
		"location" : "Kaunas",
		"dates" : "05/06/2014 - Present",
		"description" : "Leading a team of front end web developers, 3D designers/animators and web designers. Working on multiple web projects which includes game and website design and development.",
	},{
		"employer" : "UGS Baltic",
		"title" : "Web Designer",
		"location" : "Kaunas",
		"dates" : "10/01/2013 - 05/06/2014",
		"description" : "Web design, UI/UX, front-end development."
	},{
		"employer" : "The Old Blue Last",
		"title" : "Bartender",
		"location" : "London",
		"dates" : "10/01/2011 - 03/04/2013",
		"description" : " "
	}],


	display: function(){
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDatesWorked);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

work.display();

var education = {
	"schools" : [{
		"name":"Vilniaus Universitetas",
		"location":"Vilnius",
		"degree":"BA",
		"majors": ["modern history", " philosophy of history"],
		"dates":"2007 - 2011",
		"website":"http://www.vu.lt"
	}],
	"onlineCourses" : [{
		"title":"Front-End Web Developer Nano Degree",
		"school":"Udacity",
		"date":"2015",
		"url":"http://www.udacity.com"
	},{
		"title":"Gamification",
		"school":"University of Pennsylvania",
		"date":"03/13/2015",
		"url":"https://www.coursera.org/course/gamification"
	}],

	display:function(){
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}

		$("#education").append(HTMLonlineClasses)
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

education.display();


var projects = {
	"projects": [{
		"title" : "Kultūros centras - Dusetų Dailės Galerija",
		"dates worked" : "05/2014 - Present",
		"description" : "Developing a website for Dusetos Art Gallery and Culture center.",
		"url":"http://www.dusetukultura.lt",
		"images": ["images/galerija.jpg"]
	}],

	display : function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);	
			$(".project-entry:last").append(formattedTitle);

			var formattedDatesWorked = HTMLprojectDates.replace("%data%", projects.projects[project]["dates worked"]);
			$(".project-entry:last").append(formattedDatesWorked);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);	
			$(".project-entry:last").append(formattedDescription);

			var formattedURL = HTMLprojectURL.replace("%data%", projects.projects[project].url);
			$(".project-entry:last").append(formattedURL);

			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
				}
			}
		}
	}
}
projects.display();


function locationizer(work_obj){
	var locArray = [];
	for (var job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locArray.push(newLocation);
	}
	console.log(locArray);
	return locArray;
}

locationizer(work);

// function educationizer(edu_obj){
// 	var eduArray = [];
// 	for (var school in edu_obj.schools) {
// 		var newSchool = edu_obj.schools[school].name;
// 		eduArray.push(newSchool);
// 	}

// 	return eduArray;
// }

// educationizer(education);
// console.log(educationizer(education));



// function inName(name){
// 	var nameArray = name.split(" ");
// 	console.log(nameArray);
// 	nameArray[1] = nameArray[1].toUpperCase();
// 	nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase();

// 	newName = nameArray[0] + " " + nameArray[1]
// 	return newName;
// }

// inName("InA SemIOnova");
// console.log(inName("InA SemIOnova"));
