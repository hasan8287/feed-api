const graph = require('fbgraph');

const controller = {};

controller.generatePage = (data) => {
  const dataArray = data.split('&');
  let index = 0;
  dataArray.forEach((element, i) => {
    if (element.substr(0, 15) === '__paging_token=') {
      index = i;
    }
  });
  return dataArray[index].substr(15);
};

controller.getFeed = async (req, res) => {
  try {
    const { params, query } = req;
    
    const url = (query.page) ? `/me/feed?__paging_token=${params.page}` : '/me/feed';

    graph.setAccessToken(process.env.FB_TOKEN);
    const data = await new Promise((resolve, reject) => {
      return graph.get(url, (err, resFb) => {
        if (err) {
          return reject(err.message);
        }
  
        const { data: docs, paging } = resFb;
        const { next, previous } = paging;

        return resolve({
          docs,
          next: controller.generatePage(next),
          previous: controller.generatePage(previous),
        })
      });
    });

    return res.send({
      message: 'SUCCESS',
      code: 200,
      data,
    });
  } catch (error) {
    return res.send({
      message: error.message,
      code: 400,
      data: {},
    });
  }
};

module.exports = controller;
