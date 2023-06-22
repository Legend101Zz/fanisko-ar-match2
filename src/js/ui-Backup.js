import {displayRunMesh,wagonWheel} from './config.js';

$(document).ready(function(){
    let _resData;
    $.ajax({
        url: "https://d1u2maujpzk42.cloudfront.net/matchdata/1198/players.json",
        type: 'GET',
        success: function(res) {
             _resData = res;
            // console.log(_resData);  
            countryDisplay(_resData);  
            playerDisplay(_resData); 
            runsDisplay(_resData.first_innings_score,_resData.first_innings_wicket,_resData.first_innings_over,_resData.first_innings_team_logo);      
        }
    });
    var runData = [
        {"run":1,"color":"white","id":"one"},{"run":2,"color":"yellow","id":"two"},{"run":3,"color":"yellow","id":"three"},
        {"run":4,"color":"blue","id":"four"},{"run":6,"color":"red","id":"six"},{"run":'ALL',"color":"grey","id":"all"}
    ];
    scores(runData);
    $('.scoreList').click((e)=>{
        e.preventDefault();
        let _Data = e.target.id;
        wagonWheelDisplay(_Data);
    })
    // PLAYER DISPLAY 
    $('.inningsOneCountry').click(()=>{
        $('.firstInningsPlayer').show();
        $('.secondInningsPlayer').hide();
        runsDisplay(_resData.first_innings_score,_resData.first_innings_wicket,_resData.first_innings_over,_resData.first_innings_team_logo);
    });
    $('.inningsTwoCountry').click(()=>{
        $('.firstInningsPlayer').hide();
        $('.secondInningsPlayer').show();
        runsDisplay(_resData.second_innings_score,_resData.second_innings_wicket,_resData.second_innings_over,_resData.second_innings_team_logo);
    });
    $('.inningsContainer').click((e)=>{
        playersRunDetails(e.target.id);       
    });
})
const runsDisplay = (score,wicket,overs,teamLogo) => {
    document.getElementById('teamScore').innerHTML = score + ' / ' + wicket;
    document.getElementById('overs').innerHTML = overs + ' Ovr';
    document.getElementById('teamFlag').src =teamLogo;
}
const countryDisplay = (_resData) =>{
    document.getElementById('inningsOneCountry').innerHTML = _resData.first_innings_shortcode;
    document.getElementById('inningsTwoCountry').innerHTML = _resData.second_innings_shortcode;
   
}
const playerDisplay = (_resData) => {
    const _firstInnPlayer = _resData.first_innings_players;
    const _secondInnPlayer = _resData.second_innings_players;
    const playerFirstInn = document.getElementById('firstInningsPlayer');
    const playerSecondInn = document.getElementById('secondInningsPlayer');
    addPlayer(_firstInnPlayer,playerFirstInn);
    addPlayer(_secondInnPlayer,playerSecondInn);
}
const addPlayer = (data,divId) => {
    data.map((players)=>{
        let _img = document.createElement('img');
        _img.setAttribute('style','display: block;margin-left: auto;margin-right: auto;width:32px;border-radius: 50%;');
        _img.setAttribute('src', `${players.player_image}`);
        _img.setAttribute('id', `${players.playerid}`); 
        divId.appendChild(_img);
    })  
}
const playersRunDetails = (_playerId) => {
    $.ajax({
        url: `https://d1u2maujpzk42.cloudfront.net/matchdata/1198/${_playerId}.json`,
        type: 'GET',
        success: function(res) {
            const _resData = res;
            // console.log(_resData); 
            displayRunMesh(_resData);// INSIDE CONFIQ.JS   
            wagonWheel(_resData);
        }
    });
}
const scores = (runData)=>{
    let cont = document.getElementById('footerContainer');
    let ul = document.createElement('ul');
        // ul.setAttribute('style', 'width:100%;text-align:center;float:left');
        ul.setAttribute('class', 'scoreList');
    runData.map((data)=>{
        let li = document.createElement('li');
        li.innerHTML = data.run; 
        li.setAttribute('style', `color:${data.color};`);    
        li.setAttribute('id', `${data.id}`);
        ul.appendChild(li);     
    });
    cont.appendChild(ul);      
}
const wagonWheelDisplay = (data) => {
    console.log(data);
}

const teamsScore =() => {
   
}