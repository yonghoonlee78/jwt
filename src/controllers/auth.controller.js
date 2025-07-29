const jwt = require('jsonwebtoken');
const { findUserByUserId, verifyUser } = require('../services/auth.service');
const { secretKey } = require('../config');

module.exports = {
  login: async (req, res) => {
    const { userId, password } = req.body;

    // 유저 확인
    const user = await verifyUser(userId, password);

    if (!user) {
      return res.status(401).json({ message: '등록되지 않은 유저입니다.' });
    }

    // 토큰 생성
    const token = jwt.sign({ userId: user.userId }, secretKey, { expiresIn: '1h' });

    return res.status(200).json({ token });
  },
  me: async (req, res) => {
    const { userId } = req.decoded;
  
    const user = await findUserByUserId(userId);
  
    if (!user) {
      return res.status(404).json({ message: '유저를 찾을 수 없습니다.' });
    }
  
    return res.status(200).json({ user });
  },
  
};
