// jQuery("#inicio h1").fitText(1.6, { minFontSize: '15px', maxFontSize: '36px' });
// jQuery("#inicio .descricao").fitText(1.6, { minFontSize: '10px', maxFontSize: '26px' });

$('.burger-btn').click(function() {
  $('.menu-open').css("display", "block");
  $('body').css("overflow", "hidden");
});

$('.close-btn').click(function() {
  $('.menu-open').css("display", "none");
});

$(".parallax").paroller({
  factor: 0.1,
  type: 'background',
  direction: 'vertical' });
