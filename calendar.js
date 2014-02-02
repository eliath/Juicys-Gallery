(function(window, document){
    var e = document.getElementById('calendar'),
        date = new Date(),
        month = date.getMonth(),
        day = date.getDate(),
        year = date.getFullYear(),
        leap = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0),
        daysinmonth = (function(pos, type){
        	console.log(pos + ' ' + type);
            if (type === true && pos === 1){
                return 29;
            }
            if (type === false && pos === 1){
                return 28;
            }
            if (pos === 8 || pos === 3 || pos === 5 || pos === 10){
                return 30;
            }
            return 31;
        }(month, leap)),
        names = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        monthname = document.createTextNode(names[month] + ', ' + year),
        monthel = document.createElement('h2'),
        list = document.createElement('ul'),
        el,
        dc,
        d,
        i = 0,
        iv = 0;  

        list.setAttribute('class','calendar-month');
        monthel.setAttribute('class','month-name');
        monthel.appendChild(monthname);
        e.appendChild(monthel);
        e.appendChild(list);

        for(i; i < daysinmonth; i++){
            el = document.createElement('li'),
            dc = document.createElement('span'),
            iv = (i + 1),
            d = document.createTextNode(iv);

            el.setAttribute('class','day');
            if(iv === day){
                el.setAttribute('class','day today');
            }
            el.setAttribute('data-date', (month + '/' + (i+1) + '/' + year));
            dc.setAttribute('class','day-num');
            dc.appendChild(d);
            el.appendChild(dc);
            list.appendChild(el);
        }

}(window, document));