!function(){if("ontouchstart"in window){var e,t,n,a,i,r,s={};e=function(e,t){return Math.abs(e[0]-t[0])>5||Math.abs(e[1]-t[1])>5},t=function(e){this.startXY=[e.touches[0].clientX,e.touches[0].clientY],this.threshold=!1},n=function(t){return this.threshold?!1:void(this.threshold=e(this.startXY,[t.touches[0].clientX,t.touches[0].clientY]))},a=function(t){if(!this.threshold&&!e(this.startXY,[t.changedTouches[0].clientX,t.changedTouches[0].clientY])){var n=t.changedTouches[0],a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),a.simulated=!0,t.target.dispatchEvent(a)}},i=function(e){var t=Date.now(),n=t-s.time,a=e.clientX,i=e.clientY,o=[Math.abs(s.x-a),Math.abs(s.y-i)],c=r(e.target,"A")||e.target,l=c.nodeName,h="A"===l,u=window.navigator.standalone&&h&&e.target.getAttribute("href");return s.time=t,s.x=a,s.y=i,(!e.simulated&&(500>n||1500>n&&o[0]<50&&o[1]<50)||u)&&(e.preventDefault(),e.stopPropagation(),!u)?!1:(u&&(window.location=c.getAttribute("href")),void(c&&c.classList&&(c.classList.add("energize-focus"),window.setTimeout(function(){c.classList.remove("energize-focus")},150))))},r=function(e,t){for(var n=e;n!==document.body;){if(!n||n.nodeName===t)return n;n=n.parentNode}return null},document.addEventListener("touchstart",t,!1),document.addEventListener("touchmove",n,!1),document.addEventListener("touchend",a,!1),document.addEventListener("click",i,!0)}}();