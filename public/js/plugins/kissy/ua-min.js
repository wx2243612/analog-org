/*
Copyright 2012, KISSY UI Library v1.30rc
MIT Licensed
build time: Sep 12 15:30
*/
KISSY.add("ua/base",function(i,e){var c=i.Env.host,b=c.navigator.userAgent,f="",g="",a,j=[6,9],c=c.document.createElement("div"),k,d={webkit:e,trident:e,gecko:e,presto:e,chrome:e,safari:e,firefox:e,ie:e,opera:e,mobile:e,core:e,shell:e},h=function(a){var b=0;return parseFloat(a.replace(/\./g,function(){return 0===b++?".":""}))};c.innerHTML="<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}","");k=c.getElementsByTagName("s");if(0<k.length){g="ie";d[f="trident"]=0.1;if((a=b.match(/Trident\/([\d.]*)/))&&
a[1])d[f]=h(a[1]);b=j[0];for(j=j[1];b<=j;b++)if(c.innerHTML="<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}",b),0<k.length){d[g]=b;break}}else if((a=b.match(/AppleWebKit\/([\d.]*)/))&&a[1]){d[f="webkit"]=h(a[1]);if((a=b.match(/Chrome\/([\d.]*)/))&&a[1])d[g="chrome"]=h(a[1]);else if((a=b.match(/\/([\d.]*) Safari/))&&a[1])d[g="safari"]=h(a[1]);if(/ Mobile\//.test(b))d.mobile="apple";else if(a=b.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))d.mobile=a[0].toLowerCase()}else if((a=
b.match(/Presto\/([\d.]*)/))&&a[1]){if(d[f="presto"]=h(a[1]),(a=b.match(/Opera\/([\d.]*)/))&&a[1]){d[g="opera"]=h(a[1]);if((a=b.match(/Opera\/.* Version\/([\d.]*)/))&&a[1])d[g]=h(a[1]);if((a=b.match(/Opera Mini[^;]*/))&&a)d.mobile=a[0].toLowerCase();else if((a=b.match(/Opera Mobi[^;]*/))&&a)d.mobile=a[0]}}else if((a=b.match(/MSIE\s([^;]*)/))&&a[1]){if(d[f="trident"]=0.1,d[g="ie"]=h(a[1]),(a=b.match(/Trident\/([\d.]*)/))&&a[1])d[f]=h(a[1])}else if(a=b.match(/Gecko/)){d[f="gecko"]=0.1;if((a=b.match(/rv:([\d.]*)/))&&
a[1])d[f]=h(a[1]);if((a=b.match(/Firefox\/([\d.]*)/))&&a[1])d[g="firefox"]=h(a[1])}d.core=f;d.shell=g;d._numberify=h;return d});KISSY.add("ua/css",function(i,e){var c=i.Env.host.document.documentElement,b="",f;i.each("webkit,trident,gecko,presto,chrome,safari,firefox,ie,opera".split(","),function(c){if(f=e[c]){b=b+(" ks-"+c+(parseInt(f)+""));b=b+(" ks-"+c)}});c.className=i.trim(c.className+b)},{requires:["./base"]});
KISSY.add("ua/extra",function(i,e,c){var b=i.Env.host,f=b.navigator.userAgent,g,a,c={se360:c,maxthon:c,tt:c,theworld:c,sougou:c},j=e._numberify;if(f.match(/360SE/))c[a="se360"]=3;else if(f.match(/Maxthon/)&&(g=b.external)){a="maxthon";try{c[a]=j(g.max_version)}catch(k){c[a]=0.1}}else if(b=f.match(/TencentTraveler\s([\d.]*)/))c[a="tt"]=b[1]?j(b[1]):0.1;else if(f.match(/TheWorld/))c[a="theworld"]=3;else if(b=f.match(/SE\s([\d.]*)/))c[a="sougou"]=b[1]?j(b[1]):0.1;a&&(c.shell=a);i.mix(e,c);return e},
{requires:["ua/base"]});KISSY.add("ua",function(i,e){return i.UA=e},{requires:["ua/extra","ua/css"]});