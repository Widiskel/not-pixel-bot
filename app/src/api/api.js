const a1_0x354b5d=a1_0x53be;function a1_0x23ee(){const _0x3539ce=['application/json,\x20text/plain,\x20*/*','request','create','referer','33FNiqwn','371940HvAEjD','info','4SANVLs','fetch','61430xSjmKe','host','47971pbCkSG','httpsAgent','Request\x20Header\x20:\x20','same-site','GET','data','1112105EljZyp','empty','35FfcJce','4QVPRAG','generateHeaders','url','axiosInstance','randomUserAgent','144zsYmQb','\x20:\x20','en-US,en;q=0.9,id;q=0.8','Authorization','300030aUopBm','message','query','proxy','stringify','statusText','58374TeZHid','273208cHBowu','status','origin'];a1_0x23ee=function(){return _0x3539ce;};return a1_0x23ee();}(function(_0x2e62d2,_0x3a1b34){const _0x541af4=a1_0x53be,_0x52cd35=_0x2e62d2();while(!![]){try{const _0x295b92=-parseInt(_0x541af4(0x1c4))/0x1+parseInt(_0x541af4(0x1cd))/0x2*(parseInt(_0x541af4(0x1d6))/0x3)+-parseInt(_0x541af4(0x1e7))/0x4*(parseInt(_0x541af4(0x1ca))/0x5)+parseInt(_0x541af4(0x1dc))/0x6+-parseInt(_0x541af4(0x1cc))/0x7*(-parseInt(_0x541af4(0x1dd))/0x8)+-parseInt(_0x541af4(0x1d2))/0x9*(-parseInt(_0x541af4(0x1e9))/0xa)+-parseInt(_0x541af4(0x1e4))/0xb*(parseInt(_0x541af4(0x1e5))/0xc);if(_0x295b92===_0x3a1b34)break;else _0x52cd35['push'](_0x52cd35['shift']());}catch(_0x4a3445){_0x52cd35['push'](_0x52cd35['shift']());}}}(a1_0x23ee,0x1c2d7));import a1_0x11d100 from'axios';import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import a1_0x125a2b from'../utils/logger.js';function a1_0x53be(_0x36de87,_0x3bf4ab){const _0x23eef9=a1_0x23ee();return a1_0x53be=function(_0x53be37,_0x45d541){_0x53be37=_0x53be37-0x1c4;let _0x1e7325=_0x23eef9[_0x53be37];return _0x1e7325;},a1_0x53be(_0x36de87,_0x3bf4ab);}export class API{constructor(_0x251b50,_0xa3d07e,_0x2dbb7c,_0xa65f54,_0x200889,_0x10563b){const _0x577bef=a1_0x53be;this['url']=_0x2dbb7c,this[_0x577bef(0x1ea)]=_0xa65f54,this['origin']=_0x200889,this[_0x577bef(0x1e3)]=_0x10563b,this['ua']=Helper[_0x577bef(0x1d1)](),this['query']=_0x251b50,this['proxy']=_0xa3d07e,this[_0x577bef(0x1d0)]=a1_0x11d100[_0x577bef(0x1e2)]({'baseURL':_0x2dbb7c,'headers':this['generateHeaders']()});}[a1_0x354b5d(0x1ce)](_0x4fb2f7=this[a1_0x354b5d(0x1d8)]){const _0xb9d12e=a1_0x354b5d,_0xcc6bb1={'Accept':_0xb9d12e(0x1e0),'Accept-Language':_0xb9d12e(0x1d4),'Content-Type':'application/json','Sec-Fetch-Dest':_0xb9d12e(0x1cb),'Sec-Fetch-Site':_0xb9d12e(0x1c7),'Sec-Fetch-Mode':'cors','User-Agent':this['ua'],'Host':this[_0xb9d12e(0x1ea)],'Origin':this[_0xb9d12e(0x1df)],'Referer':this[_0xb9d12e(0x1e3)]};return _0x4fb2f7&&(_0xcc6bb1[_0xb9d12e(0x1d5)]='Initdata\x20'+_0x4fb2f7),_0xcc6bb1;}async[a1_0x354b5d(0x1e8)](_0x1b85ce,_0x132e1e=a1_0x354b5d(0x1c8),_0x5b5d5b,_0x25023d={},_0x435512={}){const _0x4918e0=a1_0x354b5d;try{const _0x4204e5=''+this[_0x4918e0(0x1cf)]+_0x1b85ce,_0x12e181={..._0x435512,...this[_0x4918e0(0x1ce)](_0x5b5d5b)};a1_0x125a2b[_0x4918e0(0x1e6)](_0x132e1e+_0x4918e0(0x1d3)+_0x4204e5+'\x20'+(this[_0x4918e0(0x1d9)]?this[_0x4918e0(0x1d9)]:'')),a1_0x125a2b[_0x4918e0(0x1e6)](_0x4918e0(0x1c6)+JSON[_0x4918e0(0x1da)](_0x12e181));const _0x484d81={'method':_0x132e1e,'url':_0x4204e5,'headers':_0x12e181};this[_0x4918e0(0x1d9)]&&(_0x484d81[_0x4918e0(0x1c5)]=new HttpsProxyAgent(this[_0x4918e0(0x1d9)]));_0x132e1e!=='GET'&&(_0x484d81[_0x4918e0(0x1c9)]=_0x25023d,a1_0x125a2b['info']('Request\x20Body\x20:\x20'+JSON[_0x4918e0(0x1da)](_0x25023d)));const _0x38349b=await this[_0x4918e0(0x1d0)][_0x4918e0(0x1e1)](_0x484d81);a1_0x125a2b[_0x4918e0(0x1e6)]('Response\x20:\x20'+_0x38349b[_0x4918e0(0x1de)]+'\x20'+_0x38349b[_0x4918e0(0x1db)]);const _0x2f1e29={'status':_0x38349b[_0x4918e0(0x1de)],..._0x38349b[_0x4918e0(0x1c9)]};return a1_0x125a2b[_0x4918e0(0x1e6)]('Response\x20Data\x20:\x20'+JSON[_0x4918e0(0x1da)](_0x2f1e29)),_0x2f1e29;}catch(_0x17fece){a1_0x125a2b['error']('Error\x20:\x20'+_0x17fece[_0x4918e0(0x1d7)]);if(_0x17fece[_0x4918e0(0x1de)]==0x193)return{'status':0x193,..._0x17fece['response'][_0x4918e0(0x1c9)]};if(_0x17fece[_0x4918e0(0x1de)]==0x194)return{'status':0x194,..._0x17fece['response']['data']};throw _0x17fece;}}}