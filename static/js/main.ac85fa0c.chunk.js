(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[0],{132:function(e,t,n){e.exports={main:"Login_main__pqoeZ"}},14:function(e,t,n){e.exports={nav:"Navbar_nav__fuf5Q",item:"Navbar_item__oT5rA",activeLink:"Navbar_activeLink__2RHqf",friends:"Navbar_friends__2jLV8",title:"Navbar_title__3XAOj",avatar:"Navbar_avatar__3YU0Q"}},162:function(e,t,n){},23:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__miH9N",dialogItems:"Dialogs_dialogItems__28vVj",active:"Dialogs_active__2YcKN",avatar:"Dialogs_avatar__18HDC",messages:"Dialogs_messages__2ZOK2",message:"Dialogs_message__1P9_g",messageRight:"Dialogs_messageRight__RSRtB"}},245:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var r=n(1),A=n.n(r),s=n(64),a=n.n(s),c=(n(162),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,r=t.getFID,A=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),A(e),s(e),a(e)}))}),i=n(13),o=n(9),u=n(11),l=n.n(u),j=n(18),d=n(38),p=n(5),b=n(128),h=n.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ca2d4280-c827-4a30-a630-27fd3baa0cf3"}}),f={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return h.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return h.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return h.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("!!! Don't use this method !!! Use profileAPI !!!"),O.getProfile(e)}},O={getProfile:function(e){return h.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return h.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return h.put("profile/status/",{status:e}).then((function(e){return e.data}))}},g=function(){return h.get("auth/me").then((function(e){return e.data}))},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return h.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},x=function(){return h.delete("auth/login").then((function(e){return e.data}))},v="ADD-POST",P="SET_USER_PROFILE",y="SET_STATUS",k={posts:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"It's my first post!",likesCount:20},{id:3,message:"Blabla",likesCount:777},{id:4,message:"Dada",likesCount:777},{id:5,message:"Yo, yo, yo!!!",likesCount:777}],profile:{},status:""},S=function(e){return{type:y,status:e}},w="SEND-MESSAGE",I={dialogs:[{id:1,name:"Dimych",avatar:"https://image.flaticon.com/icons/png/512/147/147144.png"},{id:2,name:"Andrey",avatar:"https://3dtoday.ru/upload/users/avatars/sIN8UsnRj2kXjxP6aU6Qth56TKVsssiXdwYnaXNa.png"},{id:3,name:"Sveta",avatar:"https://image.flaticon.com/icons/png/512/146/146005.png"},{id:4,name:"Sasha",avatar:"https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"},{id:5,name:"Victor",avatar:"https://image.flaticon.com/icons/png/512/146/146007.png"},{id:6,name:"Valera",avatar:"https://cdn.iconscout.com/icon/free/png-256/astonishes-boy-1129046.png"}],messages:[{id:1,message:"Hi",my:!0},{id:2,message:"Hello, world!",my:!1},{id:3,message:"Yo",my:!0},{id:4,message:"Yo",my:!1},{id:5,message:"Yo",my:!1}]},U={friends:[2,4,3]},C=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(p.a)(Object(p.a)({},e),r):e}))},N="FOLLOW",T="UNFOLLOW",L="SET-USERS",F="SET_CURRENT_PAGE",E="SET_TOTAL_USERS_COUNT",M="TOGGLE_IS_FETCHING",V="TOGGLE_FOLLOWING_IN_PROGRESS",R={users:[],pageSize:5,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},W=function(e){return{type:N,userId:e}},Z=function(e){return{type:T,userId:e}},z=function(e){return{type:M,isFetching:e}},J=function(e,t){return{type:V,followingInProgress:e,userId:t}},K=function(){var e=Object(j.a)(l.a.mark((function e(t,n,r,A){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(J(!0,t)),e.next=3,r(t);case 3:0===+e.sent.resultCode&&(n(A(t)),n(J(!1,t)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,A){return e.apply(this,arguments)}}(),Q=n(36),_="auth/SET_AUTH_USER_DATA",q={id:"",login:"",email:"",isAuth:!1},D=function(e,t,n,r){return{type:_,payload:{id:e,email:n,login:t,isAuth:r}}},H=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,A,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:0===+(n=e.sent).resultCode&&(r=n.data,A=r.id,s=r.login,a=r.email,t(D(A,s,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=n(129),B=n(127),G="INITIALIZED_SUCCESS",X={initialized:!1},$=Object(o.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var n={id:6,message:t.postText,likesCount:0};return Object(p.a)(Object(p.a)({},e),{},{posts:[n].concat(Object(d.a)(e.posts))});case"DELETE-POST":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case P:return Object(p.a)(Object(p.a)({},e),{},{profile:t.profile});case y:return Object(p.a)(Object(p.a)({},e),{},{status:t.status});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(p.a)(Object(p.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[{id:7,message:t.body,my:!0}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(p.a)(Object(p.a)({},e),{},{users:C(e.users,"id",t.userId,{followed:!0})});case T:return Object(p.a)(Object(p.a)({},e),{},{users:C(e.users,"id",t.userId,{followed:!1})});case L:return Object(p.a)(Object(p.a)({},e),{},{users:Object(d.a)(t.users)});case F:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case E:return Object(p.a)(Object(p.a)({},e),{},{totalUserCount:t.count});case M:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case V:return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}},form:B.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}}}),ee=Object(o.e)($,Object(o.a)(Y.a));window.store=ee;var te=n(10),ne=n(29),re=n(30),Ae=n(32),se=n(31),ae=(n(245),n(0)),ce=function(){return Object(ae.jsx)("div",{children:Object(ae.jsx)("b",{children:"News"})})},ie=function(){return Object(ae.jsx)("div",{children:Object(ae.jsx)("b",{children:"Music"})})},oe=function(){return Object(ae.jsx)("div",{children:Object(ae.jsx)("b",{children:"Settings"})})},ue=n(12),le=n(14),je=n.n(le),de=Object(te.b)((function(e){return{dialogsPage:e.dialogsPage,sidebar:e.sidebar}}),{})((function(e){var t=e.sidebar.friends.map((function(t,n){var r=e.dialogsPage.dialogs.find((function(e){return e.id===t}));return r||(r=e.dialogsPage.dialogs[0]),Object(ae.jsxs)("div",{className:je.a.avatar,children:[Object(ae.jsx)("img",{src:r.avatar,alt:"avatar"}),Object(ae.jsx)("div",{children:r.name})]},n)}));return Object(ae.jsxs)("nav",{className:je.a.nav,children:[Object(ae.jsx)("div",{className:je.a.item,children:Object(ae.jsx)(i.b,{to:"/profile",activeClassName:je.a.activeLink,children:"Profile"})}),Object(ae.jsx)("div",{className:je.a.item,children:Object(ae.jsx)(i.b,{to:"/dialogs",activeClassName:je.a.activeLink,children:"Messages"})}),Object(ae.jsx)("div",{className:je.a.item,children:Object(ae.jsx)(i.b,{to:"/users",activeClassName:je.a.activeLink,children:"Users"})}),Object(ae.jsx)("div",{className:je.a.item,children:Object(ae.jsx)(i.b,{to:"/news",activeClassName:je.a.activeLink,children:"News"})}),Object(ae.jsx)("div",{className:je.a.item,children:Object(ae.jsx)(i.b,{to:"/music",activeClassName:je.a.activeLink,children:"Music"})}),Object(ae.jsx)("div",{className:je.a.item,children:Object(ae.jsx)(i.b,{to:"/settings",activeClassName:je.a.activeLink,children:"Settings"})}),Object(ae.jsxs)("div",{className:je.a.friends,children:[Object(ae.jsx)("div",{className:je.a.title,children:"Friends"}),t]})]})})),pe=n(68),be=n.n(pe),he=function(e){return Object(ae.jsxs)("header",{className:be.a.header,children:[Object(ae.jsx)("img",{src:"http://vectorlogofree.com/wp-content/uploads/2014/09/53354-bird-handmade-logo-icon-vector-icon-vector-eps.png",alt:"logo"}),e.isAuth?Object(ae.jsxs)("div",{className:be.a.loginBlock,children:["".concat(e.login,"   "),Object(ae.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(ae.jsx)("div",{className:be.a.loginBlock,children:Object(ae.jsx)(i.b,{to:"/login",children:"Login"})})]})},fe=function(e){Object(Ae.a)(n,e);var t=Object(se.a)(n);function n(){return Object(ne.a)(this,n),t.apply(this,arguments)}return Object(re.a)(n,[{key:"render",value:function(){return Object(ae.jsx)(he,Object(p.a)({},this.props))}}]),n}(A.a.Component),Oe=Object(te.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===+e.sent.resultCode&&t(D("","","",!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(fe),ge=n(88),me=n.n(ge),xe=n(89),ve=n.n(xe),Pe=n.p+"static/media/preloader.8debf21c.gif",ye=function(e){return Object(ae.jsx)("div",{className:ve.a.preloaderBlock,children:Object(ae.jsx)("img",{className:ve.a.preloader,src:Pe,alt:"Loading data..."})})},ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAGD56FvAAAACXBIWXMAAAsSAAALEgHS3X78AAAC91BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUDOCmAAAA/HRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUtMTU5QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpiZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f4nESJAAAATKklEQVQYGdXBeYCddX3v8ffv9zzPORMQEiQLAmG/BkJBVllcEEFQFGLQoqVsAlJBdoErAVpEE2UvASJiKUVbtCyRMlLWVoKEVdZ7w5oIIQnZCcnMeZbf9/PHPTPnTHKemTkzAekf9/Wi6Xf6GusEUbeJ0SRPwz4FPUQvT93dQPDAq9IYAYsAAXLUdQCiV0EfcQ91osdc4AlEXY0eAi7ga9SJuk9StxJGAad7QNQZGHUBEJCcDXyaOh0XqCuoK4CFRIpB9Lo7dH4fuPcBo4/0xPkr7WzWmZA/Tgs7xkGUioZLOmkqHHWb7U2PyAMFdaJO9pVf/xzIYR51i6lLgTfA6JMDfj8EHOupE3UiBbalx4PUGQLcQ9QF6oRRF6hbQJ0jou4NwBwgQNTpQm1K3ecAZ0DNI6iIHk7/3QlEnRJNO1jXhTOV08+8YFKaBpkpop/NMlGSa5pjrUvC3gxkcjRknTT5GAs1HUSvMfL0MJpynbonPf4qp1dsOwDhGHrF2ps+GU0GE+TotWlKH6draegSRUrDSfL0eUQ0XCgeDzQVrKVZNMwUWETDW6LpMHkadDoopanYiIYQ03BrTp1yGqpSBO6fCppuyug1raChqrelt42GikSTUzHqBdU5etQkLR8l0SrK7Q08Tbcq+xyD2E+SSac72nDnvaGl0yMGt7VMytNMMjuNAcZnWkpED8+DCpdQpvBEwjrRCRKtMtFPoox1ujWCAV4P9JE6WMv7mIaF3TTcJU9TFF2gWr6GXpFEL9uOXtEpUlbc/IkDpIheYXvqJBqU3nfoTjHgbTa9nsqoM5oCfX4gR4/IOuBAeXodbp6mW0RDTaBVNDwn+twjGr5agB1CL6eL6bNNqNJgYDQk2ou1ChpieYyGRLuxVk6DV4zR4PU91spo8Eowmt4UfaKchlgRNp6GjXKaXDCaDDSfpoI+tQk0bBJgqmhItAdNgaYlAoym5+Xo9Sc5eiXaDtBqmord6WWb0HBOTp03mn5oCXW1lIaqLqKHlNBwrxYd/h+5IhpWpDR0vU/DD0w9aDhJ9Akv0yscQeTQ4fQ4RF9lrdzOeE919DjXJP3hDp1Gi1QLOjvvpeG3nZ0zLd+CkudNn45piKmZGGBJYVo847TL5wcFxQymertk0ksbMKzowDmSrSPZTyqsp/1VmEmr7jiEPltPmZ9KVuhXnmHcVZjpEbxngJgTV8sybUNbkyWl2yW0F3OvrPsVHIO4ttt0vGc4Ce+HIBz9TM5MO3Wwfl4O+TLKJB0/gkF4tjz89HO+uQ0xraxID2Od8UVIKUvgk4d++yKlIVVdGnQLLTp+qOI5+uyf2RMJLZLNLRRZqrpTIfYuYktJW3jWch+XZTRsVeiRhFYPZbU7IY4izzpLClEiW0KPSLbU08JPUPckT39H1zTasY7/tIoLqJtjoqRyvrSbpz+FlZTEz5iq4KQ7IkqUz2EA95WaDo4oUbgdzjdREh2o7MsRA3jlj1DiFpvgTcspSU6WJnoGmpt3URLNkCJkKSXxVxW+4BloZiZK/GmyhGWW0Y/yRxjEknwZJdEVUsx0E2WVawrby9Pf9EzfTWgVzzdBJE3xlHXnL9GP2yXXETFlwV4CzFL6eTBXTD+35aIsnq6wAVAx3R9Tpvy/KHHbmP1zhTKFJ+hxWqHvRLSK9lF+Hy3clqF4gX5qJhp+FXRCTCs3UlLs6PO7THdXKEtNMU2XZLo3oew+M32dJE6oPp8GRZS4DSWxzjYy0d8SK4pMygpp14Sy31r+JCWvZOF1WjlJjp0O3GcDfp7r8Zh1qodI2sJR4lAIC4kSGi5VeIU+m8pEg3ecKIXTGMixrDtIRch7rTmUFu9leS8rZNJXaecIFWaP0s5p75lqL+IYyg5ZZqbaM18BF0fe+yiKYdT0JZLluoj10nGBVAQzNZhZCHpyOz4wH8VJEkd8OPERNzyxXEpfu+vs7R0fUMfVqrO1pOf2i1hf/jxZnaSQpWlWqM4saM5mrI/oXgWTavPO25w+h81cJZkVtivDukrBVLtnQyLPWi6C766QLKuNYUgTlZve/wYxA3jnZ8tMt+Bow3FjIeWT8Awu4XmFVBszOMfC7qDbiWgv2qUw6UsMxnkVhXaqMqSIWZLOYiBXkdliYoZ1piy7mP4cMj3D+qh+UZadQX950B9ZPyP2kOmLlD2WhVcZXBS7KKLViIMlbexocWx3kTKYCPY97vxTDqCkeq5MtKhKShxlLopj9n1EqtW6pVuIafFYqF3HOgtMJ1Rp5WHj/b5+/BzlRSEphFSbJ7QIQWPos1sa5lE2/l9VF4pcL52+y+jtT3kvLUSLeD/ZCvpIcpRcp7RIg6RZ25B45xN+Xcufp4V7MaQTadgz18MVWkQ3Slp5xTc/u9sOeJreCRrlWMfLajSkJlq5DSTtD3HkPX38BLMrK6yTPGv5aHpUg70Q06IyvdAeEf045Q/T6mMK/02Pm0zjKHm6EAOpeIySpaaYOtkayt7JVzLAKOUzE1rEU1TsSJ3UGVGiYiH9+U+nOiGmRKET+JZpZ0eLaBfVptCfG6f83xNKVpqA2SZKKj8uNNEzgMJcSuLHpRhkXZQ9kItBzM5FiT9RYWOQvRtR8kYhBvHDVBs7Wo1W+AZIv/WUvJ/PZyB/QKqDIkoUrgVpiqOklr3AQG5n6dSEkmAPgXSMo6Q7f4OB3FayH1coyewlMB3pKHknLxjIbSabVqGkZu+A6UhHyWO5GMhtKV1SoSS1t0A6zdGqckOmrR39+U9JR8eUFPYkSNM9raKDVDvOMcDfpxrrKZH9G0jPRpQprGCAjRRW04/C2SBbRT/35xrv6OetoAsqtHKfV9gF3recsuT70icd/RTFQsqiGVIVrjZRFn9F+X6eflS8SJl71+RgrOk8TytXVfr39LOJijsrlAVbCTjZck9ZV9FFP1+o6WsRrdweKk6mboGJsmhmrs0cJW8HURb/ydRB3T5B0yJa+e2V/ZpWbpyKWZ4ymejhZWvo581CmzhavBY0ztEquVT5EfS6LmhyRCu/m8JiWhyaFn/ylHWZYnp5WTdlblbRfQN93ChJlFUuUf4PNP2y0I8rlKnIfoqjRzRa0t9WKJMppslJosyPUcgegTiOOV7SLyLKHgu177DWEbWwiLLK9gqZfnv04Ze+b9JNlFUPkxkt5gXdmFBS/ZwUMikNhS2lzCcyjXO0kDS5gxIFrVCPuaYpFUqyovtsSnaUtO8I1knut+xmRu57wP8CSSNotbCo/ZF+jilM+3fQJ/6MJHBR5OHQWlhFi7eL/D0GmJKa/jomoUFB4+nzZNDNNFRiVhZFwDPAhYV0c3TP/Ew9rHYF66gpe/2y8cqzDM8g/lZ1RcgbRItP1fJeIUihay6eQU1QYaZHH+js7Lx35sdo9Tf3dtb9/o1gKm7F0c6fu2XLTqCdJ2SFDqI9x5eVmbpmQEyJjznwzwoWZjmG5i5XbtLiKzeEOIq891HsYNILmYLlq8czvORi5WZSWPnW3T/7walTfvH0ki7JrND8rVg/buILCsHM1GAWCunMDj4At9G5r6rOTHX2L3tV+RBcFCdJHHk+Op7x37pudpf6WJ36rHr0qkljneN/hq8ecNNySdakfqxJ0oJr9ok9H6Voz1tThWB16pF1rXr3qX+/dsqpxx5Zd/xpF19/x7NLV3Xl6mFmIQStuW5nz0ditzukPJiZpDVLOk/fmR5R5L1by/soosfu5z20vEuSmYVcunkCfwEH1aMXKC1kkla/eNFY8JF3DMH5yMPW015ZI5lZken1IyI+pOjYJaqZBWn1w4dCHLG+XBTDkbO6paBQ07wj+KAc7PWYuk1Bmne+p+L5wKKEjh8vlIJCTZ07gmN9Ofh+rkyFNPcEqPChVeDMRVKhmlYeA4714aj8VLVgQenUhCp/oSojZ5gKFYWmgGM4Dv9TdVmQXj2EquMj4GOOXKBgIdWF4BiKg++rZkH640Q6+Mh0sN/LMgtFdjQ4hrDXQhVmenYiHXykRrD/6wpK9dIE2nH4G9WtQosPYQTry8e0ih1tdHDUahXq0qXgGNTEpYUFaSpV1k8EbP/1H937phoWPnjZoRvhPYNyEb+QrND/3QrHII5WTUFzdyJiCC5KPE37TH1NCrUsr8uyPC+ymrTigk1IGFSFzy9SoZq+zCCuUm7S7VRpL4YRnz35Z7c/OmfR6kJSWlieS1rw1O/v+Y8/vCEpUy7dMRrPoKLofplqOtPRT3SHClN+HhXaSYiPe1hSkWZ5nmdZlueZ9NA5e7NW5RuPKFWh/BQSBlXlapNlujyiJOpUMK2eREQbnnG3S6kVNfVYNvfF5x7/r4smQBw5+riYUTOVmTSVCoNKOLtbluuahBb+VgXT+4fiaSPh2Jpy1TTv0i9tRR/nGehU1YLePYqYQcV8b40s18Uxa/nzFUyrv4GnjZijlihkunMcxJ4hbXKrslx3kTC4mPO7ZLmOcvQ5QMFUu4iINpzzv1ee6qoqjmEdo1qhWR/HMbiEGUGWayJNHcvNpHuIaSfi868pz/UZPMNy5yot9PAIHG3EzJaZvdBBL3+1zLRkQ09bMZMXKdfC3fAMw7HjOypMV1OhHceOi2WFTnf0GC8z1U7H05bnN8pzzdoWxzAcOy+3QnYxFdqKubKQha6N6HGdzDSPiLZijl6hItMheIYX/VBpodnj8LTlP7ZIFnSuA6IumbIf4Gkr4jZlmf51NI5heT61OhRacyoJbUVcH2Q2pwp8XTKt2pz2InZ5VkW3jsYzPMeoXyrLdQcxbTn2XykL2h24QSY9RURbMZMXK7fVn8WzXv5a3YWem4inrZi3ZUHnOXhCpnANnrYSTq4p1+ufwrMePHt1hUJLv01MWxF3S6bfRLBcpux7ONpKOLmmTC/tjGc9OLZ/Wrn0v6nQVsTPcpmejkFmSo/E0VbMt1Yo15J98KwHx2a/U2aaRoW2POelMpufgMyUHomjrYj9/o+Kmg4nYj04NpupzDSNCm15Tq3JbH4CqUzZ8TjackR3KUv1jxvgGJ5jh2eVKzuLhLY8F2UyvRzDazIVF+NoL+GMQoW9vy+e4XkOVq3Qa58noq2Im02mByK4Sybdgac9x8gHlGf61cdxDMex46sqct1GQnsxz0hBV3k4W2ZaSsQQYiYtUqjpLIaXXKKaCs3+BJ723LglsqDJwPYyU9dhOIZQ4TJZrqe3xzEkx04rQgiaGXtHe56/65IF2xBwj8qkmUQMIeaYFcq1cFc8Q3LspVqhuV8gYggxz0hB/xJTN0lmWrU7jvY8f/W8im5NwjE0f67SQrMqztGeZ9J7skJ70cM9J5MeImIIFX6pItd9n8AxBMc281TIfkSFIcS8IAu6s0qv/RVMXSfjaS9izzkqajqJoY24Qlmhp0fiaC9maiYrtB0N0TUKphVbOUd7Fc7PFTJ9EccQ/kZp0LuTiGjPc+AyWaEzPU3xnGCmV1zMECrMULBMBzKEbys1ZVOo0J5zm/5ZIaizg7U2W1OYNJuEIVT4pcxqOom2fqLMFC6jwhCiyksyK+aPosXOlptpFglDqDBVskz/+XEcg9hhjkJQ7SQShhCNeF7B8tXjKdlVmZme74gYQsKhy1Wopp+Ap8TzsX9STUFv7oSnPcfmrylYvnpb+pnQnVnQwl2IGELk/1kKluumrSF29PIx7HGXagrSj6gyhIQvLVcIYcGWDDD2dYWg4kyqDCFhu4dlQalWXv/ljeg1dvJtQamCdNtIPEOo8jOT5Xp0JIOIblEq06Mj8QyhwtbTu2UKqaR0yZIgKQ0ydU3ZmIghxGzzggp1a6pjcJNUUyE7kypDSPw9kgWplua90lQKku73CUOIuUwKlncfQBuOjTtVU6EFBzKCNiL2XKCgmr79xXNum/3m4kWv/+EXp35mslIFLfsMEW1UmbRSubp0awVHe19aqcKCXt6DEQymyhRTCGHuVkSepihi81fNTLqSKoOpcvDbKpRp7t4MycFZyoKZXj+YqqPOR0lSaapWkwdlSjXd099UZTI9NybuqPRJ4sgBPmbSQhVWWHYcOIbm4GJlwYLePxcS2Oqw71447fJrr7n88suvuOLaZQrq1mEMYr+8pqA1P7/8iiuvv/HGG2dMn3bhcftCRHxZpkK5hbPAMzwHZ+RKVUhP/qFLZWaFnh+PYxAb36dcZpKsh3rZky9KhWp67zjwrB8HB72kLrMQgslU9hNwDO47KjOZFcFCt/64N3jWn4ONL5VqkgWtumbzyhabjx0zduyYOoa06ZgxY8aOGTNui82T8TNWK5isW11nV/jgHGx7g1QzmdT17AUbQZJ4xzCcTxIY/aOXuyVTqMmmfQIcH4qD0WetVJabmRSWzp6yI+DjyDsGcD6KHbDH1D8tk2Rmea6FJ44Ex18mnnhtqjwPZiYpX7no8etP3H9T+hn7+VNmPPPue0GSmYW80Op/2DbmoxKPPupRyYoimJmaQp6ltVqa5aYmMwtFIanziFExH7m4Y8czOrskWehhLUIP1b135ynbdXj+R7m4OnL3b57/j7956JmX578z/62Xn3rg3646Z/KuG1Zjx/+H/h8ildNSEDr+YAAAAABJRU5ErkJggg==",Se=n(95),we=function(e){var t=Object(r.useState)(!1),n=Object(Se.a)(t,2),A=n[0],s=n[1],a=Object(r.useState)(""),c=Object(Se.a)(a,2),i=c[0],o=c[1];Object(r.useEffect)((function(){o(e.status)}),[e.status]);return Object(ae.jsxs)("div",{children:[!A&&Object(ae.jsxs)("div",{children:[Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"Status: "})}),Object(ae.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"---no status---"})]}),A&&Object(ae.jsx)("div",{children:Object(ae.jsx)("input",{value:i,autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(i)},onChange:function(e){o(e.currentTarget.value)}})}),Object(ae.jsx)("p",{})]})},Ie=function(e){var t=e.profile,n=e.status,r=e.updateStatus;return Object(ae.jsxs)("div",{children:[Object(ae.jsx)("div",{className:me.a.topImg,children:Object(ae.jsx)("img",{src:"https://wallpaperaccess.com/full/1760835.jpg",alt:"background"})}),t.photos?Object(ae.jsxs)("div",{className:me.a.descriptionBlock,children:[Object(ae.jsx)("img",{src:t.photos.large?t.photos.large:ke,alt:"Avatar"}),Object(ae.jsx)(we,{status:n,updateStatus:r}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("b",{children:"Full name: "}),t.fullName]}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("b",{children:"User Id: "}),t.userId]}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("b",{children:"About me: "}),t.aboutMe]}),Object(ae.jsx)("b",{children:"Contacts:"}),Object(ae.jsxs)("div",{style:{paddingLeft:"30px"},children:[Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"facebook: "})})," ",t.contacts.facebook?t.contacts.facebook:"",Object(ae.jsx)("br",{}),Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"website: "})})," ",t.contacts.website?t.contacts.website:"",Object(ae.jsx)("br",{}),Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"vk:"})})," ",t.contacts.vk?t.contacts.vk:"",Object(ae.jsx)("br",{}),Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"twitter:"})})," ",t.contacts.twitter?t.contacts.twitter:"",Object(ae.jsx)("br",{}),Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"instagram:"})})," ",t.contacts.instagram?t.contacts.instagram:"",Object(ae.jsx)("br",{}),Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"youtube:"})})," ",t.contacts.youtube?t.contacts.youtube:"",Object(ae.jsx)("br",{}),Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"github:"})})," ",t.contacts.github?t.contacts.github:"",Object(ae.jsx)("br",{}),Object(ae.jsx)("b",{children:Object(ae.jsx)("i",{children:"mainLink:"})})," ",t.contacts.mainLink?t.contacts.mainLink:""]}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("b",{children:"Looking for a job: "}),t.lookingForAJob?t.lookingForAJobDescription:"No"]})]}):Object(ae.jsx)(ye,{})]})},Ue=n(90),Ce=n.n(Ue),Ne=n(91),Te=n.n(Ne),Le=function(e){return Object(ae.jsxs)("div",{className:Te.a.item,children:[Object(ae.jsx)("img",{src:"https://www.nicepng.com/png/detail/503-5032252_shamim-amiri-blank-female-avatar-icon.png",alt:"avatar"}),e.message,Object(ae.jsx)("div",{children:Object(ae.jsxs)("span",{className:Te.a.like,children:["like ",e.likesCount]})})]})},Fe=n(125),Ee=n(126),Me=function(e){if(!e)return"Field is required field!"},Ve=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},Re=n(44),We=n(53),Ze=n.n(We),ze=["input","meta"],Je=["input","meta"],Ke=["input","meta"],Qe=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,A=Object(Re.a)(e,ze),s=n&&r;return Object(ae.jsxs)("div",{className:Ze.a.formControl+" "+(s?Ze.a.error:""),children:[Object(ae.jsx)("div",{children:A.children}),s&&Object(ae.jsxs)("span",{children:[" ",r," "]})]})},_e=function(e){var t=e.input,n=(e.meta,Object(Re.a)(e,Je));return Object(ae.jsx)(Qe,Object(p.a)(Object(p.a)({},e),{},{children:Object(ae.jsx)("textarea",Object(p.a)(Object(p.a)({},t),n))}))},qe=function(e){var t=e.input,n=(e.meta,Object(Re.a)(e,Ke));return Object(ae.jsx)(Qe,Object(p.a)(Object(p.a)({},e),{},{children:Object(ae.jsx)("input",Object(p.a)(Object(p.a)({},t),n))}))},De=function(e,t,n,r){var A=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(ae.jsxs)("div",{children:[Object(ae.jsx)(Fe.a,Object(p.a)({component:e,name:t,placeholder:n,validate:r},A))," ",s]})},He=Ve(10),Ye=Object(Ee.a)({form:"profileAddNewPostForm"})((function(e){return Object(ae.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(ae.jsx)("div",{children:Object(ae.jsx)(Fe.a,{component:_e,name:"newPostText",placeholder:"Enter post text...",cols:35,rows:5,validate:[Me,He]})}),Object(ae.jsx)("div",{children:Object(ae.jsx)("button",{children:"Add post"})})]})})),Be=A.a.memo((function(e){console.log("Render!");var t=e.posts.map((function(e){return Object(ae.jsx)(Le,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(ae.jsxs)("div",{className:Ce.a.postsBlock,children:[Object(ae.jsx)("h3",{children:"My posts"}),Object(ae.jsx)(Ye,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(ae.jsx)("div",{className:Ce.a.posts,children:t})]})})),Ge=Object(te.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:function(e){return{type:v,postText:e}}})(Be),Xe=function(e){return Object(ae.jsxs)("div",{children:[Object(ae.jsx)(Ie,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(ae.jsx)(Ge,{})]})},$e=function(e){Object(Ae.a)(n,e);var t=Object(se.a)(n);function n(){return Object(ne.a)(this,n),t.apply(this,arguments)}return Object(re.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(ae.jsx)("div",{children:Object(ae.jsx)(Xe,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})})}}]),n}(A.a.Component),et=Object(o.d)(Object(te.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.id}}),{getUserProfile:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getProfile(e);case 2:r=t.sent,n({type:P,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getStatus(e);case 2:r=t.sent,n(S(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.updateStatus(e);case 2:0===+t.sent.resultCode&&n(S(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ue.f)($e),tt=n(55),nt=n.n(tt),rt=function(e){for(var t=Math.ceil(e.totalUserCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);return Object(ae.jsx)("div",{className:nt.a.paginator,children:Object(ae.jsx)("div",{className:nt.a.main,children:n.map((function(t){return Object(ae.jsx)("div",{className:nt.a.page+" "+(e.currentPage===t?nt.a.selectedPage:""),onClick:function(n){return e.onPageChanged(t)},children:" ".concat(t)},t)}))})})},At=n(94),st=n.n(At),at=function(e){return Object(ae.jsxs)("div",{className:st.a.user,children:[Object(ae.jsxs)("span",{children:[Object(ae.jsx)(i.b,{to:"/profile/"+e.user.id,children:Object(ae.jsx)("img",{className:st.a.userPhoto,src:e.user.photos.small?e.user.photos.small:ke,alt:"User_photo"})}),e.user.photos.large&&Object(ae.jsx)("img",{src:e.user.photos.large,alt:"User_photo"}),e.user.followed?Object(ae.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(ae.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)},children:"Follow"})]}),Object(ae.jsxs)("span",{children:[Object(ae.jsxs)("span",{children:[Object(ae.jsx)("div",{children:e.user.name}),Object(ae.jsx)("div",{children:e.user.status})]}),Object(ae.jsxs)("span",{children:[Object(ae.jsx)("div",{children:"props.user.location.country"}),Object(ae.jsx)("div",{children:"props.user.location.city"}),Object(ae.jsx)("div",{children:e.user.id})]})]})]})},ct=function(e){return Object(ae.jsxs)("div",{children:[Object(ae.jsx)(rt,{totalUserCount:e.totalUserCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(t){return Object(ae.jsx)(at,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},t.id)}))]})},it=n(131),ot=Object(it.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ut=function(e){return e.usersPage.pageSize},lt=function(e){return e.usersPage.totalUserCount},jt=function(e){return e.usersPage.currentPage},dt=function(e){return e.usersPage.isFetching},pt=function(e){return e.usersPage.followingInProgress},bt=function(e){Object(Ae.a)(n,e);var t=Object(se.a)(n);function n(){var e;Object(ne.a)(this,n);for(var r=arguments.length,A=new Array(r),s=0;s<r;s++)A[s]=arguments[s];return(e=t.call.apply(t,[this].concat(A))).onPageChanged=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(re.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.users,n=e.getUsers,r=e.currentPage,A=e.pageSize;0===t.length&&n(r,A)}},{key:"render",value:function(){return Object(ae.jsxs)(ae.Fragment,{children:[this.props.isFetching&&Object(ae.jsx)(ye,{}),Object(ae.jsx)(ct,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(A.a.Component),ht=Object(o.d)(Object(te.b)((function(e){return{users:ot(e),pageSize:ut(e),totalUserCount:lt(e),currentPage:jt(e),isFetching:dt(e),followingInProgress:pt(e)}}),{follow:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:K(e,n,f.followUser.bind(f),W);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:K(e,n,f.unfollowUser.bind(f),Z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(j.a)(l.a.mark((function n(r){var A;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:F,currentPage:e}),r(z(!0)),n.next=4,f.getUsers(e,t);case 4:A=n.sent,r((a=A.items,{type:L,users:a})),r((s=A.totalCount,{type:E,count:s})),r(z(!1));case 8:case"end":return n.stop()}var s,a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(bt),ft=n(23),Ot=n.n(ft),gt=function(e){return Object(ae.jsxs)("div",{className:Ot.a.dialog,children:[Object(ae.jsx)("img",{className:Ot.a.avatar,src:e.avatar,alt:"avatar"}),Object(ae.jsx)(i.b,{to:"/dialogs/"+e.id,activeClassName:Ot.a.active,children:e.name})]})},mt=function(e){return Object(ae.jsx)("div",{className:Ot.a.message+" "+(!e.my&&Ot.a.messageRight),children:e.message})},xt=Ve(50),vt=Object(Ee.a)({form:"dialogAddMessageForm"})((function(e){return Object(ae.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(ae.jsx)("div",{children:Object(ae.jsx)(Fe.a,{component:_e,name:"newMessageBody",placeholder:"Enter your message...",cols:50,rows:7,validate:[Me,xt]})}),Object(ae.jsx)("div",{children:Object(ae.jsx)("button",{children:"Send"})})]})})),Pt=["isAuth"],yt=function(e){return{isAuth:e.auth.isAuth}};var kt=Object(o.d)(Object(te.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:function(e){return{type:w,body:e}}}),(function(e){return Object(te.b)(yt)((function(t){var n=t.isAuth,r=Object(Re.a)(t,Pt);return n?Object(ae.jsx)(e,Object(p.a)({},r)):Object(ae.jsx)(ue.a,{to:"/login"})}))}))((function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(ae.jsx)(gt,{avatar:e.avatar,name:e.name,id:e.id},e.id)})),r=t.messages.map((function(e){return Object(ae.jsx)(mt,{message:e.message,my:e.my},e.id)}));return Object(ae.jsxs)("div",{className:Ot.a.dialogs,children:[Object(ae.jsx)("div",{className:Ot.a.dialogItems,children:n}),Object(ae.jsxs)("div",{className:Ot.a.messages,children:[r,Object(ae.jsx)(vt,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})]})})),St=n(132),wt=n.n(St),It=Object(Ee.a)({form:"login"})((function(e){return Object(ae.jsxs)("form",{onSubmit:e.handleSubmit,children:[De(qe,"email","Email",[Me]),De(qe,"password","Password",[Me],{type:"password"}),De(qe,"rememberMe","",[],{type:"checkbox"},"Remember me"),Object(ae.jsx)("div",{children:Object(ae.jsx)("button",{children:"Login"})}),e.error&&Object(ae.jsx)("div",{className:Ze.a.formSummaryError,children:e.error})]})})),Ut=Object(te.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(j.a)(l.a.mark((function r(A){var s,a,c;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m(e,t,n);case 2:0===+(s=r.sent).resultCode?A(H()):(a=s.messages?s.messages[0]:"Some error!",c=Object(Q.a)("login",{_error:a}),A(c));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(ae.jsx)(ue.a,{to:"/profile"}):Object(ae.jsxs)("div",{className:wt.a.main,children:[Object(ae.jsx)("h1",{children:"LOGIN"}),Object(ae.jsx)(It,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}),Object(ae.jsxs)("div",{style:{display:"inline-block",border:"2px solid yellow",padding:"5px",margin:"10px 0"},children:[Object(ae.jsx)("b",{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 Email \u0438 Password"}),Object(ae.jsx)("br",{}),"Email: ",Object(ae.jsx)("b",{children:"free@samuraijs.com"}),Object(ae.jsx)("br",{}),"Password: ",Object(ae.jsx)("b",{children:"free"})]})]})})),Ct=function(e){Object(Ae.a)(n,e);var t=Object(se.a)(n);function n(){return Object(ne.a)(this,n),t.apply(this,arguments)}return Object(re.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(ae.jsxs)("div",{className:"app-wrapper",children:[Object(ae.jsx)(Oe,{}),Object(ae.jsx)(de,{}),Object(ae.jsxs)("div",{className:"app-wrapper-content",children:[Object(ae.jsx)(ue.b,{path:"/dialogs",render:function(){return Object(ae.jsx)(kt,{})}}),Object(ae.jsx)(ue.b,{path:"/profile/:userId?",render:function(){return Object(ae.jsx)(et,{})}}),Object(ae.jsx)(ue.b,{path:"/users",render:function(){return Object(ae.jsx)(ht,{})}}),Object(ae.jsx)(ue.b,{path:"/news",render:function(){return Object(ae.jsx)(ce,{})}}),Object(ae.jsx)(ue.b,{path:"/music",render:function(){return Object(ae.jsx)(ie,{})}}),Object(ae.jsx)(ue.b,{path:"/settings",render:function(){return Object(ae.jsx)(oe,{})}}),Object(ae.jsx)(ue.b,{path:"/login",render:function(){return Object(ae.jsx)(Ut,{})}})]})]}):Object(ae.jsx)(ye,{})}}]),n}(A.a.Component),Nt=Object(o.d)(ue.f,Object(te.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(H());Promise.all([t]).then((function(){e({type:G})}))}}}))(Ct);a.a.render(Object(ae.jsx)(i.a,{children:Object(ae.jsx)(te.a,{store:ee,children:Object(ae.jsx)(Nt,{})})}),document.getElementById("root")),c()},53:function(e,t,n){e.exports={formControl:"FormsControl_formControl__1KheJ",error:"FormsControl_error__2hYHC",formSummaryError:"FormsControl_formSummaryError__3b6eR"}},55:function(e,t,n){e.exports={paginator:"Paginator_paginator__1nGfk",main:"Paginator_main__2_4Xr",page:"Paginator_page__2KNca",selectedPage:"Paginator_selectedPage__1yOoS"}},68:function(e,t,n){e.exports={header:"Header_header__2tkSJ",loginBlock:"Header_loginBlock__3F9Ut"}},88:function(e,t,n){e.exports={topImg:"ProfileInfo_topImg__2EEfs",descriptionBlock:"ProfileInfo_descriptionBlock__38b-O"}},89:function(e,t,n){e.exports={preloaderBlock:"Preloader_preloaderBlock__2xxWU",preloader:"Preloader_preloader__3Xwe9"}},90:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2cl22",posts:"MyPosts_posts__3bwbq"}},91:function(e,t,n){e.exports={item:"Post_item__NI9t6",like:"Post_like__3HYKo"}},94:function(e,t,n){e.exports={user:"User_user__TkJyC",userPhoto:"User_userPhoto__2cEjF"}}},[[287,1,2]]]);
//# sourceMappingURL=main.ac85fa0c.chunk.js.map