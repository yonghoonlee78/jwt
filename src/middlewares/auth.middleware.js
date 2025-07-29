const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

module.exports = {
  auth: (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
           return res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
         }
        
         // 'Bearer <token>' 형식이면 split해서 사용, 아니면 그냥 그대로 사용
         const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;


      const decoded = jwt.verify(token, secretKey);

      req.decoded = decoded;
      next();
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(419).json({ message: '토큰이 만료되었습니다.' });
      } else if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
      } else {
        return res.status(500).json({ message: '서버 오류' });
      }
    }
  },
};
