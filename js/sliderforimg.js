jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    });
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            // left: + slideWidth
        }, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            // left: - slideWidth
        }, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();

    });

    $('a.control_next').click(function () {
        moveRight();
        $('.laungeslider').toggleClass('.vhodslider').removeClass('.laungeslider')
        $('.laungeslider').css('visibility', 'hidden')
        $('.vhodslider').css('visibility', 'visible')
    });

    $('a.control_next').click(function () {
        moveRight();
        $('.vhodslider').toggleClass('.barslider')
        $('.vhodslider').css('visibility', 'hidden')
        $('.barslider').css('visibility', 'visible')
    });

});

// .barslider, .bathroomslider, .artprslider, .lozhaslider
