// user will click on a textarea to add indentation to
$('textarea').click(function() {
  $(this).css('border', '2px dotted orange');
  $(this).SimpleIndent();

  // remove click once user chooses
  $('textarea').unbind('click');
});
