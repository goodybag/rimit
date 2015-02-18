# Rimit - Sensible Rate Limiter with Persistence

```javascript
var rate = require('rimit')({
  day:    1000  // Max 1000 daily
, second: 5     // Max 5 per second

  // If you want to specify how to persist
  // (in-memory by default)
, persistence: {
    name: 'google-geocoder-1'
  , save: function( entry, done ){
      // 
      db.rate_limiter.upsert( entry, done )
    }
    // how to get the initial entry object
  , start: function( done ){
      db.rate_limiter.findOne( this.name, done );
    }
  }
});

// Execute the next available spot in the limit band
rate(/* optionally, pass ready callback here */)
  .on('ready', function( t ){
    console.log( 'Executed after %s microsends', t );
  })
  .on('limited', function( t ){
    console.log( 'We have to wait %s microseconds', t );
  })
  .on('limited:day', function( t ){
    console.log(
      'You have reached your daily limit of %s requests. Please wait %s microseconds'
    , this.daily
    , t
    );
  })
  .on('error', function( error ){

  });
```