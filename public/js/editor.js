(()=>{"use strict";var e={n:a=>{var t=a&&a.__esModule?()=>a.default:()=>a;return e.d(t,{a:t}),t},d:(a,t)=>{for(var r in t)e.o(t,r)&&!e.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:t[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a)};const a=window.wp.hooks;(0,a.addFilter)("editor.PostFeaturedImage.imageSize","x3p0/ideas/featured-image-size",(()=>"x3p0-16x9-lg"));const t=window.wp.element,r=window.wp.i18n,n=["core/group","core/paragraph"],o="has-color-var-",l={default:(0,r.__)("Default","x3p0-ideas"),neutral:(0,r.__)("Neutral","x3p0-ideas"),primary:(0,r.__)("Primary","x3p0-ideas"),secondary:(0,r.__)("Secondary","x3p0-ideas"),tertiary:(0,r.__)("Tertiary","x3p0-ideas"),positive:(0,r.__)("Positive","x3p0-ideas"),negative:(0,r.__)("Negative","x3p0-ideas")},s=["base","subtle","muted","contrast","emphasis"],i=window.wp.blockEditor,c=window.wp.tokenList;var d=e.n(c);const p=(e,a="",t="",r="",n="")=>{const o=new(d())(e);return t&&o.remove(r+t+n),a&&o.add(r+a+n),o.value},m=(e,a,t)=>p(e,"default"===a?"":a,t,o),u=window.wp.primitives,_=(0,t.createElement)(u.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(u.Path,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})),v=window.wp.components,x=({attributes:{className:e},setAttributes:a})=>{const n=(()=>{const e=(0,i.useSetting)("color.palette");let a={};return Object.keys(l).forEach((t=>{let r={};s.forEach((a=>{const n="default"===t?a:`${t}-${a}`,o=e.find((({slug:e})=>e==n));o&&(r[a]=o.color)})),0<Object.keys(r).length&&(a[t]=r)})),a})(),c=(e=>{const a=new(d())(e),t=Object.keys(l).find((e=>a.contains(o+e)));return void 0!==t?t:""})(e),p=(0,t.createElement)(v.MenuGroup,{className:"x3p0-color-var-picker",label:(0,r.__)("Select a color variation","x3p0-ideas")},Object.keys(n).map(((r,o)=>((r,o)=>{const s=(e=>Object.values(n[e]).map(((e,a)=>(0,t.createElement)(v.Flex,{key:a},(0,t.createElement)(v.ColorIndicator,{colorValue:e})))))(r),i="default"===r?"":r;return(0,t.createElement)(v.MenuItem,{key:o,role:"menuitemradio",className:"x3p0-color-var-picker__button",isSelected:c===i,isPressed:c===i,onClick:()=>a({className:m(e,i,c)})},(0,t.createElement)(v.__experimentalHStack,null,(0,t.createElement)(v.__experimentalZStack,{key:`x3p0-color-var-indicator-${o}`,offset:-8,isLayered:!1},s),(0,t.createElement)(v.FlexItem,{key:`x3p0-color-var-name-${o}`},l[r])))})(r,`primary-${o}`))));return(0,t.createElement)(v.Dropdown,{className:"x3p0-color-var-dropdown",contentClassName:"x3p0-color-var-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:a})=>(0,t.createElement)(v.ToolbarButton,{className:"x3p0-color-var-dropdown__button",icon:_,label:(0,r.__)("Color Variation","x3p0-ideas"),onClick:a,"aria-expanded":e,isPressed:!!c}),renderContent:()=>p})},g=["core/avatar","core/image","core/post-featured-image"],h="has-",b="-gradient-background",w=(e,a,t)=>p(e,a,t,h,b),E=({attributes:{className:e},setAttributes:a,clientId:n})=>{const{gradients:o,gradientOptions:l}=(()=>{const e=(0,i.__experimentalUseMultipleOriginColorsAndGradients)(),a=(0,t.useMemo)((()=>e.gradients.map((e=>[...e.gradients||[]])).flat()));return{gradientOptions:e.gradients,gradients:a}})(),s=((e,a)=>{const t=new(d())(e),r=a.find((e=>t.contains(h+e.slug+b)));return void 0!==r?r.slug:""})(e,o),c=e=>{return a=((e,a)=>{const t=(0,i.getGradientSlugByValue)(a,e);return t?`var:preset|gradient|${t}`:e})(e,o),a&&a.startsWith("var:preset|gradient|")?a.replace("var:preset|gradient|",""):null;var a},p={label:(0,r.__)("Gradient Outline","x3p0-ideas"),gradientValue:s?(0,i.getGradientValueBySlug)(o,s):null,onGradientChange:t=>a({className:w(e,c(t),s)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:l};return(0,t.createElement)(i.__experimentalColorGradientSettingsDropdown,{settings:[p],panelId:n,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},k=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})),f=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})),y=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})),C=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})),N=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})),S=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})),q=["core/list"],I="has-marker-",A=[{value:"arrow",label:(0,r.__)("Arrow","x3p0-ideas")},{value:"dash",label:(0,r.__)("Dash","x3p0-ideas")},{value:"disc",label:(0,r.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,r.__)("Circle","x3p0-ideas")},{value:"square",label:(0,r.__)("Square","x3p0-ideas")}],B=[{value:"decimal",label:(0,r.__)("Decimal","x3p0-ideas")},{value:"leading-zero",label:(0,r.__)("Leading Zero","x3p0-ideas")},{value:"upper-alpha",label:(0,r.__)("Alphabetical: Uppercase","x3p0-ideas")},{value:"lower-alpha",label:(0,r.__)("Alphabetical: Lowercase","x3p0-ideas")},{value:"upper-roman",label:(0,r.__)("Roman: Uppercase","x3p0-ideas")},{value:"lower-roman",label:(0,r.__)("Roman: Lowercase","x3p0-ideas")}],M=[...A,...B],T=(e,a,t)=>p(e,a,t,I),Z={value:"",label:(0,r.__)("Default","x3p0-ideas")},H=({attributes:{className:e,ordered:a},setAttributes:n})=>{const o=(0,t.useMemo)((()=>(e=>{const a=new(d())(e),t=M.find((e=>a.contains(I+e.value)));return void 0!==t?t.value:""})(e)),[e]),l=(0,t.useMemo)((()=>a?[Z,...B]:[Z,...A]),[a]);(0,t.useEffect)((()=>{var t;(o&&a&&(t=o,!B.find((e=>e.value===t)))||!a&&!(e=>A.find((a=>a.value===e)))(o))&&n({className:T(e,"",o)})}),[a]);const s=(0,t.createElement)(v.MenuGroup,{className:"x3p0-list-marker-selector",label:(0,r.__)("Select a list marker","x3p0-ideas")},l.map(((a,r)=>((a,r)=>(0,t.createElement)(v.MenuItem,{key:r,role:"menuitemradio",className:"x3p0-list-marker-selector__button",isSelected:o===a.value,isPressed:o===a.value,onClick:()=>n({className:T(e,a.value,o)})},((e,a)=>{const r=e.value?e.value:"default";return(0,t.createElement)(v.FlexItem,{key:`x3p0-marker-name-${a}`,className:"x3p0-list-marker-selector__content"},(0,t.createElement)("ul",{className:`x3p0-list-marker-selector__list has-marker-${r}`},(0,t.createElement)("li",null,e.label)))})(a,r)))(a,r))));return(0,t.createElement)(v.Dropdown,{className:"x3p0-list-marker-dropdown",contentClassName:"x3p0-list-marker-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:a})=>(0,t.createElement)(v.ToolbarButton,{className:"x3p0-list-marker__button",icon:k,label:(0,r.__)("List Marker","x3p0-ideas"),onClick:a,"aria-expanded":e,isPressed:!!o}),renderContent:()=>s})},D=["core/separator"],F="has-icon-",O=[{value:"❦",gradient:""},{value:"🫠",gradient:"mohave"},{value:"🌼",gradient:"mohave"},{value:"☀️",gradient:"true-sunset"},{value:"🪶",gradient:"shy-rainbow"},{value:"🔥",gradient:"luminous-vivid-amber-to-luminous-vivid-orange"},{value:"🍃",gradient:"emerald"},{value:"☕",gradient:"oahu"},{value:"🍻",gradient:"happy-memories"},{value:"🪷",gradient:"blush-light-purple"},{value:"🎸",gradient:"blush-bordeaux"},{value:"✏️",gradient:"mohave"},{value:"🚀",gradient:"superman"},{value:"☘️",gradient:"emerald"},{value:"⭐",gradient:"luminous-dusk"},{value:"🌻",gradient:"true-sunset"},{value:"⛱️",gradient:"powerpuff"}],P=()=>Array.from((0,a.applyFilters)("x3p0.ideas.blockEdit.separatorIcons",new Set(O))),G=(e,a,t)=>p(e,a,t,F),L=(0,t.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(u.Path,{d:"M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"})),z=({attributes:{className:e},setAttributes:a})=>{const n=P(),o=(e=>{const a=new(d())(e),t=P().find((e=>a.contains(F+e.value)));return void 0!==t?t.value:""})(e),l=(0,t.createElement)(v.BaseControl,{className:"x3p0-sep-icons-picker",label:(0,r.__)("Icons","x3p0-ideas")},(0,t.createElement)("div",{className:"x3p0-sep-icons-picker__description"},(0,r.__)("Pick an icon to super-charge your separator. Need more icons?","x3p0-ideas")+" ",(0,t.createElement)("a",{href:"#",target:"_blank"},(0,r.__)("Learn how to add your own →","x3p0-ideas"))),(0,t.createElement)(v.__experimentalGrid,{className:"x3p0-sep-icons-picker__grid",columns:"6"},n.map(((r,n)=>((r,n)=>{var l;return(0,t.createElement)(v.Button,{key:n,isPressed:o===r.value,className:"x3p0-sep-icons-picker__button",onClick:()=>(t=>a({className:G(e,o===t.value?"":t.value,o),gradient:o!==t.value&&t?.gradient?t?.gradient:void 0}))(r)},null!==(l=r.label)&&void 0!==l?l:r.value)})(r,n)))));return(0,t.createElement)(v.Dropdown,{className:"x3p0-sep-icons-dropdown",contentClassName:"x3p0-sep-icons-popover",popoverProps:{headerTitle:(0,r.__)("Separator Icons","x3p0-ideas"),variant:"toolbar"},renderToggle:({isOpen:e,onToggle:a})=>(0,t.createElement)(v.ToolbarButton,{className:"x3p0-sep-icons-dropdown__button",icon:L,label:(0,r.__)("Separator Icon","x3p0-ideas"),onClick:a,"aria-expanded":e,isPressed:!!o}),renderContent:()=>l})},R=["core/heading","core/paragraph"],j="has-text-shadow-",$=[{value:"none",label:(0,r.__)("None","x3p0-ideas")},{value:"sm",label:(0,r.__)("Small","x3p0-ideas")},{value:"md",label:(0,r.__)("Medium","x3p0-ideas")},{value:"lg",label:(0,r.__)("Large","x3p0-ideas")}],V=()=>(0,a.applyFilters)("x3p0.ideas.blockEdit.textShadows",$),U=(e,a,t)=>p(e,a,t,j),W={key:"default",name:(0,r.__)("Default","x3p0-ideas"),value:""},Q=({attributes:{className:e},setAttributes:a})=>{const n=(0,t.useMemo)((()=>(e=>{const a=new(d())(e),t=V().find((e=>a.contains(j+e.value)));return void 0!==t?t.value:""})(e)),[e]),o=[W,...V().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-text-shadow"},(0,t.createElement)(v.CustomSelectControl,{label:(0,r.__)("Text Shadow","x3p0-ideas"),options:o,value:o.find((e=>e.value===n)),onChange:({selectedItem:t})=>a({className:U(e,t.value,n)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))},J={"color-variations":e=>a=>n.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(i.BlockControls,{group:"other"},(0,t.createElement)(x,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,a),"gradient-background":e=>a=>g.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(i.InspectorControls,{group:"color"},(0,t.createElement)(E,{attributes:a.attributes,setAttributes:a.setAttributes,clientId:a.clientId}))):(0,t.createElement)(e,a),"list-markers":e=>a=>q.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(i.BlockControls,{group:"other"},(0,t.createElement)(H,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,a),"separator-icons":e=>a=>D.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(i.BlockControls,{group:"other"},(0,t.createElement)(z,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,a),"text-shadow":e=>a=>R.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(i.InspectorControls,{group:"typography"},(0,t.createElement)(Q,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,a)};Object.keys(J).forEach((e=>(0,a.addFilter)("editor.BlockEdit",`x3p0/ideas/${e}`,J[e]))),(0,a.addFilter)("blocks.registerBlockType","x3p0/ideas/block/group",((e,a)=>{var t,r;return"core/group"===a?Object.assign({},e,{supports:Object.assign(null!==(t=e.supports)&&void 0!==t?t:{},{spacing:Object.assign(null!==(r=e.supports.spacing)&&void 0!==r?r:{},{blockGap:["horizontal","vertical"]})})}):e}));const K={"core/archives":{horizontal:(0,r.__)("Horizontal","x3p0-ideas")},"core/button":{"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas")},"core/categories":{horizontal:(0,r.__)("Horizontal","x3p0-ideas")},"core/columns":{"reverse-stack":(0,r.__)("Reverse Mobile Stack","x3p0-ideas")},"core/comment-author-name":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/comment-date":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/comment-edit-link":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/comment-reply-link":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/cover":{"polygon-slant-down-sm":(0,r.__)("Slant Down: Small","x3p0-ideas"),"polygon-slant-down-md":(0,r.__)("Slant Down: Medium","x3p0-ideas"),"polygon-slant-up-sm":(0,r.__)("Slant Up: Small","x3p0-ideas"),"polygon-slant-up-md":(0,r.__)("Slant Up: Medium","x3p0-ideas"),stretch:(0,r.__)("Stretch","x3p0-ideas")},"core/footnotes":{pull:(0,r.__)("Pull","x3p0-ideas")},"core/gallery":{classic:(0,r.__)("Classic","x3p0-ideas")},"core/group":{card:(0,r.__)("Card","x3p0-ideas"),"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas")},"core/heading":{"clip-text":(0,r.__)("Clip Text","x3p0-ideas"),"text-wrap-balance":(0,r.__)("Wrap: Balance","x3p0-ideas")},"core/home-link":{button:(0,r.__)("Button","x3p0-ideas"),icon:(0,r.__)("Icon","x3p0-ideas")},"core/image":{borderless:(0,r.__)("Borderless","x3p0-ideas"),"hand-drawn":(0,r.__)("Hand-Drawn","x3p0-ideas"),polaroid:(0,r.__)("Polaroid","x3p0-ideas"),tape:(0,r.__)("Tape","x3p0-ideas"),"tape-corners":(0,r.__)("Tape: Corners","x3p0-ideas")},"core/list":{"gap-snug":(0,r.__)("Gap: Snug","x3p0-ideas"),"gap-normal":(0,r.__)("Gap: Normal","x3p0-ideas"),"gap-relaxed":(0,r.__)("Gap: Relaxed","x3p0-ideas"),"gap-loose":(0,r.__)("Gap: Loose","x3p0-ideas"),horizontal:(0,r.__)("Horizontal","x3p0-ideas")},"core/loginout":{button:(0,r.__)("Button","x3p0-ideas"),icon:(0,r.__)("Icon","x3p0-ideas")},"core/paragraph":{indent:(0,r.__)("Indent","x3p0-ideas"),intro:(0,r.__)("Intro","x3p0-ideas"),"lead-in":(0,r.__)("Lead-in","x3p0-ideas"),lede:(0,r.__)("Lede","x3p0-ideas")},"core/post-author-name":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-comments-count":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-comments-form":{icons:(0,r.__)("Icons","x3p0-ideas")},"core/post-comments-link":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-date":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-template":{flex:(0,r.__)("Flexible","x3p0-ideas"),"featured-col-span-all":(0,r.__)("Featured: Full Width","x3p0-ideas")},"core/post-terms":{button:(0,r.__)("Button","x3p0-ideas"),icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-time-to-read":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/pullquote":{"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas"),"mark-top":(0,r.__)("Mark: Top","x3p0-ideas")},"core/search":{icon:(0,r.__)("Icon","x3p0-ideas"),sm:(0,r.__)("Small","x3p0-ideas")},"core/separator":{dashed:(0,r.__)("Dashed","x3p0-ideas"),dotted:(0,r.__)("Dotted","x3p0-ideas"),double:(0,r.__)("Double","x3p0-ideas"),"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas")},"core/social-links":{"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas"),outline:(0,r.__)("Outline","x3p0-ideas")},"core/site-title":{normalize:(0,r.__)("Normalize","x3p0-ideas")},"core/table-of-contents":{chapters:(0,r.__)("Chapters","x3p0-ideas"),"chapters-and-subs":(0,r.__)("Chapters With Sub-headings","x3p0-ideas"),"marker-unordered":(0,r.__)("Unordered","x3p0-ideas"),pull:(0,r.__)("Pull","x3p0-ideas")},"core/tag-cloud":{flat:(0,r.__)("Flat","x3p0-ideas")}},X=window.wp.domReady;var Y=e.n(X);const ee=window.wp.blocks;Y()((()=>{(0,ee.unregisterBlockStyle)("core/separator","dots"),Object.keys(K).forEach((e=>Object.keys(K[e]).forEach((a=>(0,ee.registerBlockStyle)(e,{name:a,label:K[e][a]})))))})),(0,ee.registerBlockVariation)("core/spacer",{name:"x3p0/theme-spacer",title:(0,r.__)("Spacer","x3p0-ideas"),isDefault:!0,keywords:["space","spacer","spacing"],attributes:{height:"var:preset|spacing|plus-3"},isActive:e=>e.height&&e.height.includes("var:preset|spacing|")});const ae=window.wp.richText,te="x3p0/abbr",re={name:te,title:(0,r.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:a,value:n,contentRef:o}){const[l,s]=(0,t.useState)(!1),c=()=>s((e=>!e));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.RichTextToolbarButton,{icon:f,title:(0,r.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?a((0,ae.removeFormat)(n,te)):c()}),l&&(0,t.createElement)(oe,{value:n,onChange:a,onClose:c,contentRef:o}))}},ne=re;function oe({value:e,contentRef:a,onChange:n,onClose:o}){const l=(0,ae.useAnchor)({editableContentElement:a.current,settings:re}),[s,i]=(0,t.useState)(""),c=(0,t.createElement)(v.TextControl,{label:(0,r.__)("Add title for abbreviation","x3p0-ideas"),value:s,onChange:e=>i(e),help:(0,r.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),d=(0,t.createElement)("form",{className:"x3p0-format-abbr-popover__form",onSubmit:a=>{a.preventDefault(),n((0,ae.applyFormat)(e,{type:te,attributes:{title:s}})),o()}},c);return(0,t.createElement)(v.Popover,{className:"x3p0-format-abbr-popover",anchor:l,placement:"top",onClose:o,variant:"toolbar"},d)}const le="x3p0/del",se={name:le,title:(0,r.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(i.RichTextToolbarButton,{icon:y,title:(0,r.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>a((0,ae.toggleFormat)(n,{type:le}))})},ie="x3p0/ins",ce={name:ie,title:(0,r.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(i.RichTextToolbarButton,{icon:C,title:(0,r.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>a((0,ae.toggleFormat)(n,{type:ie}))})},de="x3p0/mark",pe={name:de,title:(0,r.__)("Mark","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(i.RichTextToolbarButton,{icon:N,title:(0,r.__)("Mark","x3p0-ideas"),isActive:e,onClick:()=>a((0,ae.toggleFormat)(n,{type:de}))})},me="x3p0/overline";[ne,se,ce,pe,{name:me,title:(0,r.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(i.RichTextToolbarButton,{icon:S,title:(0,r.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>a((0,ae.toggleFormat)(n,{type:me}))})}].forEach((({name:e,...a})=>(0,ae.registerFormatType)(e,a)))})();