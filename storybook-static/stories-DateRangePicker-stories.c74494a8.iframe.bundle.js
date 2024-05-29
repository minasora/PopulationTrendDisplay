"use strict";(self.webpackChunkpopulation_trend=self.webpackChunkpopulation_trend||[]).push([[852],{"./src/stories/DateRangePicker.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>DateRangePicker_stories,first:()=>first});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),sweetalert_min=__webpack_require__("./node_modules/sweetalert/dist/sweetalert.min.js"),sweetalert_min_default=__webpack_require__.n(sweetalert_min);const DateRangePicker=param=>{let{startDate,endDate,setStartDate,setEndDate,className}=param;return(0,jsx_runtime.jsxs)("div",{className:"date-range-picker ".concat(className," flex md:flex-row flex-col items-center md:justify-end "),children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-start items-center m-2 w-full",children:[(0,jsx_runtime.jsx)("input",{id:"start-date",type:"date",value:startDate,onChange:e=>{const newStartDate=e.target.value;new Date(newStartDate)>new Date(endDate)&&setEndDate(newStartDate),setStartDate(newStartDate)},className:"p-1 border w-full md:w-auto md:h-auto"}),(0,jsx_runtime.jsx)("label",{htmlFor:"start-date",className:"ml-2",children:"から"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex lg:justify-start justify-end items-center m-2 w-full",children:[(0,jsx_runtime.jsx)("input",{type:"date",id:"end-date",value:endDate,onChange:e=>{const newEndDate=e.target.value;new Date(newEndDate)>=new Date(startDate)?setEndDate(newEndDate):sweetalert_min_default()({title:"Error",text:"End date must be greater than or equal to the start date",icon:"error"})},className:"p-1 border w-full md:w-auto md:h-auto"}),(0,jsx_runtime.jsx)("label",{htmlFor:"end-date",className:"ml-2",children:"まで"})]})]})},base_DateRangePicker=DateRangePicker;DateRangePicker.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{startDate:{required:!0,tsType:{name:"string"},description:""},endDate:{required:!0,tsType:{name:"string"},description:""},setStartDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},setEndDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};__webpack_require__("./src/app/globals.css");var _first_parameters,_first_parameters_docs,_first_parameters1,dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const DateRangePicker_stories={title:"Example/DateRangePicker",component:base_DateRangePicker,tags:["centered"],parameters:{layout:"centered"},args:{startDate:"2021-01-31",endDate:"2021-01-31",setStartDate:(0,dist.fn)(),setEndDate:(0,dist.fn)()}},first={args:{startDate:"2021-01-01",endDate:"2021-01-31",setStartDate:(0,dist.fn)(),setEndDate:(0,dist.fn)()}};first.parameters={...first.parameters,docs:{...null===(_first_parameters=first.parameters)||void 0===_first_parameters?void 0:_first_parameters.docs,source:{originalSource:"{\n  args: {\n    startDate: '2021-01-01',\n    endDate: '2021-01-31',\n    setStartDate: fn(),\n    setEndDate: fn()\n  }\n}",...null===(_first_parameters1=first.parameters)||void 0===_first_parameters1||null===(_first_parameters_docs=_first_parameters1.docs)||void 0===_first_parameters_docs?void 0:_first_parameters_docs.source}}};const __namedExportsOrder=["first"]}}]);