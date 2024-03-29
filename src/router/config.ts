/**
 * @ Author: zao
 * @ Create Time: 2020-03-18
 * @ Modified by: zao
 * @ Description: routes config
 * TODO: remember to delete the comments
 */

import { lazy } from 'react';

import BasicLayout from '@/layouts/BasicLayout';
import BlankLayout from '@/layouts/BlankLayout';
import CenterLayout from '@/layouts/CenterLayout';
import LoginLayout from '@/layouts/LoginLayout';
import MsgLayout from '@/layouts/MsgLayout';
import RecruitLayout from '@/layouts/RecruitLayout';
import { Iroute } from '@/utils/renderRoutes';

const config: Iroute[] =
  [
    {
      path: '/',
      component: BasicLayout,
      childRoutes: [
        {
          path: '/',
          exact: true,
          name: '首页',
          component: MsgLayout,
          childRoutes: [
            {
              path: '/',
              exact: true,
              component: lazy(() => import('@/pages/Home')),
            },
          ]
        },
        {
          path: '/info/:meetingId',
          exact: true,
          component: RecruitLayout,
          childRoutes: [
            {
              path: '/info/:meetingId',
              exact: true,
              name: '会议详情',
              component: lazy(() => import('@/pages/Home/Info')),
            }
          ]
        },
        {
          path: '/recruit',
          name: '招募人员',
          component: BlankLayout,
          requireAuth: true,
          childRoutes: [
            {
              path: '/recruit',
              exact: true,
              name: '科研团队',
              component: lazy(() => import('@/pages/Recruit')),
            },
            {
              path: '/recruit/team',
              name: '科研团队',
              component: RecruitLayout,
              childRoutes: [
                {
                  path: '/recruit/team',
                  component: lazy(() => import('@/pages/Recruit/Team'))
                }
              ]
            },
            // {
            //   path: '/recruit/competition',
            //   name: '竞赛报名',
            //   component: RecruitLayout,
            //   childRoutes: [
            //     {
            //       path: '/recruit/competition',
            //       component: lazy(() => import('@/pages/Recruit/Competition')),
            //     }
            //   ]
            // },
            {
              path: '/recruit/student',
              name: '学生组队',
              component: RecruitLayout,
              childRoutes: [
                {
                  path: '/recruit/student',
                  component: lazy(() => import('@/pages/Recruit/Student')),
                }
              ]
            },
          ]
        },
        // {
        //   path: '/awesome',
        //   name: '精彩幻灯',
        //   component: lazy(() => import('@/pages/Awesome'))
        // },
        {
          path: '/related',
          name: '与我相关',
          requireAuth: true,
          component: lazy(() => import('@/pages/Related'))
        },
        {
          path: '/login',
          name: '登录/注册',
          component: LoginLayout,
          childRoutes: [
            {
              path: '/login',
              exact: true,
              name: '短信登陆/注册',
              component: lazy(() => import('@/pages/Login/Msg'))
            },
            {
              path: '/login/pwd',
              name: '密码登陆',
              component: lazy(() => import('@/pages/Login/Pwd'))
            }
          ]
        },
        {
          path: '/signup',
          name: '注册',
          component: lazy(() => import('@/pages/Signup'))
        },
        {
          path: '/center',
          name: '个人中心',
          requireAuth: true,
          component: CenterLayout,
          childRoutes: [
            {
              path: '/center',
              exact: true,
              name: '个人资料',
              component: lazy(() => import('@/pages/Center/Info')),
            },
            {
              path: '/center/favorite',
              name: '我的收藏',
              component: lazy(() => import('@/pages/Center/Favorite')),
            },
            {
              path: '/center/message',
              name: '系统消息',
              component: lazy(() => import('@/pages/Center/Message')),
            },
          ],
        },
        {
          path: '/exception',
          name: '异常页',
          childRoutes: [
            {
              path: '/exception/403',
              name: '403',
              component: lazy(() => import('@/pages/Exception/403')),
            },
            {
              path: '/exception/404',
              name: '404',
              exact: true,
              component: lazy(() => import('@/pages/Exception/404')),
            },
            {
              path: '/exception/500',
              name: '500',
              component: lazy(() => import('@/pages/Exception/500')),
            },
          ],
        },
        { path: '*', exact: true, redirect: '/exception/404' },
      ],
    },
  ]


export default config;
