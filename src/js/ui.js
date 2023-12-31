// import {displayRunMesh,wagonWheel} from './config.js';
import { displayRunMesh, wagonWheel, displayLines } from "./config.js";
var initialLoad = true;
var initialLoad2 = true;
$(document).ready(function () {
  let _resData;
  $.ajax({
    url: "https://fanisko-stadium-ar-backend.onrender.com/fanisko/api/match2",
    type: "GET",
    success: function (match) {
      $.ajax({
        url: `https://d1u2maujpzk42.cloudfront.net/icc-scores/${match.id}/player.json`,
        type: "GET",
        success: function (res) {
          var _firstInningsData = res.first_innings_players;
          var _secondInningsData = res.second_innings_players;
          playerDisplay(_firstInningsData, _secondInningsData);

          _resData = res;
          // console.log(_resData);
          countryDisplay(_resData);
          runsDisplay(
            _resData.first_innings_score,
            _resData.first_innings_wicket,
            _resData.first_innings_over,
            _resData.first_innings_team_logo
          );
        },
      });
    },
  });

  var runData = [
    { run: 1, color: "#FFFFFF", id: "Ones" },
    { run: 2, color: "#FFE557", id: "Twos" },
    { run: 3, color: "#FFE557", id: "Threes" },
    { run: 4, color: "#4D5BFF", id: "Fours" },
    { run: 6, color: "#FF1F1F", id: "Sixes" },
    { run: "ALL", color: "grey", id: "all" },
  ];
  scores(runData);
  $(".scoreList").click((e) => {
    e.preventDefault();
    let _Data = e.target.id;
    //
    displayLines(e.target.id);
  });
  // PLAYER DISPLAY
  $(".inningsOneCountry").click(() => {
    $(".firstInningsPlayer").show();
    $(".secondInningsPlayer").hide();
    runsDisplay(
      _resData.first_innings_score,
      _resData.first_innings_wicket,
      _resData.first_innings_over,
      _resData.first_innings_team_logo
    );
  });
  $(".inningsTwoCountry").click(() => {
    $(".firstInningsPlayer").hide();
    $(".secondInningsPlayer").show();
    runsDisplay(
      _resData.second_innings_score,
      _resData.second_innings_wicket,
      _resData.second_innings_over,
      _resData.second_innings_team_logo
    );
  });
  $(".swiper-wrapper").click((e) => {
    // console.log(e.target.id);
    if (initialLoad2) {
      console.log(e);
      e.target.style.border = "5px solid rgb(162, 149, 71)";
      // e.target.style.width = "68px";
      e.target.style.filter = `brightness(${100}%)`;
      e.target.style.transform = "scale(1.2)";
      e.target.style.backgroundColor = "white";
      e.target.style.opacity = "1";
      playersRunDetails(e.target.id);
    }
    initialLoad2 = false;
  });
});
const runsDisplay = (score, wicket, overs, teamLogo) => {
  document.getElementById("teamScore").innerHTML = score + " / " + wicket;
  document.getElementById("overs").innerHTML = overs + " Ovr";
  document.getElementById("teamFlag").src = teamLogo;
};
const countryDisplay = (_resData) => {
  document.getElementById("inningsOneCountry").innerHTML =
    _resData.first_innings_shortcode;
  document.getElementById("inningsTwoCountry").innerHTML =
    _resData.second_innings_shortcode;
};
// indData, ausData
const playerDisplay = (indData, ausData) => {
  const buttonInd = document.getElementById("inningsOneCountry");
  const buttonAus = document.getElementById("inningsTwoCountry");
  const playerFirstInn = document.querySelector(".swiper-wrapper");
  buttonInd.style.color = "#a29547";
  buttonInd.style.borderColor = "#a29547";

  addPlayer(indData, playerFirstInn);
  buttonInd.addEventListener("click", () => {
    buttonInd.style.color = "#a29547";
    buttonInd.style.borderColor = "#a29547";
    buttonAus.style.color = "white";
    buttonAus.style.borderColor = "white";
    playerFirstInn.innerHTML = "";
    addPlayer(indData, playerFirstInn);
    console.log("inningsOneCountry");
  });

  buttonAus.addEventListener("click", () => {
    buttonAus.style.color = "#a29547";
    buttonAus.style.borderColor = "#a29547";
    buttonInd.style.color = "white";
    buttonInd.style.borderColor = "white";
    playerFirstInn.innerHTML = "";

    addPlayer(ausData, playerFirstInn);
    console.log("inningsTwoCountry");
  });
};

const addPlayer = (data, divId) => {
  data.forEach((player, index) => {
    const divTag = document.createElement("div");
    divTag.classList.add("swiper-slide");

    const imgTag = document.createElement("img");
    const playerName = document.createElement("span");

    imgTag.setAttribute("id", player.playerid);
    imgTag.setAttribute("src", player.player_image);
    imgTag.setAttribute("alt", "Player " + index);
    divTag.appendChild(imgTag);
    playerName.setAttribute("id", player.playerid);
    playerName.setAttribute("class", "_playerName");
    $(playerName).html(player.player_name);
    divTag.appendChild(playerName);
    divId.appendChild(divTag);
    // console.log(playerName)
  });

  // var swiper = new Swiper(".swiper-container", {
  //   direction: "horizontal",
  //   centeredSlides: true,
  //   spaceBetween: 5,
  //   loop: true,
  //   slidesPerView: 3,
  //   navigation: {
  //     nextEl: ".swiper-button-down",
  //     prevEl: ".swiper-button-up",
  //   },
  // });

  var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    centeredSlides: true,
    spaceBetween: 5,
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-down",
      prevEl: ".swiper-button-up",
    },
    on: {
      slideChange: function (e) {
        if (!initialLoad) {
          const index_currentSlide = e.activeIndex;

          const getActive = e.slides[index_currentSlide].querySelector("img");
          $(getActive).css({
            border: "5px solid rgb(162, 149, 71)",
            filter: "brightness(100%)",
            transform: "scale(1.2)",
            backgroundColor: "white",
            opacity: "1",
          });
          const getPrevious =
            e.slides[index_currentSlide - 1].querySelector("img");
          const getNext = e.slides[index_currentSlide + 1].querySelector("img");

          console.log(getNext, getPrevious);
          // Remove added styles
          $(getPrevious).css({
            border: "",
            filter: "brightness(100%)",
            transform: "",
            backgroundColor: "",
            opacity: "",
          });
          $(getNext).css({
            border: "",
            filter: "brightness(100%)",
            transform: "",
            backgroundColor: "",
            opacity: "",
          });
          // getActive.style.transform = "scale(1.2)";

          // getActive.style.backgroundColor = "white";

          // getPrevious.style.removeProperty("transform");
          // getPrevious.style.removeProperty("backgroundColor");
          // console.log(e.slides);
          let id = getActive.id;

          var ele = e.slides[index_currentSlide];
          var elePre = e.slides[index_currentSlide - 1];
          console.log("initial__function", ele);
          // ele.style.backgroundColor = "rgb(162, 149, 71)";
          // ele.style.width = "68px";

          // elePre.style.removeProperty("width");
          // elePre.style.removeProperty("backgroundColor");
          // console.log(id);
          // console.log("itswoekinggf");
          playersRunDetails(id);
        }
        initialLoad = false;
      },
    },
  });
};

const playersRunDetails = (_playerId) => {
  $.ajax({
    url: "https://fanisko-stadium-ar-backend.onrender.com/fanisko/api/match2",
    type: "GET",
    success: function (match) {
      $.ajax({
        url: `  https://d1u2maujpzk42.cloudfront.net/icc-scores/${match.id}/${_playerId}.json`,

        type: "GET",
        success: function (res) {
          const _resData = res;
          console.log(_resData);
          displayRunMesh(_resData); // INSIDE CONFIQ.JS
          wagonWheel(_resData);
        },
      });
    },
  });
};
const scores = (runData) => {
  let cont = document.getElementById("footerContainer");
  let ul = document.createElement("ul");
  // ul.setAttribute('style', 'width:100%;text-align:center;float:left');
  ul.setAttribute("class", "scoreList");
  runData.map((data) => {
    let li = document.createElement("li");
    li.innerHTML = data.run;
    li.setAttribute("style", `color:${data.color};`);
    li.setAttribute("id", `${data.id}`);

    // default border style
    li.style.border = "2px solid transparent";
    console.log("li_here__-->", li);
    // Add click event listener

    li.addEventListener("click", () => {
      // Removing golden border from all buttons
      console.log("hit__here--->");
      runData.map((item) => {
        const button = document.getElementById(`${item.id}`);
        button.style.border = "2px solid transparent";
      });

      // golden border to the clicked button
      li.style.border = "2px solid goldenrod";
    });
    const newHtml = li.innerHTML.toLowerCase();
    if (newHtml == "all") {
      li.style.border = "2px solid goldenrod";
    }

    ul.appendChild(li);
  });
  cont.appendChild(ul);
};
const wagonWheelDisplay = (data) => {
  console.log(data);
};
