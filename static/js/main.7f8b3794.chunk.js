(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(11),c=n.n(i),r=(n(21),n(2)),o=n(3),d=n(5),l=n(4),h=n(6),j=n.n(h),b=n(8),u=n.n(b),p=n(0),O=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={passHidden:!0},e.passHidden=function(){e.setState({passHidden:!e.state.passHidden})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("table",{className:u.a.table,children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"SSID:"}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",onChange:this.props.onSSIDchange,className:u.a.input,disabled:this.props.state.textEditable})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"PASSWORD:"}),Object(p.jsxs)("td",{children:[Object(p.jsx)("input",{type:this.state.passHidden?"password":"text",onChange:this.props.onPASSWORDchange,className:u.a.input,disabled:this.props.state.textEditable}),Object(p.jsx)("button",{onClick:this.passHidden,className:u.a.hideIcon,children:Object(p.jsx)("img",{src:"https://img.icons8.com/fluent-systems-regular/24/000000/visible.png"})})]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"ENCRYPTION:"}),Object(p.jsx)("td",{children:Object(p.jsxs)("select",{name:"",id:"",onChange:this.props.onENCRYPTIONchange,disabled:this.props.state.textEditable,children:[Object(p.jsx)("option",{value:"WPA",children:"WPA/WPA2"}),Object(p.jsx)("option",{value:"WEP",children:"WEP"}),Object(p.jsx)("option",{value:"nopass",children:"None"})]})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{}),Object(p.jsxs)("td",{children:[Object(p.jsx)("input",{type:"checkbox",onClick:this.props.onHIDDENchange,className:u.a.inputCheckBox}),"Hidden"]})]})]})})}}]),n}(s.Component),x=n(9),f=n.n(x),m=n(16),g=n(7),v=n.n(g),y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).returnValue=function(e){return Object(p.jsx)(m.a,{size:290,level:"H",includeMargin:!0,value:e})},e.downloadQR=function(){var e=document.getElementsByTagName("canvas")[0].toDataURL("image/png"),t=document.createElement("a");t.href=e,t.download="qrCODE.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},e}return Object(o.a)(n,[{key:"render",value:function(){var e="WIFI:S:"+this.props.data.ssid+";T:"+this.props.data.encryption+";P:"+this.props.data.password+";H:"+String(this.props.data.hidden)+";";return console.log(e),Object(p.jsx)("div",{children:Object(p.jsxs)("table",{className:f.a.table,children:[Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)("h2",{className:f.a.QrCode,children:"Scan For WiFi Information "})})}),Object(p.jsx)("tr",{children:Object(p.jsxs)("td",{children:[Object(p.jsxs)("h4",{className:f.a.Print,children:["SSID:",this.props.data.ssid]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:f.a.QrCode,children:this.returnValue(e)})]})}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsxs)("div",{className:f.a.noPrint,children:[Object(p.jsx)("button",{onClick:this.downloadQR,className:v.a.button,children:"Download(.PNG)"}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){return setTimeout(window.print,1)},className:v.a.button,children:"Print"})]})})})]})})}}]),n}(s.Component),S=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"SSID : "}),"Its stands for Service Set IDentifier and is your network\u2019s name. If you open the list of Wi-Fi networks on your laptop or phone, you\u2019ll see a list of SSIDs. Wireless router or access points broadcast SSIDs so nearby devices can find and display any available networks. Learn how they work and how to find yours below."]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"ENCRYPTION : "}),"Wireless encryption secures your wireless network with an authentication protocol. It requires a password or network key when a user or device tries to connect. Using some encryption is always better than using none.",Object(p.jsx)("br",{}),"Thare are TWO encryption tools used to secure wireless connection :",Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"WPA/WPA2 :"})," WPA stands for Wireless Protected Access. WPA2 is the second version of the WPA standard. WPA2 is the most secure of the three. If your wireless card and router support WPA2, that is what you should use when setting up your wireless network."]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"WEP :"})," WEP stands for Wired Equivalent Privacy. WEP is the least secure of these standards, and you should not use it if you can avoid it."]})]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Hidden : "})," Optional. Tick if you want to hide the SSID. Note this was mistakenly also used to specify phase 2 method in releases up to 4.7.8 / Barcode Scanner 3.4.0."]})]})})}}]),n}(s.Component),P=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={ssid:"",password:"",encryption:"WPA",hidden:!0,makeQR:!1,downloadPNG:!0,disabledButton:!1,textEditable:!1,seeQRbtn:!0,errorMsg:""},e.onSSIDchange=function(t){e.setState({ssid:t.target.value})},e.onPASSWORDchange=function(t){e.setState({password:t.target.value})},e.onENCRYPTIONchange=function(t){e.setState({encryption:t.target.value})},e.onHIDDENchange=function(){e.setState({hidden:!e.state.hidden})},e.makeQRcode=function(){e.setState({makeQR:!0}),e.setState({textEditable:!0})},e.downloadPNG=function(){e.setState({downloadPNG:!0})},e.tryAgain=function(){window.location.reload(!1)},e}return Object(o.a)(n,[{key:"seeQRbtn",value:function(){this.setState({seeQRbtn:!1})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),this.state.value!=t.value}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:j.a.App,children:[Object(p.jsxs)("div",{className:j.a.noPrint,children:[Object(p.jsx)("h1",{children:"WiFi QR Code Genarator"}),Object(p.jsxs)("table",{className:j.a.table,children:[Object(p.jsx)("tr",{children:Object(p.jsxs)("td",{children:[Object(p.jsx)(O,{onSSIDchange:this.onSSIDchange,onPASSWORDchange:this.onPASSWORDchange,onENCRYPTIONchange:this.onENCRYPTIONchange,onHIDDENchange:this.onHIDDENchange,state:this.state}),Object(p.jsx)("br",{})]})}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:this.state.makeQR?Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:this.tryAgain,className:v.a.button,children:"Try Again"})}):Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{hidden:!!(this.state.ssid.length>0&this.state.password.length>0),children:"[P.S. Please Enter SSID and PASSWORD to Continue]"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:this.makeQRcode,className:v.a.button,disabled:!(this.state.ssid.length>0&this.state.password.length>0),children:"Click Here"})]})})})]})]}),this.state.makeQR?Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{data:this.state})," "]}):null,Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:j.a.noPrint,children:Object(p.jsx)(S,{})})]})}}]),n}(s.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(p.jsxs)(a.a.StrictMode,{children:[Object(p.jsx)("meta",{meta:!0,name:"viewport",content:"width=device-width, user-scalable=no"}),Object(p.jsx)(P,{})]}),document.getElementById("root")),_()},6:function(e,t,n){e.exports={App:"App__App__2vBGD",noPrint:"App__noPrint__29U3i",table:"App__table__15fDY"}},7:function(e,t,n){e.exports={button:"button__button__3UoNd",buttonClickHere:"button__buttonClickHere__3rAGq"}},8:function(e,t,n){e.exports={table:"input__table__P1wya",input:"input__input__1xwC3",inputCheckBox:"input__inputCheckBox__2XQmp",hideIcon:"input__hideIcon__1RjZX"}},9:function(e,t,n){e.exports={QrCode:"qrCode__QrCode__12PfU",Print:"qrCode__Print__3a7qG",noPrint:"qrCode__noPrint__zI90S",table:"qrCode__table__3uVZh"}}},[[29,1,2]]]);
//# sourceMappingURL=main.7f8b3794.chunk.js.map