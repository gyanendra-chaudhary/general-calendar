window.setInterval(timeDate, 1000);
      function timeDate() {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();

        var ampm = 12 ? "PM" : "AM";
        hours = hours % 12;
        var n = hours + " : " + minutes+" : " +seconds+" - "+ ampm;
        var time = (document.querySelector("#current-time span").innerHTML = n);
        var months = [
          "January",
          "February",
          "Mararch",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        var days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
        var year, month, day;
        year = d.getFullYear();
        month = d.getMonth();
        day = d.getDay();
        document.querySelector("#current-date span").innerText =months[month] +"  "+ year ;
      }