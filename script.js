/* write your script here */
var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keypress", checkKey);
searchBar.addEventListener("input", getAutoSuggestions);
var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", processInput);
var autoSuggestions = document.getElementById("auto-suggestions");
var display = document.getElementById("display");
// part 4 end

var recordName = document.createElement("h2");
recordName.innerHTML = databaseRecord.name;
var recordPicture = document.createElement("img");
recordPicture.src = databaseRecord.picture;
var recordSummary = document.createElement("p");
recordSummary.innerHTML = "<b>Summary:</b> " + databaseRecord.summary;

display.appendChild(recordName);
display.appendChild(recordPicture);
display.appendChild(recordBorn);
display.appendChild(recordDied);

var recordPicture = document.createElement("p");
if(databaseRecord.Picture != null) {
  recordPicture.innerHTML = "<b>Picture:</b> " + databaseRecord.Picture;
}
else {
  recordPicture.innerHTML = "<b>Picture:</b> N/A";
}
}

var dataBase = [
  {
    name:"Baymax.",
    summary:"Robotics prodigy Hiro (Ryan Potter) lives in the city of San Fransokyo. Next to his older brother, Tadashi, Hiro's closest companion is Baymax (Scott Adsit), a robot whose sole purpose is to take care of people. When a devastating turn of events throws Hiro into the middle of a dangerous plot, he transforms Baymax and his other friends, Go Go Tamago (Jamie Chung), Wasabi (Damon Wayans Jr.), Honey Lemon (Genesis Rodriguez) and Fred (T.J. Miller) into a band of high-tech heroes.",
    disneymovie:"Big hero 6",
    picture:"img/martin_luther_king_jr.png",
    Official description: "Baymax cares. That's what he was designed to do. The adorable, plus-sized inflatable robot's job title is technically Healthcare Companion: With a simple scan, Baymax can detect vital stats, and, given a patient's level of pain, can treat nearly any ailment. Conceived and built by Tadashi Hamada, Baymax just might revolutionize the healthcare industry. But to the inventor's kid brother Hiro, the nurturing, guileless bot turns out to be more than what he was built for—he's a hero, and quite possibly Hiro's closest friend. And after some deft reprogramming that includes a rocket fist, super strength and rocket thrusters that allow him to fly, Baymax becomes one of the Big Hero 6"
  },
  {
    name:"Hiro Hamada",
    summary: "Robotics prodigy Hiro (Ryan Potter) lives in the city of San Fransokyo. Next to his older brother, Tadashi, Hiro's closest companion is Baymax (Scott Adsit), a robot whose sole purpose is to take care of people. When a devastating turn of events throws Hiro into the middle of a dangerous plot, he transforms Baymax and his other friends, Go Go Tamago (Jamie Chung), Wasabi (Damon Wayans Jr.), Honey Lemon (Genesis Rodriguez) and Fred (T.J. Miller) into a band of high-tech heroes,"
    disneymovie: "Big Hero 6",
    picture: "img/dolores_huerta.png",
    Official description: "Robotics prodigy Hiro Hamada has the mind of a genius—and the heart of a 14-year old: his state-of-the-art battle-bots dominate the underground bot fights held in the dark corners of San Fransokyo. Fortunately, his big brother Tadashi redirects Hiro's brilliance, inspiring him to put his brain to the test in a quest to gain admission to the San Fransokyo Institute of Technology. When a tragic event changes everything, Hiro turns to a robot named Baymax, and they form an unbreakable bond—and two-sixths of a band of high-tech heroes on a very important mission."
  },
{
    name:"Tadashi Hamada"
    summary: "Robotics prodigy Hiro (Ryan Potter) lives in the city of San Fransokyo. Next to his older brother, Tadashi, Hiro's closest companion is Baymax (Scott Adsit), a robot whose sole purpose is to take care of people. When a devastating turn of events throws Hiro into the middle of a dangerous plot, he transforms Baymax and his other friends, Go Go Tamago (Jamie Chung), Wasabi (Damon Wayans Jr.), Honey Lemon (Genesis Rodriguez) and Fred (T.J. Miller) into a band of high-tech heroes.",
    disneymovie: "Big Hero 6",
    picture: null,
    Official description: "Tadashi is a good guy. He just is. He actually developed, built and programmed a state-of-the-art nursebot—a Healthcare Companion named Baymax that will likely help millions worldwide. But it's his role as big brother that makes Tadashi truly special. Every kid needs a guy like Tadashi looking out for him, and Hiro knows just how lucky he is to have him in his life."
  },
  {
    name: "Miguel",
    summary: "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history.",
    disneymovie: "Coco",
    picture: "img/fred_ho.png",
    Official description: "Miguel is a 12-year-old aspiring musician who struggles against his family's generations-old ban on music. When a magical mishap lands him in the Land of the Dead, Miguel seeks out his idol, Ernesto de la Cruz, to help him return to the Land of the Living before it's too late"
  },
  {
    name: "Ernesto de la Cruz",
    summary: "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history.",
    disneymovie: "Coco",
    picture: null,
    Official description: "Ernesto de la Cruz is Miguel's idol and the most famous musician in the history of Mexico. Revered by fans worldwide until his untimely death, the charming and charismatic musician is even more beloved in the Land of the Dead"
  }
//];
function checkKey(e) {
  var key = e.which || e.keyCode;
 if(key == 13) {
   //console.log(“You pressed enter!”);
   processInput();
 }
}

function processInput() {
  cleanedInput = searchBar.value.toLowerCase().trim()
  autoSuggestions.innerHTML = ""
  autoSuggestions.style.display = "none";
  searchBar = "";
  databaseRecord = getRecord(cleanedInput);
  if(databaseRecord != null) {
    displayRecord(databaseRecord)
  } else {
    alert("no results")
  }
}


   for (var i = 0; i < database.length; i++)
  var cleanedRecordName = database[i].name.toLowerCase().trim();
  if (cleanedInput == cleanedRecordName) {
    return database;
  }
  return null;
}


for (var i = 0; i < database.length; i++){
  var cleanedRecordName = database[i].name.toLowerCase().trim();
  if (stringOne.startsWith(stringTwo) && cleanedInput.length > 0) {
    var matching = name.substring(0, searchBar.value.length);
    var remaining = name.substring(searchBar.value.length);
    var result = matching + "<b>" + remaining + "</b>";
    var button = document.createElement("button")
    button.innerHTML = button;
    button.style.display = "block";
    button.className = "suggestion";
    activateSuggestionsButton(button, database[i]);
    autoSuggestions.appendChild(button);
  }

    if (autoSuggestions.hasChildNodes){
      autoSuggestions.style.display = "block";
    } else {
      autoSuggestions.style.display = "none";
    }
function activateSuggestionsButton(button, record) {
  button.addEventListener("click", function()){
  });
  }
  displayRecord(record);
  autoSuggestions.innerHTML = "";
  autoSuggestions.style.display = "none"
  searchBar.value = "";
}
 var suggestions = [];
 for (var i = 0; i < database.length; i++){
   var cleanedRecordName = database[i].name.toLowerCase().trim();
 }
 if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0) {
   suggestions.push(database[i]).
 }
 return suggestions;
 }
display.innerHTML = "";
var paragraph = document.createElement(“p”).
if (suggestions.length > 0){
  paragraph.innerHTML = "did you mean";
  display.appendChild(paragraph);
  for (var i = 0; i < suggestions.length; i++){
    var button = document.createElement(“button”)
    button.innerHTML = suggestions[i].name
    button.style.display = "block"
    button.className = "sugestion"
    activateSuggestionButton(button, suggestions[i]);
    display.appendChild(button);
  }
      } else {
        paragraph.innerHTML = displaySuggestions(getSuggestions(cleanedInput));
        display.appendChild(paragraph);
}
}
