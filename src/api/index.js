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
                        title: 'iOS 9，为前端世界都带来了什么？',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        title: 'Progressive WebApp in China，现状与未来',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        title: '文章3标题3333',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
{
                        title: '文章1标题这里是标题',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        title: '文章1标题这里是标题',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        title: '文章2标题2222',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                    {
                        title: '文章3标题3333',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
{
                        title: '文章1标题这里是标题',
                        abs: '文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元文章摘要1本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...',
                        ts: '1496806231000',
                        url: 'http://www.sznews.com/news/content/2016-12/18/content_14606309.htm'
                    },
                ]
            });
        });
    }

};