var token = input['JWT Token'];

// Post Meeting to Zoom
var apiRequest = http.request({
    'endpoint': 'Zoom',
    'headers': {
        'User-Agent': 'Zoom-Jwt-Request',
        'Content-type': 'application/json'
    },
    'auth': {
        'bearer': token
    },
    'path': '/users/' + input['schedule_for'] + '/meetings',
    'method': 'POST'
});
var apiResponse = apiRequest.write(input);
if (apiResponse.statusCode == 200) {
    var resp = JSON.parse(apiResponse.body);
    output['Join URL'] = resp['join_url'];
    output['Start URL'] = resp['start_url'];
}