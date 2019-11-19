const express = require('express');
// import * as http from "http";
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    status: 200,
    data: {
      name: '小屁孩',
      sex: '男',
      age: '3'
    },
    message: ''
  });
});

module.exports = {
  api: '/userInfo',
  router: router
};
