'use strict';
let sharm = 15;
let hurgada = 25;
let taba = 6;
let numberOfTourists = prompt('Введите кол-во человек', '');
if(numberOfTourists < 1 && parseInt(numberOfTourists) != numberOfTourists) {alert('Некорректный ввод');}
else {
    if(taba >= numberOfTourists) {
       let tourTaba = confirm('Есть место в группе Taba. Согласны быть в этой группе?');
       if(tourTaba === true) {
           taba = taba - numberOfTourists;
           alert('Приятного путешествия в группе Taba');
       }
       else {
           alert('Нам очень жаль, приходите еще!');
       }
    }
    else if(sharm >= numberOfTourists) {
        let tourSharm = confirm('Есть место в группе Sharm. Согласны быть в этой группе?');
        if(tourSharm === true) {
            sharm = sharm - numberOfTourists;
            alert('Приятного путешествия в группе Sharm');
        }
        else {
            alert('Нам очень жаль, приходите еще!');
        }
    }
    else if(hurgada >= numberOfTourists) {
        let tourHurgada = confirm('Есть место в группе Hurgada. Согласны быть в этой группе?');
        if(tourHurgada === true) {
            hurgada = hurgada - numberOfTourists;
            alert('Приятного путешествия в группе Hurgada');
        }
        else {
            alert('Нам очень жаль, приходите еще!');
        }
    }
    else {
        alert('Извините, мест нет.');
    }
}