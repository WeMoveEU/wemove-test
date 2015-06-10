// h2 color test for click - creating goal
jQuery(document).ready(function($) {

  var h2_experiment = new AlephBet.Experiment({
    name: 'h2 color', 
    variants: {  
      red: {
        activate: function() {
          jQuery('h2 a').css({'color' : 'red'});
          jQuery('title').text('red title');
        }
      },
      blue: {
        activate: function() {
          jQuery('h2 a').css({'color' : 'blue'});
          jQuery('title').text('blue title');
        }
      }
    },
  });

  // creating a goal
  var h2_clicked_goal = new AlephBet.Goal('h2 header clicked');
  
  jQuery('h2').click(function() {
    // The chosen variant will be tied to the goal automatically
    console.log('clicked h2');
    h2_clicked_goal.complete();
  });
  
  // adding experiment to the goal
  h2_clicked_goal.add_experiment(h2_experiment);

});

