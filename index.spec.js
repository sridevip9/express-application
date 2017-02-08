var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('./index');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Routes', function() {
  describe('/', function() {
    it('should respond with a 200 when successful', function(done) {
      chai.request(server)
        .get('/')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', function(done) {
      chai.request(server)
        .get('/')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal(
            'Creating  a new express appication');
          done();
        });
    });
  });
  describe('/about', function() {
    it('should respond with a 200 when successful', function(done) {
      chai.request(server)
        .get('/about')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', function(done) {
      chai.request(server)
        .get('/about')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal(
            'Creating  a new path about express appication');
          done();
        });
    });
  });
});
