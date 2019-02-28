var portfolioItems = [
  {
    name: "Friend Finder",
    summary: "MySQL database with POST and GET methods",
    text:
      "<p>This project's emphasis is on Express and uses a server to route to HTML pages and use data from an API via GET method and add data via POST method. After answering the 10 questions and entering a name and photo URL (no photo uploading currently) the data is sent to the server. The user's 'scores', or the number values of each question, are compared against other users to find the user with the most similar answers.</p><p>Once the appropriate user is found, that data is returned from the API and shown in the browser to the user. Their survey questions and other data is now in the API as well, and the next person to take the survey could get matched with a previous user afterwards.</p><p>The data is also verified twice: once on the front-end, even though the basic inputs are fairly restricted, and again on the back-end before any data is actually stored in the server.</p>",
    url: "https://mighty-refuge-53027.herokuapp.com/",
    github: "https://github.com/barryriveroll/FriendFinder",
    img: "./assets/images/ff1.png"
  },
  {
    name: "Dart",
    summary: "Travel planner via flight and hotel API",
    text:
      "<p>Choose a starting location and a destination location and receive quick estimates for flights and hotels to plan out a vacation budget. Favorites can also be stored by creating an account.</p><p>This project was a group effort between myself, Rajita Maharjan, and Alexander Mesa. My primary contribution to the development was in API calls and general JavaScript functionality, although we each worked together on many aspects to gather input, get help, or just decide on a design aspect.</p><p>Easily my most complex project to date, this was an immense learning experience in both technical and teamwork aspects.</p><p class='italic'><span class='bold'>NOTE:</span> This project uses <a href='https://developers.amadeus.com/'>Amadeus Developer APIs</a>, which are currently in beta and subject to change. If the project isn't working properly, feel free to let me know and I will take a look at it.</p>",
    url: "https://marajita.github.io/Travel-Project/",
    github: "https://github.com/marajita/Travel-Project",
    img: "./assets/images/dart1.png"
  },
  {
    name: "Rock, Paper, Scissors: Multiplayer",
    summary: "Real-time RPS game",
    text:
      "<p>Game starts once two users connect. Player 1 chooses rock, paper or scissors first. Then Player 2 chooses and the result is shown. Both users can chat or change their nickname in real time.</p><p>      The emphasis of this project was initial work with databases - Firebase in this case. Firebase is used to relay various game states to both users, such as which player's turn it is and what each player chooses for their hand. The hand visuals are also done in HTML and CSS entirely so that the game state (ideally) loads faster for each player instead of having to load images.</p><p>The major challenge here was learning what needed to be sent to the database in order for things to display properly for both players.</p>",
    url: "https://barryriveroll.github.io/RPS-Multiplayer",
    github: "https://github.com/barryriveroll/RPS-Multiplayer",
    img: "./assets/images/rps1.png"
  },
  {
    name: "Gif Giver",
    summary: "Giphy API results on user search",
    text:
      "<p>Search for gifs by keyword Different options on the dropdown menu.</p><p>This project was the first work with APIs done and further enforces knowledge on data-attributes. Multiple values of the response from the ajax calls are used and stores in new elements created by jQuery. Designed to be responsive (thanks very large in part to Bootstrap) and intuitive for a good UX.</p>",
    url: "https://barryriveroll.github.io/gif-generator",
    github: "https://github.com/barryriveroll/gif-generator",
    img: "./assets/images/gif1.png"
  },
  {
    name: "Goblin Grind RPG",
    summary: "Quick, simple battle game",
    text:
      "<p>Battle game between different characters.</p><p>Pick a hero, then pick an enemy. Each time the player attacks their damage increases. Win by defeating all enemies.</p><p>This project was primarily to learn jQuery (including selectors and different methods) and continue exercises with JavaScript and CSS. A reset.css file was used and extensive work went into the custom CSS without the use of a framework.</p><p>I had a lot of fun getting the look of this project down. The animations, the goblin card CSS (primarily the name tags), and the text log. Prior to this point I greatly enjoyed making small CSS tweaks to make a project stand out, but this project really solidified it as a passion for me.</p>",
    url: "https://barryriveroll.github.io/unit-4-game/",
    github: "https://github.com/barryriveroll/unit-4-game",
    img: "./assets/images/rpg1.png"
  },
  {
    name: "Word Guess: Zombies",
    summary: "Hangman-esque game, zombie-themed",
    text:
      "<p>A version of hang-man, with a zombie twist. Try to guess the word before the zombie reaches you. 10 wrong guesses allowed per word, 3 lives per game.</p><p>This project was primarily to learn JavaScript in a web development environment.</p>",
    url: "https://barryriveroll.github.io/Word-Guess-Game/",
    github: "https://github.com/barryriveroll/Word-Guess-Game",
    img: "./assets/images/hangman1.png"
  }
];

function changePortfolioView(id) {
  $("#port-name").text(portfolioItems[id].name);
  $("#port-text").html(portfolioItems[id].text);
  $("#port-image").attr("src", portfolioItems[id].img);
  $("#port-url").attr("href", portfolioItems[id].url);
  $("#port-github").attr("href", portfolioItems[id].github);

  var selectorLeft = 0 + id * 178;
  $(".portfolio-selector").css("left", selectorLeft + "px");
}

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  drawPortfolio();
  $(".portfolio-div").on("click", function() {
    var portfolioId = $(this).attr("data-id");
    changePortfolioView(portfolioId);
    $(".portfolio-current").css("height", "600px");
    $(".portfolio-div").css("width", "158px");
    $(".portfolio-div").css("height", "100px");
    $(".portfolio-thumbnail").css("width", "158px");
    $(".portfolio-h3").css("font-size", "18px");
    $(".portfolio-selector").css("height", "118px");
    $(".portfolio-tabs").css("top", "-118px");
  });

  $(".portfolio-close").on("click", function() {
    $(".portfolio-current").css("height", "0px");
    $(".portfolio-div").css("width", "336px");
    $(".portfolio-div").css("height", "232px");
    $(".portfolio-thumbnail").css("width", "336px");
    $(".portfolio-h3").css("font-size", "34px");
    $(".portfolio-selector").css("height", "0px");
    $(".portfolio-tabs").css("top", "0px");
  });

  $("a").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        400,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  $("#contact-email").on("click", function() {
    $(".email-text")
      .css("height", "48px")
      .css("background", "#29323c")
      .html("<p>barryriveroll" + "@" + "gmail.com</p>");
  });

  $("#contact-phone").on("click", function() {
    $(".phone-text")
      .css("height", "48px")
      .css("background", "#29323c")
      .html("<p>Cell: (858)" + " 442" + "-3666</p>");
  });

  function drawPortfolio() {
    portfolioItems.forEach(function(portfolio) {
      var newPortDiv = $("<div>")
        .addClass("portfolio-div")
        .attr("data-id", portfolioItems.indexOf(portfolio));
      var newOverlay = $("<div>")
        .addClass("overlay")
        .append('<h3 class="portfolio-h3">' + portfolio.name + "</h3>")
        .append("<p>" + portfolio.summary + "</p>");
      var newImage = $("<img>")
        .addClass("portfolio-thumbnail")
        .attr("src", portfolio.img)
        .attr("alt", portfolio.name + " image");

      newPortDiv.append(newOverlay).append(newImage);
      $(".portfolio-tabs").append(newPortDiv);
    });
  }

  var scene = new ScrollMagic.Scene({ triggerElement: "#about" })
    .setClassToggle("#nav-trigger", "nav-shown")
    .addTo(controller);

  var trigger = 0.3;
  scene.triggerHook(trigger);

  new ScrollMagic.Scene({ triggerElement: "#about", duration: 900 })
    .setClassToggle("#nav-about", "nav-this-page")
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#portfolio", duration: 650 })
    .setClassToggle("#nav-portfolio", "nav-this-page")
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#contact", duration: 600 })
    .setClassToggle("#nav-contact", "nav-this-page")
    .addTo(controller);
});
