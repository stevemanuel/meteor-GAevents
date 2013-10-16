Package.describe({
  summary: 'Makes Google Analytics event tracking look like the Collection API.'
});

Package.on_use(function(api, where) {
  if(api.export) {
    api.export('GAevents');
  }

  api.add_files('ga-events.js', 'client');
});