var token = input['JWT Token'];

var apiRequest = http.request({
    'endpoint': 'Zoom',
    'headers': {
        'User-Agent': 'Zoom-Jwt-Request',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    },
    'path': '/users/' + encodeURIComponent( input['schedule_for'] ) + '/meetings',
    'method': 'POST'
});

var payload = {
    "topic":    input['topic'],
    "password": input['password'],
    "agenda":   input['agenda'],
    "settings": {
        "join_before_host": input['join_before_host']
    }
};

var apiResponse = apiRequest.write( payload );
if (apiResponse.statusCode >= 200 && apiResponse.statusCode < 300) {
    var resp = JSON.parse(apiResponse.body);
    output['Join URL'] = resp['join_url'];
    output['Start URL'] = resp['start_url'];
}
