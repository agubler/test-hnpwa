/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonphnpwa([0],{77:function(t,e,n){var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),s=n(2),i=n(11),c=n(78),u=n(80),a=n(82),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){var t=this.properties.item;return t?[s.v("article",{classes:a.article},[s.v("h1",[s.v("a",{href:t.url,classes:a.title},[t.title])]),s.v("p",[(t.points||0)+" points",t.user?s.w(i.Link,{to:"user",params:{user:t.user},classes:a.user},[" by "+t.user]):null])]),s.v("div",{classes:a.comments},[s.v("h2",{classes:a.commentCount},[t.comments_count+" comments"]),s.v("div",t.comments.map(function(t,e){return s.w(c.Comment,{key:e,comment:t})}))])]:s.w(u.Loading,{})},e}(r.WidgetBase);e.Comments=p},78:function(t,e,n){var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),s=n(2),i=n(11),c=n(79),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){var t=this.properties.comment,n=t.user,o=t.content,r=t.time_ago,u=t.comments,a=void 0===u?[]:u;return s.v("div",{classes:c.root},[s.v("header",{classes:c.padding},[n?s.w(i.Link,{to:"user",params:{user:n},classes:c.user},[n]):null,s.v("span",{classes:c.time},[r])]),s.v("div",{key:"content",innerHTML:o,classes:c.comment}),s.v("div",{key:"comments",classes:c.padding},a.map(function(t,n){return s.w(e,{comment:t,key:n})}))])},e}(r.WidgetBase);e.Comment=u},79:function(t,e){t.exports={" _key":"comment",root:"pMN12bHs",padding:"UR0OJAIy",user:"_1dY2vtTm",time:"_2Qtl0SzL",comment:"_2va-73Cf"}},80:function(t,e,n){var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),s=n(2),i=n(81),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return s.v("div",{key:this.properties.key,classes:i.spinner})},e}(r.WidgetBase);e.Loading=c},81:function(t,e){t.exports={" _key":"loading",spinner:"_4Ju1HXhy","sk-scaleout":"hC-Nk2Mx"}},82:function(t,e){t.exports={" _key":"comments",article:"_2NGniQ8a",title:"_1L07Wn8k",user:"_3iYvUP2G",comments:"_2z1n0C37",commentCount:"_1lGsJjrS"}}});
//# sourceMappingURL=Comments.js.map