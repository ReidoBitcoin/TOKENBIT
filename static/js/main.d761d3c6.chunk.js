(this["webpackJsonpprojeto-bitcoin"]=this["webpackJsonpprojeto-bitcoin"]||[]).push([[0],{282:function(e,t,n){},362:function(e,t){},371:function(e,t){},385:function(e,t){},387:function(e,t){},404:function(e,t){},405:function(e,t){},457:function(e,t){},459:function(e,t){},468:function(e,t){},470:function(e,t){},495:function(e,t){},497:function(e,t){},498:function(e,t){},504:function(e,t){},517:function(e,t){},529:function(e,t){},532:function(e,t){},537:function(e,t){},548:function(e,t){},551:function(e,t){},606:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(59),o=n.n(c),s=(n(282),n(22)),i=n(611),l=n(68),d=n(612),u=Object(r.createContext)(),j=n.p+"static/media/tokenrit.3ceafd35.png";var p=function(){return Object(a.jsx)("div",{className:"back-header",style:{width:"100%",height:"150px",backgroundImage:"url(".concat(j,")"),backgroundSize:"100% 100%"}})},b=n(33),x=(n(117),n(15)),m={border:"4px solid #F29C20",borderRadius:"5px",marginRight:"auto",marginLeft:"auto",width:"70%",paddingTop:"20px",textAlign:"center"};var h=function(e){var t=e.children,n=e.style;return Object(a.jsxs)(x.a,{style:Object(b.a)(Object(b.a)({},m),n),children:[t,Object(a.jsx)("small",{children:"v1.3a BETA"})]})},O=n(25),f=n(49),v=n(14),y=n.n(v),g=n(26),k=n(36),w={width:"100%",display:"flex",justifyContent:"space-around"},T=function(e){var t=e.to,n=e.from,c=e.avaiable,o=(e.name,Object(r.useContext)(u).setKey),s=function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(t);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i={paddingLeft:"50px",paddingRight:"50px"};return Object(a.jsxs)("div",{style:w,children:[n&&Object(a.jsx)(k.a,{size:"lg",variant:"danger",column:"true",type:"button",onClick:function(){o(n)},style:i,children:"Voltar"}),Object(a.jsx)(k.a,{size:"lg",variant:"primary",column:"true",type:"button",disabled:!c,onClick:s,style:i,children:"Pr\xf3ximo"})]})};var C=function(){var e=Object(r.useContext)(u).accounts;return Object(a.jsxs)(h,{children:[Object(a.jsx)("h1",{className:"text-center mt-4 mb-4",children:"Bem Vindo(a) ao Assistente de Cria\xe7\xe3o de Token (BETA)"}),Object(a.jsx)(f.a,{className:"justify-content-md-center",children:Object(a.jsxs)(x.a.Group,{as:f.a,className:"text-center mt-2 mb-2",children:[Object(a.jsx)(O.a,{md:"4",children:Object(a.jsx)(x.a.Check,{defaultChecked:!0,column:"true",id:"token-type",label:"Fixed Supply ERC-20",name:"token",required:!0,style:{paddingBottom:"50px",paddingTop:"40px",color:"black",paddingRight:"10px"},type:"radio",value:"token"})}),Object(a.jsxs)(x.a.Text,{style:{paddingBottom:"20px",paddingTop:"40px",fontStyle:"italic",color:"grey",paddingLeft:"60px"},children:["O fornecimento total \xe9 criado na implanta\xe7\xe3o do contrato,",Object(a.jsx)("br",{})," tornando o fornecimento fixo."]})]})}),Object(a.jsx)(T,{to:"attributes",avaiable:e.length})]})},S=n(109),N=n(52),A=n.n(N),E=1e15,z={name:A.a.string().min(3).max(25).required(),symbol:A.a.string().min(3).max(4).required(),supply:A.a.number().integer().min(1).max(E).required(),owner:A.a.string().regex(/^0x[a-fA-F0-9]{40}$/)},B=A.a.object(z),L=A.a.object(Object(b.a)({owner:A.a.string().regex(/^0x[a-fA-F0-9]{40}$/).required()},z)),F=function(e){return function(t){var n=e.validate(t).error;if(n)throw new Error(n.details[0].message)}},I={paddingBottom:"20px",paddingTop:"15px",color:"black"},D={borderBottom:"1px solid #f79007",borderTop:"none",paddingTop:"10px",paddingLeft:"20px"},K={paddingBottom:"30px",textAlign:"left",color:"grey",fontStyle:"italic"};var R=function(){var e=Object(r.useContext)(u),t=e.tokenData,n=e.setTokenData,c=Object(r.useState)(t),o=Object(s.a)(c,2),i=o[0],l=o[1],d=Object(r.useState)(!1),j=Object(s.a)(d,2),p=j[0],m=j[1];Object(r.useEffect)((function(){n(i);try{F(B)(i),m(!0)}catch(e){m(!1)}}),[i,n]);var v=function(e){var t=e.target;l(Object(b.a)(Object(b.a)({},i),{},Object(S.a)({},t.name,t.value)))};return Object(a.jsxs)(h,{children:[Object(a.jsxs)(x.a.Group,{as:f.a,className:"text-center md-4",style:{paddingTop:"20px"},children:[Object(a.jsx)(x.a.Label,{size:"lg",column:"true",md:5,htmlFor:"name",style:I,children:"Nome do Token"}),Object(a.jsxs)(O.a,{md:6,children:[Object(a.jsx)(x.a.Control,{style:D,plaintext:!0,type:"text",placeholder:"Nome do Token*",id:"name",name:"name",label:"Token name",onChange:v,value:t.name}),Object(a.jsx)(x.a.Text,{id:"nameHelpBlock",style:K,children:"O nome do Token deve ter de 3-25 caracteres. Caracteres alfanum\xe9ricos, espa\xe7o e h\xedfen s\xe3o aceitos."})]}),Object(a.jsx)(x.a.Label,{size:"lg",column:"true",md:5,htmlFor:"symbol",style:I,children:"Sigla do Token"}),Object(a.jsxs)(O.a,{md:6,children:[Object(a.jsx)(x.a.Control,{style:D,plaintext:!0,type:"text",placeholder:"Sigla do Token*",id:"symbol",name:"symbol",onChange:v,value:t.symbol}),Object(a.jsx)(x.a.Text,{style:K,children:"3-4 caracteres (exemplos: ETH, BTC, BAT, etc.). Sem espa\xe7os, somente caracteres alfanum\xe9ricos."})]}),Object(a.jsx)(x.a.Label,{size:"lg",column:"true",md:5,htmlFor:"supply",style:I,children:"Fornecimento Total"}),Object(a.jsxs)(O.a,{md:6,children:[Object(a.jsx)(x.a.Control,{style:D,plaintext:!0,type:"number",placeholder:"Fornecimento Total*",id:"supply",name:"supply",min:1,max:E,step:1,onChange:v,value:t.supply}),Object(a.jsxs)(x.a.Text,{style:K,children:["Quantidade total de tokens a serem gerados. M\xednimo de 1 e m\xe1ximo de ",E,"."]})]})]}),Object(a.jsx)(T,{from:"token",to:"payment",avaiable:p})]})},H=n(115),q=n.n(H),P="https://rei-btc.herokuapp.com/",G=function(){var e=Object(g.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(L)(t),e.next=4,q.a.post(P,t);case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e.catch(0),n=e.t0.response.data,new Error(n.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(g.a)(y.a.mark((function e(t,n){var a,r,c,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.hash,r={"Content-Type":"application/json",Authorization:n},e.prev=2,e.next=5,q.a.post("".concat(P,"payment"),{hash:a},{headers:r});case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),s=e.t0.response.data,new Error(s.message);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(g.a)(y.a.mark((function e(t){var n,a,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={"Content-Type":"application/json",Authorization:t},e.prev=1,e.next=4,q.a.post("".concat(P,"confirm"),{},{headers:n});case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),c=e.t0.response,new Error(c.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(g.a)(y.a.mark((function e(t,n,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){t.request({method:n,params:a}).then((function(t){e(t)})).catch((function(e){console.error(e),r()}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(g.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(g.a)(y.a.mark((function e(a,r){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=setInterval(Object(g.a)(y.a.mark((function e(){var o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t,"eth_getTransactionByHash",[n]);case 3:o=e.sent,null!==(s=o.blockHash)&&(clearInterval(c),a(s)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),clearInterval(c),r();case 12:case 13:case"end":return e.stop()}}),e,null,[[0,8]])}))),3e3);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=n(116),Q={paddingBottom:"20px",paddingTop:"15px",color:"black"},Z={display:"flex",alignItems:"flex-end",justifyContent:"center"};var $=function(){var e=Object(r.useContext)(u),t=e.setKey,n=e.ethereum,c=e.accounts,o=e.tokenData,i=e.setTokenData,l=e.setJwt,d=e.jwt,j=Object(r.useState)(null),p=Object(s.a)(j,2),m=p[0],v=p[1],w=Object(r.useState)(!1),C=Object(s.a)(w,2),S=C[0],N=C[1],A=Object(r.useState)(!1),E=Object(s.a)(A,2),z=E[0],B=E[1],L=Object(r.useState)(!0),F=Object(s.a)(L,2),I=F[0],D=F[1],K={paddingLeft:"50px",paddingRight:"50px"};Object(r.useEffect)((function(){o.owner&&R(o.owner)}),[]),Object(r.useEffect)((function(){try{var e=function(e){if(""!==e)try{return JSON.parse(atob(e.split(".")[1])).payload}catch(n){var t=n.response.data;throw new Error(t.message)}}(d).payment;v(e)}catch(t){v(null)}}),[d]);var R=function(){var e=Object(g.a)(y.a.mark((function e(){var t,n,a,r,c,s=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:null,B(!0),e.prev=2,n=t?Object(b.a)(Object(b.a)({},o),{},{owner:t}):o,e.next=6,G(n);case 6:a=e.sent,r=a.data.token,l(r),B(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),c=e.t0.message,console.error(c),B(!1);case 17:case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(g.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.target).value){e.next=3;break}return e.abrupt("return");case 3:return i(Object(b.a)(Object(b.a)({},o),{},{owner:n.value})),e.next=6,R(n.value);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(g.a)(y.a.mark((function e(){var a,r,c,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=V.utils.toWei(m.amount),r=[{from:o.owner,to:m.address,value:V.utils.toHex(a)}],e.next=4,_(n,"eth_sendTransaction",r);case 4:return c=e.sent,N(!0),e.prev=6,e.next=9,M(n,V.utils.toHex(c));case 9:i(Object(b.a)(Object(b.a)({},o),{},{hash:c})),t("confirmation"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0),s=e.t0.message,alert(s);case 18:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}();return S?Object(a.jsx)(h,{children:Object(a.jsxs)("div",{style:{textAlign:"center",paddingBottom:"16px"},children:[Object(a.jsx)("h3",{style:{backgroundColor:"yellow",paddingRight:"10px",paddingLeft:"10px"},children:"N\xc3O ATUALIZE OU SAIA DESSA P\xc1GINA!"}),Object(a.jsx)("p",{children:"Atualizar ou sair dessa p\xe1gina ir\xe1 invalidar o deploy (emiss\xe3o) do contrato"}),Object(a.jsx)("div",{className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Carregando..."})})]})}):Object(a.jsxs)(h,{children:[Object(a.jsx)(x.a.Group,{as:f.a,className:"text-center",style:{paddingTop:"20px"},children:Object(a.jsx)(O.a,{className:"text-center",md:12,children:Object(a.jsxs)(x.a.Group,{as:O.a,style:Z,children:[Object(a.jsxs)("div",{style:{width:"60%"},children:[Object(a.jsx)(x.a.Label,{size:"lg",column:"true",htmlFor:"wallet_select",style:Q,children:"Carteira para deploy"}),Object(a.jsxs)(x.a.Control,{as:"select",id:"wallet_select",defaultValue:o.owner||"",onChange:H,children:[o.owner||Object(a.jsx)("option",{value:"",children:"Escolha a carteira..."}),c.map((function(e,t){return Object(a.jsx)("option",{children:e},t)}))]})]}),d&&Object(a.jsx)(k.a,{variant:"warning",type:"button",disabled:!I,onClick:function(){D(!1),R(),setTimeout((function(){D(!0)}),1e4)},style:K,children:"Atualizar"})]})})}),z&&Object(a.jsx)("div",{className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Carregando..."})}),m?Object(a.jsx)(x.a.Group,{as:f.a,className:"text-center",style:{paddingTop:"20px"},children:Object(a.jsxs)(O.a,{className:"text-center",md:12,children:[Object(a.jsxs)("p",{children:["O valor total para a cria\xe7\xe3o do seu token \xe9: ",Object(a.jsx)("span",{children:"".concat(m.amount," eth")}),". Clique no bot\xe3o abaixo para confirmar a transa\xe7\xe3o"]}),Object(a.jsx)(k.a,{size:"lg",variant:"success",column:"true",type:"button",onClick:q,style:K,children:"Come\xe7ar processo de Pagamento"})]})}):"",Object(a.jsx)(T,{from:"attributes"})]})},W={paddingBottom:"20px",paddingTop:"15px",color:"black"},X={borderBottom:"1px solid #f79007",borderTop:"none",paddingTop:"10px",paddingLeft:"20px"},Y={paddingBottom:"30px",textAlign:"left",color:"grey",fontStyle:"italic"};var ee=function(){var e=Object(r.useContext)(u),t=e.setKey,n=e.tokenData,c=e.jwt,o=e.setJwt,s=function(){var e=Object(g.a)(y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U(n,c);case 3:a=e.sent,o(a.token),t("loading"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(h,{children:[Object(a.jsx)("h2",{className:"text-center mt-4 mb-4",children:"Par\xe2metros do Contrato:"}),Object(a.jsxs)(x.a.Group,{as:f.a,className:"text-center mt-4 mb-4",children:[Object(a.jsx)(x.a.Label,{size:"lg",column:"true",md:5,htmlFor:"name",style:W,children:"Nome do Token"}),Object(a.jsxs)(O.a,{md:6,children:[Object(a.jsx)(x.a.Control,{readOnly:!0,style:X,plaintext:!0,type:"text",value:n.name,id:"name",name:"tname",label:"Nome do Token"}),Object(a.jsx)(x.a.Text,{style:Y,children:"O nome do Token deve ter de 3-25 caracteres. Caracteres alfanum\xe9ricos, espa\xe7o e h\xedfen s\xe3o aceitos."})]}),Object(a.jsx)(x.a.Label,{size:"lg",column:"true",md:5,htmlFor:"symbol",style:W,children:"Sigla do Token"}),Object(a.jsxs)(O.a,{md:6,children:[Object(a.jsx)(x.a.Control,{readOnly:!0,style:X,plaintext:!0,type:"text",id:"symbol",value:n.symbol}),Object(a.jsx)(x.a.Text,{style:Y,children:"3-4 caracteres (exemplos: ETH, BTC, BAT, etc.). Sem espa\xe7os, somente caracteres alfanum\xe9ricos."})]}),Object(a.jsx)(x.a.Label,{size:"lg",column:"true",md:5,htmlFor:"supply",style:W,children:"Fornecimento Total"}),Object(a.jsxs)(O.a,{md:6,children:[Object(a.jsx)(x.a.Control,{readOnly:!0,style:X,plaintext:!0,type:"text",id:"supply",value:n.supply}),Object(a.jsxs)(x.a.Text,{style:Y,children:["Quantidade total de tokens a serem gerados. M\xednimo de 1 e m\xe1ximo de ",E,"."]})]}),Object(a.jsx)(x.a.Label,{size:"lg",column:"true",md:5,htmlFor:"owner",style:W,children:"Usu\xe1rio"}),Object(a.jsxs)(O.a,{md:6,children:[Object(a.jsx)(x.a.Control,{readOnly:!0,style:X,plaintext:!0,type:"text",id:"owner",value:n.owner}),Object(a.jsx)(x.a.Text,{style:Y,children:"Carteira do Usu\xe1rio"})]}),Object(a.jsx)(O.a,{sm:{span:6,offset:3},className:"text-center mt-4 mb-4",children:Object(a.jsx)(k.a,{size:"lg",variant:"success",type:"button",name:"finish",onClick:s,style:{paddingLeft:"50px",paddingRight:"50px"},children:"Deploy (Emiss\xe3o)!"})})]})]})},te=n.p+"static/media/checkMark.07e0f1f4.png",ne={display:"flex",minHeight:"50vh",flexDirection:"column",justifyContent:"space-around",alignItems:"center"};var ae=function(){var e=Object(r.useContext)(u),t=e.jwt,n=e.setKey,c=Object(r.useState)(null),o=Object(s.a)(c,2),i=o[0],l=o[1],d=Object(r.useState)(null),j=Object(s.a)(d,2),p=j[0],b=j[1],x={paddingLeft:"50px",paddingRight:"50px",marginRight:"8px"},m=function(){var e=Object(g.a)(y.a.mark((function e(){var a,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J(t);case 3:a=e.sent,r=a.address,c=a.hash,l(r),b(c),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Invalid request"),n("token");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t&&m()}),[t]),Object(a.jsxs)(h,{style:ne,children:[Object(a.jsx)("div",{children:i&&p?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:" Sucesso! Seu contrato foi emitido"}),Object(a.jsx)("img",{src:te,alt:"check-mark",style:{width:"60px"}})]}):Object(a.jsx)("h2",{children:" Seu contrato est\xe1 sendo emitido..."})}),i&&p?Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h3",{children:"Informa\xe7\xf5es do Contrato"}),Object(a.jsx)("p",{children:"Use essas informa\xe7\xf5es para interagir com seu contrato"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("a",{href:"https://ropsten.etherscan.io/address/".concat(i),className:"btn btn-info",rel:"noreferrer",target:"_blank",style:x,children:"Endere\xe7o do Contrato"}),Object(a.jsx)("a",{href:"https://ropsten.etherscan.io/tx/".concat(p),rel:"noreferrer",target:"_blank",className:"btn btn-info",style:x,children:"Hash"}),Object(a.jsx)("button",{type:"button",className:"btn btn-success",style:x,children:"Download Contrato"})]})]}):Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h3",{style:{backgroundColor:"yellow",paddingRight:"10px",paddingLeft:"10px"},children:"N\xc3O ATUALIZE OU SAIA DESSA P\xc1GINA!"}),Object(a.jsx)("p",{children:"Atualizar ou sair dessa p\xe1gina ir\xe1 invalidar o deploy (emiss\xe3o) do contrato"}),Object(a.jsx)("div",{className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})]})]})};var re=function(){var e=Object(r.useContext)(u).setKey;return Object(a.jsxs)(h,{children:[Object(a.jsx)("span",{children:"Obrigado por usar nosso gerador de Token"}),Object(a.jsx)("h1",{children:"Sua transa\xe7\xe3o foram enviadas com sucesso para a rede Ethereum"}),Object(a.jsx)("p",{children:"Assim que a minera\xe7\xe3o terminar, voc\xea pode verificar seus novos ativos no Etherscan"}),Object(a.jsx)("p",{children:"Se precisar de ajuda para verificar o token, entre em contato conosco em "}),Object(a.jsx)(k.a,{size:"lg",variant:"success",type:"button",onClick:function(){e("token")},style:{paddingLeft:"50px",paddingRight:"50px"},children:"Criar Novo Token!"})]})},ce=n(81);var oe=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Token Creator N\xc3O \xe9 respons\xe1vel pelo comportamento incorreto do contrato no caso de par\xe2metros errados inseridos pelos usu\xe1rios."}),Object(a.jsx)("li",{children:"Token Creator N\xc3O \xe9 respons\xe1vel pelo uso do contrato / conta."}),Object(a.jsx)("li",{children:"Token Creator N\xc3O \xe9 respons\xe1vel por erros no c\xf3digo, mas far\xe1 de tudo para elimin\xe1-lo o mais r\xe1pido poss\xedvel, caso sejam detectados."}),Object(a.jsx)("li",{children:"Token Creator \xe9 SOMENTE respons\xe1vel pela cria\xe7\xe3o e lan\xe7\xe1-lo na rede."}),Object(a.jsx)("li",{children:"Token Creator N\xc3O tem acesso \xe1s fun\xe7\xf5es de gest\xe3o do contrato e n\xe3o ser\xe1 capaz de interromp\xea-lo, continuar e fazer qualquer outra coisa, exceto finalizar ap\xf3s a data de t\xe9rmino."})]}),i=function(){c(!1),localStorage.setItem("useTerms","false")};return Object(a.jsx)("div",{children:Object(a.jsxs)(ce.a,{show:n,onHide:i,backdrop:"static",children:[Object(a.jsx)(ce.a.Header,{children:Object(a.jsx)(ce.a.Title,{children:"Termos de Uso"})}),Object(a.jsx)(ce.a.Body,{children:o}),Object(a.jsxs)(ce.a.Footer,{children:[Object(a.jsx)(k.a,{size:"lg",variant:"success",type:"button",onClick:i,children:"Concordar"}),Object(a.jsx)(k.a,{size:"lg",variant:"danger",type:"button",onClick:function(){return c(!0),alert("Voc\xea deve aceitar esses termos para come\xe7ar o processo.")},children:"Discordar"})]})]})})},se={margin:"0px auto",width:"100%",paddingTop:"20px",paddingBottom:"20px",color:"#F29C20"};var ie=function(){var e=Object(r.useContext)(u),t=e.key,n=e.setKey,c=Object(r.useState)(localStorage.getItem("useTerms")||!0),o=Object(s.a)(c,2);return o[0],o[1],Object(a.jsxs)(d.a,{style:{width:"80%",margin:"50px auto",paddingBottom:"10%"},children:[Object(a.jsx)(oe,{}),Object(a.jsx)(d.a.Header,{children:Object(a.jsx)(p,{})}),Object(a.jsxs)(i.a,{id:"controlled-tab-example",activeKey:t,onSelect:function(e){return n(e)},className:"justify-content-center",variant:"pills",style:se,children:[Object(a.jsx)(l.Tab,{eventKey:"token",title:"Tipo do Token",disabled:!0,children:"token"===t?Object(a.jsx)(C,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})}),Object(a.jsx)(l.Tab,{eventKey:"attributes",title:"Atributos do Token",disabled:!0,children:"attributes"===t?Object(a.jsx)(R,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})}),Object(a.jsx)(l.Tab,{eventKey:"payment",title:"Detalhes de Pagamento",disabled:!0,children:"payment"===t?Object(a.jsx)($,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})}),Object(a.jsx)(l.Tab,{eventKey:"confirmation",title:"Confirma\xe7\xe3o",disabled:!0,children:"confirmation"===t?Object(a.jsx)(ee,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})}),Object(a.jsx)(l.Tab,{eventKey:"loading",title:"Deploy (Emiss\xe3o)",disabled:!0,children:"loading"===t?Object(a.jsx)(ae,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})}),Object(a.jsx)(l.Tab,{eventykey:"again",disabled:!0,children:"again"===t?Object(a.jsx)(re,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})})]})]})};n(604);var le=function(e){var t=e.children,n=Object(r.useState)("token"),c=Object(s.a)(n,2),o=c[0],i=c[1],l=Object(r.useState)({}),d=Object(s.a)(l,2),j=d[0],p=d[1],b=Object(r.useState)(""),x=Object(s.a)(b,2),m=x[0],h=x[1],O=Object(r.useState)({}),f=Object(s.a)(O,2),v=f[0],y=f[1],g=Object(r.useState)([]),k=Object(s.a)(g,2),w=k[0],T=k[1];Object(r.useEffect)((function(){window.ethereum&&(y(window.ethereum),window.web3.version.getNetwork((function(e,t){if(!e){if(3!==Number(t))return alert("Mude a rede para Ropten antes de continuar!");window.ethereum.enable().then((function(){T(window.web3.eth.accounts)})).catch((function(e){var t=e.message;alert("".concat(t,"\nPor favor, conecte-se com uma carteira v\xe1lida."))}))}})))}),[]);var C={accounts:w,ethereum:v,jwt:m,key:o,setJwt:h,setKey:i,setTokenData:p,tokenData:j};return Object(a.jsx)(u.Provider,{value:C,children:t})};n(605);o.a.render(Object(a.jsx)(le,{children:Object(a.jsx)(ie,{})}),document.getElementById("root"))}},[[606,1,2]]]);
//# sourceMappingURL=main.d761d3c6.chunk.js.map