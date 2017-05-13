module.exports = function(app, express) {
  app.get('/api/keys/youtube', function(req, res) {
    if (process.env.YOUTUBE_API_KEY) {
      res.send(JSON.stringify(process.env.YOUTUBE_API_KEY);
    } else {
      res.send(JSON.stringify(null));
    }
  });
};
