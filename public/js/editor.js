(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,a=window.wp.i18n,r=["core/group","core/paragraph"],o={default:(0,a.__)("Default","x3p0-ideas"),neutral:(0,a.__)("Neutral","x3p0-ideas"),primary:(0,a.__)("Primary","x3p0-ideas"),secondary:(0,a.__)("Secondary","x3p0-ideas"),tertiary:(0,a.__)("Tertiary","x3p0-ideas")},n=["50","100","300","500","700","900","950"],l=window.wp.blockEditor,i=window.wp.element,s=window.wp.primitives,c=(0,t.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(s.Path,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})),d=window.wp.components,p=({attributes:e,setAttributes:r})=>{const s=(()=>{const e=(0,l.useSetting)("color.palette");let t={};return Object.keys(o).forEach((a=>{let r={};if("default"===a){const t=e.find((({slug:e})=>"base"==e)),a=e.find((({slug:e})=>"contrast"==e));t&&a&&(r.base=t.color,r.contrast=a.color)}n.forEach((t=>{if("default"!==a){const o="default"===a?t:`${a}-${t}`,n=e.find((({slug:e})=>e==o));n&&(r[t]=n.color)}})),0<Object.keys(r).length&&(t[a]=r)})),t})(),p=(0,i.useMemo)((()=>(e=>{let t="";return Object.keys(o).forEach((a=>{e.textColor!==`${a}-900`||e.backgroundColor!==`${a}-50`||e.borderColor!==`${a}-100`||e?.gradient||(t=a)})),t})(e)),[e]),m=(0,t.createElement)(d.MenuGroup,{className:"x3p0-color-var-picker",label:(0,a.__)("Select a color variation","x3p0-ideas")},Object.keys(s).map(((e,a)=>((e,a)=>{const n=(e=>Object.values(s[e]).map(((e,a)=>(0,t.createElement)(d.Flex,{key:a},(0,t.createElement)(d.ColorIndicator,{colorValue:e})))))(e),l="default"===e?"":e;return(0,t.createElement)(d.MenuItem,{key:a,role:"menuitemradio",className:"x3p0-color-var-picker__button",isSelected:p===l,isPressed:p===l,onClick:()=>r((e=>"default"===e?{borderColor:!1,backgroundColor:!1,textColor:!1,gradient:!1}:{borderColor:`${e}-100`,backgroundColor:`${e}-50`,textColor:`${e}-900`,gradient:!1})(e))},(0,t.createElement)(d.__experimentalHStack,null,(0,t.createElement)(d.__experimentalZStack,{key:`x3p0-color-var-indicator-${a}`,offset:-8,isLayered:!1},n),(0,t.createElement)(d.FlexItem,{key:`x3p0-color-var-name-${a}`},o[e])))})(e,`primary-${a}`))));return(0,t.createElement)(d.Dropdown,{className:"x3p0-color-var-dropdown",contentClassName:"x3p0-color-var-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:r})=>(0,t.createElement)(d.ToolbarButton,{className:"x3p0-color-var-dropdown__button",icon:c,label:(0,a.__)("Color Variation","x3p0-ideas"),onClick:r,"aria-expanded":e,isPressed:!!p}),renderContent:()=>m})},m=window.wp.tokenList;var _=e.n(m);const u=(e,t="",a="",r="",o="")=>{const n=new(_())(e);return a&&n.remove(r+a+o),t&&n.add(r+t+o),n.value},x=["core/avatar","core/image","core/post-featured-image"],v="has-",g="-gradient-background",h=(e,t,a)=>u(e,t,a,v,g),b=({attributes:{className:e},setAttributes:r,clientId:o})=>{const{gradients:n,gradientOptions:s}=(()=>{const e=(0,l.__experimentalUseMultipleOriginColorsAndGradients)(),t=(0,i.useMemo)((()=>e.gradients.map((e=>[...e.gradients||[]])).flat()));return{gradientOptions:e.gradients,gradients:t}})(),c=((e,t)=>{const a=new(_())(e),r=t.find((e=>a.contains(v+e.slug+g)));return void 0!==r?r.slug:""})(e,n),d=e=>{return t=((e,t)=>{const a=(0,l.getGradientSlugByValue)(t,e);return a?`var:preset|gradient|${a}`:e})(e,n),t&&t.startsWith("var:preset|gradient|")?t.replace("var:preset|gradient|",""):null;var t},p={label:(0,a.__)("Gradient Outline","x3p0-ideas"),gradientValue:c?(0,l.getGradientValueBySlug)(n,c):null,onGradientChange:t=>r({className:h(e,d(t),c)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:s};return(0,t.createElement)(l.__experimentalColorGradientSettingsDropdown,{settings:[p],panelId:o,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},w=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})),k=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})),E=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M554.769-577.538v-33.539q32.231-17.038 69.415-25.442 37.183-8.404 75.816-8.404 21.417 0 41.805 2.457 20.387 2.458 41.58 7.856v33.841q-20.423-6.192-40.209-8.404-19.786-2.212-43.099-2.212-38.661 0-75.984 8.424-37.324 8.423-69.324 25.423Zm0 218.461v-35.077q30.693-17.038 69.03-25.75 38.338-8.711 76.201-8.711 21.417 0 41.805 2.73 20.387 2.731 41.58 8.193v33.846q-20.443-6.192-40.223-8.712-19.779-2.519-43.1-2.519-38.682 0-76.024 9.385-37.342 9.384-69.269 26.615Zm0-108.461v-35.077q32.231-17.039 69.415-25.443 37.183-8.404 75.816-8.404 21.417 0 41.805 2.423 20.387 2.424 41.58 7.885v33.846q-20.443-6.192-40.223-8.711-19.779-2.519-43.1-2.519-38.682 0-76.024 9.5t-69.269 26.5ZM262.001-319.692q52.23 0 101.73 12.038 49.5 12.039 98.115 39.192v-388.769q-42.692-30.923-95.245-46.692-52.553-15.769-104.834-15.769-35.407 0-62.323 4.307-26.916 4.308-59.444 16.079-9.231 3.077-13.077 8.846-3.846 5.77-3.846 12.693v356.844q0 10.769 7.692 15.769T147.692-304q21.193-7.385 49.81-11.538 28.617-4.154 64.499-4.154Zm236.768 51.23q48.694-27.153 97.885-39.192 49.191-12.038 101.25-12.038 35.75 0 64.481 4.154 28.73 4.153 49.923 11.538 9.231 3.846 16.923-1.154 7.692-5 7.692-15.769v-356.923q0-6.923-3.846-12.308-3.846-5.384-13.077-9.231-32.5-11.076-59.425-15.692-26.926-4.615-62.421-4.615-52.385 0-104.539 15.769-52.153 15.769-94.846 46.825v388.636ZM480-214.769q-48.654-32.654-104.038-50.327-55.385-17.673-114.116-17.673-29.97 0-58.87 4.865-28.899 4.866-56.683 15.401-21.909 8.465-41.024-5.429-19.115-13.893-19.115-38.375v-376.77q0-14.962 8.115-27.404t22.192-17.827q34.579-14.423 71.44-21.365 36.861-6.943 73.945-6.943 58.387 0 113.905 16.981T480-690.462q48.731-32.192 104.249-49.173 55.518-16.981 113.905-16.981 37.084 0 73.945 6.943 36.861 6.942 71.44 21.365 14.077 5.385 22.192 17.827 8.115 12.442 8.115 27.404v376.77q0 24.482-20.653 37.606-20.654 13.124-44.101 4.659-27.015-9.765-54.578-14.246-27.563-4.481-56.36-4.481-58.731 0-114.116 17.673Q528.654-247.423 480-214.769ZM292.461-499.385Z"})),C=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})),f=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})),q=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})),y=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})),N=["core/archives","core/categories","core/list","core/page-list"],B="has-marker-",I=[{value:"disc",label:(0,a.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,a.__)("Circle","x3p0-ideas")},{value:"square",label:(0,a.__)("Square","x3p0-ideas")},{value:"none",label:(0,a.__)("None","x3p0-ideas")}],Z=[{value:"decimal",label:(0,a.__)("Decimal","x3p0-ideas")},{value:"leading-zero",label:(0,a.__)("Leading Zero","x3p0-ideas")},{value:"upper-alpha",label:(0,a.__)("Alphabetical: Uppercase","x3p0-ideas")},{value:"lower-alpha",label:(0,a.__)("Alphabetical: Lowercase","x3p0-ideas")},{value:"upper-roman",label:(0,a.__)("Roman: Uppercase","x3p0-ideas")},{value:"lower-roman",label:(0,a.__)("Roman: Lowercase","x3p0-ideas")},{value:"none",label:(0,a.__)("None","x3p0-ideas")}],A=[...I,...Z],T=(e,t,a)=>u(e,t,a,B),M={value:"",label:(0,a.__)("Default","x3p0-ideas")},S=({attributes:{className:e,ordered:r},setAttributes:o})=>{const n=(0,i.useMemo)((()=>(e=>{const t=new(_())(e),a=A.find((e=>t.contains(B+e.value)));return void 0!==a?a.value:""})(e)),[e]),l=(0,i.useMemo)((()=>r?[M,...Z]:[M,...I]),[r]);(0,i.useEffect)((()=>{var t;(n&&r&&(t=n,!Z.find((e=>e.value===t)))||!r&&!(e=>I.find((t=>t.value===e)))(n))&&o({className:T(e,"",n)})}),[r]);const s=(0,t.createElement)(d.MenuGroup,{className:"x3p0-list-marker-selector",label:(0,a.__)("Select a list marker","x3p0-ideas")},l.map(((a,r)=>((a,r)=>(0,t.createElement)(d.MenuItem,{key:r,role:"menuitemradio",className:"x3p0-list-marker-selector__button",isSelected:n===a.value,isPressed:n===a.value,onClick:()=>o({className:T(e,a.value,n)})},((e,a)=>{const r=e.value?e.value:"default";return(0,t.createElement)(d.FlexItem,{key:`x3p0-marker-name-${a}`,className:"x3p0-list-marker-selector__content"},(0,t.createElement)("ul",{className:`x3p0-list-marker-selector__list has-marker-${r}`},(0,t.createElement)("li",null,e.label)))})(a,r)))(a,r))));return(0,t.createElement)(d.Dropdown,{className:"x3p0-list-marker-dropdown",contentClassName:"x3p0-list-marker-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:r})=>(0,t.createElement)(d.ToolbarButton,{className:"x3p0-list-marker__button",icon:w,label:(0,a.__)("List Marker","x3p0-ideas"),onClick:r,"aria-expanded":e,isPressed:!!n}),renderContent:()=>s})},F=["core/heading","core/paragraph"],H="has-text-shadow-",D=[{value:"none",label:(0,a.__)("None","x3p0-ideas")},{value:"sm",label:(0,a.__)("Small","x3p0-ideas")},{value:"md",label:(0,a.__)("Medium","x3p0-ideas")},{value:"lg",label:(0,a.__)("Large","x3p0-ideas")}],O=window.wp.hooks,R=()=>(0,O.applyFilters)("x3p0.ideas.blockEdit.textShadows",D),z=(e,t,a)=>u(e,t,a,H),G={key:"default",name:(0,a.__)("Default","x3p0-ideas"),value:""},L=({attributes:{className:e},setAttributes:r})=>{const o=(0,i.useMemo)((()=>(e=>{const t=new(_())(e),a=R().find((e=>t.contains(H+e.value)));return void 0!==a?a.value:""})(e)),[e]),n=[G,...R().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-text-shadow"},(0,t.createElement)(d.CustomSelectControl,{label:(0,a.__)("Text Shadow","x3p0-ideas"),options:n,value:n.find((e=>e.value===o)),onChange:({selectedItem:t})=>r({className:z(e,t.value,o)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))};(0,O.addFilter)("editor.BlockEdit","x3p0-ideas-color-variation",(e=>a=>r.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(l.BlockControls,{group:"other"},(0,t.createElement)(p,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a}))),(0,O.addFilter)("editor.BlockEdit","x3p0-ideas-gradient-background",(e=>a=>x.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(l.InspectorControls,{group:"color"},(0,t.createElement)(b,{attributes:a.attributes,setAttributes:a.setAttributes,clientId:a.clientId}))):(0,t.createElement)(e,{...a}))),(0,O.addFilter)("editor.BlockEdit","x3p0-ideas-list-marker",(e=>a=>N.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(l.BlockControls,{group:"other"},(0,t.createElement)(S,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a}))),(0,O.addFilter)("editor.BlockEdit","x3p0-ideas-text-shadow",(e=>a=>F.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(l.InspectorControls,{group:"typography"},(0,t.createElement)(L,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a})));const P={"core/archives":{horizontal:(0,a.__)("Horizontal","x3p0-ideas"),spread:(0,a.__)("Spread","x3p0-ideas")},"core/button":{"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas"),link:(0,a.__)("Link","x3p0-ideas")},"core/categories":{horizontal:(0,a.__)("Horizontal","x3p0-ideas")},"core/column":{box:(0,a.__)("Box","x3p0-ideas"),card:(0,a.__)("Card","x3p0-ideas")},"core/columns":{"grid-auto":(0,a.__)("Grid: Auto","x3p0-ideas"),"reverse-stack":(0,a.__)("Reverse Mobile Stack","x3p0-ideas")},"core/comment-author-name":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/comment-date":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/comment-edit-link":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/comment-reply-link":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/cover":{"fade-in":(0,a.__)("Fade In","x3p0-ideas"),"reveal-image":(0,a.__)("Reveal Image","x3p0-ideas"),"reveal-text":(0,a.__)("Reveal Text","x3p0-ideas"),stretch:(0,a.__)("Stretch","x3p0-ideas")},"core/file":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/footnotes":{pull:(0,a.__)("Pull","x3p0-ideas")},"core/gallery":{classic:(0,a.__)("Classic","x3p0-ideas")},"core/group":{box:(0,a.__)("Box","x3p0-ideas"),card:(0,a.__)("Card","x3p0-ideas"),"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas"),section:(0,a.__)("Section","x3p0-ideas")},"core/heading":{"clip-text":(0,a.__)("Clip Text","x3p0-ideas"),"text-wrap-balance":(0,a.__)("Wrap: Balance","x3p0-ideas")},"core/home-link":{button:(0,a.__)("Button","x3p0-ideas"),icon:(0,a.__)("Icon","x3p0-ideas")},"core/image":{borderless:(0,a.__)("Borderless","x3p0-ideas"),"hand-drawn":(0,a.__)("Hand-Drawn","x3p0-ideas"),icon:(0,a.__)("Caption Icon","x3p0-ideas"),polaroid:(0,a.__)("Polaroid","x3p0-ideas"),tape:(0,a.__)("Tape","x3p0-ideas")},"core/list":{"gap-snug":(0,a.__)("Gap: Snug","x3p0-ideas"),"gap-normal":(0,a.__)("Gap: Normal","x3p0-ideas"),"gap-relaxed":(0,a.__)("Gap: Relaxed","x3p0-ideas"),"gap-loose":(0,a.__)("Gap: Loose","x3p0-ideas"),horizontal:(0,a.__)("Horizontal","x3p0-ideas")},"core/list-item":{"cancel-circle":(0,a.__)("Cancel Circle","x3p0-ideas"),"check-circle":(0,a.__)("Check Circle","x3p0-ideas")},"core/loginout":{button:(0,a.__)("Button","x3p0-ideas"),icon:(0,a.__)("Icon","x3p0-ideas")},"core/page-list":{horizontal:(0,a.__)("Horizontal","x3p0-ideas")},"core/paragraph":{indent:(0,a.__)("Indent","x3p0-ideas"),intro:(0,a.__)("Intro","x3p0-ideas"),"lead-in":(0,a.__)("Lead-in","x3p0-ideas"),lede:(0,a.__)("Lede","x3p0-ideas")},"core/post-author-name":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/post-comments-count":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/post-comments-form":{icons:(0,a.__)("Icons","x3p0-ideas")},"core/post-comments-link":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/post-featured-image":{borderless:(0,a.__)("Borderless","x3p0-ideas")},"core/post-date":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/post-template":{flex:(0,a.__)("Flexible","x3p0-ideas"),"featured-col-span-all":(0,a.__)("Featured: Full Width","x3p0-ideas")},"core/post-terms":{button:(0,a.__)("Button","x3p0-ideas"),icon:(0,a.__)("Icon","x3p0-ideas")},"core/post-time-to-read":{icon:(0,a.__)("Icon","x3p0-ideas")},"core/pullquote":{"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas"),"mark-top":(0,a.__)("Mark: Top","x3p0-ideas")},"core/search":{icon:(0,a.__)("Icon","x3p0-ideas"),sm:(0,a.__)("Small","x3p0-ideas")},"core/separator":{dashed:(0,a.__)("Dashed","x3p0-ideas"),dotted:(0,a.__)("Dotted","x3p0-ideas"),double:(0,a.__)("Double","x3p0-ideas"),"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas")},"core/social-links":{"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas"),outline:(0,a.__)("Outline","x3p0-ideas")},"core/site-title":{normalize:(0,a.__)("Normalize","x3p0-ideas")},"core/table-of-contents":{chapters:(0,a.__)("Chapters","x3p0-ideas"),"chapters-and-subs":(0,a.__)("Chapters With Sub-headings","x3p0-ideas"),"marker-unordered":(0,a.__)("Unordered","x3p0-ideas"),pull:(0,a.__)("Pull","x3p0-ideas")},"core/tag-cloud":{flat:(0,a.__)("Flat","x3p0-ideas"),icon:(0,a.__)("Icon","x3p0-ideas")}},$=window.wp.domReady;var V=e.n($);const j=window.wp.blocks;V()((()=>{(0,j.unregisterBlockStyle)("core/separator","dots"),Object.keys(P).forEach((e=>Object.keys(P[e]).forEach((t=>(0,j.registerBlockStyle)(e,{name:t,label:P[e][t]})))))}));const Q=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"}));(0,j.registerBlockVariation)("core/spacer",{name:"x3p0/theme-spacer",title:(0,a.__)("Spacer","x3p0-ideas"),isDefault:!0,keywords:["space","spacer","spacing"],attributes:{height:"var:preset|spacing|plus-3"},isActive:e=>e.height&&e.height.includes("var:preset|spacing|")}),V()((()=>{(0,j.getBlockVariations)("core/group").some((e=>"group-grid"===e.name))||(0,j.registerBlockVariation)("core/group",{name:"group-grid",title:(0,a.__)("Grid","x3p0-ideas"),icon:Q,description:(0,a.__)("Arrange blocks in a grid.","x3p0-ideas"),attributes:{layout:{type:"grid"}},scope:["block","inserter","transform"],isActive:e=>"grid"===e.layout?.type})}));const U=window.wp.richText,W="x3p0/abbr",J={name:W,title:(0,a.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:r,value:o,contentRef:n}){const[s,c]=(0,i.useState)(!1),d=()=>c((e=>!e));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.RichTextToolbarButton,{icon:k,title:(0,a.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?r((0,U.removeFormat)(o,W)):d()}),s&&(0,t.createElement)(X,{value:o,onChange:r,onClose:d,contentRef:n}))}},K=J;function X({value:e,contentRef:r,onChange:o,onClose:n}){const l=(0,U.useAnchor)({editableContentElement:r.current,settings:J}),[s,c]=(0,i.useState)(""),p=(0,t.createElement)(d.TextControl,{label:(0,a.__)("Add title for abbreviation","x3p0-ideas"),value:s,onChange:e=>c(e),help:(0,a.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),m=(0,t.createElement)("form",{className:"x3p0-format-abbr-popover__form",onSubmit:t=>{t.preventDefault(),o((0,U.applyFormat)(e,{type:W,attributes:{title:s}})),n()}},p);return(0,t.createElement)(d.Popover,{className:"x3p0-format-abbr-popover",anchor:l,placement:"top",onClose:n,variant:"toolbar"},m)}const Y="x3p0/cite",ee={name:Y,title:(0,a.__)("Cite","x3p0-ideas"),tagName:"cite",className:null,edit:({isActive:e,onChange:r,value:o})=>(0,t.createElement)(l.RichTextToolbarButton,{icon:E,title:(0,a.__)("Cite","x3p0-ideas"),isActive:e,onClick:()=>r((0,U.toggleFormat)(o,{type:Y}))})},te="x3p0/del",ae={name:te,title:(0,a.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:r,value:o})=>(0,t.createElement)(l.RichTextToolbarButton,{icon:C,title:(0,a.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>r((0,U.toggleFormat)(o,{type:te}))})},re="x3p0/ins",oe={name:re,title:(0,a.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:r,value:o})=>(0,t.createElement)(l.RichTextToolbarButton,{icon:f,title:(0,a.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>r((0,U.toggleFormat)(o,{type:re}))})},ne="x3p0/mark",le={name:ne,title:(0,a.__)("Mark","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:r,value:o})=>(0,t.createElement)(l.RichTextToolbarButton,{icon:q,title:(0,a.__)("Mark","x3p0-ideas"),isActive:e,onClick:()=>r((0,U.toggleFormat)(o,{type:ne}))})},ie="x3p0/overline",se={name:ie,title:(0,a.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:r,value:o})=>(0,t.createElement)(l.RichTextToolbarButton,{icon:y,title:(0,a.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>r((0,U.toggleFormat)(o,{type:ie}))})};(0,U.registerFormatType)(K.name,K),(0,U.registerFormatType)(ee.name,ee),(0,U.registerFormatType)(ae.name,ae),(0,U.registerFormatType)(oe.name,oe),(0,U.registerFormatType)(le.name,le),(0,U.registerFormatType)(se.name,se)})();