(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,a=window.wp.tokenList;var i=e.n(a);const n=(e,t="",a="",n="",l="")=>{const o=new(i())(e);return a&&o.remove(n+a+l),t&&o.add(n+t+l),o.value},l=window.wp.i18n,o=["core/code"],r="language-",s=[{value:"css",label:(0,l.__)("CSS","x3p0-ideas")},{value:"html",label:(0,l.__)("HTML","x3p0-ideas")},{value:"js",label:(0,l.__)("JavaScript","x3p0-ideas")},{value:"php",label:(0,l.__)("PHP","x3p0-ideas")},{value:"scss",label:(0,l.__)("SCSS","x3p0-ideas")}],c=window.wp.hooks,d=()=>(0,c.applyFilters)("x3p0.ideas.blockEdit.codeLanguages",s),p=(e,t,a)=>n(e,t,a,r),m=window.wp.components,_=window.wp.element,u={key:"default",name:(0,l.__)("Default","x3p0-ideas"),value:""},v=({attributes:{className:e},setAttributes:a})=>{const n=(0,_.useMemo)((()=>(e=>{const t=new(i())(e),a=d().find((e=>t.contains(r+e.value)));return void 0!==a?a.value:""})(e)),[e]),o=[u,...d().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-code-language"},(0,t.createElement)(m.CustomSelectControl,{label:(0,l.__)("Code Language","x3p0-ideas"),options:o,value:o.find((e=>e.value===n)),onChange:({selectedItem:t})=>a({className:p(e,t.value,n)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))},g=window.wp.blockEditor,x=["core/avatar","core/image","core/post-featured-image"],h="has-",b="-gradient-background",w=(e,t,a)=>n(e,t,a,h,b),k=({attributes:{className:e},setAttributes:a,clientId:n})=>{const{gradients:o,gradientOptions:r}=(()=>{const e=(0,g.__experimentalUseMultipleOriginColorsAndGradients)(),t=(0,_.useMemo)((()=>e.gradients.map((e=>[...e.gradients||[]])).flat()));return{gradientOptions:e.gradients,gradients:t}})(),s=((e,t)=>{const a=new(i())(e),n=t.find((e=>a.contains(h+e.slug+b)));return void 0!==n?n.slug:""})(e,o),c=e=>{return t=((e,t)=>{const a=(0,g.getGradientSlugByValue)(t,e);return a?`var:preset|gradient|${a}`:e})(e,o),t&&t.startsWith("var:preset|gradient|")?t.replace("var:preset|gradient|",""):null;var t},d={label:(0,l.__)("Gradient Outline","x3p0-ideas"),gradientValue:s?(0,g.getGradientValueBySlug)(o,s):null,onGradientChange:t=>a({className:w(e,c(t),s)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:r};return(0,t.createElement)(g.__experimentalColorGradientSettingsDropdown,{settings:[d],panelId:n,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},E=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})),q=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})),y=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M554.769-577.538v-33.539q32.231-17.038 69.415-25.442 37.183-8.404 75.816-8.404 21.417 0 41.805 2.457 20.387 2.458 41.58 7.856v33.841q-20.423-6.192-40.209-8.404-19.786-2.212-43.099-2.212-38.661 0-75.984 8.424-37.324 8.423-69.324 25.423Zm0 218.461v-35.077q30.693-17.038 69.03-25.75 38.338-8.711 76.201-8.711 21.417 0 41.805 2.73 20.387 2.731 41.58 8.193v33.846q-20.443-6.192-40.223-8.712-19.779-2.519-43.1-2.519-38.682 0-76.024 9.385-37.342 9.384-69.269 26.615Zm0-108.461v-35.077q32.231-17.039 69.415-25.443 37.183-8.404 75.816-8.404 21.417 0 41.805 2.423 20.387 2.424 41.58 7.885v33.846q-20.443-6.192-40.223-8.711-19.779-2.519-43.1-2.519-38.682 0-76.024 9.5t-69.269 26.5ZM262.001-319.692q52.23 0 101.73 12.038 49.5 12.039 98.115 39.192v-388.769q-42.692-30.923-95.245-46.692-52.553-15.769-104.834-15.769-35.407 0-62.323 4.307-26.916 4.308-59.444 16.079-9.231 3.077-13.077 8.846-3.846 5.77-3.846 12.693v356.844q0 10.769 7.692 15.769T147.692-304q21.193-7.385 49.81-11.538 28.617-4.154 64.499-4.154Zm236.768 51.23q48.694-27.153 97.885-39.192 49.191-12.038 101.25-12.038 35.75 0 64.481 4.154 28.73 4.153 49.923 11.538 9.231 3.846 16.923-1.154 7.692-5 7.692-15.769v-356.923q0-6.923-3.846-12.308-3.846-5.384-13.077-9.231-32.5-11.076-59.425-15.692-26.926-4.615-62.421-4.615-52.385 0-104.539 15.769-52.153 15.769-94.846 46.825v388.636ZM480-214.769q-48.654-32.654-104.038-50.327-55.385-17.673-114.116-17.673-29.97 0-58.87 4.865-28.899 4.866-56.683 15.401-21.909 8.465-41.024-5.429-19.115-13.893-19.115-38.375v-376.77q0-14.962 8.115-27.404t22.192-17.827q34.579-14.423 71.44-21.365 36.861-6.943 73.945-6.943 58.387 0 113.905 16.981T480-690.462q48.731-32.192 104.249-49.173 55.518-16.981 113.905-16.981 37.084 0 73.945 6.943 36.861 6.942 71.44 21.365 14.077 5.385 22.192 17.827 8.115 12.442 8.115 27.404v376.77q0 24.482-20.653 37.606-20.654 13.124-44.101 4.659-27.015-9.765-54.578-14.246-27.563-4.481-56.36-4.481-58.731 0-114.116 17.673Q528.654-247.423 480-214.769ZM292.461-499.385Z"})),C=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"})),f=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})),B=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})),T=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"m120-200 180-280-180-280h522l198 280-198 280H120Z"})),Z=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})),N=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})),A=["core/archives","core/categories","core/list","core/page-list"],I="has-marker-",M=[{value:"disc",label:(0,l.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,l.__)("Circle","x3p0-ideas")},{value:"square",label:(0,l.__)("Square","x3p0-ideas")},{value:"none",label:(0,l.__)("None","x3p0-ideas")}],S=[{value:"decimal",label:(0,l.__)("Decimal","x3p0-ideas")},{value:"leading-zero",label:(0,l.__)("Leading Zero","x3p0-ideas")},{value:"upper-alpha",label:(0,l.__)("Alphabetical: Uppercase","x3p0-ideas")},{value:"lower-alpha",label:(0,l.__)("Alphabetical: Lowercase","x3p0-ideas")},{value:"upper-roman",label:(0,l.__)("Roman: Uppercase","x3p0-ideas")},{value:"lower-roman",label:(0,l.__)("Roman: Lowercase","x3p0-ideas")},{value:"none",label:(0,l.__)("None","x3p0-ideas")}],F=[...M,...S],H=(e,t,a)=>n(e,t,a,I),L={value:"",label:(0,l.__)("Default","x3p0-ideas")},P=({attributes:{className:e,ordered:a},setAttributes:n})=>{const o=(0,_.useMemo)((()=>(e=>{const t=new(i())(e),a=F.find((e=>t.contains(I+e.value)));return void 0!==a?a.value:""})(e)),[e]),r=(0,_.useMemo)((()=>a?[L,...S]:[L,...M]),[a]);(0,_.useEffect)((()=>{var t;(o&&a&&(t=o,!S.find((e=>e.value===t)))||!a&&!(e=>M.find((t=>t.value===e)))(o))&&n({className:H(e,"",o)})}),[a]);const s=(0,t.createElement)(m.MenuGroup,{className:"x3p0-list-marker-selector",label:(0,l.__)("Select a list marker","x3p0-ideas")},r.map(((a,i)=>((a,i)=>(0,t.createElement)(m.MenuItem,{key:i,role:"menuitemradio",className:"x3p0-list-marker-selector__button",isSelected:o===a.value,isPressed:o===a.value,onClick:()=>n({className:H(e,a.value,o)})},((e,a)=>{const i=e.value?e.value:"default";return(0,t.createElement)(m.FlexItem,{key:`x3p0-marker-name-${a}`,className:"x3p0-list-marker-selector__content"},(0,t.createElement)("ul",{className:`x3p0-list-marker-selector__list has-marker-${i}`},(0,t.createElement)("li",null,e.label)))})(a,i)))(a,i))));return(0,t.createElement)(m.Dropdown,{className:"x3p0-list-marker-dropdown",contentClassName:"x3p0-list-marker-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:a})=>(0,t.createElement)(m.ToolbarButton,{className:"x3p0-list-marker__button",icon:E,label:(0,l.__)("List Marker","x3p0-ideas"),onClick:a,"aria-expanded":e,isPressed:!!o}),renderContent:()=>s})},D=["core/heading","core/paragraph"],z="has-text-shadow-",R=[{value:"none",label:(0,l.__)("None","x3p0-ideas")},{value:"sm",label:(0,l.__)("Small","x3p0-ideas")},{value:"md",label:(0,l.__)("Medium","x3p0-ideas")},{value:"lg",label:(0,l.__)("Large","x3p0-ideas")}],O=()=>(0,c.applyFilters)("x3p0.ideas.blockEdit.textShadows",R),G=(e,t,a)=>n(e,t,a,z),V={key:"default",name:(0,l.__)("Default","x3p0-ideas"),value:""},j=({attributes:{className:e},setAttributes:a})=>{const n=(0,_.useMemo)((()=>(e=>{const t=new(i())(e),a=O().find((e=>t.contains(z+e.value)));return void 0!==a?a.value:""})(e)),[e]),o=[V,...O().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-text-shadow"},(0,t.createElement)(m.CustomSelectControl,{label:(0,l.__)("Text Shadow","x3p0-ideas"),options:o,value:o.find((e=>e.value===n)),onChange:({selectedItem:t})=>a({className:G(e,t.value,n)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))};(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-code-language",(e=>a=>o.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(g.InspectorControls,{group:"settings"},(0,t.createElement)(m.PanelBody,{title:(0,l.__)("Code Settings","x3p0-ideas")},(0,t.createElement)(v,{attributes:a.attributes,setAttributes:a.setAttributes})))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-gradient-background",(e=>a=>x.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(g.InspectorControls,{group:"color"},(0,t.createElement)(k,{attributes:a.attributes,setAttributes:a.setAttributes,clientId:a.clientId}))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-list-marker",(e=>a=>A.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(g.BlockControls,{group:"other"},(0,t.createElement)(P,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a}))),(0,c.addFilter)("editor.BlockEdit","x3p0-ideas-text-shadow",(e=>a=>D.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...a}),(0,t.createElement)(g.InspectorControls,{group:"typography"},(0,t.createElement)(j,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,{...a})));const Q={"core/archives":{horizontal:(0,l.__)("Horizontal","x3p0-ideas"),pull:(0,l.__)("Pull","x3p0-ideas"),spread:(0,l.__)("Spread","x3p0-ideas")},"core/button":{link:(0,l.__)("Link","x3p0-ideas")},"core/categories":{horizontal:(0,l.__)("Horizontal","x3p0-ideas"),pull:(0,l.__)("Pull","x3p0-ideas")},"core/code":{highlight:(0,l.__)("Highlight","x3p0-ideas")},"core/columns":{"grid-auto":(0,l.__)("Grid: Auto","x3p0-ideas"),"reverse-stack":(0,l.__)("Reverse Mobile Stack","x3p0-ideas")},"core/comment-author-name":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/comment-date":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/comment-edit-link":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/comment-reply-link":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/cover":{"fade-in":(0,l.__)("Fade In","x3p0-ideas"),stretch:(0,l.__)("Stretch","x3p0-ideas")},"core/file":{icon:(0,l.__)("Icon","x3p0-ideas"),plain:(0,l.__)("Plain","x3p0-ideas")},"core/footnotes":{pull:(0,l.__)("Pull","x3p0-ideas")},"core/gallery":{classic:(0,l.__)("Classic","x3p0-ideas"),reverse:(0,l.__)("Reverse","x3p0-ideas")},"core/group":{box:(0,l.__)("Box","x3p0-ideas"),card:(0,l.__)("Card","x3p0-ideas"),message:(0,l.__)("Message","x3p0-ideas"),section:(0,l.__)("Section","x3p0-ideas")},"core/heading":{knockout:(0,l.__)("Knockout","x3p0-ideas"),"text-wrap-balance":(0,l.__)("Wrap: Balance","x3p0-ideas")},"core/home-link":{button:(0,l.__)("Button","x3p0-ideas"),icon:(0,l.__)("Icon","x3p0-ideas")},"core/image":{borderless:(0,l.__)("Borderless","x3p0-ideas"),"hand-drawn":(0,l.__)("Hand-Drawn","x3p0-ideas"),icon:(0,l.__)("Caption Icon","x3p0-ideas"),polaroid:(0,l.__)("Polaroid","x3p0-ideas"),tape:(0,l.__)("Tape","x3p0-ideas")},"core/list":{horizontal:(0,l.__)("Horizontal","x3p0-ideas"),pull:(0,l.__)("Pull","x3p0-ideas")},"core/list-item":{"cancel-circle":(0,l.__)("Cancel Circle","x3p0-ideas"),"check-circle":(0,l.__)("Check Circle","x3p0-ideas")},"core/loginout":{button:(0,l.__)("Button","x3p0-ideas"),icon:(0,l.__)("Icon","x3p0-ideas")},"core/page-list":{horizontal:(0,l.__)("Horizontal","x3p0-ideas"),pull:(0,l.__)("Pull","x3p0-ideas")},"core/paragraph":{indent:(0,l.__)("Indent","x3p0-ideas"),"lead-in":(0,l.__)("Lead-in","x3p0-ideas"),lede:(0,l.__)("Lede","x3p0-ideas")},"core/post-author-name":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/post-comments-count":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/post-comments-form":{icons:(0,l.__)("Icons","x3p0-ideas")},"core/post-comments-link":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/post-featured-image":{borderless:(0,l.__)("Borderless","x3p0-ideas")},"core/post-date":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/post-template":{flex:(0,l.__)("Flexible","x3p0-ideas")},"core/post-terms":{button:(0,l.__)("Button","x3p0-ideas"),icon:(0,l.__)("Icon","x3p0-ideas")},"core/post-time-to-read":{icon:(0,l.__)("Icon","x3p0-ideas")},"core/pullquote":{"mark-top":(0,l.__)("Mark: Top","x3p0-ideas")},"core/search":{icon:(0,l.__)("Icon","x3p0-ideas"),sm:(0,l.__)("Small","x3p0-ideas")},"core/separator":{dashed:(0,l.__)("Dashed","x3p0-ideas"),dotted:(0,l.__)("Dotted","x3p0-ideas"),double:(0,l.__)("Double","x3p0-ideas"),"hand-drawn":(0,l.__)("Hand Drawn","x3p0-ideas")},"core/social-links":{outline:(0,l.__)("Outline","x3p0-ideas")},"core/site-title":{normalize:(0,l.__)("Normalize","x3p0-ideas")},"core/table-of-contents":{chapters:(0,l.__)("Chapters","x3p0-ideas"),pull:(0,l.__)("Pull","x3p0-ideas")},"core/tag-cloud":{flat:(0,l.__)("Flat","x3p0-ideas"),icon:(0,l.__)("Icon","x3p0-ideas")}},U=window.wp.domReady;var $=e.n(U);const W=window.wp.blocks;$()((()=>{(0,W.unregisterBlockStyle)("core/separator","dots"),(0,W.unregisterBlockStyle)("core/social-links","pill-shape"),Object.keys(Q).forEach((e=>Object.keys(Q[e]).forEach((t=>(0,W.registerBlockStyle)(e,{name:t,label:Q[e][t]})))))}));const J=window.wp.primitives,K=(0,t.createElement)(J.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(J.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})),Y={block:"core/group",variation:{name:"group-grid",title:(0,l.__)("Grid","x3p0-ideas"),icon:K,description:(0,l.__)("Arrange blocks in a grid.","x3p0-ideas"),scope:["block","inserter","transform"],attributes:{layout:{type:"grid"}},isActive:e=>"grid"===e.layout?.type}},X={block:"core/paragraph",variation:{name:"x3p0/pagination-label",title:(0,l.__)("Pagination Label","x3p0-ideas"),description:(0,l.__)("Displays the pagination current and total pages.","x3p0-ideas"),category:"theme",icon:T,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/theme",args:{key:"paginationLabel"}}}},content:(0,l.sprintf)((0,l.__)("Page %1$s / %2$s:","x3p0-ideas"),3,7),className:"pagination-label"},isActive:e=>"x3p0/theme"===e?.metadata?.bindings?.content?.source&&"paginationLabel"===e?.metadata?.bindings?.content?.args?.key}},ee={block:"core/paragraph",variation:{name:"x3p0/site-copyright",title:(0,l.__)("Site Copyright","x3p0-ideas"),description:(0,l.__)("Displays the site copyright date.","x3p0-ideas"),category:"widgets",keywords:["copyright"],icon:C,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/site",args:{key:"copyright"}}}},content:(0,l.sprintf)(
// Translators: %s is the copyright year.
// Translators: %s is the copyright year.
(0,l.__)("Copyright © %s","x3p0-ideas"),(new Date).getFullYear())},isActive:e=>"x3p0/site"===e?.metadata?.bindings?.content?.source&&"copyright"===e?.metadata?.bindings?.content?.args?.key}};(0,W.registerBlockVariation)(X.block,X.variation),(0,W.registerBlockVariation)(ee.block,ee.variation),$()((()=>{(0,W.getBlockVariations)("core/group").some((e=>"group-grid"===e.name))||(0,W.registerBlockVariation)(Y.block,Y.variation)}));const te=window.wp.richText,ae="x3p0/abbr",ie={name:ae,title:(0,l.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:a,value:i,contentRef:n}){const[o,r]=(0,_.useState)(!1),s=()=>r((e=>!e));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(g.RichTextToolbarButton,{icon:q,title:(0,l.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?a((0,te.removeFormat)(i,ae)):s()}),o&&(0,t.createElement)(le,{value:i,onChange:a,onClose:s,contentRef:n}))}},ne=ie;function le({value:e,contentRef:a,onChange:i,onClose:n}){const o=(0,te.useAnchor)({editableContentElement:a.current,settings:ie}),[r,s]=(0,_.useState)(""),c=(0,t.createElement)(m.TextControl,{label:(0,l.__)("Add title for abbreviation","x3p0-ideas"),value:r,onChange:e=>s(e),help:(0,l.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),d=(0,t.createElement)("form",{className:"x3p0-format-abbr-popover__form",onSubmit:t=>{t.preventDefault(),i((0,te.applyFormat)(e,{type:ae,attributes:{title:r}})),n()}},c);return(0,t.createElement)(m.Popover,{className:"x3p0-format-abbr-popover",anchor:o,placement:"top",onClose:n,variant:"toolbar"},d)}const oe="x3p0/cite",re={name:oe,title:(0,l.__)("Cite","x3p0-ideas"),tagName:"cite",className:null,edit:({isActive:e,onChange:a,value:i})=>(0,t.createElement)(g.RichTextToolbarButton,{icon:y,title:(0,l.__)("Cite","x3p0-ideas"),isActive:e,onClick:()=>a((0,te.toggleFormat)(i,{type:oe}))})},se="x3p0/del",ce={name:se,title:(0,l.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:a,value:i})=>(0,t.createElement)(g.RichTextToolbarButton,{icon:f,title:(0,l.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>a((0,te.toggleFormat)(i,{type:se}))})},de="x3p0/ins",pe={name:de,title:(0,l.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:a,value:i})=>(0,t.createElement)(g.RichTextToolbarButton,{icon:B,title:(0,l.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>a((0,te.toggleFormat)(i,{type:de}))})},me="x3p0/mark",_e={name:me,title:(0,l.__)("Mark","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:a,value:i})=>(0,t.createElement)(g.RichTextToolbarButton,{icon:Z,title:(0,l.__)("Mark","x3p0-ideas"),isActive:e,onClick:()=>a((0,te.toggleFormat)(i,{type:me}))})},ue="x3p0/overline",ve={name:ue,title:(0,l.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:a,value:i})=>(0,t.createElement)(g.RichTextToolbarButton,{icon:N,title:(0,l.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>a((0,te.toggleFormat)(i,{type:ue}))})};(0,te.registerFormatType)(ne.name,ne),(0,te.registerFormatType)(re.name,re),(0,te.registerFormatType)(ce.name,ce),(0,te.registerFormatType)(pe.name,pe),(0,te.registerFormatType)(_e.name,_e),(0,te.registerFormatType)(ve.name,ve)})();