webpackJsonp([2],{453:function(t,e,a){var i=a(0)(a(647),a(716),null,null,null);t.exports=i.exports},486:function(t,e,a){"use strict";function i(t){return(0,c.fetch)({url:"/bus/task/list.do?"+t,method:"get"})}function s(){return(0,c.fetch)({url:"/sysconfig/getAccounts.do",method:"get"})}function l(t,e){return(0,c.fetch)({url:"/bus/task/enable.do",method:"post",data:{id:t,status:e}})}function n(t){return(0,c.fetch)({url:"/bus/task/save.do",method:"post",data:t})}function r(){return(0,c.fetch)({url:"/bus/taskset/getConfTaskSet.do",method:"get"})}function o(t){return(0,c.fetch)({url:"/bus/taskset/save.do",method:"post",data:t})}function u(t){return(0,c.fetch)({url:"/bus/taskset/getHisTaskSet.do?"+t,method:"get"})}Object.defineProperty(e,"__esModule",{value:!0}),e.fetchList=i,e.fetchUserList=s,e.setTaskStatus=l,e.addTask=n,e.getSetting=r,e.updateSetting=o,e.fetchHistory=u;var c=a(10)},647:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(653),s=function(t){return t&&t.__esModule?t:{default:t}}(i),l=a(486),n=a(87);e.default={name:"table_demo",data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,title:void 0,sort:"+id",status:""},temp:{id:void 0,importance:0,remark:"",timestamp:0,title:"",type:"",status:"Waiting"},importanceOptions:[1,2,3],sortOptions:[{label:"按ID升序",key:"+id"},{label:"按ID降序",key:"-id"}],statusOptions:["Success","Running","Falled","Waiting"],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},dialogPvVisible:!1,pvData:[],showAuditor:!1,tableKey:0}},created:function(){this.getList()},filters:{statusFilter:function(t){return{Success:"success",Running:"primary",Falled:"danger",Waiting:"warning"}[t]},typeFilter:function(t){return calendarTypeKeyValue[t]}},methods:{getList:function(){var t=this;this.listLoading=!0,(0,l.fetchList)(this.listQuery).then(function(e){t.list=e.items,t.total=e.total,t.listLoading=!1})},handleFilter:function(){this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},timeFilter:function(t){if(!t[0])return this.listQuery.start=void 0,void(this.listQuery.end=void 0);this.listQuery.start=parseInt(+t[0]/1e3),this.listQuery.end=parseInt((+t[1]+864e5)/1e3)},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){(0,n.objectMerge)(this.temp,t),this.dialogStatus="update",this.dialogFormVisible=!0},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},create:function(){this.temp.id=parseInt(100*Math.random())+1024,this.temp.timestamp=+new Date,this.temp.author="原创作者",this.list.unshift(this.temp),this.dialogFormVisible=!1,this.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})},update:function(){this.temp.timestamp=+this.temp.timestamp;var t=!0,e=!1,a=void 0;try{for(var i,l=(0,s.default)(this.list);!(t=(i=l.next()).done);t=!0){var r=i.value;if(r.id===this.temp.id){(0,n.objectMerge)(r,this.temp);break}}}catch(t){e=!0,a=t}finally{try{!t&&l.return&&l.return()}finally{if(e)throw a}}this.dialogFormVisible=!1,this.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})},resetTemp:function(){this.temp={id:void 0,importance:0,remark:"",timestamp:0,title:"",status:"published",type:""}},handleFetchPv:function(t){var e=this;(0,l.fetchPv)(t).then(function(t){e.pvData=t.pvData,e.dialogPvVisible=!0})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?(0,n.parseTime)(e[t]):e[t]})})},showStatusFilter:function(t,e){return e.status===t}}}},653:function(t,e,a){t.exports={default:a(654),__esModule:!0}},654:function(t,e,a){a(89),a(88),t.exports=a(655)},655:function(t,e,a){var i=a(11),s=a(152);t.exports=a(6).getIterator=function(t){var e=s(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},716:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"Job_name"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.listQuery.title=e},expression:"listQuery.title"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"Status"},model:{value:t.listQuery.status,callback:function(e){t.listQuery.status=e},expression:"listQuery.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"排序"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.listQuery.sort=e},expression:"listQuery.sort"}},t._l(t.sortOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:t.handleCreate}},[t._v("添加")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,"default-sort":{prop:"id",order:"aescending"},border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"Job_id",width:"110",sortable:"",prop:"id"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"200px",label:"Job_name",sortable:"",prop:"jobName"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:"#"}},[t._v("P_SEITL_TASK_RCD_D")])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"130px",label:"调度时间点",sortable:"",prop:"time"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120px",label:"所属组ID",sortable:"",prop:"teamId"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"130px",label:"所属组名",sortable:"",prop:"teamName"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("SOR_P_TASK")])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"160px",align:"center",label:"调度开始日期",prop:"startDate",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"160px",align:"center",label:"调度结束日期",prop:"endDate",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",sortable:"",prop:"status",filters:[{text:"Success",value:"Success"},{text:"Falled",value:"Falled"},{text:"Running",value:"Running"},{text:"Waiting",value:"Waiting"}],"filter-method":t.showStatusFilter,"filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"110px",align:"center",label:"提交人",sortable:"",prop:"author"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("ROOT")])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return["Running"==e.row.status?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleModifyStatus(e.row,"Falled")}}},[t._v("停止\n        ")]):t._e(),t._v(" "),"Running"!=e.row.status?a("el-button",{attrs:{size:"small",type:"primary"}},[a("router-link",{attrs:{to:"/components/index"}},[t._v("编辑")])],1):t._e()]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus]},model:{value:t.dialogFormVisible,callback:function(e){t.dialogFormVisible=e},expression:"dialogFormVisible"}},[a("el-form",{staticClass:"small-space",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:t.temp.status,callback:function(e){t.temp.status=e},expression:"temp.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.temp.timestamp,callback:function(e){t.temp.timestamp=e},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Job_name"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.temp.title=e},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"重要性"}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"]},model:{value:t.temp.importance,callback:function(e){t.temp.importance=e},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"点评"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.temp.remark,callback:function(e){t.temp.remark=e},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.create}},[t._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"阅读数统计",size:"small"},model:{value:t.dialogPvVisible,callback:function(e){t.dialogPvVisible=e},expression:"dialogPvVisible"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"渠道"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.6bc8101c2effd1016de4.js.map