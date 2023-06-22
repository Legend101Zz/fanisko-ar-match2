$(document).ready(function() {
    $.ajax({
        url: "https://d1u2maujpzk42.cloudfront.net/matchdata/1198/players.json",
        type: 'GET',
        success: function(res) {
            // var _resData = res;
            var _firstInningsData = res.first_innings_players;
            var _secondInningsData = res.second_innings_players;  
            console.log(_firstInningsData)
            console.log(_secondInningsData)  
            playerDisplay(_firstInningsData, _secondInningsData); 
      
        }
    });
});

const playerDisplay = (indData, ausData) => {
    const buttonInd = document.getElementById('indBtn');
    const buttonAus = document.getElementById('ausBtn');
    const playerFirstInn = document.querySelector('.swiper-wrapper');
    
    addPlayer(indData, playerFirstInn);
    buttonInd.addEventListener('click', () => {
      playerFirstInn.innerHTML = ''; 
      addPlayer(indData, playerFirstInn);
    });
    
    buttonAus.addEventListener('click', () => {
      playerFirstInn.innerHTML = ''; 
      addPlayer(ausData, playerFirstInn);
    });
  }
  
  const addPlayer = (data, divId) => {
    data.sort((a, b) => a.key - b.key);
    data.forEach((player, index) => {
      const divTag = document.createElement('div');
      divTag.classList.add('swiper-slide');
    
      const imgTag = document.createElement('img');
      imgTag.setAttribute('id', player.playerid);
      imgTag.setAttribute('src', player.player_image);
      imgTag.setAttribute('alt', 'Player ' + index);
      divTag.appendChild(imgTag);
      divId.appendChild(divTag);
    });
  
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical', 
        centeredSlides: true,
        spaceBetween: 5,
        loop: true,
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-up ',
          prevEl: '.swiper-button-down',
        },
      });
  }
  
    


