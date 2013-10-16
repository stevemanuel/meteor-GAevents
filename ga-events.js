var root = this;

root.GAevents = root.GAevents || {}

// just like the collections API, pass an object with your event data
// along with true if the event shouldn't effect bounces (defaults to false)
GAevents.insert = function(obj, bounce) {
  // if site uses ga.js (old)
  if(window._gaq) {
    _gaq.push([
      '_trackEvent',
      obj.category, 
      obj.action, 
      obj.label || null,
      obj.value || null, 
      bounce || false
    ]);
  }
  // if site uses analytics.js (new)
  else {
    ga('send','event',
      obj.category,
      obj.action,
      obj.label || null,
      obj.value || null,
      {
        'nonInteraction': bounce || false
      }
    );
  }

}