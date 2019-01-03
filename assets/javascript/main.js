var portfolioItems = [
  {
    name: "Dart",
    text:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,eaque. Nesciunt magni ullam, quis aperiam, nihil eos officiisratione inventore, enim iusto officia ad autem! Eveniet, doloremquebeatae consequuntur voluptates labore dolorum harum. Expeditavoluptates, adipisci sequi nobis quasi ducimus.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,eaque. Nesciunt magni ullam, quis aperiam, nihil eos officiisratione inventore, enim iusto officia ad autem! Eveniet, doloremquebeatae consequuntur voluptates labore dolorum harum. Expeditavoluptates, adipisci sequi nobis quasi ducimus.</p>",
    url: "https://marajita.github.io/Travel-Project/",
    github: "https://github.com/marajita/Travel-Project",
    img: "./assets/images/dart1.png"
  },
  {
    name: "Rock, Paper, Scissors: Multiplayer",
    text:
      "<p>Game starts once two users connect. Player 1 chooses rock, paper or scissors first. Then Player 2 chooses and the result is shown. Both users can chat or change their nickname in real time.</p><p>      The emphasis of this assignment was initial work with databases - Firebase in this case. Firebase is used to relay various game states to both users, such as which player's turn it is and what each player chooses for their hand. The hand visuals are also done in HTML and CSS entirely so that the game state (ideally) loads faster for each player instead of having to load images.</p>",
    url: "https://barryriveroll.github.io/RPS-Multiplayer",
    github: "https://github.com/barryriveroll/RPS-Multiplayer",
    img: "./assets/images/rps1.png"
  },
  {
    name: "Gif Giver",
    text:
      "<p>Search for gifs by keyword Different options on the dropdown menu.</p><p>This assignment was the first work with APIs done and further enforces knowledge on data-attributes. Multiple values of the response from the ajax calls are used and stores in new elements created by jQuery. Designed to be responsive (thanks very large in part to Bootstrap) and intuitive for a good UX.</p>",
    url: "https://barryriveroll.github.io/gif-generator",
    github: "https://github.com/barryriveroll/gif-generator",
    img: "./assets/images/gif1.png"
  },
  {
    name: "TV Trivia",
    text:
      "<p>All questions are TV show related. You have 30 seconds per question to pick your answer. The progress bar fills up as you answer questions. The correct answer will be shown to you. Your final score will be displayed at the end</p><p>This assignment was primarily to reinforce knowledge learned up to this point, particularly JavaScript/jQuery, and also to use timers in a practical application. Bootstrap was used for the majority of styling with some CSS added for specific elements.</p>",
    url: "https://barryriveroll.github.io/TriviaGame/",
    github: "https://github.com/barryriveroll/TriviaGame",
    img: "./assets/images/trivia1.png"
  },
  {
    name: "Goblin Grind RPG",
    text:
      "<p>Battle game between different characters.</p><p>Pick a hero, then pick an enemy. Each time the player attacks their damage increases. Win by defeating all enemies.</p><p>This assignment was primarily to learn jQuery (including selectors and different methods) and continue exercises with JavaScript and CSS. A reset.css file was used and extensive work went into the custom CSS without the use of a framework.</p>",
    url: "https://barryriveroll.github.io/unit-4-game/",
    github: "https://github.com/barryriveroll/unit-4-game",
    img: "./assets/images/rpg1.png"
  },
  {
    name: "Word Guess: Zombies",
    text:
      "<p>A version of hang-man, with a zombie twist. Try to guess the word before the zombie reaches you. 10 wrong guesses allowed per word, 3 lives per game.</p><p>This assignment was primarily to learn JavaScript in a web development environment.</p>",
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
}

// function initPortfolioItems() {

// }

// initPortfolioItems();
$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  $(".portfolio-div").on("click", function() {
    var portfolioId = $(this).attr("data-id");
    changePortfolioView(portfolioId);
    $(".portfolio-current").css("height", "600px");
    $(".portfolio-div").css("width", "158px");
    $(".portfolio-div").css("height", "100px");
    $(".portfolio-thumbnail").css("width", "158px");
    $(".portfolio-h3").css("font-size", "18px");
  });

  $(".portfolio-close").on("click", function() {
    $(".portfolio-current").css("height", "0px");
    $(".portfolio-div").css("width", "336px");
    $(".portfolio-div").css("height", "232px");
    $(".portfolio-thumbnail").css("width", "336px");
    $(".portfolio-h3").css("font-size", "34px");
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

  var scene = new ScrollMagic.Scene({ triggerElement: "#about" })
    // .setPin("#nav-trigger")
    .setClassToggle("#nav-trigger", "nav-shown")
    .addTo(controller);

  var trigger = 0.3;
  scene.triggerHook(trigger);

  new ScrollMagic.Scene({ triggerElement: "#about", duration: 850 })
    .setClassToggle("#nav-about", "nav-this-page")
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#portfolio", duration: 650 })
    .setClassToggle("#nav-portfolio", "nav-this-page")
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#contact", duration: 600 })
    .setClassToggle("#nav-contact", "nav-this-page")
    .addTo(controller);
});
