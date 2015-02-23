var bio = {
    "name": "Shawn Lin",
    "role": "Graduate Student",
    "contacts": {
        "mobile": "+886.9.60407953",
        "email": "contact@shawnlin.com",
        "twitter": "https://twitter.com/stslin",
        "github": "https://github.com/stslin",
        "blog": "http://blog.shawnlin.com",
        "location": "Taichung, Taiwan"
    },
    "WelcomeMessage": "Shawn's Resume",
    "skills": [
        "C/C++",
        "HTML/CSS/JavaScript",
        "Java (Andorid/J2SE/J2EE)",
        "PHP",
        "Python",
        "R",
        "IBM DB2",
        "MySQL",
        "Oracle DB",
        "English",
        "Mandarin Chinese"
    ],
    "bioPic": "images/5523.jpg",

    display: function() {
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
        $("#footerContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage));
        $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var eachskill;
            for (eachskill = 0; eachskill < bio.skills.length; eachskill++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[eachskill]));
            }
        }
    }
}

var education = {
    "schools": [{
        "name": "National Chiao Tung University",
        "location": "Hsinchu, Taiwan",
        "degree": "Doctor",
        "majors": ["Industrial Engineering and Management"],
        "dates": "September 2009 - Present"
    }, {
        "name": "National Tsing Hua University",
        "location": "Hsinchu, Taiwan",
        "degree": "Master",
        "majors": ["Industrial Engineering and Engineering Management"],
        "dates": "September 2004 - January 2007"
    }, {
        "name": "University of Toronto",
        "location": "Toronto, Canada",
        "degree": "Bachalor",
        "majors": ["Computer Science: Information Systems", "Economics"],
        "dates": "September 1999 - June 2003"
    }],
    "onlineCourses": [{
        "title": "Foundations of Virtual Instruction ",
        "school": "University of California, Irvine",
        "dates": "August 2014",
        "url": "https://www.coursera.org/account/accomplishments/certificate/PVMHXCW25T"
    }, {
        "title": "Emerging Trends & Technologies in the Virtual K-12 Classroom",
        "school": "University of California, Irvine",
        "dates": "October 2014",
        "url": "https://www.coursera.org/account/accomplishments/certificate/R864BGBM4U"

    }, {
        "title": "Advanced Instructional Strategies in the Virtual Classroom",
        "school": "University of California, Irvine",
        "dates": "November 2014",
        "url": "https://www.coursera.org/account/accomplishments/certificate/A867YUUG53"
    }, {
        "title": "Performance Assessment in the Virtual Classroom",
        "school": "University of California, Irvine",
        "dates": "December 2014",
        "url": "https://www.coursera.org/account/accomplishments/certificate/6TD3SXS346"
    }],

    display: function() {
        var eachschool;
        var eachmajor;
        for (eachschool in education.schools) {
            $('#education').append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[eachschool].name) + HTMLschoolDegree.replace("%data%", education.schools[eachschool].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[eachschool].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[eachschool].location));
            if (education.schools[eachschool].majors.length > 0) {
                for (eachmajor in education.schools[eachschool].majors) {
                    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[eachschool].majors[eachmajor]));
                }
            }
        }

        $('#education').append(HTMLonlineClasses)
        var eacholc;
        for (eacholc in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[eacholc].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[eacholc].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[eacholc].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[eacholc].url));
        }

    }
}

var work = {
    "jobs": [{
        "employer": "Self-Employed",
        "title": " Freelance Translator",
        "location": "Taichung, Taiwan",
        "dates": "June 2013 - Present",
        "description": "Chinese to English"
    }, {
        "employer": "National Chiao Tung University",
        "title": "Research Assistant",
        "location": "Hsinchu, Taiwan",
        "dates": "July 2013 - August 2014",
        "description": "Software Defined Networking Research Team"

    }, {
        "employer": "TEL FSI (formerly FSI International)",
        "title": "Independent IT Contractor",
        "location": "Hsinchu, Taiwan",
        "dates": "October 2004 - May 2013",
        "description": "Responsible for IT Operations in China, Korea, Singapore, and Taiwan."
    }, {
        "employer": "Tzyfeng Enterprise",
        "title": "Specialist (Inter. Trade & Product Dev.)",
        "location": "Taichung, Taiwan",
        "dates": "May 2004 - September 2004",
        "description": "Development of new products for the international market."
    }, {
        "employer": "FalconStor Software (Asia Pacific HQ)",
        "title": "Engineer",
        "location": "Taichung, Taiwan",
        "dates": "July 2003 - February 2004",
        "description": "Worked on the VTL (Virtual Tape Library) development team. "

    }],

    display: function() {
        var eachjob;
        for (eachjob in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[eachjob].employer) + HTMLworkTitle.replace("%data%", work.jobs[eachjob].title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[eachjob].dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[eachjob].description));

        }
    }
}

bio.display();
education.display();
work.display();
$("#mapDiv").append(googleMap);

