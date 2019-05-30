var portfolioItems = [
  {
    name: "Phit",
    summary: "Fitness and nutrition tracker made with React",
    text:
      "<p>Health tracker designed for ease-of-use and customizability. Full MERN stack with Material UI framework created by myself, <a target='_blank' href='https://github.com/marajita/'>Rajita Maharjan</a>, <a target='_blank' href='https://github.com/AlexLloyd89/'>Alex Lloyd</a>, and <a target='_blank' href='https://github.com/rwazny/'>Ron Wazny</a>.</p><p>My primary responsibilities here were the Dashboard design, assisting Alex Lloyd with database management and writing queries, and state/component heirarchy React.</p><p>The biggest challenge I had was creating a state organization that was both intuitive for us to develop with and met our functional goals. To achieve this, state is primarily held at two tiers: the high tier (App.js) contains the state of the current user and their settings. The next tier has two stateful classes: Nutrition Panel and Fitness Panel. They're separate so one panel's state doesn't impact the other, but encompass everything inside that panel, i.e. the tracker and reports tabs. This allows changes to one tab immediately reflect on the other but not inadvertently affect another stateful component.</p>",
    url: "https://phitness.herokuapp.com/",
    github: "https://github.com/rwazny/Project-3",
    img: "./assets/images/phit1-min.png"
  },
  {
    name: "Food Fight",
    summary: "Multiplayer real-time board game for 4 players",
    text:
      "<p>A group project by myself, <a target='_blank' href='https://github.com/marajita/'>Rajita Maharjan</a>, <a target='_blank' href='https://github.com/AlexLloyd89/'>Alex Lloyd</a>, and <a target='_blank' href='https://github.com/rwazny/'>Ron Wazny</a>.</p><p>Food Fight is a fully playable real-time board game for 4 players built without a game framework such as Phaser.io or Gameboard.io.</p><p>For this project, my focus was primarily on back end functionality, specifically using Socket.io to communicate game changes real-time to all players, and back end validation of the game board's state. Whenever a player attempts to make a change to the board, such as moving a space on the board, the correct changes are made in the MySQL DB, then the front end's board is wiped out for all players and redrawn with the new updates.</p>",
    url: "https://safe-fortress-63021.herokuapp.com/",
    github: "https://github.com/rwazny/Project-2",
    img: "./assets/images/foodfight1-min.png"
  },
  {
    name: "Burger Biter",
    summary: "MySQL database with POST and GET methods",
    text:
      '<p>Similar to Friend Finder, this project uses a MySQL database, although this time utilizing an ORM to simplify the queries (adding, modifying, and deleting).</p><p>Clicking the "Eat" button will modify the database column. The "Modify Burger" selector at the top can be used to change the name.</p><p>The ORM used for this application was built from scratch, not utilizing something like Sequelize. Writing the ORM to be modular enough to not only be usable in all instances here but also for the potential for me to use it elsewhere was the biggest challenge to overcome.</p>',
    url: "https://boiling-dusk-65986.herokuapp.com/",
    github: "https://github.com/barryriveroll/burger",
    img: "./assets/images/burger1-min.png"
  },
  {
    name: "Friend Finder",
    summary: "MySQL database with POST and GET methods",
    text:
      "<p>This project's emphasis is on Express and uses a server to route to HTML pages and use data from an API via GET method and add data via POST method. After answering the 10 questions and entering a name and photo URL (no photo uploading currently) the data is sent to the server. The user's 'scores', or the number values of each question, are compared against other users to find the user with the most similar answers.</p><p>Once the appropriate user is found, that data is returned from the API and shown in the browser to the user. Their survey questions and other data is now in the API as well, and the next person to take the survey could get matched with a previous user afterwards.</p><p>The data is also verified twice: once on the front-end, even though the basic inputs are fairly restricted, and again on the back-end before any data is actually stored in the server.</p>",
    url: "https://mighty-refuge-53027.herokuapp.com/",
    github: "https://github.com/barryriveroll/FriendFinder",
    img: "./assets/images/ff1-min.png"
  },
  {
    name: "Dart",
    summary: "Travel planner via flight and hotel API",
    text:
      "<p>Choose a starting location and a destination location and receive quick estimates for flights and hotels to plan out a vacation budget. Favorites can also be stored by creating an account.</p><p>This project was a group effort between myself, <a target='_blank' href='https://github.com/marajita/'>Rajita Maharjan</a>, and <a target='_blank' href='https://github.com/AlexanderMesa'>Alexander Mesa</a>. My primary contribution to the development was in API calls and general JavaScript functionality, although we each worked together on many aspects to gather input, get help, or just decide on a design aspect.</p><p>Easily my most complex project to date, this was an immense learning experience in both technical and teamwork aspects.</p><p class='italic'><span class='bold'>NOTE:</span> This project uses <a href='https://developers.amadeus.com/'>Amadeus Developer APIs</a>, which are currently in beta and subject to change. If the project isn't working properly, feel free to let me know and I will take a look at it.</p>",
    url: "https://marajita.github.io/Travel-Project/",
    github: "https://github.com/marajita/Travel-Project",
    img: "./assets/images/dart1-min.png"
  },
  {
    name: "Rock, Paper, Scissors: Multiplayer",
    summary: "Real-time RPS game",
    text:
      "<p>Game starts once two users connect. Player 1 chooses rock, paper or scissors first. Then Player 2 chooses and the result is shown. Both users can chat or change their nickname in real time.</p><p>      The emphasis of this project was initial work with databases - Firebase in this case. Firebase is used to relay various game states to both users, such as which player's turn it is and what each player chooses for their hand. The hand visuals are also done in HTML and CSS entirely so that the game state (ideally) loads faster for each player instead of having to load images.</p><p>The major challenge here was learning what needed to be sent to the database in order for things to display properly for both players.</p>",
    url: "https://barryriveroll.github.io/RPS-Multiplayer",
    github: "https://github.com/barryriveroll/RPS-Multiplayer",
    img: "./assets/images/rps1-min.png"
  },
  {
    name: "Gif Giver",
    summary: "Giphy API results on user search",
    text:
      "<p>Search for gifs by keyword Different options on the dropdown menu.</p><p>This project was the first work with APIs done and further enforces knowledge on data-attributes. Multiple values of the response from the ajax calls are used and stores in new elements created by jQuery. Designed to be responsive (thanks very large in part to Bootstrap) and intuitive for a good UX.</p>",
    url: "https://barryriveroll.github.io/gif-generator",
    github: "https://github.com/barryriveroll/gif-generator",
    img: "./assets/images/gif1-min.png"
  },
  {
    name: "Goblin Grind RPG",
    summary: "Quick, simple battle game",
    text:
      "<p>Battle game between different characters.</p><p>Pick a hero, then pick an enemy. Each time the player attacks their damage increases. Win by defeating all enemies.</p><p>This project was primarily to learn jQuery (including selectors and different methods) and continue exercises with JavaScript and CSS. A reset.css file was used and extensive work went into the custom CSS without the use of a framework.</p><p>I had a lot of fun getting the look of this project down. The animations, the goblin card CSS (primarily the name tags), and the text log. Prior to this point I greatly enjoyed making small CSS tweaks to make a project stand out, but this project really solidified it as a passion for me.</p>",
    url: "https://barryriveroll.github.io/unit-4-game/",
    github: "https://github.com/barryriveroll/unit-4-game",
    img: "./assets/images/rpg1-min.png"
  },
  {
    name: "Word Guess: Zombies",
    summary: "Hangman-esque game, zombie-themed",
    text:
      "<p>A version of hang-man, with a zombie twist. Try to guess the word before the zombie reaches you. 10 wrong guesses allowed per word, 3 lives per game.</p><p>This project was primarily to learn JavaScript in a web development environment.</p>",
    url: "https://barryriveroll.github.io/Word-Guess-Game/",
    github: "https://github.com/barryriveroll/Word-Guess-Game",
    img: "./assets/images/hangman1-min.png"
  }
];

function changePortfolioView(id) {
  $("#port-name").text(portfolioItems[id].name);
  $("#port-text").html(portfolioItems[id].text);
  $("#port-image").attr("src", portfolioItems[id].img);
  $("#port-url").attr("href", portfolioItems[id].url);
  $("#port-github").attr("href", portfolioItems[id].github);
}

function buildData() {
  var txtData =
    "Name: " +
    $("#name-input").val() +
    "\r\nCompany: " +
    $("#company-input").val() +
    "\r\nEmail: " +
    $("#email-input").val();

  return txtData;
}

$(document).ready(function() {
  drawPortfolio();

  // This will act when the submit BUTTON is clicked
  $("#submit-contact").click(function(event) {
    event.preventDefault();
    var txtData = buildData();
    window.location.href =
      "data:application/octet-stream;base64," + Base64.encode(txtData);
  });

  // This will act when the submit LINK is clicked
  $("#submit-contact-2").click(function(event) {
    var txtData = buildData();
    $(this)
      .attr("download", "sugguestedName.txt")
      .attr(
        "href",
        "data:application/octet-stream;base64," + Base64.encode(txtData)
      );
  });

  $(".portfolio-div").on("click", function() {
    var portfolioId = $(this).attr("data-id");
    changePortfolioView(portfolioId);
    $(".portfolio-clicked").removeClass("portfolio-clicked");
    $(this).addClass("portfolio-clicked");
    $(".portfolio-current").addClass("portfolio-current-extend");
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top - 50
      },
      400
    );
  });

  $(".portfolio-close").on("click", function() {
    $(".portfolio-clicked").removeClass("portfolio-clicked");
    $(".portfolio-current").removeClass("portfolio-current-extend");
    // $(".portfolio-div").css("width", "336px");
    // $(".portfolio-div").css("height", "232px");
    // $(".portfolio-thumbnail").css("width", "336px");
    // $(".portfolio-h3").css("font-size", "34px");
    // $(".portfolio-tabs").css("top", "0px");
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
});
