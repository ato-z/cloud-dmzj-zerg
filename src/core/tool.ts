/**
 * 动漫之家网站的相关配置
 */
export const config = {

  // 模板网站地址
  "domain": "https://m.dmzj.com/",

  // 图片网址
  "imgDonmain": "https://images.dmzj.com/"
}

/**
 * 从手机版列表页截取的分类信息 https://m.dmzj.com/classify.html
 * ```javascript
 * const cates =  [...document.querySelectorAll('#classCon ul')].map(ul => {
 *     return [...ul.querySelectorAll('a')].map(a => {
 *          return {
 *              title: a.innerText,
 *              key: parseInt(a.onclick.toString().split(',').pop())
 *          }
 *     })
 * })
 * console.log(cates)
 * ```
 */
export const cates = {
  // 题材
  type: [
    { "title": "全部", "key": 0},
    { "title": "冒险", "key": 1},
    { "title": "欢乐向", "key": 2},
    { "title": "格斗", "key": 3},
    { "title": "科幻", "key": 4},
    { "title": "爱情", "key": 5},
    { "title": "竞技", "key": 6},
    { "title": "魔法", "key": 7},
    { "title": "校园", "key": 8},
    { "title": "悬疑", "key": 9},
    { "title": "恐怖", "key": 10},
    { "title": "生活亲情", "key": 11},
    { "title": "百合", "key": 12},
    { "title": "伪娘", "key": 13},
    { "title": "耽美", "key": 14},
    { "title": "后宫", "key": 15},
    { "title": "萌系", "key": 16},
    { "title": "治愈", "key": 17},
    { "title": "武侠", "key": 18},
    { "title": "职场", "key": 19},
    { "title": "奇幻", "key": 20},
    { "title": "节操", "key": 21},
    { "title": "轻小说", "key": 22},
    { "title": "搞笑", "key": 23}
  ],

  // 群众
  masses: [
    { "title": "全部", "key": 0},
    { "title": "少年", "key": 1},
    { "title": "少女", "key": 2},
    { "title": "青年", "key": 3}
  ],

  // 状态
  statu: [
    { "title": "全部", "key": 0},
    { "title": "连载", "key": 1},
    { "title": "完结", "key": 2}
  ],

  // 地区
  region: [
    { "title": "全部", "key": 0},
    { "title": "日本", "key": 1},
    { "title": "内地", "key": 2},
    { "title": "欧美", "key": 3},
    { "title": "港台", "key": 4},
    { "title": "韩国", "key": 5},
    { "title": "其他", "key": 6}
  ]
}


/**
 * 合并请求请求参数
 * @param {*} op 
 * @returns 返回一个新的请求参数对象
 */
export const assginBookListParams = (op: Partial<DMZJ.BookListParams> = {}): DMZJ.BookListParams => {
  return Object.assign({
    type: 0, // 题材
    masses: 0, // 群体
    statu: 0, // 状态,
    region: 0, // 地区
    order: 0, // 0人气倒序  1更新倒序
    page: 0
  }, op)
}


/**
 * 发起一个请求，返回响应字符串
 * @param response 
 * @returns 
 */
const gatherResponse =  async (response: Response): Promise<string> => {
  const { headers } = response;
  const contentType = headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return JSON.stringify(await response.json());
  } else if (contentType.includes('application/text')) {
    return response.text();
  } else if (contentType.includes('text/html')) {
    return response.text();
  } else {
    return response.text();
  }
}

/**
 * 一个请求方法
 * @param url  请求的url地址
 * @param init 请求头的设置
 * @returns 
 */
export const handleRequest =  async (url: string, init?: Request | RequestInitializerDict | undefined): Promise<string> => {
    const response = await fetch(url, init);
    const results = await gatherResponse(response);
    return results
}


export default { config, handleRequest, assginBookListParams}