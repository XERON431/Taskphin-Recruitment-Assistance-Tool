(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{9037:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creator/image/create",function(){return t(8400)}])},6770:function(e){(()=>{"use strict";var a={d:(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};a.r(t),a.d(t,{default:()=>r});var n=function(){var e;function a(){!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,a)}return e=[{key:"changeHeightWidth",value:function(e,a,t,n,r,o){return t>n&&(e=Math.round(e*n/t),t=n),e>a&&(t=Math.round(t*a/e),e=a),r&&t<r&&(e=Math.round(e*r/t),t=r),o&&e<o&&(t=Math.round(t*o/e),e=o),{height:e,width:t}}},{key:"resizeAndRotateImage",value:function(e,a,t,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,s=document.createElement("canvas"),c=e.width,d=e.height,h=this.changeHeightWidth(d,t,c,a,n,r);l&&(90===l||270===l)?(s.width=h.height,s.height=h.width):(s.width=h.width,s.height=h.height),c=h.width,d=h.height;var u=s.getContext("2d");return u.fillStyle="rgba(0, 0, 0, 0)",u.fillRect(0,0,c,d),u.imageSmoothingEnabled&&u.imageSmoothingQuality&&(u.imageSmoothingQuality="high"),l&&(u.rotate(l*Math.PI/180),90===l?u.translate(0,-s.width):180===l?u.translate(-s.width,-s.height):270===l?u.translate(-s.height,0):0!==l&&360!==l||u.translate(0,0)),u.drawImage(e,0,0,c,d),s.toDataURL("image/".concat(o),i/100)}},{key:"b64toByteArrays",value:function(e,a){a=a||"image/jpeg";for(var t=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),n=[],r=0;r<t.length;r+=512){for(var o=t.slice(r,r+512),i=Array(o.length),l=0;l<o.length;l++)i[l]=o.charCodeAt(l);var s=new Uint8Array(i);n.push(s)}return n}},{key:"b64toBlob",value:function(e,a){var t=this.b64toByteArrays(e,a);return new Blob(t,{type:a,lastModified:new Date})}},{key:"b64toFile",value:function(e,a,t){var n=this.b64toByteArrays(e,t);return new File(n,a,{type:t,lastModified:new Date})}},{key:"createResizedImage",value:function(e,t,n,r,o,i,l){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,h=new FileReader;if(!e)throw Error("File Not Found!");if(e.type&&!e.type.includes("image"))throw Error("File Is NOT Image!");h.readAsDataURL(e),h.onload=function(){var u=new Image;u.src=h.result,u.onload=function(){var h=a.resizeAndRotateImage(u,t,n,c,d,r,o,i),m="image/".concat(r);switch(s){case"blob":l(a.b64toBlob(h,m));break;case"base64":default:l(h);break;case"file":var g=e.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(r.toString());l(a.b64toFile(h,g,m))}}},h.onerror=function(e){throw Error(e)}}}],function(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(a,e),a}();let r={imageFileResizer:function(e,a,t,r,o,i,l,s,c,d){return n.createResizedImage(e,a,t,r,o,i,l,s,c,d)}};e.exports=t})()},2610:function(e,a,t){"use strict";var n=t(5893),r=t(7294);a.Z=e=>{let{values:a,handleChange:t,setValues:o,handleSubmit:i,handleImage:l,preview:s,uploadButtonText:c,editPage:d=!1,opencandidate:h=!1}=e,[u,m]=(0,r.useState)("Save & Continue");return(0,n.jsx)(n.Fragment,{children:a&&(0,n.jsxs)("form",{onSubmit:i,children:[(0,n.jsx)("div",{className:"form-group mb-3",children:(0,n.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",value:a.name,onChange:t})}),(0,n.jsx)("div",{className:"form-group mb-3",children:(0,n.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:"Email",value:a.email,onChange:t})}),(0,n.jsx)("div",{className:"form-group mb-3",children:(0,n.jsx)("input",{type:"text",name:"phone",className:"form-control",placeholder:"Phone",value:a.phone,onChange:t})}),(0,n.jsx)("div",{className:"form-group mb-3",children:(0,n.jsx)("textarea",{name:"description",cols:"7",rows:"7",placeholder:"Description",value:a.description,className:"form-control",onChange:t})}),(0,n.jsx)("div",{className:"form-group mb-3",children:(0,n.jsx)("input",{type:"text",name:"category",className:"form-control",placeholder:"Category",value:a.category,onChange:t})}),(0,n.jsx)("div",{className:"form-group mb-3",children:(0,n.jsx)("input",{type:"text",name:"expectedSalary",className:"form-control",placeholder:"Expected Salary",value:a.expectedSalary,onChange:t})}),(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{children:"Current Status:"}),(0,n.jsxs)("select",{name:"currentStatus",className:"form-control",value:a.currentStatus,onChange:t,children:[(0,n.jsx)("option",{value:"",children:"Select Status"}),h&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("option",{value:"Listed",children:"New Registered Candidate"})}),!h&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("option",{value:"Listed",children:"Listed"}),(0,n.jsx)("option",{value:"Contacted",children:"Contacted"}),(0,n.jsx)("option",{value:"Interview Scheduled",children:"Interview Scheduled"}),(0,n.jsx)("option",{value:"Offer Extended",children:"Offer Extended"}),(0,n.jsx)("option",{value:"Hired",children:"Hired"}),(0,n.jsx)("option",{value:"Rejected",children:"Rejected"})]})]})]}),(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{children:"Node.js Experience:"}),(0,n.jsxs)("select",{name:"nodejsExperience",className:"form-control",value:a.nodejsExperience,onChange:t,children:[(0,n.jsx)("option",{value:"",children:"Select Node.js Experience"}),(0,n.jsx)("option",{value:"Less than 1 year",children:"Less than 1 year"}),(0,n.jsx)("option",{value:"1-2 years",children:"1-2 years"}),(0,n.jsx)("option",{value:"Over 2 years",children:"Over 2 years"})]})]}),(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{children:"ReactJS Experience:"}),(0,n.jsxs)("select",{name:"reactjsExperience",className:"form-control",value:a.reactjsExperience,onChange:t,children:[(0,n.jsx)("option",{value:"",children:"Select ReactJS Experience"}),(0,n.jsx)("option",{value:"Less than 1 year",children:"Less than 1 year"}),(0,n.jsx)("option",{value:"1-2 years",children:"1-2 years"}),(0,n.jsx)("option",{value:"Over 2 years",children:"Over 2 years"})]})]}),(0,n.jsxs)("div",{className:"form-row mb-3",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsxs)("label",{className:"btn btn-outline-secondary btn-block text-left",children:[c,(0,n.jsx)("input",{type:"file",name:"image",onChange:l,accept:"image/*",hidden:!0})]})})}),s&&(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("img",{src:s,alt:"Preview",style:{width:"100px",height:"auto"}})}),d&&a.image&&(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("img",{src:a.image.Location,alt:"image not available",style:{width:"100px",height:"auto"}})})]}),!d&&(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("button",{onClick:i,disabled:a.loading||a.uploading,className:"btn btn-primary",type:"submit",children:a.loading?"Saving...":u})})})]})})}},7582:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var n=t(5893),r=t(7294),o=t(5121),i=t(1163),l=t(1664),s=()=>{let[e,a]=(0,r.useState)("");return(0,r.useEffect)(()=>{a(window.location.pathname)},[window.location.pathname]),(0,n.jsxs)("div",{className:"nav flex-column nav-pills",children:[(0,n.jsx)(l,{href:"/creator",children:(0,n.jsx)("p",{className:"nav-link ".concat("/creator"==e&&"active"),children:"Dashboard"})}),(0,n.jsx)(l,{href:"/creator/image/create",children:(0,n.jsx)("p",{className:"nav-link ".concat("/creator/image/create"==e&&"active"),children:"Add Candidate"})})]})},c=e=>{let{children:a}=e,[t,l]=(0,r.useState)(!1),c=(0,i.useRouter)();(0,r.useEffect)(()=>{console.log("this useeffect worked"),d()},[]);let d=async()=>{try{console.log("oh my god");let{data:e}=await o.Z.get("/api/current-creator");console.log("woah "),console.log(e),e.ok||l(!0)}catch(e){console.log("yeah error is here"),console.log(e),l(!1),c.push("/")}};return(0,n.jsx)(n.Fragment,{children:t?(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-2",children:(0,n.jsx)(s,{})}),(0,n.jsx)("div",{className:"col-md-10",children:a})]})}):(0,n.jsx)("h1",{children:"error"})})}},8400:function(e,a,t){"use strict";t.r(a);var n=t(5893),r=t(7294),o=t(1163);t(6624);var i=t(5121),l=t(2610),s=t(7582),c=t(6770),d=t(2920);a.default=()=>{let e=(0,o.useRouter)(),[a,t]=(0,r.useState)({name:"",description:"",email:"",phone:"",expectedSalary:"",currentStatus:"",nodejsExperience:"",reactjsExperience:"",uploading:!1,loading:!1}),[h,u]=(0,r.useState)({}),[m,g]=(0,r.useState)(""),[p,v]=(0,r.useState)("Upload Image"),x=async t=>{t.preventDefault();try{console.log("yes i reached here");let{data:t}=await i.Z.post("/api/image",{...a,image:h});(0,d.Am)("Great! Candidate Entry is created"),e.push("/creator")}catch(e){console.log("Error:",e)}};return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)("h1",{style:{textAlign:"center",background:"#000000",color:"#fff",padding:"20px"},children:"Candidate Information"}),(0,n.jsx)("div",{className:"pt-3 pb-3",children:(0,n.jsx)(l.Z,{handleChange:e=>{t({...a,[e.target.name]:e.target.value})},handleImage:e=>{let n=e.target.files[0];g(window.URL.createObjectURL(n)),v(n.name),t({...a,loading:!0}),c.default.imageFileResizer(n,720,500,"JPEG",100,0,async e=>{try{console.log("image uploader reached here");let{data:n}=await i.Z.post("/api/image/upload-image",{image:e});console.log("IMAGE UPLOADED",n),u(n),t({...a,loading:!1})}catch(e){console.log(e),t({...a,loading:!1}),(0,d.Am)("Candidate upload failed. Try later.")}})},handleSubmit:x,values:a,setValues:t,preview:m,uploadButtonText:p})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9037)}),_N_E=e.O()}]);