(function($) {

  $.fn.SimpleIndent = function() {
    var $textarea = this;
    var constants = {
      RETURN_KEY: 13
    };

    this.keydown(function(e) {
      // only respond to return
      if (e.keyCode !== constants.RETURN_KEY) return;

      // dont respond to initial keydown. we'll add the newline later
      e.preventDefault();

      var val = $textarea.val();
      var start = $textarea[0].selectionStart;
      // grab the text up to the cursor position
      var chunk = val.substr(0, start);
      // split it at newline characters
      var lines = chunk.split('\n');
      // finally, grab the line before the cursor to apply its indentation to the current line
      var previousLine = lines[lines.length-1];

      // run through previous line and append spaces to a var
      var spaces = '\n';

      for (var i=0, len=previousLine.length; i < len; i++) {
        // bail out if there isn't a space
        if (previousLine.charAt(i) !== ' ') break;
        // append a space
        spaces += ' ';
      }

      // add text before the cursor + the new spaces + rest of text
      $textarea.val(val.substring(0, start) + spaces + val.substring(start));

      $textarea.keyup(function(e) {
        var pos = start + spaces.length;
        $textarea[0].setSelectionRange(pos, pos);
        $textarea.unbind('keyup');
      });
    });

    // maintain chainability
    return this;
  };

})(jQuery);
