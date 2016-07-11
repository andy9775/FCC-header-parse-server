var request = require('supertest');
require('../../');

describe('Test the server', function() {
  it('Should return the ip address, language and operating system', function(done) {
    request('http://127.0.0.1:3000')
      .get('/api/whoami')
      .set({
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        'accept-language': 'en-US,en;q=0.8'
      })
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .expect('{"ipaddress":"::ffff:127.0.0.1","language":"en-US","software":"Macintosh; Intel Mac OS X 10_10_5"}', done);
  });
});
