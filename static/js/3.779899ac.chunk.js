(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[3],{294:function(t,e,s){t.exports={topImg:"ProfileInfo_topImg__2EEfs",avatarImage:"ProfileInfo_avatarImage__ar738",descriptionBlock:"ProfileInfo_descriptionBlock__38b-O",contact:"ProfileInfo_contact__24XqA"}},295:function(t,e,s){t.exports={contact:"ProfileDataForm_contact__1srZf"}},296:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2cl22",posts:"MyPosts_posts__3bwbq"}},297:function(t,e,s){t.exports={item:"Post_item__NI9t6",like:"Post_like__3HYKo"}},299:function(t,e,s){"use strict";s.r(e);var o=s(37),r=s(38),c=s(41),n=s(40),i=s(1),a=s.n(i);var l=s(107);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],o=!0,r=!1,c=void 0;try{for(var n,i=t[Symbol.iterator]();!(o=(n=i.next()).done)&&(s.push(n.value),!e||s.length!==e);o=!0);}catch(a){r=!0,c=a}finally{try{o||null==i.return||i.return()}finally{if(r)throw c}}return s}}(t,e)||Object(l.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=s(294),b=s.n(j),d=s(108),p=s(69),h=s(0),f=function(t){var e=u(Object(i.useState)(!1),2),s=e[0],o=e[1],r=u(Object(i.useState)(""),2),c=r[0],n=r[1];Object(i.useEffect)((function(){n(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!s&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:Object(h.jsx)("i",{children:"Status: "})}),Object(h.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"---no status---"})]}),s&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{value:c,autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(c)},onChange:function(t){n(t.currentTarget.value)}})}),Object(h.jsx)("p",{})]})},O=s(295),m=s.n(O),x=s(49),v=s.n(x),g=s(26),k=s(130),P=s(65),y=Object(k.a)({form:"edit-profile"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("b",{children:"Full name: "}),Object(g.c)(g.a,"fullName","Full name",[P.b]),Object(h.jsx)("b",{children:"About me: "}),Object(g.c)(g.a,"aboutMe","About me",[P.b]),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts:"}),Object.keys(t.initialValues.contacts).map((function(t){return Object(h.jsxs)("div",{className:m.a.contact,children:[Object(h.jsxs)("b",{children:[t,":"]}),Object(g.c)(g.a,"contacts."+t,t,[])]},t)}))]}),Object(h.jsx)("b",{children:"Looking for a job: "}),Object(g.c)(g.a,"lookingForAJob","",[],{type:"checkbox"}),Object(h.jsx)("b",{children:"My professional skills: "}),Object(g.c)(g.a,"lookingForAJobDescription","My professional skills",[P.b]),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Save"})}),t.error&&Object(h.jsx)("div",{className:v.a.formSummaryError,children:t.error})]})})),_=function(t){var e=t.isOwner,s=t.profile,o=t.status,r=t.updateStatus,c=t.savePhoto,n=t.saveProfile,a=u(Object(i.useState)(!1),2),l=a[0],j=a[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:b.a.topImg,src:"https://wallpaperaccess.com/full/1760835.jpg",alt:"background"})}),s.photos?Object(h.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(h.jsx)("img",{className:b.a.avatarImage,src:s.photos.large||d.a,alt:"Avatar"}),Object(h.jsx)("br",{}),e&&Object(h.jsx)("input",{type:"file",onChange:function(t){t.currentTarget.files&&t.currentTarget.files[0]&&c(t.currentTarget.files[0])}}),Object(h.jsx)("p",{}),Object(h.jsx)(f,{status:o,updateStatus:r}),l?Object(h.jsx)(y,{initialValues:s,onSubmit:function(t){n(t).then((function(){j(!1)}))}}):Object(h.jsx)(S,{profile:s,isOwner:e,gotoEditMode:j})]}):Object(h.jsx)(p.a,{})]})},S=function(t){var e=t.profile,s=t.isOwner,o=t.gotoEditMode;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name: "}),e.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"User Id: "}),e.userId]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me: "}),e.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts:"}),Object.keys(e.contacts).map((function(t){return Object(h.jsx)(I,{contactTitle:t,contactValue:e.contacts[t]},t)}))]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job: "}),e.lookingForAJob?e.lookingForAJobDescription:"No"]}),s&&Object(h.jsx)("button",{onClick:function(){return o(!0)},children:"Edit"})]})},I=function(t){var e=t.contactTitle,s=t.contactValue;return Object(h.jsxs)("div",{className:b.a.contact,children:[Object(h.jsxs)("b",{children:[e,": "]})," ",s]})},w=s(97),A=s(296),N=s.n(A),C=s(297),F=s.n(C),M=function(t){return Object(h.jsxs)("div",{className:F.a.item,children:[Object(h.jsx)("img",{src:"https://www.nicepng.com/png/detail/503-5032252_shamim-amiri-blank-female-avatar-icon.png",alt:"avatar"}),t.message,Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:F.a.like,children:["like ",t.likesCount]})})]})},E=s(90),T=Object(P.a)(10),B=Object(k.a)({form:"profileAddNewPostForm"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(E.a,{component:g.b,name:"newPostText",placeholder:"Enter post text...",cols:35,rows:5,validate:[P.b,T]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),D=a.a.memo((function(t){console.log("Render!");var e=t.posts.map((function(t){return Object(h.jsx)(M,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(h.jsxs)("div",{className:N.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(h.jsx)("div",{className:N.a.posts,children:e})]})})),J=s(16),U=Object(J.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:w.a})(D),V=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(h.jsx)(U,{})]})},q=s(11),z=s(10),L=function(t){Object(c.a)(s,t);var e=Object(n.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){t.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(V,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})})}}]),s}(a.a.Component);e.default=Object(z.d)(Object(J.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,isAuth:t.auth.isAuth,authorizedUserId:t.auth.id}}),{getUserProfile:w.c,getStatus:w.b,updateStatus:w.g,savePhoto:w.e,saveProfile:w.f}),q.g)(L)}}]);
//# sourceMappingURL=3.779899ac.chunk.js.map