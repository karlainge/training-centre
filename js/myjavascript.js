
//Responsive top Navigation Bar
//https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

///When user resizes the browser window (i.e. when the screen is less than 600 pixels wide,)
///the responsive navigation menu  will hide all links,
///except for the first link - HOME
///If user will click the the topnav (.icon) the links will be shown
function functionNavTop() {
        let x = document.getElementById("topNavigation");
        if (x.className === "navigation") {
            x.className += " responsive";
        } else {
            x.className = "navigation";
        }
    }
 //end of top navigation code   
 
 
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
///This code will create accordions: when user want to toggle between 
///hiding and showing content, they will click on the pannel or click "+" or "-" signs.    
let acc = document.getElementsByClassName("accordion");
   let i;
      for (i = 0; i < acc.length; i++) {
          acc[i].onclick = function(){
              this.classList.toggle("active");
              let panel = this.nextElementSibling;
              if (panel.style.display === "block") {
                  panel.style.display = "none";
              } else {
                  panel.style.display = "block";
              }
          }
      }  

//When user browses Contact us page, they will see greeting.
//According to time, greeting will change.      
function greetingPage(){
      let today  = new Date();
      let hourNow = today.getHours();
      let greeting;
      
      if (hourNow > 18) {
        greeting = 'Good evening!';
      }
        else if (hourNow > 12){
          greeting = 'Good afternoon!';
        }
      
        else if (hourNow > 0){
          greeting = 'Good morning!';
        }
        else {
          greeting = 'Welcome!';
        }
        document.write('<h1 class  = "greeting">' + greeting + '</h1>');
    }


//this code will allow user to locate address of the training centre.

  function initMap() {
    let leicester = {lat: 52.628707, lng: -1.139408};
    let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: leicester
        });
    let marker = new google.maps.Marker({
          position: leicester,
          map: map
        });
      }
   

    
   

