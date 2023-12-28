(()=>{"use strict";var e={n:a=>{var t=a&&a.__esModule?()=>a.default:()=>a;return e.d(t,{a:t}),t},d:(a,t)=>{for(var r in t)e.o(t,r)&&!e.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:t[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a)};const a=window.wp.element,t=window.wp.i18n,r=["core/group","core/paragraph"],n="has-color-var-",l={default:(0,t.__)("Default","x3p0-ideas"),neutral:(0,t.__)("Neutral","x3p0-ideas"),primary:(0,t.__)("Primary","x3p0-ideas"),secondary:(0,t.__)("Secondary","x3p0-ideas"),tertiary:(0,t.__)("Tertiary","x3p0-ideas"),positive:(0,t.__)("Positive","x3p0-ideas"),negative:(0,t.__)("Negative","x3p0-ideas")},o=["base","subtle","muted","contrast","emphasis"],s=window.wp.blockEditor,i=window.wp.tokenList;var c=e.n(i);const d=(e,a="",t="",r="",n="")=>{const l=new(c())(e);return t&&l.remove(r+t+n),a&&l.add(r+a+n),l.value},p=(e,a,t)=>d(e,"default"===a?"":a,t,n),m=window.wp.primitives,u=(0,a.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(m.Path,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})),_=window.wp.components,x=({attributes:{className:e},setAttributes:r})=>{const i=(()=>{const e=(0,s.useSetting)("color.palette");let a={};return Object.keys(l).forEach((t=>{let r={};o.forEach((a=>{const n="default"===t?a:`${t}-${a}`,l=e.find((({slug:e})=>e==n));l&&(r[a]=l.color)})),0<Object.keys(r).length&&(a[t]=r)})),a})(),d=(e=>{const a=new(c())(e),t=Object.keys(l).find((e=>a.contains(n+e)));return void 0!==t?t:""})(e),m=(0,a.createElement)(_.MenuGroup,{className:"x3p0-color-var-picker",label:(0,t.__)("Select a color variation","x3p0-ideas")},Object.keys(i).map(((t,n)=>((t,n)=>{const o=(e=>Object.values(i[e]).map(((e,t)=>(0,a.createElement)(_.Flex,{key:t},(0,a.createElement)(_.ColorIndicator,{colorValue:e})))))(t),s="default"===t?"":t;return(0,a.createElement)(_.MenuItem,{key:n,role:"menuitemradio",className:"x3p0-color-var-picker__button",isSelected:d===s,isPressed:d===s,onClick:()=>r({className:p(e,s,d)})},(0,a.createElement)(_.__experimentalHStack,null,(0,a.createElement)(_.__experimentalZStack,{key:`x3p0-color-var-indicator-${n}`,offset:-8,isLayered:!1},o),(0,a.createElement)(_.FlexItem,{key:`x3p0-color-var-name-${n}`},l[t])))})(t,`primary-${n}`))));return(0,a.createElement)(_.Dropdown,{className:"x3p0-color-var-dropdown",contentClassName:"x3p0-color-var-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:r})=>(0,a.createElement)(_.ToolbarButton,{className:"x3p0-color-var-dropdown__button",icon:u,label:(0,t.__)("Color Variation","x3p0-ideas"),onClick:r,"aria-expanded":e,isPressed:!!d}),renderContent:()=>m})},v=["core/avatar","core/image","core/post-featured-image"],g="has-",h="-gradient-background",b=(e,a,t)=>d(e,a,t,g,h),w=({attributes:{className:e},setAttributes:r,clientId:n})=>{const{gradients:l,gradientOptions:o}=(()=>{const e=(0,s.__experimentalUseMultipleOriginColorsAndGradients)(),t=(0,a.useMemo)((()=>e.gradients.map((e=>[...e.gradients||[]])).flat()));return{gradientOptions:e.gradients,gradients:t}})(),i=((e,a)=>{const t=new(c())(e),r=a.find((e=>t.contains(g+e.slug+h)));return void 0!==r?r.slug:""})(e,l),d=e=>{return a=((e,a)=>{const t=(0,s.getGradientSlugByValue)(a,e);return t?`var:preset|gradient|${t}`:e})(e,l),a&&a.startsWith("var:preset|gradient|")?a.replace("var:preset|gradient|",""):null;var a},p={label:(0,t.__)("Gradient Outline","x3p0-ideas"),gradientValue:i?(0,s.getGradientValueBySlug)(l,i):null,onGradientChange:a=>r({className:b(e,d(a),i)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:o};return(0,a.createElement)(s.__experimentalColorGradientSettingsDropdown,{settings:[p],panelId:n,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},E=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})),k=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})),f=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})),y=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})),C=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})),N=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})),S=["core/list"],A="has-marker-",B=[{value:"arrow",label:(0,t.__)("Arrow","x3p0-ideas")},{value:"dash",label:(0,t.__)("Dash","x3p0-ideas")},{value:"disc",label:(0,t.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,t.__)("Circle","x3p0-ideas")},{value:"square",label:(0,t.__)("Square","x3p0-ideas")}],I=[{value:"decimal",label:(0,t.__)("Decimal","x3p0-ideas")},{value:"leading-zero",label:(0,t.__)("Leading Zero","x3p0-ideas")},{value:"upper-alpha",label:(0,t.__)("Alphabetical: Uppercase","x3p0-ideas")},{value:"lower-alpha",label:(0,t.__)("Alphabetical: Lowercase","x3p0-ideas")},{value:"upper-roman",label:(0,t.__)("Roman: Uppercase","x3p0-ideas")},{value:"lower-roman",label:(0,t.__)("Roman: Lowercase","x3p0-ideas")}],q=[...B,...I],M=(e,a,t)=>d(e,a,t,A),T={value:"",label:(0,t.__)("Default","x3p0-ideas")},Z=({attributes:{className:e,ordered:r},setAttributes:n})=>{const l=(0,a.useMemo)((()=>(e=>{const a=new(c())(e),t=q.find((e=>a.contains(A+e.value)));return void 0!==t?t.value:""})(e)),[e]),o=(0,a.useMemo)((()=>r?[T,...I]:[T,...B]),[r]);(0,a.useEffect)((()=>{var a;(l&&r&&(a=l,!I.find((e=>e.value===a)))||!r&&!(e=>B.find((a=>a.value===e)))(l))&&n({className:M(e,"",l)})}),[r]);const s=(0,a.createElement)(_.MenuGroup,{className:"x3p0-list-marker-selector",label:(0,t.__)("Select a list marker","x3p0-ideas")},o.map(((t,r)=>((t,r)=>(0,a.createElement)(_.MenuItem,{key:r,role:"menuitemradio",className:"x3p0-list-marker-selector__button",isSelected:l===t.value,isPressed:l===t.value,onClick:()=>n({className:M(e,t.value,l)})},((e,t)=>{const r=e.value?e.value:"default";return(0,a.createElement)(_.FlexItem,{key:`x3p0-marker-name-${t}`,className:"x3p0-list-marker-selector__content"},(0,a.createElement)("ul",{className:`x3p0-list-marker-selector__list has-marker-${r}`},(0,a.createElement)("li",null,e.label)))})(t,r)))(t,r))));return(0,a.createElement)(_.Dropdown,{className:"x3p0-list-marker-dropdown",contentClassName:"x3p0-list-marker-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:r})=>(0,a.createElement)(_.ToolbarButton,{className:"x3p0-list-marker__button",icon:E,label:(0,t.__)("List Marker","x3p0-ideas"),onClick:r,"aria-expanded":e,isPressed:!!l}),renderContent:()=>s})},H=(e,a,t)=>d(e,a,t),D=({attributes:{className:e},setAttributes:r})=>{const n=(0,a.useMemo)((()=>(e=>new(c())(e).contains("has-screen-reader-text"))(e)),[e]);return(0,a.createElement)("div",{className:"x3p0-screen-reader-text"},(0,a.createElement)(_.ToggleControl,{checked:n,label:(0,t.__)("Visibility","x3p0-ideas"),help:n?(0,t.__)("Block is hidden on the front end but readable for screen readers.","x3p0-ideas"):(0,t.__)("Block is visible on the front end.","x3p0-ideas"),onChange:()=>r({className:H(e,n?"":"has-screen-reader-text",n?"has-screen-reader-text":"")})}))},F=["core/heading","core/paragraph"],O=["core/separator"],P="has-icon-",L=[{value:"❦",gradient:""},{value:"🫠",gradient:"mohave"},{value:"🌼",gradient:"mohave"},{value:"☀️",gradient:"true-sunset"},{value:"🪶",gradient:"shy-rainbow"},{value:"🔥",gradient:"luminous-vivid-amber-to-luminous-vivid-orange"},{value:"🍃",gradient:"emerald"},{value:"☕",gradient:"oahu"},{value:"🍻",gradient:"happy-memories"},{value:"🪷",gradient:"blush-light-purple"},{value:"🎸",gradient:"blush-bordeaux"},{value:"✏️",gradient:"mohave"},{value:"🚀",gradient:"superman"},{value:"☘️",gradient:"emerald"},{value:"⭐",gradient:"luminous-dusk"},{value:"🌻",gradient:"true-sunset"},{value:"⛱️",gradient:"powerpuff"}],G=window.wp.hooks,z=()=>Array.from((0,G.applyFilters)("x3p0.ideas.blockEdit.separatorIcons",new Set(L))),R=(e,a,t)=>d(e,a,t,P),j=(0,a.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(m.Path,{d:"M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"})),V=({attributes:{className:e},setAttributes:r})=>{const n=z(),l=(e=>{const a=new(c())(e),t=z().find((e=>a.contains(P+e.value)));return void 0!==t?t.value:""})(e),o=(0,a.createElement)(_.BaseControl,{className:"x3p0-sep-icons-picker",label:(0,t.__)("Icons","x3p0-ideas")},(0,a.createElement)("div",{className:"x3p0-sep-icons-picker__description"},(0,t.__)("Pick an icon to super-charge your separator. Need more icons?","x3p0-ideas")+" ",(0,a.createElement)("a",{href:"#",target:"_blank"},(0,t.__)("Learn how to add your own →","x3p0-ideas"))),(0,a.createElement)(_.__experimentalGrid,{className:"x3p0-sep-icons-picker__grid",columns:"6"},n.map(((t,n)=>((t,n)=>{var o;return(0,a.createElement)(_.Button,{key:n,isPressed:l===t.value,className:"x3p0-sep-icons-picker__button",onClick:()=>(a=>r({className:R(e,l===a.value?"":a.value,l),gradient:l!==a.value&&a?.gradient?a?.gradient:void 0}))(t)},null!==(o=t.label)&&void 0!==o?o:t.value)})(t,n)))));return(0,a.createElement)(_.Dropdown,{className:"x3p0-sep-icons-dropdown",contentClassName:"x3p0-sep-icons-popover",popoverProps:{headerTitle:(0,t.__)("Separator Icons","x3p0-ideas"),variant:"toolbar"},renderToggle:({isOpen:e,onToggle:r})=>(0,a.createElement)(_.ToolbarButton,{className:"x3p0-sep-icons-dropdown__button",icon:j,label:(0,t.__)("Separator Icon","x3p0-ideas"),onClick:r,"aria-expanded":e,isPressed:!!l}),renderContent:()=>o})},$=["core/heading","core/paragraph"],U="has-text-shadow-",W=[{value:"none",label:(0,t.__)("None","x3p0-ideas")},{value:"sm",label:(0,t.__)("Small","x3p0-ideas")},{value:"md",label:(0,t.__)("Medium","x3p0-ideas")},{value:"lg",label:(0,t.__)("Large","x3p0-ideas")}],Q=()=>(0,G.applyFilters)("x3p0.ideas.blockEdit.textShadows",W),J=(e,a,t)=>d(e,a,t,U),K={key:"default",name:(0,t.__)("Default","x3p0-ideas"),value:""},X=({attributes:{className:e},setAttributes:r})=>{const n=(0,a.useMemo)((()=>(e=>{const a=new(c())(e),t=Q().find((e=>a.contains(U+e.value)));return void 0!==t?t.value:""})(e)),[e]),l=[K,...Q().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,a.createElement)("div",{className:"x3p0-text-shadow"},(0,a.createElement)(_.CustomSelectControl,{label:(0,t.__)("Text Shadow","x3p0-ideas"),options:l,value:l.find((e=>e.value===n)),onChange:({selectedItem:a})=>r({className:J(e,a.value,n)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))},Y={"color-variations":e=>t=>r.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,{...t}),(0,a.createElement)(s.BlockControls,{group:"other"},(0,a.createElement)(x,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,{...t}),"gradient-background":e=>t=>v.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,{...t}),(0,a.createElement)(s.InspectorControls,{group:"color"},(0,a.createElement)(w,{attributes:t.attributes,setAttributes:t.setAttributes,clientId:t.clientId}))):(0,a.createElement)(e,{...t}),"list-markers":e=>t=>S.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,{...t}),(0,a.createElement)(s.BlockControls,{group:"other"},(0,a.createElement)(Z,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,{...t}),"separator-icons":e=>t=>O.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,{...t}),(0,a.createElement)(s.BlockControls,{group:"other"},(0,a.createElement)(V,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,{...t}),"text-shadow":e=>t=>$.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,{...t}),(0,a.createElement)(s.InspectorControls,{group:"typography"},(0,a.createElement)(X,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,{...t}),"screen-reader-text":e=>t=>F.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,{...t}),(0,a.createElement)(s.InspectorControls,{group:"typography"},(0,a.createElement)(D,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,{...t})};Object.keys(Y).forEach((e=>(0,G.addFilter)("editor.BlockEdit",`x3p0/ideas/${e}`,Y[e])));const ee={"core/archives":{horizontal:(0,t.__)("Horizontal","x3p0-ideas")},"core/button":{"hand-drawn":(0,t.__)("Hand Drawn","x3p0-ideas")},"core/categories":{horizontal:(0,t.__)("Horizontal","x3p0-ideas")},"core/column":{box:(0,t.__)("Box","x3p0-ideas"),card:(0,t.__)("Card","x3p0-ideas")},"core/columns":{"reverse-stack":(0,t.__)("Reverse Mobile Stack","x3p0-ideas")},"core/comment-author-name":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/comment-date":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/comment-edit-link":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/comment-reply-link":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/cover":{"polygon-slant-down-sm":(0,t.__)("Slant Down: Small","x3p0-ideas"),"polygon-slant-down-md":(0,t.__)("Slant Down: Medium","x3p0-ideas"),"polygon-slant-up-sm":(0,t.__)("Slant Up: Small","x3p0-ideas"),"polygon-slant-up-md":(0,t.__)("Slant Up: Medium","x3p0-ideas"),stretch:(0,t.__)("Stretch","x3p0-ideas")},"core/footnotes":{pull:(0,t.__)("Pull","x3p0-ideas")},"core/gallery":{classic:(0,t.__)("Classic","x3p0-ideas")},"core/group":{box:(0,t.__)("Box","x3p0-ideas"),card:(0,t.__)("Card","x3p0-ideas"),"hand-drawn":(0,t.__)("Hand Drawn","x3p0-ideas"),padded:(0,t.__)("Padded","x3p0-ideas"),"padded-x":(0,t.__)("Padded: Horizontally","x3p0-ideas"),"padded-y":(0,t.__)("Padded: Vertically","x3p0-ideas")},"core/heading":{"clip-text":(0,t.__)("Clip Text","x3p0-ideas"),"text-wrap-balance":(0,t.__)("Wrap: Balance","x3p0-ideas")},"core/home-link":{button:(0,t.__)("Button","x3p0-ideas"),icon:(0,t.__)("Icon","x3p0-ideas")},"core/image":{borderless:(0,t.__)("Borderless","x3p0-ideas"),"hand-drawn":(0,t.__)("Hand-Drawn","x3p0-ideas"),icon:(0,t.__)("Caption Icon","x3p0-ideas"),polaroid:(0,t.__)("Polaroid","x3p0-ideas"),tape:(0,t.__)("Tape","x3p0-ideas"),"tape-corners":(0,t.__)("Tape: Corners","x3p0-ideas")},"core/list":{"gap-snug":(0,t.__)("Gap: Snug","x3p0-ideas"),"gap-normal":(0,t.__)("Gap: Normal","x3p0-ideas"),"gap-relaxed":(0,t.__)("Gap: Relaxed","x3p0-ideas"),"gap-loose":(0,t.__)("Gap: Loose","x3p0-ideas"),horizontal:(0,t.__)("Horizontal","x3p0-ideas")},"core/loginout":{button:(0,t.__)("Button","x3p0-ideas"),icon:(0,t.__)("Icon","x3p0-ideas")},"core/paragraph":{indent:(0,t.__)("Indent","x3p0-ideas"),intro:(0,t.__)("Intro","x3p0-ideas"),"lead-in":(0,t.__)("Lead-in","x3p0-ideas"),lede:(0,t.__)("Lede","x3p0-ideas")},"core/post-author-name":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/post-comments-count":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/post-comments-form":{icons:(0,t.__)("Icons","x3p0-ideas")},"core/post-comments-link":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/post-date":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/post-template":{flex:(0,t.__)("Flexible","x3p0-ideas"),"featured-col-span-all":(0,t.__)("Featured: Full Width","x3p0-ideas")},"core/post-terms":{button:(0,t.__)("Button","x3p0-ideas"),icon:(0,t.__)("Icon","x3p0-ideas")},"core/post-time-to-read":{icon:(0,t.__)("Icon","x3p0-ideas")},"core/pullquote":{"hand-drawn":(0,t.__)("Hand Drawn","x3p0-ideas"),"mark-top":(0,t.__)("Mark: Top","x3p0-ideas")},"core/search":{icon:(0,t.__)("Icon","x3p0-ideas"),sm:(0,t.__)("Small","x3p0-ideas")},"core/separator":{dashed:(0,t.__)("Dashed","x3p0-ideas"),dotted:(0,t.__)("Dotted","x3p0-ideas"),double:(0,t.__)("Double","x3p0-ideas"),"hand-drawn":(0,t.__)("Hand Drawn","x3p0-ideas")},"core/social-links":{"hand-drawn":(0,t.__)("Hand Drawn","x3p0-ideas"),outline:(0,t.__)("Outline","x3p0-ideas")},"core/site-title":{normalize:(0,t.__)("Normalize","x3p0-ideas")},"core/table-of-contents":{chapters:(0,t.__)("Chapters","x3p0-ideas"),"chapters-and-subs":(0,t.__)("Chapters With Sub-headings","x3p0-ideas"),"marker-unordered":(0,t.__)("Unordered","x3p0-ideas"),pull:(0,t.__)("Pull","x3p0-ideas")},"core/tag-cloud":{flat:(0,t.__)("Flat","x3p0-ideas")}},ae=window.wp.domReady;var te=e.n(ae);const re=window.wp.blocks;te()((()=>{(0,re.unregisterBlockStyle)("core/separator","dots"),Object.keys(ee).forEach((e=>Object.keys(ee[e]).forEach((a=>(0,re.registerBlockStyle)(e,{name:a,label:ee[e][a]})))))})),(0,re.registerBlockVariation)("core/spacer",{name:"x3p0/theme-spacer",title:(0,t.__)("Spacer","x3p0-ideas"),isDefault:!0,keywords:["space","spacer","spacing"],attributes:{height:"var:preset|spacing|plus-3"},isActive:e=>e.height&&e.height.includes("var:preset|spacing|")});const ne=window.wp.richText,le="x3p0/abbr",oe={name:le,title:(0,t.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:r,value:n,contentRef:l}){const[o,i]=(0,a.useState)(!1),c=()=>i((e=>!e));return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.RichTextToolbarButton,{icon:k,title:(0,t.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?r((0,ne.removeFormat)(n,le)):c()}),o&&(0,a.createElement)(ie,{value:n,onChange:r,onClose:c,contentRef:l}))}},se=oe;function ie({value:e,contentRef:r,onChange:n,onClose:l}){const o=(0,ne.useAnchor)({editableContentElement:r.current,settings:oe}),[s,i]=(0,a.useState)(""),c=(0,a.createElement)(_.TextControl,{label:(0,t.__)("Add title for abbreviation","x3p0-ideas"),value:s,onChange:e=>i(e),help:(0,t.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),d=(0,a.createElement)("form",{className:"x3p0-format-abbr-popover__form",onSubmit:a=>{a.preventDefault(),n((0,ne.applyFormat)(e,{type:le,attributes:{title:s}})),l()}},c);return(0,a.createElement)(_.Popover,{className:"x3p0-format-abbr-popover",anchor:o,placement:"top",onClose:l,variant:"toolbar"},d)}const ce="x3p0/del",de={name:ce,title:(0,t.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:r,value:n})=>(0,a.createElement)(s.RichTextToolbarButton,{icon:f,title:(0,t.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>r((0,ne.toggleFormat)(n,{type:ce}))})},pe="x3p0/ins",me={name:pe,title:(0,t.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:r,value:n})=>(0,a.createElement)(s.RichTextToolbarButton,{icon:y,title:(0,t.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>r((0,ne.toggleFormat)(n,{type:pe}))})},ue="x3p0/mark",_e={name:ue,title:(0,t.__)("Mark","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:r,value:n})=>(0,a.createElement)(s.RichTextToolbarButton,{icon:C,title:(0,t.__)("Mark","x3p0-ideas"),isActive:e,onClick:()=>r((0,ne.toggleFormat)(n,{type:ue}))})},xe="x3p0/overline";[se,de,me,_e,{name:xe,title:(0,t.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:r,value:n})=>(0,a.createElement)(s.RichTextToolbarButton,{icon:N,title:(0,t.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>r((0,ne.toggleFormat)(n,{type:xe}))})}].forEach((({name:e,...a})=>(0,ne.registerFormatType)(e,a)))})();