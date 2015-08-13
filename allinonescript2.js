(function(){

	var button = document.getElementById('cn-button2'),
    wrapper = document.getElementById('cn-wrapper2');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav2');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav2');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav2');
	}

})();



(function(){

	var button = document.getElementById('cn-button1'),
    wrapper = document.getElementById('cn-wrapper1'),
    overlay = document.getElementById('cn-overlay1');

	//open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
	    button.innerHTML = "-";
	    classie.add(overlay, 'on-overlay1');
	    classie.add(wrapper, 'opened-nav1');
	}
	function closeNav(){
		open = false;
		button.innerHTML = "+";
		classie.remove(overlay, 'on-overlay1');
		classie.remove(wrapper, 'opened-nav1');
	}
	document.addEventListener('click', closeNav);

})();



/*! skrollr 0.6.16 (2013-10-18) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,G(),at=this,r=r||{},ft=r.constants||{},r.easing)for(var n in r.easing)j[n]=r.easing[n];ht=r.edgeStrategy||"set",st={beforerender:r.beforerender,render:r.render},ct=r.forceHeight!==!1,ct&&(Vt=r.scale||1),ut=r.mobileDeceleration||E,mt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||A,dt={targetTop:at.getScrollTop()},Mt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Mt?(lt=t.getElementById("skrollr-body"),lt&&ot(),W(),xt(o,[y,S],[T])):xt(o,[y,b],[T]),at.refresh(),bt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Lt||e!==It)&&(Lt=t,It=e,Nt=!0)});var i=R();return function l(){Z(),Tt=i(l)}(),at}var o,a,i=e.skrollr={get:function(){return at},init:function(e){return at||new n(e)},VERSION:"0.6.15"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",d=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,E=.004,A=200,x="start",F="end",C="center",D="bottom",H="___skrollable_id",P=/^\s+|\s+$/g,V=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,z=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,N=/\{\?\}/g,B=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,M=/[a-z\-]+-gradient/g,$="",_="",G=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if($=n.match(e)||+n==n&&t[n].match(e))break;if(!$)return $=_="",r;$=$[0],"-"===$.slice(0,1)?(_=$,$={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[$]):_="-"+$.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[$.toLowerCase()+"RequestAnimationFrame"],r=Dt();return(Mt||!t)&&(t=function(t){var n=Dt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Dt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[$.toLowerCase()+"CancelAnimationFrame"];return(Mt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,it=[],Bt=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=mt,f=ht;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var d=m.name.match(V);if(null!==d){var v={props:m.value,element:i};s.push(v);var h=d[1];h=h&&ft[h.substr(1)]||0;var y=d[2];/p$/.test(y)?(v.isPercentage=!0,v.offset=((0|y.slice(0,-1))+h)/100):v.offset=(0|y)+h;var T=d[3],b=d[4]||T;T&&T!==x&&T!==F?(v.mode="relative",v.anchors=[T,b]):(v.mode="absolute",T===F?v.isEnd=!0:v.isPercentage||(v.frame=v.offset*Vt,delete v.offset))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=it[k].styleAttr,w=it[k].classAttr):(k=i[H]=Bt++,S=i.style.cssText,w=At(i)),it[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},xt(i,[g],[])}}}for(kt(),n=0,o=e.length;o>n;n++){var E=it[e[n][H]];E!==r&&(J(E),Q(E))}return at},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=at.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Dt(),o=at.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:j[t.easing||w],done:t.done},pt.topDiff||(pt.done&&pt.done.call(at,!1),pt=r),at},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(at,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.setScrollTop=function(t,r){return vt=r===!0,Mt?$t=s.min(s.max(t,0),Pt):e.scrollTo(0,t),at},n.prototype.getScrollTop=function(){return Mt?$t:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Pt},n.prototype.on=function(e,t){return st[e]=t,at},n.prototype.off=function(e){return delete st[e],at},n.prototype.destroy=function(){var e=U();e(Tt),wt(),xt(o,[T],[y,b,S]);for(var t=0,n=it.length;n>t;t++)nt(it[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",lt&&i.setStyle(lt,"transform","none"),at=r,lt=r,st=r,ct=r,Pt=0,Vt=1,ft=r,ut=r,zt="down",Ot=-1,It=0,Lt=0,Nt=!1,pt=r,mt=r,gt=r,dt=r,vt=r,Bt=0,ht=r,Mt=!1,$t=0,yt=r};var W=function(){var n,i,l,c,g,d,v,h,y,T,b;bt(o,[f,u,p,m].join(" "),function(e){e.preventDefault();var o=e.changedTouches[0];switch(c=o.clientY,g=o.clientX,y=e.timeStamp,e.type){case f:for(n&&n.blur(),at.stopAnimateTo(),n=e.target;3===n.nodeType;)n=n.parentNode;i=d=c,l=g,h=y;break;case u:v=c-d,b=y-T,at.setScrollTop($t-v,!0),d=c,T=y;break;default:case p:case m:var a=i-c,S=l-g,w=S*S+a*a;if(49>w){n.focus();var k=t.createEvent("MouseEvent");return k.initEvent("click",!0,!0),n.dispatchEvent(k),r}n=r;var E=v/b;E=s.max(s.min(E,3),-3);var A=s.abs(E/ut),x=E*A+.5*ut*A*A,F=at.getScrollTop()-x,C=0;F>Pt?(C=(Pt-F)/x,F=Pt):0>F&&(C=-F/x,F=0),A*=1-C,at.animateTo(0|F+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},Y=function(){var e,t,r,n,a,i,l,c,f;for(c=0,f=it.length;f>c;c++)for(e=it[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++){l=n[a];var u=l.offset;l.isPercentage&&(u*=o.clientHeight,l.frame=u),"relative"===l.mode&&(nt(t),l.frame=at.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,nt(t,!0)),ct&&!l.isEnd&&l.frame>Pt&&(Pt=l.frame)}for(Pt=s.max(Pt,Et()),c=0,f=it.length;f>c;c++){for(e=it[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],l.isEnd&&(l.frame=Pt-l.offset);e.keyFrames.sort(Ht)}},X=function(e,t){for(var r=0,n=it.length;n>r;r++){var o,a,s=it[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(xt(c,[y?d:h],[d,v,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":nt(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=rt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(xt(c,[g,v],[d,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var E=u[w],A=u[w+1];for(o in E.props)if(l.call(E.props,o)){var x=(f-E.frame)/(A.frame-E.frame);x=E.props[o].easing(x),a=tt(E.props[o].value,A.props[o].value,x),a=rt(a),i.setStyle(c,o,a)}break}}},Z=function(){Nt&&(Nt=!1,kt());var e,t,n=at.getScrollTop(),o=Dt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),at.setScrollTop(n,!0);else if(!vt){var a=dt.targetTop-n;a&&(dt={startTop:Ot,topDiff:n-Ot,targetTop:n,startTime:qt,endTime:qt+gt}),dt.endTime>=o&&(t=j.sqrt((o-dt.startTime)/gt),n=0|dt.startTop+t*dt.topDiff)}if(Mt&&lt&&i.setStyle(lt,"transform","translate(0, "+-$t+"px) "+yt),vt||Ot!==n){zt=n>Ot?"down":Ot>n?"up":zt,vt=!1;var l={curTop:n,lastTop:Ot,maxTop:Pt,direction:zt},s=st.beforerender&&st.beforerender.call(at,l);s!==!1&&(X(n,at.getScrollTop()),Ot=n,st.render&&st.render.call(at,l)),e&&e.call(at,!1)}qt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=z.exec(l.props));)a=i[1],o=i[2],n=a.match(O),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?K(o):[o.slice(1)],s[a]={value:o,easing:j[n]};l.props=s}},K=function(e){var t=[];return B.lastIndex=0,e=e.replace(B,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),_&&(M.lastIndex=0,e=e.replace(M,function(e){return _+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},Q=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)et(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)et(e.keyFrames[t],n)},et=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},tt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},rt=function(e){var t=1;return N.lastIndex=0,e[0].replace(N,function(){return e[t++]})},nt=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=it[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,xt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=At(n),n.style.cssText=r.styleAttr,xt(n,r.classAttr)))},ot=function(){yt="translateZ(0)",i.setStyle(lt,"transform",yt);var e=c(lt),t=e.getPropertyValue("transform"),r=e.getPropertyValue(_+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(yt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{$&&(n[$+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var at,it,lt,st,ct,ft,ut,pt,mt,gt,dt,vt,ht,yt,Tt,bt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),_t.push({element:t,name:a,listener:n})},St=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=_t.length;r>t;t++)e=_t[t],St(e.element,e.name,e.listener);_t=[]},kt=function(){var e=at.getScrollTop();Pt=0,ct&&!Mt&&(a.style.height="auto"),Y(),ct&&!Mt&&(a.style.height=Pt+o.clientHeight+"px"),Mt?at.setScrollTop(s.min(at.getScrollTop(),Pt)):at.setScrollTop(e,!0),vt=!0},Et=function(){var e=lt&&lt.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},At=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},xt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Ct(i).replace(Ct(o[l])," ");i=Ft(i);for(var c=0,f=n.length;f>c;c++)-1===Ct(i).indexOf(Ct(n[c]))&&(i+=" "+n[c]);t[a]=Ft(i)},Ft=function(e){return e.replace(P,"")},Ct=function(e){return" "+e+" "},Dt=Date.now||function(){return+new Date},Ht=function(e,t){return e.frame-t.frame},Pt=0,Vt=1,zt="down",Ot=-1,qt=Dt(),It=0,Lt=0,Nt=!1,Bt=0,Mt=!1,$t=0,_t=[]})(window,document);




