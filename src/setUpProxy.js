const proxy = require('http-proxy-middleware')
//craete-react-app proxy 설정

//session setting
let cookie

//prox로 request시 이벤트

function relayRequestHeaders(proxyReq, req) {
    console.debug('request')
    Object.keys(req.headers).forEach(function(key) {
        console.debug(`${key} : ${req.headers[key]}`)
    });

    if(cookie) {
        proxyReq.setHeader('cookie', cookie)
    }
} 

//proxy로 Response시 이벤트
function relayResponseHeaders(proxyRes, req, res) {
    console.debug('response')
    Object.keys(proxyRes.headers).forEach(function(key) {
        console.debug(`${key}: ${proxyRes.headers[key]}`)
    })
    let proxyCookie = proxyRes.headers["set-cookie"]

    if(proxyCookie) {
        cookie = proxyCookie
    }
}

module.exports = function(app) {
    //...
    //proxy setting
    app.use(
        proxy(
            [
                '/'
            ], {
                //destination server
                target: 'http://openapi.data.go.kr',
                secure: false,  //disable SSL verification
                //change-Origin: true,  //for vhosted sitesm changes host header to match to target's host
                ws: true,   //websock on
                onProxyReq: relayRequestHeaders,
                onProxyRes: relayResponseHeaders,
                //ajax 혹은 통신이 있을 시 로그에 표시
                //logLevel: 'debug'
            }
        )
    )
}