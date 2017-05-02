jQuery(function($){
    $(document).ready(function(){
        svg4everybody();
        jQuery('.rp__content, .left-sidebar, .tenanant-chat_left_block_chat-inner_middle').scrollbar();

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
        });
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

        });

        //chart
        /*var BarChart = $('#bar_chart');
        var BarData = {
            labels: ['Priz', 'Principal', 'Insurance'],
            datasets: [
                {
                    data: [3,2]
                },
                {
                    data: [4,1]
                },
                {
                    data: [7,5]
                }
            ]
        };
        var myBarChart = new Chart(BarChart, {
            type: 'bar',
            data: BarData
        });*/
        var ctx = document.getElementById("bar_chart").getContext("2d");

        var data = {
            labels: ["Jan 17", "Jan 17", "Jan 17", "Jan 17", "Jan 17", "Jan 17"],
            datasets: [
                {
                    backgroundColor: "#26c6da",
                    borderWidth: 0,
                    data: [3,7,4,2,33,6]
                },
                {
                    backgroundColor: "#00acc1",
                    borderWidth: 0,
                    data: [4,3,5,6,7,8]
                }
            ]
        };

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                barValueSpacing: 0,
                legend: {
                    display: false
                },
                gridLines: {
                    display: false
                }
            }
        });

        /*var DoughnutChart = $('#doughnut_chart');
        var data = {
            labels: ['Priz', 'Principal', 'Insurance', 'Rates', 'Insurance', 'Rates'],
            datasets: [{
                data: [10.05, 200.00, 333.12, 12.34, 122.44, 335.65],
                bodyFontSize: 50,
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
                cutoutPercentage: 80,
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

                        Xposition = (chart.chart.width / 2 + 50) * Math.cos(Math.PI/180*angleSector) + chart.chart.width / 2 - 8;
                        Yposition = - (chart.chart.width / 2 + 50) * Math.sin(Math.PI/180*angleSector) + chart.chart.width / 2 - 8;
                        //console.log(angleSector);
                        if(angleSector > -90)
                        {
                            SectorClass = "right";
                        }
                        else if(angleSector < -90)
                        {
                            SectorClass = "left";
                        }
                        text.push('<li class="' + SectorClass + '" style="left:' + Xposition + 'px; top:' + Yposition + 'px;">');
                        text.push('<span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                        text.push('<div><p style="color:' + chart.data.datasets[0].backgroundColor[i] + '">'); 
                        if (chart.data.labels[i]) {
                            text.push(chart.data.labels[i]);
                        }
                        text.push('</p>');
                        text.push('<p class="price">$ ' + chart.data.datasets[0].data[i].toFixed(2) + '</p></div>');
                        text.push('</li>');
                    }
                    text.push('</ul>');

                    text.push('<div class="doughnut_chart_sum"><p class="doughnut_chart_sum_title">Total</p><p class="doughnut_chart_sum_price">$' + arrayAllSum.toFixed(2) + '</p></div>');
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

        $( ".left" ).each(function( index ) {
            var left = parseInt($( this ).css('left'), 10);
            var width = $( this ).width();
            var leftMargin = left - width;
            $( this ).css("left", leftMargin + 'px');
        });*/
        //!chart
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