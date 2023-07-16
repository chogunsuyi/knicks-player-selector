playersRow = document.querySelectorAll('article');
Array.from(playersRow).forEach(article => article.addEventListener('click', beSelected));

abbreviatedStats = document.querySelectorAll('.abbreviated-stat');
Array.from(abbreviatedStats).forEach(element => element.addEventListener('mouseover', showFullStatName));
Array.from(abbreviatedStats).forEach(element => element.addEventListener('mouseout', hideFullStatName));

function beSelected(click) {
    Array.from(playersRow).forEach(article => article.classList.remove('selected'));
    click.target.closest('article').classList.toggle('selected');

    if (click.target.closest('article').id == 'JR') {
        document.querySelector('#player-number').innerText = '#30';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/randlju01.jpg';
        document.querySelector('#player-picture').alt = 'Julius Randle';

        document.querySelector('#player-name').innerText = 'Julius Randle';

        document.querySelector('#player-height').innerText = '6\'8"';
        document.querySelector('#player-weight').innerText = '250 lbs';
        document.querySelector('#player-age').innerText = '28';
        document.querySelector('#player-contract').innerText = '4 YRS | $117.90M';

        document.querySelector('#player-overall').innerText = '87';
    }

    else if (click.target.closest('article').id == 'JB') {
        document.querySelector('#player-number').innerText = '#11';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/brunsja01.jpg';
        document.querySelector('#player-picture').alt = 'Jalen Brunson';

        document.querySelector('#player-name').innerText = 'Jalen Brunson';

        document.querySelector('#player-height').innerText = '6\'1"';
        document.querySelector('#player-weight').innerText = '190 lbs';
        document.querySelector('#player-age').innerText = '26';
        document.querySelector('#player-contract').innerText = '4 YRS | $104.00M';

        document.querySelector('#player-overall').innerText = '87';
    }

    else if (click.target.closest('article').id == 'RB') {
        document.querySelector('#player-number').innerText = '#9';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/barrerj01.jpg';
        document.querySelector('#player-picture').alt = 'RJ Barrett';

        document.querySelector('#player-name').innerText = 'RJ Barrett';

        document.querySelector('#player-height').innerText = '6\'6"';
        document.querySelector('#player-weight').innerText = '214 lbs';
        document.querySelector('#player-age').innerText = '22';
        document.querySelector('#player-contract').innerText = '1 YRS | $8.90M';

        document.querySelector('#player-overall').innerText = '82';
    }

    else if (click.target.closest('article').id == 'JH') {
        document.querySelector('#player-number').innerText = '#3';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/hartjo01.jpg';
        document.querySelector('#player-picture').alt = 'Josh Hart';

        document.querySelector('#player-name').innerText = 'Josh Hart';

        document.querySelector('#player-height').innerText = '6\'5"';
        document.querySelector('#player-weight').innerText = '215 lbs';
        document.querySelector('#player-age').innerText = '27';
        document.querySelector('#player-contract').innerText = '2 YRS | $25.92M';

        document.querySelector('#player-overall').innerText = '79';
    }

    else if (click.target.closest('article').id == 'QG') {
        document.querySelector('#player-number').innerText = '#6';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/grimequ01.jpg';
        document.querySelector('#player-picture').alt = 'Quentin Grimes';

        document.querySelector('#player-name').innerText = 'Quentin Grimes';

        document.querySelector('#player-height').innerText = '6\'5"';
        document.querySelector('#player-weight').innerText = '205 lbs';
        document.querySelector('#player-age').innerText = '22';
        document.querySelector('#player-contract').innerText = '3 YRS | $8.96M';

        document.querySelector('#player-overall').innerText = '78';
    }

    else if (click.target.closest('article').id == 'IQ') {
        document.querySelector('#player-number').innerText = '#5';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/quickim01.jpg';
        document.querySelector('#player-picture').alt = 'Immanuel Quickley';

        document.querySelector('#player-name').innerText = 'Immanuel Quickley';

        document.querySelector('#player-height').innerText = '6\'3"';
        document.querySelector('#player-weight').innerText = '190 lbs';
        document.querySelector('#player-age').innerText = '23';
        document.querySelector('#player-contract').innerText = '2 YRS | $6.49M';

        document.querySelector('#player-overall').innerText = '82';
    }

    else if (click.target.closest('article').id == 'MR') {
        document.querySelector('#player-number').innerText = '#26';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/robinmi01.jpg';
        document.querySelector('#player-picture').alt = 'Mitchell Robinson';

        document.querySelector('#player-name').innerText = 'Mitchell Robinson';

        document.querySelector('#player-height').innerText = '7\'0"';
        document.querySelector('#player-weight').innerText = '240 lbs';
        document.querySelector('#player-age').innerText = '24';
        document.querySelector('#player-contract').innerText = '4 YRS | $60.00M';

        document.querySelector('#player-overall').innerText = '80';
    }

    else if (click.target.closest('article').id == 'CR') {
        document.querySelector('#player-number').innerText = '#0';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/reddica01.jpg';
        document.querySelector('#player-picture').alt = 'Cam Reddish';

        document.querySelector('#player-name').innerText = 'Cam Reddish';

        document.querySelector('#player-height').innerText = '6\'8"';
        document.querySelector('#player-weight').innerText = '218 lbs';
        document.querySelector('#player-age').innerText = '23';
        document.querySelector('#player-contract').innerText = '1 YR | $4.83M';

        document.querySelector('#player-overall').innerText = '75';
    }

    else if (click.target.closest('article').id == 'IH') {
        document.querySelector('#player-number').innerText = '#55';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/harteis01.jpg';
        document.querySelector('#player-picture').alt = 'Isaiah Hartenstein';

        document.querySelector('#player-name').innerText = 'Isaiah Hartenstein';

        document.querySelector('#player-height').innerText = '7\'0"';
        document.querySelector('#player-weight').innerText = '250 lbs';
        document.querySelector('#player-age').innerText = '24';
        document.querySelector('#player-contract').innerText = '2 YRS | $16.00M';

        document.querySelector('#player-overall').innerText = '76';
    }

    else if (click.target.closest('article').id == 'EF') {
        document.querySelector('#player-number').innerText = '#13';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/fournev01.jpg';
        document.querySelector('#player-picture').alt = 'Evan Fournier';

        document.querySelector('#player-name').innerText = 'Evan Fournier';

        document.querySelector('#player-height').innerText = '6\'7"';
        document.querySelector('#player-weight').innerText = '205 lbs';
        document.querySelector('#player-age').innerText = '30';
        document.querySelector('#player-contract').innerText = '3 YRS | $55.86M';

        document.querySelector('#player-overall').innerText = '74';
    }

    else if (click.target.closest('article').id == 'OT') {
        document.querySelector('#player-number').innerText = '#1';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/toppiob01.jpg';
        document.querySelector('#player-picture').alt = 'Obi Toppin';

        document.querySelector('#player-name').innerText = 'Obi Toppin';

        document.querySelector('#player-height').innerText = '6\'9"';
        document.querySelector('#player-weight').innerText = '220 lbs';
        document.querySelector('#player-age').innerText = '24';
        document.querySelector('#player-contract').innerText = '2 YRS | $12.15M';

        document.querySelector('#player-overall').innerText = '77';
    }

    else if (click.target.closest('article').id == 'JS') {
        document.querySelector('#player-number').innerText = '#45';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/simsje01.jpg';
        document.querySelector('#player-picture').alt = 'Jericho Sims';

        document.querySelector('#player-name').innerText = 'Jericho Sims';

        document.querySelector('#player-height').innerText = '6\'10"';
        document.querySelector('#player-weight').innerText = '245 lbs';
        document.querySelector('#player-age').innerText = '24';
        document.querySelector('#player-contract').innerText = '3 YRS | $5.66M';

        document.querySelector('#player-overall').innerText = '76';
    }

    else if (click.target.closest('article').id == 'DR') {
        document.querySelector('#player-number').innerText = '#4';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/rosede01.jpg';
        document.querySelector('#player-picture').alt = 'Derrick Rose';

        document.querySelector('#player-name').innerText = 'Derrick Rose';

        document.querySelector('#player-height').innerText = '6\'3"';
        document.querySelector('#player-weight').innerText = '200 lbs';
        document.querySelector('#player-age').innerText = '34';
        document.querySelector('#player-contract').innerText = '1 YR | $14.52M';

        document.querySelector('#player-overall').innerText = '76';
    }

    else if (click.target.closest('article').id == 'MM') {
        document.querySelector('#player-number').innerText = '#2';

        document.querySelector('#player-picture').src = 'https://www.basketball-reference.com/req/202106291/images/headshots/mcbrimi01.jpg';
        document.querySelector('#player-picture').alt = 'Miles McBride';

        document.querySelector('#player-name').innerText = 'Miles McBride';

        document.querySelector('#player-height').innerText = '6\'2"';
        document.querySelector('#player-weight').innerText = '200 lbs';
        document.querySelector('#player-age').innerText = '32';
        document.querySelector('#player-contract').innerText = '2 YRS | $3.40M';

        document.querySelector('#player-overall').innerText = '73';
    }
}


function showFullStatName(mouseover) {
    if (mouseover.target.id == 'position-short') {
        document.querySelector('#position-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'age-short') {
        document.querySelector('#age-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'games-short') {
        document.querySelector('#games-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'games-started-short') {
        document.querySelector('#games-started-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'fg-percent-short') {
        document.querySelector('#fg-percent-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'three-pt-percent-short') {
        document.querySelector('#three-pt-percent-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'ft-percent-short') {
        document.querySelector('#ft-percent-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'points-short') {
        document.querySelector('#points-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'rebounds-short') {
        document.querySelector('#rebounds-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'assists-short') {
        document.querySelector('#assists-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'steals-short') {
        document.querySelector('#steals-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'blocks-short') {
        document.querySelector('#blocks-full').style.display = 'inline';
    }
    else if (mouseover.target.id == 'turnovers-short') {
        document.querySelector('#turnovers-full').style.display = 'inline';
    }
}

function hideFullStatName(mouseout) {
    if (mouseout.target.id == 'position-short') {
        document.querySelector('#position-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'age-short') {
        document.querySelector('#age-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'games-short') {
        document.querySelector('#games-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'games-started-short') {
        document.querySelector('#games-started-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'fg-percent-short') {
        document.querySelector('#fg-percent-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'three-pt-percent-short') {
        document.querySelector('#three-pt-percent-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'ft-percent-short') {
        document.querySelector('#ft-percent-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'points-short') {
        document.querySelector('#points-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'rebounds-short') {
        document.querySelector('#rebounds-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'assists-short') {
        document.querySelector('#assists-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'steals-short') {
        document.querySelector('#steals-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'blocks-short') {
        document.querySelector('#blocks-full').style.display = 'none';
    }
    else if (mouseout.target.id == 'turnovers-short') {
        document.querySelector('#turnovers-full').style.display = 'none';
    }
}