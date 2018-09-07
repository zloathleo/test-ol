import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import myaxios from './myaxios';

let mock = new MockAdapter(myaxios, {
    delayResponse: 100
});

mock.onPost('/account/login').reply(200, Mock.mock(
    {
        'token': "test-token",
        'type': "operator",
    }
));

mock.onGet('/messages').reply(200, Mock.mock({
    "rows|45": [{
        'type': 'audio',
        'name|+1': 1,
        'endTime': 0,
        'startTime': 1,
        'status': 0,
    }],
    "total": 50
}));