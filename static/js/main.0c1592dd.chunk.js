(this.webpackJsonparjoi=this.webpackJsonparjoi||[]).push([[0],{30:function(e,s,t){},31:function(e,s,t){},32:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){},55:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),n=t(21),c=t.n(n),r=(t(28),t(29),t(30),t(31),t(32),t(33),t(2)),o=(t(34),t(0));var l=function(e){var s=e.handleHamClick;return Object(o.jsx)("div",{className:"ham-icon-container",children:Object(o.jsx)("button",{className:"ham-menu",onClick:s,"aria-label":"Main Menu",children:Object(o.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:[Object(o.jsx)("path",{className:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(o.jsx)("path",{className:"line line2",d:"M 20,50 H 80"}),Object(o.jsx)("path",{className:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})})},d=function(){var e=Object(a.useRef)(null),s=function(){window.innerWidth<=650&&e.current.classList.add("hide")};return Object(a.useEffect)((function(){window.innerWidth<=650&&e.current.classList.add("hide")}),[window.innerWidth]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{handleHamClick:function(s){var t=s.target.closest(".ham-menu svg");e.current.classList.contains("hide")?(t.classList.add("opened"),t.setAttribute("aria-expanded",t.classList.contains("opened")),e.current.classList.toggle("hide")):(t.classList.remove("opened"),t.setAttribute("aria-expanded",t.classList.contains("opened")),e.current.classList.toggle("hide"))}}),Object(o.jsx)("header",{ref:e,children:Object(o.jsxs)("nav",{children:[Object(o.jsx)("div",{className:"nav-link-item",children:Object(o.jsx)(r.b,{onClick:s,className:"logo-container",to:"/",children:Object(o.jsx)("img",{src:"./assets/logo.png",alt:"Arjoi logo"})})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)(r.b,{onClick:s,className:"nav-link",to:"/about",children:"ABOUT"})}),Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)(r.b,{onClick:s,className:"nav-link",to:"/businesses",children:"BUSINESSES"})}),Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)(r.b,{onClick:s,className:"nav-link",to:"/media",children:"MEDIA"})}),Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)(r.b,{onClick:s,className:"nav-link",to:"/careers",children:"CAREERS"})}),Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)(r.b,{onClick:s,className:"nav-link",to:"/community",children:"COMMUNITY"})}),Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)(r.b,{onClick:s,className:"menu-container",to:"/lol",children:Object(o.jsx)("img",{src:"./assets/menu.png",alt:"menu"})})})]})]})})]})};var j=function(e){var s=e.data,t=s.mobImg,a=s.img;return Object(o.jsx)("section",{className:"display-img",children:Object(o.jsx)("div",{className:"img-container",children:Object(o.jsxs)("picture",{children:[t&&Object(o.jsx)("source",{srcSet:t,media:"(max-width: 750px)"}),Object(o.jsx)("img",{src:a,alt:"".concat(a)})]})})})},m=t(23),h=function(e){e.data;var s=Object(a.useState)(""),t=Object(m.a)(s,2),i=t[0],n=t[1];return Object(o.jsx)("section",{className:"newsletter-contanier",children:Object(o.jsx)("div",{className:"form-container",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("div",{className:"form-item",children:Object(o.jsx)("input",{type:"email",name:"signup",value:i,onChange:function(e){var s=e.target.value;n((function(){return s}))},placeholder:"Sign up for our newsletter",required:!0})}),Object(o.jsx)("div",{className:"form-item",children:Object(o.jsx)("button",{type:"submit",className:"btn",children:"Subscribe"})})]})})})},b=function(){return Object(o.jsx)("div",{className:"scrollindicator",children:Object(o.jsx)("div",{className:"mouse",children:Object(o.jsx)("div",{className:"mouse-scroll"})})})},g=function(e){var s=e.data,t=s.heading,a=s.img,i=s.year;return Object(o.jsxs)("div",{className:"time-line-item",children:[Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:i})}),Object(o.jsx)("div",{className:"line",children:Object(o.jsx)("div",{className:"dot"})}),Object(o.jsx)("h3",{className:"rte",children:t}),Object(o.jsx)("img",{src:a,alt:a})]})};var u=function(e){var s=e.dataForTimeLine,t=e.handleTimeLineScroll,a=!1;return Object(o.jsx)("div",{className:"timeline",title:"timeline",onMouseEnter:function(){a=!0},onTouchStart:function(){a=!0},onMouseLeave:function(){a=!1},onScroll:function(){a&&t()},children:s&&s.map((function(e,s){return Object(o.jsx)(g,{data:e},s)}))})},p=t(8),x=t(13),O=t.n(x);var f=function(e){var s,t=e.data,a=t.img,i=t.textData,n=t.index,c=t.mobImg;return Object(o.jsxs)("div",{className:"slider-item slider-item-".concat(n),children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsxs)("picture",{children:[c&&Object(o.jsx)("source",{srcSet:c,media:"(max-width: 750px)"}),Object(o.jsx)("img",{src:a,alt:"".concat(a)})]})}),i&&(s=i,Object(o.jsxs)("div",{className:"txt-container",children:[s.map((function(e,s){var t=e.heading,a=e.content,i=e.color;return Object(o.jsxs)("div",{className:"txt-item",style:{color:i},children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("p",{children:a})]},s)})),Object(o.jsx)(r.b,{className:"btn",to:"/book-test-ride",children:"Book a Test Ride"})]}))]})};var v=function(e){var s=e.dataForSlider;return Object(o.jsx)(O.a,Object(p.a)(Object(p.a)({},{infinite:!0,speed:1500,fade:!1,dots:!1,cssEase:"ease",autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1}),{},{className:"slider-container",children:s.map((function(e,s){return Object(o.jsx)(f,{data:Object(p.a)(Object(p.a)({},e),{},{index:s})},s)}))}))};var N=function(e){var s=e.data;return Object(o.jsx)("section",{className:"hero",children:Object(o.jsx)(v,{dataForSlider:s})})},y=function(e){var s=e.data,t=s.heading,a=s.text,i=s.url,n=s.img,c=s.imgMob;return Object(o.jsx)("div",{className:"project-item",children:Object(o.jsxs)("div",{className:"grid-container",children:[Object(o.jsxs)("div",{className:"txt-container",children:[Object(o.jsx)("h3",{className:"heading rte",children:t}),Object(o.jsx)("p",{className:"rte",children:a}),i&&Object(o.jsx)("a",{href:i,className:"btn",children:"Read More"})]}),Object(o.jsx)("div",{className:"img-container",children:Object(o.jsxs)("picture",{children:[Object(o.jsx)("source",{srcSet:c,media:""}),Object(o.jsx)("img",{src:n})]})})]})})},w=function(e){var s=e.data.dataForProjects;return Object(o.jsx)(O.a,Object(p.a)(Object(p.a)({},{infinite:!0,speed:1500,fade:!1,dots:!1,cssEase:"ease",autoplay:!0,autoplaySpeed:4e3,slidesToShow:1,slidesToScroll:1}),{},{className:"projects-slider-container",children:s&&s.map((function(e,s){return Object(o.jsx)(y,{data:Object(p.a)(Object(p.a)({},e),{},{index:s})},s)}))}))},S=function(){return Object(o.jsxs)("div",{id:"home",title:"home",children:[Object(o.jsx)(N,{data:[{img:"./assets/pages/home/hero-slider-1.png",mobImg:"./assets/pages/home/hero-slider-1.png"},{img:"./assets/pages/home/hero-slider-1.png",mobImg:"./assets/pages/home/hero-slider-1.png"}]}),Object(o.jsxs)("div",{className:"about-us floating-items-container page-width txt-center",children:[Object(o.jsx)("div",{className:"floating-base txt-container",children:Object(o.jsx)("p",{className:"rte",children:"RP-Sanjiv Goenka Group, in the last few years, has grown exponentially in revenue, market cap and profitability. We have made all our businesses, leaders in their respective sectors. Our vision is to be a dynamic conglomerate driven by sustainable growth, efficiency and innovation."})}),Object(o.jsx)("h2",{className:"float float-top primary-font primary-color heading",children:"ABOUT US"}),Object(o.jsx)(r.b,{to:"/",className:"btn float float-bottom",children:"Read More"})]}),Object(o.jsx)("section",{className:"top-slider",children:Object(o.jsx)(v,{dataForSlider:[{img:"./assets/pages/home/home-top-slider-1.png",mobImg:"./assets/pages/home/home-top-slider-1.png"},{img:"./assets/pages/home/home-top-slider-1.png",mobImg:"./assets/pages/home/home-top-slider-1.png"},{img:"./assets/pages/home/home-top-slider-1.png",mobImg:"./assets/pages/home/home-top-slider-1.png"}]})}),Object(o.jsxs)("section",{className:"how-it-started",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsxs)("picture",{children:[Object(o.jsx)("source",{srcSet:"./assets/pages/home/how-it-started.png",media:"(max-width: 750px)"}),Object(o.jsx)("img",{src:"./assets/pages/home/how-it-started.png",alt:""})]})}),Object(o.jsxs)("div",{className:"time-line-container",children:[Object(o.jsx)(u,{dataForTimeLine:[{year:2019,heading:"Heading 1",img:"./assets/logo.png"},{year:2018,heading:"Heading 2",img:"./assets/logo.png"},{year:2017,heading:"Heading 3",img:"./assets/logo.png"},{year:2019,heading:"Heading 1",img:"./assets/logo.png"},{year:2018,heading:"Heading 2",img:"./assets/logo.png"},{year:2017,heading:"Heading 3",img:"./assets/logo.png"},{year:2019,heading:"Heading 1",img:"./assets/logo.png"},{year:2018,heading:"Heading 2",img:"./assets/logo.png"},{year:2017,heading:"Heading 3",img:"./assets/logo.png"},{year:2019,heading:"Heading 1",img:"./assets/logo.png"},{year:2018,heading:"Heading 2",img:"./assets/logo.png"},{year:2017,heading:"Heading 3",img:"./assets/logo.png"}],handleTimeLineScroll:function(){var e=document.querySelector(".scrollindicator");e&&e.remove()}}),Object(o.jsx)(b,{})]})]}),Object(o.jsx)("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"3rem 0"},children:Object(o.jsx)(j,{data:{img:"./assets/pages/home/display-img.png",mobImg:"./assets/pages/home/display-img.png"}})}),Object(o.jsx)("section",{className:"bottom-slider",children:Object(o.jsx)(v,{dataForSlider:[{img:"./assets/pages/home/home-bottom-slider-1.png",mobImg:"./assets/pages/home/home-bottom-slider-1.png"},{img:"./assets/pages/home/home-bottom-slider-1.png",mobImg:"./assets/pages/home/home-bottom-slider-1.png"},{img:"./assets/pages/home/home-bottom-slider-1.png",mobImg:"./assets/pages/home/home-bottom-slider-1.png"}]})}),Object(o.jsx)("section",{className:"key-businesses",children:Object(o.jsxs)("div",{className:"floating-items-container txt-center",children:[Object(o.jsx)("h2",{className:"float float-top primary-font secondary-color heading",children:"KEY BUSINESSES"}),Object(o.jsx)("div",{className:"grid-container floating-base",children:["business-1.png","business-2.png","business-3.png"].map((function(e,s){return Object(o.jsx)("div",{className:"img-container grid-item grid-item-".concat(s),children:Object(o.jsx)("img",{src:"./assets/pages/home/".concat(e)})},s)}))})]})}),Object(o.jsx)("section",{className:"leadership",children:Object(o.jsxs)("div",{className:"floating-items-container txt-center",children:[Object(o.jsx)("h2",{className:"float float-top primary-font primary-color heading",children:"LEADERSHIP"}),Object(o.jsxs)("div",{className:"grid-container floating-base page-width",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsxs)("picture",{children:[Object(o.jsx)("source",{srcSet:"./assets/pages/home/leadership-guy.png",media:"(max-width: 750px)"}),Object(o.jsx)("img",{src:"./assets/pages/home/leadership-guy.png",alt:""})]})}),Object(o.jsx)("div",{className:"txt-container",children:Object(o.jsx)("p",{className:"rte",children:"The Founder of Arjoi Group has established this organisation with a view to reach out to people for their economic needs as well as to serve the society. Being an optimistic person with full faith in God, he takes care to fulfill every possible need of his employees, which in return helps work for a brand which Arjoi is today."})})]})]})}),Object(o.jsx)("section",{className:"core-values",children:Object(o.jsxs)("div",{className:"floating-items-container txt-center",children:[Object(o.jsx)("h2",{className:"float float-top primary-font secondary-color heading",children:"CORE VALUES"}),Object(o.jsx)("div",{className:"grid-container floating-base",children:["value-1.png","value-2.png","value-3.png"].map((function(e,s){return Object(o.jsx)("div",{className:"img-container grid-item grid-item-".concat(s),children:Object(o.jsx)("img",{src:"./assets/pages/home/".concat(e)})},s)}))})]})}),Object(o.jsx)("section",{className:"projects",children:Object(o.jsxs)("div",{className:"floating-items-container",children:[Object(o.jsx)("h2",{className:"float float-top primary-font primary-color txt-center heading",children:"ONGOING PROJECTS"}),Object(o.jsx)("div",{className:"floating-base",children:Object(o.jsx)(w,{data:{dataForProjects:[{heading:"Industrial, logistics real estate sector most resilient asset class: JLL",text:"The demand for e-commerce and pharmaceutical services have ensured that India\u2019s industrial and logistics real estate industry has remained the most resilient asset class in the first quarter of 2020.",url:"/",img:"./assets/pages/home/project-1.png",imgMob:"./assets/pages/home/project-1.png",imgAlt:""},{heading:"Industrial, logistics real estate sector most resilient asset class: JLL",text:"The demand for e-commerce and pharmaceutical services have ensured that India\u2019s industrial and logistics real estate industry has remained the most resilient asset class in the first quarter of 2020.",url:"/",img:"./assets/pages/home/project-1.png",imgMob:"./assets/pages/home/project-1.png",imgAlt:""},{heading:"Industrial, logistics real estate sector most resilient asset class: JLL",text:"The demand for e-commerce and pharmaceutical services have ensured that India\u2019s industrial and logistics real estate industry has remained the most resilient asset class in the first quarter of 2020.",url:"/",img:"./assets/pages/home/project-1.png",imgMob:"./assets/pages/home/project-1.png",imgAlt:""},{heading:"Industrial, logistics real estate sector most resilient asset class: JLL",text:"The demand for e-commerce and pharmaceutical services have ensured that India\u2019s industrial and logistics real estate industry has remained the most resilient asset class in the first quarter of 2020.",url:"/",img:"./assets/pages/home/project-1.png",imgMob:"./assets/pages/home/project-1.png",imgAlt:""}]}})})]})}),Object(o.jsx)(h,{})]})},I=function(){return Object(o.jsxs)("section",{id:"404-page",title:"404 page",className:"page-width txt-center",style:{fontSize:"clamp(1rem, 4vw, 5rem)"},children:[Object(o.jsx)("h1",{children:"Oops Page Not Found !"}),Object(o.jsx)("p",{children:"Get back to"}),Object(o.jsx)("div",{children:Object(o.jsx)(r.b,{style:{fontSize:"inherit"},to:"/",className:"btn",children:"Home"})})]})},T=t(3),k=function(){return Object(o.jsxs)("div",{id:"about",title:"about",children:[Object(o.jsx)(N,{data:[{img:"./assets/pages/about/hero-slider-1.png",mobImg:"./assets/pages/about/hero-slider-1.png"},{img:"./assets/pages/about/hero-slider-1.png",mobImg:"./assets/pages/about/hero-slider-1.png"}]}),Object(o.jsx)("article",{className:"about-us",children:Object(o.jsxs)("div",{className:"floating-items-container grid-container",children:[Object(o.jsx)("div",{className:"big-container bg",children:Object(o.jsxs)("div",{className:"txt-container",children:[Object(o.jsx)("h2",{className:"heading primary-color primary-font float float-top bottom-line",children:"ABOUT US"}),Object(o.jsxs)("p",{className:"rte",children:["Starting our journey to success with little steps, we were just like a bud that later bloomed into distinct endeavors, leaving footprints of positivity and achievements along the way.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Arjoi Group is a vertically-integrated company with a modern system of business administration. We do not believe in unreachable expectations with no answerability, but believe in creating extra value as a direct consequence of personal approach.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"The Arjoi Group has of two forms of specific business divisions:"]}),Object(o.jsx)("p",{children:Object(o.jsxs)("strong",{children:["Real Estate & Construction ",Object(o.jsx)("br",{}),"Retail Outlet- \u201cArjoi Mart\u201d"]})}),Object(o.jsx)("p",{className:"rte",children:"We recognise that our customers need the convenience of a single window for all their needs with outstanding service, so that\u2019s where we step in. We lead businesses in real estate and construction across the country and run a chain of affordable retail stores. We adhere to the highest levels of commitment and experience while also striving to leave a positive impact on all of our customers."}),Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:"COMMITMENT TO SERVICE IS PARAMOUNT!"})})]})}),Object(o.jsx)("div",{className:"img-container small-container offset-down",children:Object(o.jsx)("img",{src:"./assets/pages/about/about.png",alt:"about us image"})})]})}),Object(o.jsx)("article",{className:"vision",children:Object(o.jsxs)("div",{className:"floating-items-container grid-container grid-reverse",children:[Object(o.jsx)("div",{className:"big-container bg",children:Object(o.jsxs)("div",{className:"txt-container",children:[Object(o.jsx)("h2",{className:"heading primary-color primary-font float float-top bottom-line",children:"VISION"}),Object(o.jsxs)("p",{className:"rte",children:["The word 'Arjoi' means 'Ardaas'. Thus, the Arjoi Group wants to make unadulterated products, available in their purest form.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"We plan on creating global businesses with a mix of homegrown brands and establish them through our systematically planned approaches. We envision to win over the hearts of our customers and partners by delivering premium quality services and offer the best all-around customer experience.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Not only do we focus on businesses but also constitute foundations that help the downtrodden. We wish to focus on large scale real estate and infrastructure development and become a leading corporation that creates opportunities and brings value to communities around the world."]})]})}),Object(o.jsx)("div",{className:"img-container small-container offset-down",children:Object(o.jsx)("img",{src:"./assets/pages/about/vision.png",alt:"about us image"})})]})}),Object(o.jsx)("article",{className:"about-us",children:Object(o.jsxs)("div",{className:"floating-items-container grid-container",children:[Object(o.jsx)("div",{className:"big-container bg",children:Object(o.jsxs)("div",{className:"txt-container",children:[Object(o.jsx)("h2",{className:"heading primary-color primary-font float float-top bottom-line",children:"BRAND MISSION"}),Object(o.jsx)("p",{className:"rte",children:"We are devoted to foster innovation and growth, through our willpower and vision, bringing exceptional value with us wherever we go. While creating businesses, it is our responsibility to ensure that we deliver the most beneficial results. We generously focus on creating opportunities for growth and employment while focusing on building a brand name across the nation. To underpin our workstyle, we would like to share our set of values crucial for consistent growth:"}),Object(o.jsx)("div",{children:Object(o.jsx)("strong",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"RISK ASSESSMENT"}),Object(o.jsx)("li",{children:"QUALITY CONTROL"}),Object(o.jsx)("li",{children:"LEADERSHIP"}),Object(o.jsx)("li",{children:"INTEGRITY"}),Object(o.jsx)("li",{children:"TRAINING"}),Object(o.jsx)("li",{children:"SUSTAINIBILITY"})]})})})]})}),Object(o.jsx)("div",{className:"img-container small-container offset-down",children:Object(o.jsx)("img",{src:"./assets/pages/about/brand-mission.png",alt:"about us image"})})]})}),Object(o.jsx)("article",{className:"pillars",children:Object(o.jsxs)("div",{className:"floating-items-container grid-container grid-reverse",children:[Object(o.jsx)("div",{className:"big-container bg",children:Object(o.jsxs)("div",{className:"txt-container",children:[Object(o.jsx)("h2",{className:"heading primary-color primary-font float float-top bottom-line",children:"Pillars of Arjoi Group"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"heading secondary-font",children:"HUMANITY"}),Object(o.jsxs)("p",{className:"rte",children:["We intend to reach out to every business or household in need of help of our services."," "]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"heading secondary-font",children:"COMMITMENT"}),Object(o.jsx)("p",{className:"rte",children:"We believe in taking accountability for our actions and decisions as a group and adhere to all promises and responsibilities towards our customers."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"heading secondary-font",children:"TRANSPARENCY"}),Object(o.jsx)("p",{className:"rte",children:"We aim to bring growth and sustainability to the system by adopting methods that help us deliver services without harming the environment."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"heading secondary-font",children:"ECONOMIZING"}),Object(o.jsx)("p",{className:"rte",children:"Helping meet the nation\u2019s demands not just financially but also by abiding to the intellectual integrity to assist requirements of our economy."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"heading secondary-font",children:"SUSTAINABILITY"}),Object(o.jsx)("p",{className:"rte",children:"It is a fixed target in our long-term strategy for growth."})]})]})}),Object(o.jsx)("div",{className:"img-container small-container offset-down",children:Object(o.jsx)("img",{src:"./assets/pages/about/vision.png",alt:"about us image"})})]})}),Object(o.jsx)("div",{className:"txt-center display-txt",children:Object(o.jsx)("p",{className:"rte page-width",children:"There are thousands of people/families/ households which have been helped by the Arjoi Group. Arjoi Group has not only helped them financially, but in every other way possible so that they could live a better life."})})]})};var A=Object(T.f)((function(e){var s=e.history;return Object(a.useEffect)((function(){var e=s.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),L=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(A,{}),Object(o.jsxs)(T.c,{children:[Object(o.jsx)(T.a,{exact:!0,path:"/",component:S}),Object(o.jsx)(T.a,{exact:!0,path:"/home",component:S}),Object(o.jsx)(T.a,{exact:!0,path:"/about",component:k}),Object(o.jsx)(T.a,{path:"*",component:I})]})]})},C=function(e){var s=e.data,t=s.icon,a=s.title,i=s.url;return Object(o.jsx)("a",{title:a,className:"link-item icon",href:i,target:"_blank",children:Object(o.jsx)("img",{src:t})})},E=function(){return Object(o.jsxs)("footer",{className:"txt-center",children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"links-container grid-container",children:[Object(o.jsx)("div",{className:"links grid-item",children:Object(o.jsx)(r.b,{to:"/company",children:"COMPANY"})}),Object(o.jsx)("div",{className:"links grid-item",children:Object(o.jsx)(r.b,{to:"/work",children:"OUR WORK"})}),Object(o.jsx)("div",{className:"links grid-item",children:Object(o.jsx)(r.b,{to:"/contact",children:"CONTACT"})})]}),Object(o.jsxs)("div",{className:"icons-container social-icons-container",children:[Object(o.jsx)(C,{data:{icon:"./assets/social-icon-facebook.png",title:"Facebook",url:"https://www.fb.com"}}),Object(o.jsx)(C,{data:{icon:"./assets/social-icon-insta.png",title:"Instagram",url:"https://www.instagram.com"}}),Object(o.jsx)(C,{data:{icon:"./assets/social-icon-twitter.png",title:"Twitter",url:"https://www.twitter.com"}}),Object(o.jsx)(C,{data:{icon:"./assets/social-icon-youtube.png",title:"Youtube",url:"https://www.youtube.com/"}})]}),Object(o.jsx)("address",{children:"B-203, Plot-7, Sector- 10 Dwarka, New Delhi-110075"}),Object(o.jsx)("div",{className:"mail-container",children:Object(o.jsx)("a",{href:"mailto:hello@Arjoi.in",children:"hello@Arjoi.in"})}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"rte txt-center",children:"\xa9 Copyright Arjoi Group 2020"})]})};var M=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(L,{}),Object(o.jsx)(E,{})]})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,n=s.getLCP,c=s.getTTFB;t(e),a(e),i(e),n(e),c(e)}))};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),R()}},[[55,1,2]]]);
//# sourceMappingURL=main.0c1592dd.chunk.js.map