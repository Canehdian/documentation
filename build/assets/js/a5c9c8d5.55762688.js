"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[358],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(2182),i=n(9028),o=(n(9496),n(9613)),a=["components"],u={},c="Functions",s={unversionedId:"Scripts/functions",id:"Scripts/functions",title:"Functions",description:"Scripts can define functions that can be invoked with arguments. The first parameter is the name of the function, and the last is the body of the function. Parameters in between are function parameters.",source:"@site/docs/Scripts/functions.md",sourceDirName:"Scripts",slug:"/Scripts/functions",permalink:"/Scripts/functions",editUrl:"https://github.com/sylo-digital/documentation/docs/Scripts/functions.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Comments",permalink:"/Scripts/comments"},next:{title:"Importing Scripts",permalink:"/Scripts/imports"}},l={},p=[{value:"Returning values",id:"returning-values",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"functions"},"Functions"),(0,o.kt)("p",null,"Scripts can define functions that can be invoked with arguments. The first parameter is the name of the function, and the last is the body of the function. Parameters in between are function parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[#function;my_function;{=param1}]\n    Hello {$param1}!\n[/function]\n{my_function;{user.mention}}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"{function;my_function;{user.id}}\n{my_function} // outputs the users ID\n")),(0,o.kt)("p",null,"Imporing scripts with functions will make those functions available to the script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{import;actions/...}\n{my_function}\n")),(0,o.kt)("h2",{id:"returning-values"},"Returning values"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{return}")," can be used in functions to return values. This is important for some functions that have to return rich data, as there can be issues with the data returned unless you explicitly use ",(0,o.kt)("inlineCode",{parentName:"p"},"{return}"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[#function;my_function]\n    This will be discarded as return is used.\n    {return;{{\n        "title": "My Title"\n    }}}\n[/function]\n\n{=data;{my_function}}\n{$data.title} // "My Title"\n')),(0,o.kt)("p",null,"In this example, without ",(0,o.kt)("inlineCode",{parentName:"p"},"{return}"),', the function would include the string "This will be discarded as return is used" with the object appended.'),(0,o.kt)("p",null,"Even without the string, the object would be destroyed because during parsing the spaces in the body of the function are included. This may be changed in the future."))}m.isMDXComponent=!0}}]);