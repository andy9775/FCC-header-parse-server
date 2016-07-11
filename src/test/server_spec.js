var request = require('supertest');
require('../../');

describe('Test the server',function(){

  it('Should return the ip address, language and operating system', function(done){
    request('http://127.0.0.1:3000')
    .get('/')
    .end(function(err, res){
      
      done();
    });
  });
});
