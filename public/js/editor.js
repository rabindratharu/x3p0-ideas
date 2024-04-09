(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,a=window.wp.tokenList;var n=e.n(a);const i=(e,t="",a="",i="",r="")=>{const l=new(n())(e);return a&&l.remove(i+a+r),t&&l.add(i+t+r),l.value},r=window.wp.i18n,l=["core/code"],s="language-",o=[{value:"css",label:(0,r.__)("CSS","x3p0-ideas")},{value:"html",label:(0,r.__)("HTML","x3p0-ideas")},{value:"js",label:(0,r.__)("JavaScript","x3p0-ideas")},{value:"php",label:(0,r.__)("PHP","x3p0-ideas")},{value:"scss",label:(0,r.__)("SCSS","x3p0-ideas")}],c=window.wp.hooks,m=()=>(0,c.applyFilters)("x3p0.ideas.blockEdit.codeLanguages",o),d=(e,t,a)=>i(e,t,a,s),p=window.wp.components,v=window.wp.element,g={key:"default",name:(0,r.__)("Default","x3p0-ideas"),value:""},u=({attributes:{className:e},setAttributes:a})=>{const i=(0,v.useMemo)((()=>(e=>{const t=new(n())(e),a=m().find((e=>t.contains(s+e.value)));return void 0!==a?a.value:""})(e)),[e]),l=[g,...m().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-code-language"},(0,t.createElement)(p.CustomSelectControl,{label:(0,r.__)("Code Language","x3p0-ideas"),options:l,value:l.find((e=>e.value===i)),onChange:({selectedItem:t})=>a({className:d(e,t.value,i)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))},h=window.wp.blockEditor,_=["core/avatar","core/image","core/post-featured-image"],x="has-",b="-gradient-background",w=(e,t,a)=>i(e,t,a,x,b),k=({attributes:{className:e},setAttributes:a,clientId:i})=>{const{gradients:l,gradientOptions:s}=(()=>{const e=(0,h.__experimentalUseMultipleOriginColorsAndGradients)(),t=(0,v.useMemo)((()=>e.gradients.map((e=>[...e.gradients||[]])).flat()));return{gradientOptions:e.gradients,gradients:t}})(),o=((e,t)=>{const a=new(n())(e),i=t.find((e=>a.contains(x+e.slug+b)));return void 0!==i?i.slug:""})(e,l),c=e=>{return t=((e,t)=>{const a=(0,h.getGradientSlugByValue)(t,e);return a?`var:preset|gradient|${a}`:e})(e,l),t&&t.startsWith("var:preset|gradient|")?t.replace("var:preset|gradient|",""):null;var t},m={label:(0,r.__)("Gradient Outline","x3p0-ideas"),gradientValue:o?(0,h.getGradientValueBySlug)(l,o):null,onGradientChange:t=>a({className:w(e,c(t),o)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:s};return(0,t.createElement)(h.__experimentalColorGradientSettingsDropdown,{settings:[m],panelId:i,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},E=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})),q=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})),y=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M554.769-577.538v-33.539q32.231-17.038 69.415-25.442 37.183-8.404 75.816-8.404 21.417 0 41.805 2.457 20.387 2.458 41.58 7.856v33.841q-20.423-6.192-40.209-8.404-19.786-2.212-43.099-2.212-38.661 0-75.984 8.424-37.324 8.423-69.324 25.423Zm0 218.461v-35.077q30.693-17.038 69.03-25.75 38.338-8.711 76.201-8.711 21.417 0 41.805 2.73 20.387 2.731 41.58 8.193v33.846q-20.443-6.192-40.223-8.712-19.779-2.519-43.1-2.519-38.682 0-76.024 9.385-37.342 9.384-69.269 26.615Zm0-108.461v-35.077q32.231-17.039 69.415-25.443 37.183-8.404 75.816-8.404 21.417 0 41.805 2.423 20.387 2.424 41.58 7.885v33.846q-20.443-6.192-40.223-8.711-19.779-2.519-43.1-2.519-38.682 0-76.024 9.5t-69.269 26.5ZM262.001-319.692q52.23 0 101.73 12.038 49.5 12.039 98.115 39.192v-388.769q-42.692-30.923-95.245-46.692-52.553-15.769-104.834-15.769-35.407 0-62.323 4.307-26.916 4.308-59.444 16.079-9.231 3.077-13.077 8.846-3.846 5.77-3.846 12.693v356.844q0 10.769 7.692 15.769T147.692-304q21.193-7.385 49.81-11.538 28.617-4.154 64.499-4.154Zm236.768 51.23q48.694-27.153 97.885-39.192 49.191-12.038 101.25-12.038 35.75 0 64.481 4.154 28.73 4.153 49.923 11.538 9.231 3.846 16.923-1.154 7.692-5 7.692-15.769v-356.923q0-6.923-3.846-12.308-3.846-5.384-13.077-9.231-32.5-11.076-59.425-15.692-26.926-4.615-62.421-4.615-52.385 0-104.539 15.769-52.153 15.769-94.846 46.825v388.636ZM480-214.769q-48.654-32.654-104.038-50.327-55.385-17.673-114.116-17.673-29.97 0-58.87 4.865-28.899 4.866-56.683 15.401-21.909 8.465-41.024-5.429-19.115-13.893-19.115-38.375v-376.77q0-14.962 8.115-27.404t22.192-17.827q34.579-14.423 71.44-21.365 36.861-6.943 73.945-6.943 58.387 0 113.905 16.981T480-690.462q48.731-32.192 104.249-49.173 55.518-16.981 113.905-16.981 37.084 0 73.945 6.943 36.861 6.942 71.44 21.365 14.077 5.385 22.192 17.827 8.115 12.442 8.115 27.404v376.77q0 24.482-20.653 37.606-20.654 13.124-44.101 4.659-27.015-9.765-54.578-14.246-27.563-4.481-56.36-4.481-58.731 0-114.116 17.673Q528.654-247.423 480-214.769ZM292.461-499.385Z"})),C=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"})),Z=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})),T=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})),f=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"m120-200 180-280-180-280h522l198 280-198 280H120Z"})),A=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})),B=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})),N=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M370.116-847.578v-55.96h219.768v55.96H370.116Zm82 436.654h55.96v-218.96h-55.96v218.96Zm28.012 302.846q-68.718 0-129.327-26.212-60.608-26.211-105.843-71.534-45.236-45.323-71.461-105.903-26.226-60.58-26.226-129.216 0-68.481 26.226-129.061 26.225-60.58 71.461-105.845 45.235-45.265 105.791-71.477Q411.304-773.537 480-773.537q61.384 0 115.019 20.635 53.635 20.634 100.099 57.634l48.15-48.23 39.422 39.422-48.23 48.23q36.692 45.577 57.481 99.615 20.788 54.039 20.788 115.423 0 68.651-26.214 129.167-26.214 60.515-71.429 105.79-45.214 45.275-105.727 71.524-60.513 26.249-129.231 26.249Zm.03-55.96q114.727 0 195.669-81.1 80.942-81.101 80.942-195.827 0-114.727-81.1-195.67-81.1-80.942-195.827-80.942t-195.669 81.1q-80.942 81.1-80.942 195.827t81.1 195.669q81.1 80.943 195.827 80.943ZM480-440.808Z"})),M=["core/archives","core/categories","core/list","core/page-list"],S="has-marker-",F=[{value:"disc",label:(0,r.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,r.__)("Circle","x3p0-ideas")},{value:"square",label:(0,r.__)("Square","x3p0-ideas")},{value:"none",label:(0,r.__)("None","x3p0-ideas")}],H=[{value:"decimal",label:(0,r.__)("Decimal","x3p0-ideas")},{value:"leading-zero",label:(0,r.__)("Leading Zero","x3p0-ideas")},{value:"upper-alpha",label:(0,r.__)("Alphabetical: Uppercase","x3p0-ideas")},{value:"lower-alpha",label:(0,r.__)("Alphabetical: Lowercase","x3p0-ideas")},{value:"upper-roman",label:(0,r.__)("Roman: Uppercase","x3p0-ideas")},{value:"lower-roman",label:(0,r.__)("Roman: Lowercase","x3p0-ideas")},{value:"none",label:(0,r.__)("None","x3p0-ideas")}],L=[...F,...H],R=(e,t,a)=>i(e,t,a,S),D={value:"",label:(0,r.__)("Default","x3p0-ideas")},I=({attributes:{className:e,ordered:a},setAttributes:i})=>{const l=(0,v.useMemo)((()=>(e=>{const t=new(n())(e),a=L.find((e=>t.contains(S+e.value)));return void 0!==a?a.value:""})(e)),[e]),s=(0,v.useMemo)((()=>a?[D,...H]:[D,...F]),[a]);(0,v.useEffect)((()=>{var t;(l&&a&&(t=l,!H.find((e=>e.value===t)))||!a&&!(e=>F.find((t=>t.value===e)))(l))&&i({className:R(e,"",l)})}),[a]);const o=(0,t.createElement)(p.MenuGroup,{className:"x3p0-list-marker-selector",label:(0,r.__)("Select a list marker","x3p0-ideas")},s.map(((a,n)=>((a,n)=>(0,t.createElement)(p.MenuItem,{key:n,role:"menuitemradio",className:"x3p0-list-marker-selector__button",isSelected:l===a.value,isPressed:l===a.value,onClick:()=>i({className:R(e,a.value,l)})},((e,a)=>{const n=e.value?e.value:"default";return(0,t.createElement)(p.FlexItem,{key:`x3p0-marker-name-${a}`,className:"x3p0-list-marker-selector__content"},(0,t.createElement)("ul",{className:`x3p0-list-marker-selector__list has-marker-${n}`},(0,t.createElement)("li",null,e.label)))})(a,n)))(a,n))));return(0,t.createElement)(p.Dropdown,{className:"x3p0-list-marker-dropdown",contentClassName:"x3p0-list-marker-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:a})=>(0,t.createElement)(p.ToolbarButton,{className:"x3p0-list-marker__button",icon:E,label:(0,r.__)("List Marker","x3p0-ideas"),onClick:a,"aria-expanded":e,isPressed:!!l}),renderContent:()=>o})},P=["core/heading","core/paragraph"],V="has-text-shadow-",G=[{value:"none",label:(0,r.__)("None","x3p0-ideas")},{value:"sm",label:(0,r.__)("Small","x3p0-ideas")},{value:"md",label:(0,r.__)("Medium","x3p0-ideas")},{value:"lg",label:(0,r.__)("Large","x3p0-ideas")}],O=()=>(0,c.applyFilters)("x3p0.ideas.blockEdit.textShadows",G),z=(e,t,a)=>i(e,t,a,V),Q={key:"default",name:(0,r.__)("Default","x3p0-ideas"),value:""},U=({attributes:{className:e},setAttributes:a})=>{const i=(0,v.useMemo)((()=>(e=>{const t=new(n())(e),a=O().find((e=>t.contains(V+e.value)));return void 0!==a?a.value:""})(e)),[e]),l=[Q,...O().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-text-shadow"},(0,t.createElement)(p.CustomSelectControl,{label:(0,r.__)("Text Shadow","x3p0-ideas"),options:l,value:l.find((e=>e.value===i)),onChange:({selectedItem:t})=>a({className:z(e,t.value,i)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))};(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-code-language",(e=>a=>l.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(h.InspectorControls,{group:"settings"},(0,t.createElement)(p.PanelBody,{title:(0,r.__)("Code Settings","x3p0-ideas")},(0,t.createElement)(u,{attributes:a.attributes,setAttributes:a.setAttributes})))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-gradient-background",(e=>a=>_.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(h.InspectorControls,{group:"color"},(0,t.createElement)(k,{attributes:a.attributes,setAttributes:a.setAttributes,clientId:a.clientId}))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-list-marker",(e=>a=>M.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(h.BlockControls,{group:"other"},(0,t.createElement)(I,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-text-shadow",(e=>a=>P.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(h.InspectorControls,{group:"typography"},(0,t.createElement)(U,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a})));const $=window.wp.blocks,j=window.wp.domReady;var W=e.n(j);W()((()=>{(0,$.unregisterBlockStyle)("core/separator","dots"),(0,$.unregisterBlockStyle)("core/social-links","pill-shape")}));const J=window.wp.primitives,Y=(0,t.createElement)(J.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(J.Path,{d:"M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"})),K={block:"core/paragraph",variation:{name:"x3p0/comment-parent-link",title:(0,r.__)("Comment Parent Link","x3p0-ideas"),description:(0,r.__)("Displays a link to the comment parent.","x3p0-ideas"),category:"widgets",keywords:["comment","parent"],icon:Y,scope:[],ancestor:"core/comment-template",attributes:{metadata:{bindings:{content:{source:"x3p0/theme",args:{key:"commentParentLink"}}}},placeholder:(0,r.__)("In reply to Comment Author","x3p0-ideas")},isActive:e=>"x3p0/theme"===e?.metadata?.bindings?.content?.source&&"commentParentLink"===e?.metadata?.bindings?.content?.args?.key}},X=(0,t.createElement)(J.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(J.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})),ee={block:"core/group",variation:{name:"group-grid",title:(0,r.__)("Grid","x3p0-ideas"),icon:X,description:(0,r.__)("Arrange blocks in a grid.","x3p0-ideas"),scope:["block","inserter","transform"],attributes:{layout:{type:"grid"}},isActive:e=>"grid"===e.layout?.type}},te={block:"core/paragraph",variation:{name:"x3p0/pagination-label",title:(0,r.__)("Pagination Label","x3p0-ideas"),description:(0,r.__)("Displays the pagination current and total pages.","x3p0-ideas"),category:"theme",icon:f,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/theme",args:{key:"paginationLabel"}}}},placeholder:(0,r.sprintf)((0,r.__)("Page %1$s / %2$s:","x3p0-ideas"),3,7),className:"pagination-label"},isActive:e=>"x3p0/theme"===e?.metadata?.bindings?.content?.source&&"paginationLabel"===e?.metadata?.bindings?.content?.args?.key}},ae={block:"core/paragraph",variation:{name:"x3p0/post",title:(0,r.__)("Reading Time","x3p0-ideas"),description:(0,r.__)("Displays the estimated time to read the post.","x3p0-ideas"),category:"theme",keywords:["time","read","reading"],icon:N,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/post",args:{key:"readingTime"}}}},placeholder:(0,r.__)("Reading Time","x3p0-ideas")},example:{},isActive:e=>"x3p0/post"===e?.metadata?.bindings?.content?.source&&"readingTime"===e?.metadata?.bindings?.content?.args?.key}},ne={block:"core/paragraph",variation:{name:"x3p0/site-copyright",title:(0,r.__)("Site Copyright","x3p0-ideas"),description:(0,r.__)("Displays the site copyright date.","x3p0-ideas"),category:"widgets",keywords:["copyright"],icon:C,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/site",args:{key:"copyright"}}}},content:(0,r.sprintf)(
// Translators: %s is the copyright year.
// Translators: %s is the copyright year.
(0,r.__)("Copyright © %s","x3p0-ideas"),(new Date).getFullYear())},isActive:e=>"x3p0/site"===e?.metadata?.bindings?.content?.source&&"copyright"===e?.metadata?.bindings?.content?.args?.key}};(0,$.registerBlockVariation)(K.block,K.variation),(0,$.registerBlockVariation)(te.block,te.variation),(0,$.registerBlockVariation)(ae.block,ae.variation),(0,$.registerBlockVariation)(ne.block,ne.variation),W()((()=>{(0,$.getBlockVariations)("core/group").some((e=>"group-grid"===e.name))||(0,$.registerBlockVariation)(ee.block,ee.variation)}));const ie=window.wp.richText,re="x3p0/abbr",le={name:re,title:(0,r.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:a,value:n,contentRef:i}){const[l,s]=(0,v.useState)(!1),o=()=>s((e=>!e));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(h.RichTextToolbarButton,{icon:q,title:(0,r.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?a((0,ie.removeFormat)(n,re)):o()}),l&&(0,t.createElement)(oe,{value:n,onChange:a,onClose:o,contentRef:i}))}},se=le;function oe({value:e,contentRef:a,onChange:n,onClose:i}){const l=(0,ie.useAnchor)({editableContentElement:a.current,settings:le}),[s,o]=(0,v.useState)(""),c=(0,t.createElement)(p.TextControl,{label:(0,r.__)("Add title for abbreviation","x3p0-ideas"),value:s,onChange:e=>o(e),help:(0,r.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),m=(0,t.createElement)("form",{className:"x3p0-format-abbr-popover__form",onSubmit:t=>{t.preventDefault(),n((0,ie.applyFormat)(e,{type:re,attributes:{title:s}})),i()}},c);return(0,t.createElement)(p.Popover,{className:"x3p0-format-abbr-popover",anchor:l,placement:"top",onClose:i,variant:"toolbar"},m)}const ce="x3p0/cite",me={name:ce,title:(0,r.__)("Cite","x3p0-ideas"),tagName:"cite",className:null,edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(h.RichTextToolbarButton,{icon:y,title:(0,r.__)("Cite","x3p0-ideas"),isActive:e,onClick:()=>a((0,ie.toggleFormat)(n,{type:ce}))})},de="x3p0/del",pe={name:de,title:(0,r.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(h.RichTextToolbarButton,{icon:Z,title:(0,r.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>a((0,ie.toggleFormat)(n,{type:de}))})},ve="x3p0/ins",ge={name:ve,title:(0,r.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(h.RichTextToolbarButton,{icon:T,title:(0,r.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>a((0,ie.toggleFormat)(n,{type:ve}))})},ue="x3p0/mark",he={name:ue,title:(0,r.__)("Mark","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(h.RichTextToolbarButton,{icon:A,title:(0,r.__)("Mark","x3p0-ideas"),isActive:e,onClick:()=>a((0,ie.toggleFormat)(n,{type:ue}))})},_e="x3p0/overline",xe={name:_e,title:(0,r.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:a,value:n})=>(0,t.createElement)(h.RichTextToolbarButton,{icon:B,title:(0,r.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>a((0,ie.toggleFormat)(n,{type:_e}))})};(0,ie.registerFormatType)(se.name,se),(0,ie.registerFormatType)(me.name,me),(0,ie.registerFormatType)(pe.name,pe),(0,ie.registerFormatType)(ge.name,ge),(0,ie.registerFormatType)(he.name,he),(0,ie.registerFormatType)(xe.name,xe)})();