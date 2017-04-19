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