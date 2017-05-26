jQuery(function($){
    $(document).ready(function(){
        svg4everybody(); //полифил для свг
        jQuery('.rp__content, .left-sidebar').scrollbar();


        var chatHeight = 0;
        $( "#divChatHistory > div" ).each(function( index ) {
            var $this = $(this);
            chatHeight += $this.outerHeight();
        });
        $('#divChatHistory').scrollTop($('#divChatHistory').scrollTop() + chatHeight);
        jQuery('#divChatHistory').scrollbar({
            "onScroll": function () {
                $('#divChatHistory').bind("DOMSubtreeModified", function () {
                    $('#divChatHistory').scrollTop($('#divChatHistory').scrollTop() + 500);
                });
            }
        });

        // возвращает cookie с именем name, если есть, если нет, то undefined
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        function setCookie(name, value, options) {
          options = options || {};

          var expires = options.expires;

          if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
          }
          if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
          }

          value = encodeURIComponent(value);

          var updatedCookie = name + "=" + value;

          for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
              updatedCookie += "=" + propValue;
            }
          }

          document.cookie = updatedCookie;
        }

        function deleteCookie(name) {
          setCookie(name, "", {
            expires: -1
          })
        } //работа с куками

        $('.properties__block_list-item_info-lists_link').on('click', function(e){
            e.preventDefault();

            var $this = $(this),
                item = $this.closest('.properties__block_list-item_info-lists-item'),
                list = $this.closest('.properties__block_list'),
                items = list.find('.properties__block_list-item_info-lists-item');

            if(!item.hasClass('active')){
                items.removeClass('active');
                item.addClass('active');
            } else {
                item.removeClass('active')
            }
        }); // табы для пропертей

        $('.personal__menu-list_item-link').on('click', function(e){
            e.preventDefault();

            var item = $(this).closest('.personal__menu-list_item'),
                contentItem = $('.personal__block-list_item'),
                itemPosition = item.data('class');

            contentItem.filter('.personal__block-list_item-' + itemPosition)
                .add(item)
                .addClass('active')
                .siblings()
                .removeClass('active');
        }); // табы

        if(typeof(getCookie("propertyClass")) !== 'undefined')
        {
            $('.properties__block').addClass('properties__block-table');
        }
        $('#bg_view_all').on('click', function(e){
            e.preventDefault();

            var item = $('.properties__block');

            if(!item.hasClass('properties__block-table')){
                item.addClass('properties__block-table');
                setCookie("propertyClass", true);
            } else {
                item.removeClass('properties__block-table');
                deleteCookie("propertyClass");
            }
        }); // изменение внешнего вида пропертей с сохранением в куки

        var owl_help = $("#owl-slider_help").owlCarousel({
            items: 1,
            slideSpeed: 5000,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            singleItem: true,
            dots: true,
            itemElement:'li',
            stageElement:'ul',
            dotsClass:'owl-slider_help_pager'
        });

        var owl_tenants = $("#owl-slider_tenants").owlCarousel({
            nav:true,
            items: 3,
            slideSpeed: 5000,
            autoplay: false,
            autoplayTimeout: 5000,
            loop: true,
            singleItem: false,
            dots: false,
            itemElement:'li',
            stageElement:'ul'
        });

        var owl_tenants = $("#owl-slider_roommates").owlCarousel({
            nav:true,
            items: 2,
            slideSpeed: 5000,
            autoplay: false,
            autoplayTimeout: 5000,
            loop: true,
            margin: 15,
            singleItem: false,
            dots: false,
            itemElement:'li',
            stageElement:'ul'
        });
        
        //charts
/*        var BarChart = $("#bar_chart");

        var data = {
            labels: ["Jan 17", "Feb 17", "Mar 17", "Apr 17", "May 17", "Jun 17", "Jul 17", "Aug 17", "Sep 17", "Oct 17", "Nov 17", "Dec 17"],
            datasets: [
                {
                    backgroundColor: "#bde7ec",
                    borderWidth: 0,
                    data: [23,27,34,19,43,36,57,44,29,33,46,25]
                },
                {
                    backgroundColor: "#96d4db",
                    borderWidth: 0,
                    data: [44,43,45,36,27,18,24,33,45,36,27,18]
                }
            ]
        };

        var myBarChart = new Chart(BarChart, {
            type: 'bar',
            data: data,
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false,
                            lineWidth: 5
                        },
                        ticks: {
                            fontFamily: "Montserrat-Regular",
                            fontColor: "#96d4db",
                            fontSize: 14
                        },
                        barPercentage: 1,
                        categoryPercentage: 0.6
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: {
                            display:false
                        }   
                    }]
                }
            }
        });*/
        //!barchart

/*        var DoubleDoughnutChart = $('#double_doughnut_chart');
        var data = {
            datasets: [{
                data: [10.05, 200.00],
                bodyFontSize: 50,
                borderWidth: 0,
                backgroundColor: []
            },
            {
                data: [100],
                bodyFontSize: 50,
                borderWidth: 0,
                backgroundColor: ['#fdd835']
            }]
        };
        var myDoubleDoughnutChart = new Chart(DoubleDoughnutChart, {
            type: 'doughnut',
            data: data,
            options: {
                legend: {
                    display: false
                },
                labels: {
                    display: false
                },
                tooltips: {
                    display: false
                },
                cutoutPercentage: 60,
                legendCallback: function(chart) {
                    var text = [];
                    var arrayData = chart.data.datasets[0].data;
                    var arrayAllSum;

                    arrayData.reduce(function(previousValue, currentValue, index, array) {
                        arrayAllSum = previousValue + currentValue;
                        return arrayAllSum;
                    });

                    text.push('<div class="doughnut_chart_sum"><p class="doughnut_chart_sum_title">Total</p><p class="doughnut_chart_sum_price">$' + arrayAllSum.toFixed(2) + '</p></div>');
                    return text.join("");
                }
            }
        });
        var sumArray = myDoubleDoughnutChart.data.datasets[0].data.length;
        var i;
        for (i = 0; i < sumArray; i++) {
            var r = Math.floor(Math.random() * (256));
            var g = Math.floor(Math.random() * (256));
            var b = Math.floor((256));
            var c = 'rgb(' + r + ',' + g + ',' + b + ')';
            myDoubleDoughnutChart.data.datasets[0].backgroundColor[i] = c;
        }
        myDoubleDoughnutChart.update();*/

        //!doubledoughnutchart

        var DoughnutChart = $('#doughnut_chart');
        var data = {
            labels: ['Priz', 'Principal', 'Insurance', 'Rates', 'Insurance', 'Rates'],
            datasets: [{
                data: [200.00, 10.05, 333.12, 12.34, 122.44, 335.65],
                bodyFontSize: 13,
                borderWidth: 0,
                backgroundColor: []
            }]
        };
        var myDoughnutChart = new Chart(DoughnutChart, {
            type: 'doughnut',
            data: data,
            options: {
                legend: {
                    display: false
                },
                cutoutPercentage: 90,
                legendCallback: function(chart) {
                    var text = [];
                    var arrayData = chart.data.datasets[0].data;
                    var arrayAllSum;
                    var circumFerence;
                    var anglePie = 0;
                    var Xposition = 0;
                    var Yposition = 0;
                    var prev = 90;
                    var angleSector = 0;
                    var SectorClass;

                    arrayData.reduce(function(previousValue, currentValue, index, array) {
                        arrayAllSum = previousValue + currentValue;
                        return arrayAllSum;
                    });

                    text.push('<ul>');
                    for (var i=0; i<chart.data.datasets[0].data.length; i++) {
                        circumFerence = chart.data.datasets[0].data[i] * 100 / arrayAllSum; // percent sector
                        anglePie = circumFerence * 360 / 100 + anglePie; // angle sector + last angle
                        angleSector = (prev + (90 - anglePie)) / 2; // center angle sector
                        prev = 90 - anglePie;

                        Xposition = (chart.chart.width / 2 + 30) * Math.cos(Math.PI/180*angleSector) + chart.chart.width / 2 - 4;
                        Yposition = - (chart.chart.width / 2 + 30) * Math.sin(Math.PI/180*angleSector) + chart.chart.width / 2;

                        if(angleSector > -90)
                        {
                            SectorClass = "right";
                        }
                        else if(angleSector < -90)
                        {
                            SectorClass = "left";
                        }
                        text.push('<li class="' + SectorClass + '" style="left:' + Xposition + 'px; top:' + Yposition + 'px;">');
                        text.push('<span style="border-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                        text.push('<div><p style="color:' + chart.data.datasets[0].backgroundColor[i] + '">'); 
                        if (chart.data.labels[i]) {
                            text.push(chart.data.labels[i]);
                        }
                        text.push('</p>');
                        text.push('<p class="price">$ ' + chart.data.datasets[0].data[i].toFixed(2) + '</p></div>');
                        text.push('</li>');
                    }
                    text.push('</ul>');

                    text.push('<div class="doughnut_chart_sum"><p class="doughnut_chart_sum_title">Expenses</p><p class="doughnut_chart_sum_price">$' + arrayAllSum.toFixed(2) + '</p></div>');
                    return text.join("");
                }
            }
        });
        var sumArray = myDoughnutChart.data.datasets[0].data.length;
        var i;
        for (i = 0; i < sumArray; i++) {
            var r = Math.floor(Math.random() * (256));
            var g = Math.floor(Math.random() * (256));
            var b = Math.floor((256));
            var c = 'rgb(' + r + ',' + g + ',' + b + ')';
            myDoughnutChart.data.datasets[0].backgroundColor[i] = c;
        }
        myDoughnutChart.update();
        document.getElementById('js-legend').innerHTML = myDoughnutChart.generateLegend();
        function chartElementToLeft() {
            $( ".left" ).each(function( index ) {
                var left = parseInt($( this ).css('left'), 10);
                var width = $( this ).width();
                var leftMargin = left - width;
                $( this ).css("left", leftMargin + 'px');
            });
        };
        setTimeout(
            chartElementToLeft
            , 500);

        //!doughnutchart
        //!charts
    });
})
function e(e, t) {
    var o = Math.ceil(t / e * 100);
    o >= 100 && (o = 100, a.fadeOut()), r.text(o + "%")
}
var t, o, n = [],
    i = 1,
    a = $(".preloader"),
    r = $(".preloader__percents"),
    o = $("*").css("background-image");
$.each($("*"), function() {
    var e = $(this),
        i = e.is("img");
    o.indexOf("url") > -1 && (t = o.slice(5, -2), n.push(t)), i && (t = e.attr("src"), t && n.push(t))
}), o = n.length, n.forEach(function(t, n, a) {
    var r = $("<img>", {
        attr: {
            src: a[n]
        }
    });
    r.on({
        load: function() {
            e(o, i), i++
        },
        error: function() {
            i++, e(o, i)
        }
    })
});