import {http, HttpResponse} from 'msw';

export const handlers = [
    http.post('/api/login', () => {
        return   HttpResponse.json({
            userId: 1,
            nickname: '제로초',
            id: 'zerocho',
            image: '5Udwvqim.jpg',
        }, {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/api/logout', () => {
        return new HttpResponse(null, {
            headers: {
                'Set-cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
            }
        }) 
    }),
    http.post('/api/users', async ({ request }) => {
        console.log('회원가입');
        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //   status: 403,
        // })
        return HttpResponse.text(JSON.stringify('ok'), {
        headers: {
            'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
        }
        })
    }),
];

//로그인/로그아웃을 할때 실제 서버가 아니라 위의 코드들이 응답을 보내줌