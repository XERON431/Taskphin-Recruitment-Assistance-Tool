(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{9599:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newcandidates",function(){return t(7534)}])},7534:function(e,n,t){"use strict";t.r(n);var i=t(5893),s=t(7294),a=t(5121),l=t(9417),r=t(9603),c=t(1664);n.default=()=>{let[e,n]=(0,s.useState)([]);(0,s.useEffect)(()=>{t()},[]);let t=async()=>{let{data:e}=await a.Z.get("/api/creator-images-open");n(e.filter(e=>!e.published))},d={marginTop:"-15px",fontSize:"20px"};return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{textAlign:"center",background:"#000000",color:"#fff",padding:"20px"},children:(0,i.jsx)("h1",{children:"Open Candidate Management"})}),e&&e.map(e=>(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"10px"},children:[(0,i.jsx)("img",{src:e.image?e.image.Location:"/1-8.jpg",alt:"Image Thumbnail",style:{width:"180px",height:"180px"}}),(0,i.jsxs)("div",{style:{marginLeft:"20px"},children:[(0,i.jsx)(c,{href:"/creator/image/view/".concat(e.slug),className:"pointer",children:(0,i.jsx)("p",{style:{color:"black",fontSize:"6px",marginBottom:"5px"},children:(0,i.jsx)("h2",{className:"pt-2",children:e.name})})}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{style:d,className:"text-success",children:"Your candidate is ready to be presented globally."})]}),(0,i.jsx)("div",{style:{marginLeft:"auto",textAlign:"center"},children:(0,i.jsx)("div",{children:(0,i.jsx)(r.G,{icon:l.nYk,className:"h5 pointer text-warning"})})})]},e.id))]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9599)}),_N_E=e.O()}]);