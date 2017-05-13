module.exports = function(app, express) {
  app.get('/api/keys/youtube', function(req, res) {
    res.send(process.env.YOUTUBE_API_KEY || 'Key Unavailable.');
  });
};
