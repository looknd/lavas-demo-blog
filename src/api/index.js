/**
 * @file ajax 请求
 * @author chenqiushi
 */

import axios from 'axios';

export default {
    // async getNewsList(params) {
    //     let data = await axios('https://pwa.baidu.com/api/mockup/news/' + params.category, {
    //         withCredentials: true
    //     });

    //     if (params.nid) {
    //         let news = data.data.data.news || [];
    //         data.data.data.news = news.filter(item => item.nid === params.nid) || news[0] || [];
    //     }

    //     return data.data.data;
    // }

    async getBlogList() {
        return new Promise(resolve => {
            resolve({
                blogs: [
                    {
                        id: 984023,
                        title: 'iOS 9，为前端世界都带来了什么？',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: 'Progressive WebApp in China，现状与未来',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: '文章3标题3333',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: '文章1标题这里是标题',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: '文章1标题这里是标题',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: '文章2标题2222',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: '文章3标题3333',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: '文章1标题这里是标题',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: '文章3标题3333',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        id: 984023,
                        title: '文章1标题这里是标题',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    }
                ]
            });
        });
    },

    async getBlogDetail() {
        return new Promise(resolve => {
            resolve({
                blogDetail: {
                        id: 984023,
                        title: 'iOS 9，为前端世界都带来了什么？',
                        author: 'Marcello Lippi',
                        abs: '2015 年 9 月，Apple 重磅发布了全新的 iPhone 6s/6s Plus、iPad Pro 与全新的操作系统 watchOS 2 与 tvOS 9（是的，这货居然是第 9 版），加上已经发布的 iOS 9，它们都为前端世界带来了哪些变化呢？作为一个 web 开发者，是时候站在我们的角度来说一说了！',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm',
                        content: [
                            {
                                "type": "text",
                                "data": "2015 年 9 月，Apple 重磅发布了全新的 iPhone 6s/6s Plus、iPad Pro 与全新的操作系统 watchOS 2 与 tvOS 9（是的，这货居然是第 9 版），加上已经发布的 iOS 9，它们都为前端世界带来了哪些变化呢？作为一个 web 开发者，是时候站在我们的角度来说一说了！"
                            },
                            {
                                "type": "image",
                                "data": {
                                    "original": {
                                        "url": "http://photocdn.sohu.com/20131024/Img388855765.jpg",
                                        "width": 500,
                                        "height": 375
                                    },
                                    "original_third": {
                                        "url": "http://photocdn.sohu.com/20131024/Img388855765.jpg",
                                        "width": 500,
                                        "height": 375
                                    },
                                    "big": {
                                        "url": "http://photocdn.sohu.com/20131024/Img388855765.jpg",
                                        "width": 500,
                                        "height": 375
                                    },
                                    "small": {
                                        "url": "http://photocdn.sohu.com/20131024/Img388855765.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                }
                            },
                            {
                                "type": "text",
                                "data": "该译文存在大量英文术语，笔者将默认读者知晓 ES6、viewport、native app、webview 等常用前端术语，并不对这些已知术语进行汉语翻译 对于新发布或较新的产品名称与技术术语，诸如 Apple Pen、Split View 等专有名词，笔者将在文中使用其英文名，但会尝试对部分名词进行汉语标注 另外，出于对 wiki 式阅读的偏爱，笔者为您添加了很多额外的链接，方便您查阅文档或出处"
                            },
                            {
                                "type": "text",
                                "data": "此次医改明确，北京公立医疗机构取消药品加成(不含中药饮品)和挂号费、诊疗费，设立医事服务费，其目标在于破除以药补医。近期，不少患者都感受到了药费的明显下降。"
                            },
                            {
                                "type": "text",
                                "data": "此次医改明确，北京公立医疗机构取消药品加成(不含中药饮品)和挂号费、诊疗费，设立医事服务费，其目标在于破除以药补医。近期，不少患者都感受到了药费的明显下降。此次医改明确，北京公立医疗机构取消药品加成(不含中药饮品)和挂号费、诊疗费，设立医事服务费，其目标在于破除以药补医。近期，不少患者都感受到了药费的明显下降。"
                            },
                            {
                                "type": "text",
                                "data": "此次医改明确，北京公立医疗机构取消药品加成(不含中药饮品)和挂号费、诊疗费，设立医事服务费，其目标在于破除以药补医。近期，不少患者都感受到了药费的明显下降。此次医改明确，北京公立医疗机构取消药品加成(不含中药饮品)和挂号费、诊疗费，设立医事服务费，其目标在于破除以药补医。近期，不少患者都感受到了药费的明显下降。"
                            }
                        ]
                }
            });
        });
    },

};
