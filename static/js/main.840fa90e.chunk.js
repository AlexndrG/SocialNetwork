/*! For license information please see main.840fa90e.chunk.js.LICENSE.txt */
(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[0],{16:function(e,s,t){e.exports={postsBlock:"MyPosts_postsBlock__2cl22",posts:"MyPosts_posts__3bwbq"}},17:function(e,s,t){e.exports={item:"Post_item__NI9t6",like:"Post_like__3HYKo"}},18:function(e,s,t){e.exports={topImg:"ProfileInfo_topImg__2EEfs",descriptionBlock:"ProfileInfo_descriptionBlock__38b-O"}},21:function(e,s,t){e.exports={header:"Header_header__2tkSJ"}},27:function(e,s,t){},28:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),n=t(20),c=t.n(n),o=(t(27),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,n=s.getLCP,c=s.getTTFB;t(e),a(e),i(e),n(e),c(e)}))}),r=t(8),d=(t(28),t(21)),l=t.n(d),g=t(0),j=function(){return Object(g.jsx)("header",{className:l.a.header,children:Object(g.jsx)("img",{src:"http://vectorlogofree.com/wp-content/uploads/2014/09/53354-bird-handmade-logo-icon-vector-icon-vector-eps.png",alt:"logo"})})},u=t(4),m=t.n(u),b=function(e){var s=e.state.sidebar.friends.map((function(s){var t=e.state.dialogsPage.dialogs.find((function(e){return e.id===s}));return t||(t=e.state.dialogsPage.dialogs[0]),Object(g.jsxs)("div",{className:m.a.avatar,children:[Object(g.jsx)("img",{src:t.avatar}),Object(g.jsx)("div",{children:t.name})]})}));return Object(g.jsxs)("nav",{className:m.a.nav,children:[Object(g.jsx)("div",{className:m.a.item,children:Object(g.jsx)(r.b,{to:"/profile",activeClassName:m.a.activeLink,children:"Profile"})}),Object(g.jsx)("div",{className:m.a.item,children:Object(g.jsx)(r.b,{to:"/dialogs",activeClassName:m.a.activeLink,children:"Messages"})}),Object(g.jsx)("div",{className:m.a.item,children:Object(g.jsx)(r.b,{to:"/news",activeClassName:m.a.activeLink,children:"News"})}),Object(g.jsx)("div",{className:m.a.item,children:Object(g.jsx)(r.b,{to:"/music",activeClassName:m.a.activeLink,children:"Music"})}),Object(g.jsx)("div",{className:m.a.item,children:Object(g.jsx)(r.b,{to:"/settings",activeClassName:m.a.activeLink,children:"Settings"})}),Object(g.jsxs)("div",{className:m.a.friends,children:[Object(g.jsx)("div",{className:m.a.title,children:"Friends"}),s]})]})},x=t(16),p=t.n(x),h=t(17),v=t.n(h),f=function(e){return Object(g.jsxs)("div",{className:v.a.item,children:[Object(g.jsx)("img",{src:"https://www.nicepng.com/png/detail/503-5032252_shamim-amiri-blank-female-avatar-icon.png"}),e.message,Object(g.jsx)("div",{children:Object(g.jsxs)("span",{className:v.a.like,children:["like ",e.likesCount]})})]})},_=function(e){var s=e.posts.map((function(e){return Object(g.jsx)(f,{message:e.message,likesCount:e.likesCount})})),t=i.a.createRef();return Object(g.jsxs)("div",{className:p.a.postsBlock,children:[Object(g.jsx)("h3",{children:"My posts"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("textarea",{ref:t,cols:35,rows:5,value:e.newPostText,onChange:function(){t.current&&e.updateNewPostText(t.current.value)}})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){var s;e.addPost(),null===(s=t.current)||void 0===s||s.focus()},children:"Add post"})})]}),Object(g.jsx)("div",{className:p.a.posts,children:s})]})},O=t(18),N=t.n(O),P=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:N.a.topImg,children:Object(g.jsx)("img",{src:"https://wallpaperaccess.com/full/1760835.jpg"})}),Object(g.jsx)("div",{className:N.a.descriptionBlock,children:"ava + description"})]})},w=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(P,{}),Object(g.jsx)(_,{posts:e.profilePage.posts,addPost:e.addPost,newPostText:e.profilePage.newPostText,updateNewPostText:e.updateNewPostText})]})},k=t(9),T=t.n(k),M=function(e){return Object(g.jsxs)("div",{className:T.a.dialog,children:[Object(g.jsx)("img",{className:T.a.avatar,src:e.avatar}),Object(g.jsx)(r.b,{to:"/dialogs/"+e.id,activeClassName:T.a.active,children:e.name})]})},C=function(e){return Object(g.jsx)("div",{className:T.a.message+" "+(!e.my&&T.a.messageRight),children:e.message})},y=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(g.jsx)(M,{avatar:e.avatar,name:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return Object(g.jsx)(C,{message:e.message,my:e.my})})),a=i.a.createRef();return Object(g.jsxs)("div",{className:T.a.dialogs,children:[Object(g.jsx)("div",{className:T.a.dialogItems,children:s}),Object(g.jsxs)("div",{className:T.a.messages,children:[t,Object(g.jsx)("div",{children:Object(g.jsx)("textarea",{ref:a,cols:50,rows:7,value:e.dialogsPage.newMessageText,onChange:function(){a.current&&e.updateNewMessageText(a.current.value)}})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){var s;e.addMessage(),null===(s=a.current)||void 0===s||s.focus()},children:"Add message"})})]})]})},S=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("b",{children:"News"})})},I=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("b",{children:"Music"})})},D=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("b",{children:"Settings"})})},B=t(2),L=function(e){return Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(j,{}),Object(g.jsx)(b,{state:e.state}),Object(g.jsxs)("div",{className:"app-wrapper-content",children:[Object(g.jsx)(B.a,{path:"/dialogs",render:function(){return Object(g.jsx)(y,{dialogsPage:e.state.dialogsPage,addMessage:e.addMessage,updateNewMessageText:e.updateNewMessageText})}}),Object(g.jsx)(B.a,{path:"/profile",render:function(){return Object(g.jsx)(w,{profilePage:e.state.profilePage,addPost:e.addPost,updateNewPostText:e.updateNewPostText})}}),Object(g.jsx)(B.a,{path:"/news",render:function(){return Object(g.jsx)(S,{})}}),Object(g.jsx)(B.a,{path:"/music",render:function(){return Object(g.jsx)(I,{})}}),Object(g.jsx)(B.a,{path:"/settings",render:function(){return Object(g.jsx)(D,{})}})]})]})},H={_state:{profilePage:{posts:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"It's my first post!",likesCount:20},{id:3,message:"Blabla",likesCount:777},{id:4,message:"Dada",likesCount:777},{id:5,message:"Yo, yo, yo!!!",likesCount:777}],newPostText:"Hello, world!"},dialogsPage:{dialogs:[{id:1,name:"Dimych",avatar:"https://image.flaticon.com/icons/png/512/147/147144.png"},{id:2,name:"Andrey",avatar:"https://3dtoday.ru/upload/users/avatars/sIN8UsnRj2kXjxP6aU6Qth56TKVsssiXdwYnaXNa.png"},{id:3,name:"Sveta",avatar:"https://image.flaticon.com/icons/png/512/146/146005.png"},{id:4,name:"Sasha",avatar:"https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"},{id:5,name:"Victor",avatar:"https://image.flaticon.com/icons/png/512/146/146007.png"},{id:6,name:"Valera",avatar:"https://cdn.iconscout.com/icon/free/png-256/astonishes-boy-1129046.png"}],messages:[{id:1,message:"Hi",my:!0},{id:2,message:"Hello, world!",my:!1},{id:3,message:"Yo",my:!0},{id:4,message:"Yo",my:!1},{id:5,message:"Yo",my:!1}],newMessageText:"New message"},sidebar:{friends:[2,4,3]}},_callSubscriber:function(e){console.log("State changed!")},subscribe:function(e){this._callSubscriber=e},addPost:function(){var e={id:5,message:this._state.profilePage.newPostText,likesCount:0};this._state.profilePage.posts.unshift(e),this._state.profilePage.newPostText="",this._callSubscriber(this._state)},updateNewPostText:function(e){this._state.profilePage.newPostText=e,this._callSubscriber(this._state)},addMessage:function(){var e={id:7,message:this._state.dialogsPage.newMessageText,my:!0};this._state.dialogsPage.messages.push(e),this._state.dialogsPage.newMessageText="",this._callSubscriber(this._state)},updateNewMessageText:function(e){this._state.dialogsPage.newMessageText=e,this._callSubscriber(this._state)},getState:function(){return this._state}};window.store=H;var R=function(e){c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(r.a,{children:Object(g.jsx)(L,{state:e,addPost:H.addPost.bind(H),updateNewPostText:H.updateNewPostText.bind(H),addMessage:H.addMessage.bind(H),updateNewMessageText:H.updateNewMessageText.bind(H)})})}),document.getElementById("root"))};R(H.getState()),H.subscribe(R),o()},4:function(e,s,t){e.exports={nav:"Navbar_nav__fuf5Q",item:"Navbar_item__oT5rA",activeLink:"Navbar_activeLink__2RHqf",friends:"Navbar_friends__2jLV8",title:"Navbar_title__3XAOj",avatar:"Navbar_avatar__3YU0Q"}},9:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__miH9N",dialogItems:"Dialogs_dialogItems__28vVj",active:"Dialogs_active__2YcKN",avatar:"Dialogs_avatar__18HDC",messages:"Dialogs_messages__2ZOK2",message:"Dialogs_message__1P9_g",messageRight:"Dialogs_messageRight__RSRtB"}}},[[35,1,2]]]);
//# sourceMappingURL=main.840fa90e.chunk.js.map