(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,a=window.wp.tokenList;var r=e.n(a);const i=(e,t="",a="",i="",n="")=>{const l=new(r())(e);return a&&l.remove(i+a+n),t&&l.add(i+t+n),l.value},n=window.wp.i18n,l=["core/code"],o="language-",s=[{value:"css",label:(0,n.__)("CSS","x3p0-ideas")},{value:"js",label:(0,n.__)("JavaScript","x3p0-ideas")},{value:"php",label:(0,n.__)("PHP","x3p0-ideas")},{value:"scss",label:(0,n.__)("SCSS","x3p0-ideas")}],c=window.wp.hooks,d=()=>(0,c.applyFilters)("x3p0.ideas.blockEdit.codeLanguages",s),p=(e,t,a)=>i(e,t,a,o),m=window.wp.components,_=window.wp.element,u={key:"default",name:(0,n.__)("Default","x3p0-ideas"),value:""},v=({attributes:{className:e},setAttributes:a})=>{const i=(0,_.useMemo)((()=>(e=>{const t=new(r())(e),a=d().find((e=>t.contains(o+e.value)));return void 0!==a?a.value:""})(e)),[e]),l=[u,...d().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-code-language"},(0,t.createElement)(m.CustomSelectControl,{label:(0,n.__)("Code Language","x3p0-ideas"),options:l,value:l.find((e=>e.value===i)),onChange:({selectedItem:t})=>a({className:p(e,t.value,i)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))},x=window.wp.blockEditor,g=["core/avatar","core/image","core/post-featured-image"],h="has-",b="-gradient-background",w=(e,t,a)=>i(e,t,a,h,b),E=({attributes:{className:e},setAttributes:a,clientId:i})=>{const{gradients:l,gradientOptions:o}=(()=>{const e=(0,x.__experimentalUseMultipleOriginColorsAndGradients)(),t=(0,_.useMemo)((()=>e.gradients.map((e=>[...e.gradients||[]])).flat()));return{gradientOptions:e.gradients,gradients:t}})(),s=((e,t)=>{const a=new(r())(e),i=t.find((e=>a.contains(h+e.slug+b)));return void 0!==i?i.slug:""})(e,l),c=e=>{return t=((e,t)=>{const a=(0,x.getGradientSlugByValue)(t,e);return a?`var:preset|gradient|${a}`:e})(e,l),t&&t.startsWith("var:preset|gradient|")?t.replace("var:preset|gradient|",""):null;var t},d={label:(0,n.__)("Gradient Outline","x3p0-ideas"),gradientValue:s?(0,x.getGradientValueBySlug)(l,s):null,onGradientChange:t=>a({className:w(e,c(t),s)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:o};return(0,t.createElement)(x.__experimentalColorGradientSettingsDropdown,{settings:[d],panelId:i,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},k=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})),C=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})),q=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M554.769-577.538v-33.539q32.231-17.038 69.415-25.442 37.183-8.404 75.816-8.404 21.417 0 41.805 2.457 20.387 2.458 41.58 7.856v33.841q-20.423-6.192-40.209-8.404-19.786-2.212-43.099-2.212-38.661 0-75.984 8.424-37.324 8.423-69.324 25.423Zm0 218.461v-35.077q30.693-17.038 69.03-25.75 38.338-8.711 76.201-8.711 21.417 0 41.805 2.73 20.387 2.731 41.58 8.193v33.846q-20.443-6.192-40.223-8.712-19.779-2.519-43.1-2.519-38.682 0-76.024 9.385-37.342 9.384-69.269 26.615Zm0-108.461v-35.077q32.231-17.039 69.415-25.443 37.183-8.404 75.816-8.404 21.417 0 41.805 2.423 20.387 2.424 41.58 7.885v33.846q-20.443-6.192-40.223-8.711-19.779-2.519-43.1-2.519-38.682 0-76.024 9.5t-69.269 26.5ZM262.001-319.692q52.23 0 101.73 12.038 49.5 12.039 98.115 39.192v-388.769q-42.692-30.923-95.245-46.692-52.553-15.769-104.834-15.769-35.407 0-62.323 4.307-26.916 4.308-59.444 16.079-9.231 3.077-13.077 8.846-3.846 5.77-3.846 12.693v356.844q0 10.769 7.692 15.769T147.692-304q21.193-7.385 49.81-11.538 28.617-4.154 64.499-4.154Zm236.768 51.23q48.694-27.153 97.885-39.192 49.191-12.038 101.25-12.038 35.75 0 64.481 4.154 28.73 4.153 49.923 11.538 9.231 3.846 16.923-1.154 7.692-5 7.692-15.769v-356.923q0-6.923-3.846-12.308-3.846-5.384-13.077-9.231-32.5-11.076-59.425-15.692-26.926-4.615-62.421-4.615-52.385 0-104.539 15.769-52.153 15.769-94.846 46.825v388.636ZM480-214.769q-48.654-32.654-104.038-50.327-55.385-17.673-114.116-17.673-29.97 0-58.87 4.865-28.899 4.866-56.683 15.401-21.909 8.465-41.024-5.429-19.115-13.893-19.115-38.375v-376.77q0-14.962 8.115-27.404t22.192-17.827q34.579-14.423 71.44-21.365 36.861-6.943 73.945-6.943 58.387 0 113.905 16.981T480-690.462q48.731-32.192 104.249-49.173 55.518-16.981 113.905-16.981 37.084 0 73.945 6.943 36.861 6.942 71.44 21.365 14.077 5.385 22.192 17.827 8.115 12.442 8.115 27.404v376.77q0 24.482-20.653 37.606-20.654 13.124-44.101 4.659-27.015-9.765-54.578-14.246-27.563-4.481-56.36-4.481-58.731 0-114.116 17.673Q528.654-247.423 480-214.769ZM292.461-499.385Z"})),f=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})),y=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})),B=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})),N=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})),Z=["core/archives","core/categories","core/list","core/page-list"],A="has-marker-",I=[{value:"disc",label:(0,n.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,n.__)("Circle","x3p0-ideas")},{value:"square",label:(0,n.__)("Square","x3p0-ideas")},{value:"none",label:(0,n.__)("None","x3p0-ideas")}],S=[{value:"decimal",label:(0,n.__)("Decimal","x3p0-ideas")},{value:"leading-zero",label:(0,n.__)("Leading Zero","x3p0-ideas")},{value:"upper-alpha",label:(0,n.__)("Alphabetical: Uppercase","x3p0-ideas")},{value:"lower-alpha",label:(0,n.__)("Alphabetical: Lowercase","x3p0-ideas")},{value:"upper-roman",label:(0,n.__)("Roman: Uppercase","x3p0-ideas")},{value:"lower-roman",label:(0,n.__)("Roman: Lowercase","x3p0-ideas")},{value:"none",label:(0,n.__)("None","x3p0-ideas")}],M=[...I,...S],H=(e,t,a)=>i(e,t,a,A),T={value:"",label:(0,n.__)("Default","x3p0-ideas")},F=({attributes:{className:e,ordered:a},setAttributes:i})=>{const l=(0,_.useMemo)((()=>(e=>{const t=new(r())(e),a=M.find((e=>t.contains(A+e.value)));return void 0!==a?a.value:""})(e)),[e]),o=(0,_.useMemo)((()=>a?[T,...S]:[T,...I]),[a]);(0,_.useEffect)((()=>{var t;(l&&a&&(t=l,!S.find((e=>e.value===t)))||!a&&!(e=>I.find((t=>t.value===e)))(l))&&i({className:H(e,"",l)})}),[a]);const s=(0,t.createElement)(m.MenuGroup,{className:"x3p0-list-marker-selector",label:(0,n.__)("Select a list marker","x3p0-ideas")},o.map(((a,r)=>((a,r)=>(0,t.createElement)(m.MenuItem,{key:r,role:"menuitemradio",className:"x3p0-list-marker-selector__button",isSelected:l===a.value,isPressed:l===a.value,onClick:()=>i({className:H(e,a.value,l)})},((e,a)=>{const r=e.value?e.value:"default";return(0,t.createElement)(m.FlexItem,{key:`x3p0-marker-name-${a}`,className:"x3p0-list-marker-selector__content"},(0,t.createElement)("ul",{className:`x3p0-list-marker-selector__list has-marker-${r}`},(0,t.createElement)("li",null,e.label)))})(a,r)))(a,r))));return(0,t.createElement)(m.Dropdown,{className:"x3p0-list-marker-dropdown",contentClassName:"x3p0-list-marker-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:a})=>(0,t.createElement)(m.ToolbarButton,{className:"x3p0-list-marker__button",icon:k,label:(0,n.__)("List Marker","x3p0-ideas"),onClick:a,"aria-expanded":e,isPressed:!!l}),renderContent:()=>s})},D=["core/heading","core/paragraph"],R="has-text-shadow-",z=[{value:"none",label:(0,n.__)("None","x3p0-ideas")},{value:"sm",label:(0,n.__)("Small","x3p0-ideas")},{value:"md",label:(0,n.__)("Medium","x3p0-ideas")},{value:"lg",label:(0,n.__)("Large","x3p0-ideas")}],L=()=>(0,c.applyFilters)("x3p0.ideas.blockEdit.textShadows",z),O=(e,t,a)=>i(e,t,a,R),P={key:"default",name:(0,n.__)("Default","x3p0-ideas"),value:""},G=({attributes:{className:e},setAttributes:a})=>{const i=(0,_.useMemo)((()=>(e=>{const t=new(r())(e),a=L().find((e=>t.contains(R+e.value)));return void 0!==a?a.value:""})(e)),[e]),l=[P,...L().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-text-shadow"},(0,t.createElement)(m.CustomSelectControl,{label:(0,n.__)("Text Shadow","x3p0-ideas"),options:l,value:l.find((e=>e.value===i)),onChange:({selectedItem:t})=>a({className:O(e,t.value,i)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))};(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-code-language",(e=>a=>l.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(x.InspectorControls,{group:"settings"},(0,t.createElement)(m.PanelBody,{title:(0,n.__)("Code Settings","x3p0-ideas")},(0,t.createElement)(v,{attributes:a.attributes,setAttributes:a.setAttributes})))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-gradient-background",(e=>a=>g.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(x.InspectorControls,{group:"color"},(0,t.createElement)(E,{attributes:a.attributes,setAttributes:a.setAttributes,clientId:a.clientId}))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-list-marker",(e=>a=>Z.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(x.BlockControls,{group:"other"},(0,t.createElement)(F,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-text-shadow",(e=>a=>D.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(x.InspectorControls,{group:"typography"},(0,t.createElement)(G,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a})));const V={"core/archives":{horizontal:(0,n.__)("Horizontal","x3p0-ideas"),spread:(0,n.__)("Spread","x3p0-ideas")},"core/button":{"hand-drawn":(0,n.__)("Hand Drawn","x3p0-ideas"),link:(0,n.__)("Link","x3p0-ideas")},"core/categories":{horizontal:(0,n.__)("Horizontal","x3p0-ideas")},"core/code":{highlight:(0,n.__)("Highlight","x3p0-ideas")},"core/columns":{"grid-auto":(0,n.__)("Grid: Auto","x3p0-ideas"),"reverse-stack":(0,n.__)("Reverse Mobile Stack","x3p0-ideas")},"core/comment-author-name":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/comment-date":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/comment-edit-link":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/comment-reply-link":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/cover":{"fade-in":(0,n.__)("Fade In","x3p0-ideas"),"reveal-image":(0,n.__)("Reveal Image","x3p0-ideas"),"reveal-text":(0,n.__)("Reveal Text","x3p0-ideas"),stretch:(0,n.__)("Stretch","x3p0-ideas")},"core/file":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/footnotes":{pull:(0,n.__)("Pull","x3p0-ideas")},"core/gallery":{classic:(0,n.__)("Classic","x3p0-ideas")},"core/group":{box:(0,n.__)("Box","x3p0-ideas"),card:(0,n.__)("Card","x3p0-ideas"),"hand-drawn":(0,n.__)("Hand Drawn","x3p0-ideas"),section:(0,n.__)("Section","x3p0-ideas")},"core/heading":{"clip-text":(0,n.__)("Clip Text","x3p0-ideas"),"text-wrap-balance":(0,n.__)("Wrap: Balance","x3p0-ideas")},"core/home-link":{button:(0,n.__)("Button","x3p0-ideas"),icon:(0,n.__)("Icon","x3p0-ideas")},"core/image":{borderless:(0,n.__)("Borderless","x3p0-ideas"),"hand-drawn":(0,n.__)("Hand-Drawn","x3p0-ideas"),icon:(0,n.__)("Caption Icon","x3p0-ideas"),polaroid:(0,n.__)("Polaroid","x3p0-ideas"),tape:(0,n.__)("Tape","x3p0-ideas")},"core/list":{horizontal:(0,n.__)("Horizontal","x3p0-ideas")},"core/list-item":{"cancel-circle":(0,n.__)("Cancel Circle","x3p0-ideas"),"check-circle":(0,n.__)("Check Circle","x3p0-ideas")},"core/loginout":{button:(0,n.__)("Button","x3p0-ideas"),icon:(0,n.__)("Icon","x3p0-ideas")},"core/page-list":{horizontal:(0,n.__)("Horizontal","x3p0-ideas")},"core/paragraph":{indent:(0,n.__)("Indent","x3p0-ideas"),"lead-in":(0,n.__)("Lead-in","x3p0-ideas"),lede:(0,n.__)("Lede","x3p0-ideas")},"core/post-author-name":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/post-comments-count":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/post-comments-form":{icons:(0,n.__)("Icons","x3p0-ideas")},"core/post-comments-link":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/post-featured-image":{borderless:(0,n.__)("Borderless","x3p0-ideas")},"core/post-date":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/post-template":{flex:(0,n.__)("Flexible","x3p0-ideas")},"core/post-terms":{button:(0,n.__)("Button","x3p0-ideas"),icon:(0,n.__)("Icon","x3p0-ideas")},"core/post-time-to-read":{icon:(0,n.__)("Icon","x3p0-ideas")},"core/pullquote":{"hand-drawn":(0,n.__)("Hand Drawn","x3p0-ideas"),"mark-top":(0,n.__)("Mark: Top","x3p0-ideas")},"core/search":{icon:(0,n.__)("Icon","x3p0-ideas"),sm:(0,n.__)("Small","x3p0-ideas")},"core/separator":{dashed:(0,n.__)("Dashed","x3p0-ideas"),dotted:(0,n.__)("Dotted","x3p0-ideas"),double:(0,n.__)("Double","x3p0-ideas"),"hand-drawn":(0,n.__)("Hand Drawn","x3p0-ideas")},"core/social-links":{"hand-drawn":(0,n.__)("Hand Drawn","x3p0-ideas"),outline:(0,n.__)("Outline","x3p0-ideas")},"core/site-title":{normalize:(0,n.__)("Normalize","x3p0-ideas")},"core/table-of-contents":{chapters:(0,n.__)("Chapters","x3p0-ideas"),"marker-unordered":(0,n.__)("Unordered","x3p0-ideas"),pull:(0,n.__)("Pull","x3p0-ideas")},"core/tag-cloud":{flat:(0,n.__)("Flat","x3p0-ideas"),icon:(0,n.__)("Icon","x3p0-ideas")}},U=window.wp.domReady;var j=e.n(U);const Q=window.wp.blocks;j()((()=>{(0,Q.unregisterBlockStyle)("core/separator","dots"),Object.keys(V).forEach((e=>Object.keys(V[e]).forEach((t=>(0,Q.registerBlockStyle)(e,{name:t,label:V[e][t]})))))}));const W=window.wp.primitives,$=(0,t.createElement)(W.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(W.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"}));(0,Q.registerBlockVariation)("core/spacer",{name:"x3p0/theme-spacer",title:(0,n.__)("Spacer","x3p0-ideas"),isDefault:!0,keywords:["space","spacer","spacing"],attributes:{height:"var:preset|spacing|plus-3"},isActive:e=>e.height&&e.height.includes("var:preset|spacing|")}),j()((()=>{(0,Q.getBlockVariations)("core/group").some((e=>"group-grid"===e.name))||(0,Q.registerBlockVariation)("core/group",{name:"group-grid",title:(0,n.__)("Grid","x3p0-ideas"),icon:$,description:(0,n.__)("Arrange blocks in a grid.","x3p0-ideas"),attributes:{layout:{type:"grid"}},scope:["block","inserter","transform"],isActive:e=>"grid"===e.layout?.type})}));const J=window.wp.richText,K="x3p0/abbr",X={name:K,title:(0,n.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:a,value:r,contentRef:i}){const[l,o]=(0,_.useState)(!1),s=()=>o((e=>!e));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(x.RichTextToolbarButton,{icon:C,title:(0,n.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?a((0,J.removeFormat)(r,K)):s()}),l&&(0,t.createElement)(ee,{value:r,onChange:a,onClose:s,contentRef:i}))}},Y=X;function ee({value:e,contentRef:a,onChange:r,onClose:i}){const l=(0,J.useAnchor)({editableContentElement:a.current,settings:X}),[o,s]=(0,_.useState)(""),c=(0,t.createElement)(m.TextControl,{label:(0,n.__)("Add title for abbreviation","x3p0-ideas"),value:o,onChange:e=>s(e),help:(0,n.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),d=(0,t.createElement)("form",{className:"x3p0-format-abbr-popover__form",onSubmit:t=>{t.preventDefault(),r((0,J.applyFormat)(e,{type:K,attributes:{title:o}})),i()}},c);return(0,t.createElement)(m.Popover,{className:"x3p0-format-abbr-popover",anchor:l,placement:"top",onClose:i,variant:"toolbar"},d)}const te="x3p0/cite",ae={name:te,title:(0,n.__)("Cite","x3p0-ideas"),tagName:"cite",className:null,edit:({isActive:e,onChange:a,value:r})=>(0,t.createElement)(x.RichTextToolbarButton,{icon:q,title:(0,n.__)("Cite","x3p0-ideas"),isActive:e,onClick:()=>a((0,J.toggleFormat)(r,{type:te}))})},re="x3p0/del",ie={name:re,title:(0,n.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:a,value:r})=>(0,t.createElement)(x.RichTextToolbarButton,{icon:f,title:(0,n.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>a((0,J.toggleFormat)(r,{type:re}))})},ne="x3p0/ins",le={name:ne,title:(0,n.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:a,value:r})=>(0,t.createElement)(x.RichTextToolbarButton,{icon:y,title:(0,n.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>a((0,J.toggleFormat)(r,{type:ne}))})},oe="x3p0/mark",se={name:oe,title:(0,n.__)("Mark","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:a,value:r})=>(0,t.createElement)(x.RichTextToolbarButton,{icon:B,title:(0,n.__)("Mark","x3p0-ideas"),isActive:e,onClick:()=>a((0,J.toggleFormat)(r,{type:oe}))})},ce="x3p0/overline",de={name:ce,title:(0,n.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:a,value:r})=>(0,t.createElement)(x.RichTextToolbarButton,{icon:N,title:(0,n.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>a((0,J.toggleFormat)(r,{type:ce}))})};(0,J.registerFormatType)(Y.name,Y),(0,J.registerFormatType)(ae.name,ae),(0,J.registerFormatType)(ie.name,ie),(0,J.registerFormatType)(le.name,le),(0,J.registerFormatType)(se.name,se),(0,J.registerFormatType)(de.name,de)})();