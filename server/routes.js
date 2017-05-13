module.exports = function(app, express) {
  app.get('/api/keys/youtube', function(req, res) {
    res.send(JSON.stringify(process.env.YOUTUBE_API_KEY) || JSON.stringify('Key Unavailable.'));
  });
};
