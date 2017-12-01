module.exports = function (application) {
	application.get('/', function (request, response) {
		application.app.controllers.index.index(application, request, response);
	});

	application.post('/autenticar', function (request, response) {
		application.app.controllers.index.autenticar(application, request, response);
	});
};