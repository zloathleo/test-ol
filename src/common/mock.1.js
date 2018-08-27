import Mock, { Random } from 'mockjs';
import FetchMock from 'fetch-mock';
import globalvar from './globalvar';

globalvar.fetchServerHostURL = "";

FetchMock.mock('/dashboard-commondata', function () {
    return Mock.mock({
        d1: 1,
        d2: 2,
        d3: 3,
        d4: 4,
    });
});

FetchMock.mock('/dashboard-data', function () {
    return Mock.mock({
        d1: 1,
        d2: 2,
        d3: 3,
        d4: 4,
    });
});

// 其他路由使用原生fetch，这段代码必须放最后
FetchMock.once('*', function (url, options) {
    FetchMock.restore();
    return fetch(url, options);
});