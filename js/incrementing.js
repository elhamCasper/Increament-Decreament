// $(function() {

//   $(".numbers-row").append('<div class="inc button">+</div><div class="dec button">-</div>');

//   $(".button").on("click", function() {

//     var $button = $(this);
//     var oldValue = $button.parent().find("input").val();

//     if ($button.text() == "+") {
//   	  var newVal = parseFloat(oldValue) + 1;
//   	} else {
// 	   // Don't allow decrementing below zero
//       if (oldValue > 0) {
//         var newVal = parseFloat(oldValue) - 1;
// 	    } else {
//         newVal = 0;
//       }
// 	  }

//     $button.parent().find("input").val(newVal);

//   });

// });

$(function() {

  $(".numbers-row").prepend('<div class="dec button">-</div>');
  
  $(".numbers-row").append('<div class="inc button">+</div>');

  $(".numbers-row-bath").prepend('<div class="dec button">c</div>');
  
  $(".numbers-row-bath").append('<div id="add" class="inc button">q</div>');

  $('#add').click( function() {
    var oldValuer = $('div#add').parent().find("input").val();
    var newValt = parseFloat(oldValuer) + 1;
    console.log(newValt);
    $('#add').parent().find("input").val(newValt);

  });

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") 
    {
  	  var newVal = parseFloat(oldValue) + 1;
    } 

    else if ($button.$('#add') == "q") 
    {
  	  var newVal = parseFloat(oldValue) + 0.5;
    } 

    else if ($button.text() == "c") 
    {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 0.5;
	    } else {
        newVal = 0;
      }
    } 
  
    else 
    {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
    }

    // if ($button.text() == "+") {
  	//   var newVal = parseFloat(oldValue) + 1;
  	// } else {
	  //  // Don't allow decrementing below zero
    //   if (oldValue > 0) {
    //     var newVal = parseFloat(oldValue) - 1;
	  //   } else {
    //     newVal = 0;
    //   }
    // }

    $button.parent().find("input").val(newVal);

  });

});