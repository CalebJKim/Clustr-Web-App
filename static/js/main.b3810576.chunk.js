(this.webpackJsonpclustrwebapp=this.webpackJsonpclustrwebapp||[]).push([[0],[,function(e,t,a){e.exports={wrapper:"Club_wrapper__3j25p",name:"Club_name__1zi_t",tags:"Club_tags__19gWS",tag:"Club_tag__tO-Kc",filtered:"Club_filtered__3N8sb",field:"Club_field__29Z_Y",link:"Club_link__4KzB4"}},,,,,function(e,t,a){e.exports={wrapper:"ClubInfo_wrapper__11oQn",name:"ClubInfo_name__2BI2V",description:"ClubInfo_description__BHxm1",joinBtn:"ClubInfo_joinBtn__3tAch",feedItem:"ClubInfo_feedItem__29jig",feedTitle:"ClubInfo_feedTitle__jafwE",feedField:"ClubInfo_feedField__2P83O"}},function(e,t,a){e.exports={wrapper:"ClubList_wrapper__11lia",list:"ClubList_list__1aukA",info:"ClubList_info__pLVgg",backBtn:"ClubList_backBtn__3a_Yq",clubSelected:"ClubList_clubSelected__1_ad-"}},,,,function(e,t,a){e.exports={button:"FilterButton_button__2h4Nl",selected:"FilterButton_selected__25z-t"}},,,function(e,t,a){e.exports={button:"Button_button__3MQk7"}},,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(22),a(10)),i=a(15),s=a(2),u=a(3),m=a(5),d=a(4),p=(a(23),a(16)),f=a(14),b=a.n(f);var _=function(e){var t=e.className,a=e.children,n=Object(p.a)(e,["className","children"]);return c.a.createElement("button",Object.assign({className:"".concat(b.a.button," ").concat(t)},n),a)},h=a(1),E=a.n(h),N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={open:!1},e.handleClick=function(){e.setState({open:!e.state.open})},e.handleLinkClick=function(e){e.stopPropagation()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.color,n=e.tags,r=e.description,l=e.meetingTime,o=e.presidents,i=e.zoomLink,s=e.filters,u=this.state.open;return c.a.createElement("button",{className:E.a.wrapper,style:{backgroundColor:a},onClick:this.handleClick},c.a.createElement("h2",{className:E.a.name},t),c.a.createElement("ul",{className:E.a.tags},n.map((function(e){return c.a.createElement("li",{className:"".concat(E.a.tag," ").concat(s.includes(e)?E.a.filtered:""),key:e},e)}))),u&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:E.a.field},r),c.a.createElement("p",{className:E.a.field},"Time: ",c.a.createElement("strong",null,l)),c.a.createElement("p",{className:E.a.field},"President: ",o),i&&c.a.createElement("p",{className:E.a.field},"Zoom link: ",c.a.createElement("a",{className:E.a.link,href:i,target:"_blank",rel:"noopener noreferrer",onClick:this.handleLinkClick},i.replace(/^https?:\/\//,"")))))}}]),a}(c.a.Component),k=a(6),v=a.n(k),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.description,n=e.joinable,r=e.meetingDay,l=e.meetingTime;return c.a.createElement("div",{className:v.a.wrapper},c.a.createElement("h1",{className:v.a.name},t),n&&c.a.createElement(_,{className:v.a.joinBtn},"Join"),c.a.createElement("p",{className:v.a.description},a),c.a.createElement("div",{className:v.a.feedItem},c.a.createElement("h2",{className:v.a.feedTitle},"Club Meetings"),c.a.createElement("p",{className:v.a.feedField},"Weekly, ",r),c.a.createElement("p",{className:v.a.feedField},"Time: ",l)))}}]),a}(c.a.Component),C={PINK:"#ffa789",ORANGE:"#f4b869",LIGHT_ORANGE:"#f4cb87",DARK_ORANGE:"#f0a35b",VERY_LIGHT_ORANGE:"#f7cd96",BLUE:"#A0B4C7",BROWN:"#806961"},O=a(11),y=a.n(O),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(){e.props.onSelect(e.props.name)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.color,n=e.selected;return c.a.createElement("button",{className:"".concat(y.a.button," ").concat(n?y.a.selected:""),onClick:this.handleClick,style:{"--color":a}},t)}}]),a}(c.a.Component),w=a(7),I=a.n(w),B=[{name:"Monday",color:C.PINK},{name:"Tuesday",color:C.PINK},{name:"Wednesday",color:C.PINK},{name:"Thursday",color:C.PINK},{name:"Friday",color:C.PINK},{name:"Tier 1",color:C.VERY_LIGHT_ORANGE},{name:"Tier 2",color:C.LIGHT_ORANGE},{name:"Tier 3",color:C.ORANGE},{name:"New",color:C.BLUE},{name:"Returning",color:C.BLUE}],L=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedClub:null,filters:[]},e.handleSelectClub=function(e){},e.handleBack=function(){e.setState({selectedClub:null})},e.handleSelectFilter=function(t){e.state.filters.includes(t)?e.setState({filters:e.state.filters.filter((function(e){return e!==t}))}):e.setState({filters:[t].concat(Object(o.a)(e.state.filters))})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.clubs,a=this.state,n=a.selectedClub,r=a.filters,l=t.find((function(e){return e.name===n})),o=r.length?t.filter((function(e){return r.every((function(t){return e.tags.includes(t)}))})):t;return c.a.createElement("div",{className:"".concat(I.a.wrapper," ").concat(l?I.a.clubSelected:"")},c.a.createElement("div",{className:I.a.list},c.a.createElement("div",{className:I.a.searchWrapper},c.a.createElement("div",{className:I.a.filters},"Filter by:",B.map((function(t){var a=t.name,n=t.color;return c.a.createElement(j,{key:a,name:a,color:n,selected:e.state.filters.includes(a),onSelect:e.handleSelectFilter})})))),o.map((function(t){var a=t.name,n=t.description,l=t.day,o=t.time,i=t.color,s=t.tags,u=t.presidents,m=t.zoomLink;return c.a.createElement(N,{key:a,name:a,color:i,tags:s,description:n,presidents:u,zoomLink:m,meetingDay:l,meetingTime:o,filters:r,onSelect:e.handleSelectClub})}))),l&&c.a.createElement("div",{className:I.a.info},c.a.createElement(_,{className:I.a.backBtn,onClick:this.handleBack},"< Back"),c.a.createElement(g,{name:l.name,description:l.description,joinable:!1,meetingDay:l.day,meetingTime:l.time})))}}]),a}(c.a.Component),T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={clubs:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/Clustr-Web-App/gunn-clubs-2020-21.json").then((function(e){return e.json()})).then((function(t){for(var a=Object.entries(t).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1],c=n.new,r=n.desc,l=n.day,s=n.time,u=n.tier,m=n.president,d=n.link,p=l.split(", ");return{name:a,description:r,day:l,time:s,tags:[].concat(Object(o.a)(p),["Tier ".concat(u),c?"New":"Returning"]),presidents:m,zoomLink:d}})),n=0;n<a.length-1;n++)n%4===1?a[n].color=C.ORANGE:n%4===2?a[n].color=C.PINK:n%4===3?a[n].color=C.BLUE:n%4===0&&(a[n].color=C.VERY_LIGHT_ORANGE);e.setState({clubs:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(L,{clubs:this.state.clubs}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.b3810576.chunk.js.map