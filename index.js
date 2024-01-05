class SetText{
  target = ""
  contentSet = {
    "about" : document.querySelector("#about"),
    "Education" : document.querySelector("#school"),
    "Work Experience" : document.querySelector("#work_experience"),
    "Side Projects" : document.querySelector("#side_projects"),
    "goals" : document.querySelector("#goals"),
    "hobbies" : document.querySelector("#hobbies"),
    "Stack" : document.querySelector("#stack"),
    "home" : document.querySelector("#home"),
  }
  constructor(element){
    this.target = element
    this.contentSet[this.target].classList.add("selected")

  }
  fill(details){

    let counter = 0
    
    for(var key in this.contentSet){
      if(key==this.target && key!="home"){
        this.contentSet[key].innerHTML = this.target.charAt(0).toUpperCase() + this.target.slice(1)
      }
      else if(key=="home"){
        this.contentSet[key].classList.remove("selected")

      }
      else{
        this.contentSet[key].classList.remove("selected")

        if(details[counter]==""){
          this.contentSet[key].innerHTML = ""
          this.contentSet[key].classList.add("empty")
        }else{
          this.contentSet[key].classList.remove("empty")
          this.contentSet[key].innerHTML = details[counter]
          counter++
        }

      }
      
    }

    console.log(details.length)

  }
  
   
}


function home(){
  let text = new SetText("home")
  text.fill(["About", "Education", "Work Experience", "Side Projects", "Goals", "Hobbies", "Stack" ])

}

function about(){
  let aboutText = new SetText("about")
  aboutText.fill(["<span class='pn_icon'></span>Phindile Sihle Xulu", 
  "<span class='phone_icon'></span>0630226933", 
  "<span class='ln_icon'></span><a href=\"https://www.linkedin.com/in/phindile-xulu-1b8122172/\" target=\"_blank\">linkedin.com/in/phindile-xulu-1b8122172/</a>", 
  "<span class=\"at_icon\"></span><a>codepen.io/phindilex</a>", 
  "<span class=\"at_icon\"></span>kpl.web.app", 
  "<span class=\"email_icon\"></span>xuluphindile84@gmail.com", 
  ])
}

function edu(){
  let eduText = new SetText("Education")
  eduText.fill([
  "University:<br> University of Cape Town <br> Bsc Computer Science",
  "Certification: <br> freecodecamp.org <br> <a href=\"https://www.freecodecamp.org/certification/phindile/responsive-web-design\" target='_blank'>View Certificate</a>",
  "",
  "",
])
}

function we(){
let workText = new SetText("Work Experience")
workText.fill(["iXperience <br> Full stack web dev <br> 3months", 
"UCT<br>Dining hall monitor<br>12 months", "UCT<br>First Years mentor<br>10months", 
"",
"UCT<br>House Commeetee<br>10months", ""])
}

function side_projects(){
  let spText = new SetText("Side Projects")
  spText.fill(["Catalogue website:<br> This was a website to advertise my friends side hustle traditional wear items",
   "Business profile:<br>This was a website to advertise my friends sports league startup", 
   "Sports team management website: <br> This website managed stats of a rugby team members and their training schedule", 
   "3D snake game: <br> This was a class project where we had to make a game for our anual project", 
   "Accomodation booking website: <br> This website managed student accomodation rental bookings",
   "Agent based model creation website<br>This was a class project that allowed people not familiar with programming to create agent based models and view the chages to the environment"
  ])
}

function goals(){
  let goalsText = new SetText("goals")
  goalsText.fill(["Full Stack Web Dev",
  "Web Solutions architect",
  "CSS guru",
  "Startup creator",
  "Learn Animation",
  "Breach the tech skills gap in South Africa"
  ]
  )

}
function hobbies(){
  let hobbiesText = new SetText("hobbies")
  hobbiesText.fill(["Hiking",
  "Human Rights",
  "Coding",
  "Learning new skills",
  "hanging out with loved ones",
  "Reading"
  ])
}

function stack(){
  let stack_ = new SetText("Stack")
  stack_.fill(["HTML", 
  "CSS", 
  "JAVA/TYPESCRIPT", 
  "JAVA",  
  "PYTHON",
  "EXPRESS",
  "",
  ])
}
