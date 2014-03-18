$(document).ready(function(){
    $('.reveal').reveal();

    reveal = $('.reveal').data('tek.reveal');

    $(document)
        .on('show.bs.reveal', function () {
            console.log('Show!');
        })
        .on('hide.bs.reveal', function () {
            console.log('Hide!');
        })
});