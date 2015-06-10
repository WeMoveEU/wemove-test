// todo clear drupal cache

var page_title_experiment = new AlephBet.Experiment({
  name: 'page title', 
  variants: {  // variants for this experiment; required.
    short: {
      activate: function() {  // activate function to execute if variant is selected
        jQuery('title').text('short version of title');
      }
    },
    long: {
      activate: function() {
        jQuery('title').text('long version of title');
      }
    }
  },
});

// tomek: it doesn't working due to not configured Google Universal Analytics

// creating a goal
var page_title_clicked_goal = new AlephBet.Goal('page clicked anywhere');
$('body').on('click', function() {
 // The chosen variant will be tied to the goal automatically
 page_title_clicked_goal.complete();
});

// adding experiment to the goal
page_title_clicked_goal.add_experiment(page_title_experiment);


// tracking non-unique goals, e.g. page views
var page_views = new AlephBet.Goal('page view', {unique: false});
