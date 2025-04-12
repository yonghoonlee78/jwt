const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

module.exports = {
  auth: (req, res, next) => {
    try {
      /*
        Todo: 요청 헤더에서 JWT를 추출하고, 토큰을 검증한 후
            verify하여 디코딩된 정보를 req.decoded에 저장합니다.
            이후 다음 프로세스를 위해 next()을 실행합니다.
      */
      return res.json('not implemented');
    } catch (err) {
      /*
        Todo: err.name에 따라 조건에 맞는 응답을 반환합니다. 
          - TokenExpiredError : 419 응답코드와 함께 "토큰이 만료되었습니다."를 반환
          - JsonWebTokenError : 401 응답코드와 함께 "유효하지 않은 토큰입니다."를 반환
      */
    }
  },
};
