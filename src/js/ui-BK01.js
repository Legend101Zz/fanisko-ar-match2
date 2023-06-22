// import {displayRunMesh,wagonWheel} from './config.js';
import { displayRunMesh, wagonWheel, displayLines } from "./config.js";

$(document).ready(function () {
  let _resData;
  $.ajax({
    
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
  var runData = [
    { run: 1, color: "white", id: "One" },
    { run: 2, color: "yellow", id: "Two" },
    { run: 3, color: "yellow", id: "Three" },
    { run: 4, color: "blue", id: "Four" },
    { run: 6, color: "red", id: "Six" },
    { run: "ALL", color: "grey", id: "all" },
  ];
  scores(runData);
  $(".scoreList").click((e) => {
    e.preventDefault();
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
    playersRunDetails(e.target.id);
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

  addPlayer(indData, playerFirstInn);
  buttonInd.addEventListener("click", () => {
    playerFirstInn.innerHTML = "";
    addPlayer(indData, playerFirstInn);
  });

  buttonAus.addEventListener("click", () => {
    playerFirstInn.innerHTML = "";
    addPlayer(ausData, playerFirstInn);
  });
};

const addPlayer = (data, divId) => {
  data.forEach((player, index) => {
    const divTag = document.createElement("div");
    divTag.classList.add("swiper-slide");

    console.log("Player-data" + player);

    const imgTag = document.createElement("img");
    imgTag.setAttribute("id", player.playerid);
    imgTag.setAttribute("src", player.player_image);
    imgTag.setAttribute("alt", "Player " + index);
    divTag.appendChild(imgTag);
    divId.appendChild(divTag);
  });

  var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    centeredSlides: true,
    spaceBetween: 5,
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-up ",
      prevEl: ".swiper-button-down",
    },
  });
};

const playersRunDetails = (_playerId) => {
  $.ajax({
   
    type: "GET",
    success: function (res) {
      const _resData = res;
      console.log(_resData);
      displayRunMesh(_resData); // INSIDE CONFIQ.JS
      wagonWheel(_resData);
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
    ul.appendChild(li);
  });
  cont.appendChild(ul);
};
