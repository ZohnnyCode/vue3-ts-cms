(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4391e5fa"],{"1a41":function(e,t,a){},4264:function(e,t,a){},7997:function(e,t,a){"use strict";a("4264")},"9d1a":function(e,t,a){"use strict";var n=a("c9d2");t["a"]=n["a"]},b02b:function(e,t,a){},b7f8:function(e,t,a){},bf7e:function(e,t,a){"use strict";a.r(t);a("771d"),a("b7f8"),a("0a69");var n=a("c9d2"),o=a("e012"),l=a("309c"),r=a("fae0"),c=a("7a23"),d={class:"role"},i={class:"el-tree"};function f(e,t,a,f,u,b){var s=r["a"],m=l["a"],p=o["a"],h=n["a"];return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",d,[Object(c["createVNode"])(s,{searchFormConfig:e.searchFormConfig,onHandleResetCall:e.handleResetReal,onHandelSearchCall:e.handelSearchReal},null,8,["searchFormConfig","onHandleResetCall","onHandelSearchCall"]),Object(c["createVNode"])(m,{tableContentConfig:e.tableContentConfig,pageName:"role",ref:"pageContentRef",onHandelAddCall:e.handelAddReal,onHandelEditCall:e.handelEditReal},null,8,["tableContentConfig","onHandelAddCall","onHandelEditCall"]),Object(c["createVNode"])(h,{ref:"pageModelRef",modalFormConfig:e.modalFormConfig,pageName:"role",editInfo:e.editInfo,otherInfo:e.otherInfo},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(p,{ref:"elTreeRef",data:e.menus,props:{children:"children",label:"name"},"show-checkbox":"","node-key":"id",onCheck:e.handelCheck},null,8,["data","onCheck"])])]})),_:1},8,["modalFormConfig","editInfo","otherInfo"])])}var u=a("6b75");function b(e){if(Array.isArray(e))return Object(u["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var m=a("06c5");function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e){return b(e)||s(e)||Object(m["a"])(e)||p()}var j=a("3835"),O=(a("99af"),a("0613")),C=a("52df"),v=a("3573"),g=a("fe8c"),y=a("9d1a"),N={title:"角色列表",propData:[{prop:"name",label:"角色名称",minWidth:"100"},{prop:"intro",label:"权限介绍",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"120",slotName:"createAt"},{prop:"updateAt",label:"最后操作时间",minWidth:"120",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handel"}],isShowColumnIndex:!0,isShowSelection:!0},V={labelWidth:"120px",formItems:[{field:"name",label:"角色名称",type:"input",placeholder:"请输入角色名称"},{field:"intro",label:"权限范围",type:"select",placeholder:"请选择权限",options:[{title:"所有权限",value:"all"},{title:"日常事物",value:"daily"},{title:"人事管理",value:"people"}]},{field:"createAt",label:"请选择时间",type:"datePicker",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}]},w={labelWidth:"100px",formItemStyle:{},colLayout:{span:24},formItems:[{field:"name",label:"角色名",type:"input",placeholder:"请输入角色名"},{field:"intro",label:"权限介绍",type:"input",placeholder:"请输入权限介绍"}]},I=a("fa80"),k=a("f010"),R=Object(c["defineComponent"])({components:{PageContent:v["a"],PageSearch:g["a"],PageModal:y["a"]},name:"role",setup:function(){var e=Object(I["a"])(),t=Object(j["a"])(e,3),a=t[0],n=t[1],o=t[2],l=Object(c["ref"])(),r=function(e){var t=Object(C["c"])(e.menuList);Object(c["nextTick"])((function(){var e;null===(e=l.value)||void 0===e||e.setCheckedKeys(t,!1)}))},d=Object(k["a"])(void 0,r),i=Object(j["a"])(d,4),f=i[0],u=i[1],b=i[2],s=i[3],m=Object(O["c"])(),p=Object(c["computed"])((function(){return m.state.allMenuList})),v=Object(c["ref"])({}),g=function(e,t){var a=t.checkedKeys,n=t.halfCheckedKeys;v.value={menuList:[].concat(h(a),h(n))}};return{tableContentConfig:N,searchFormConfig:V,pageContentRef:a,handleResetReal:n,handelSearchReal:o,modalFormConfig:w,pageModelRef:f,editInfo:u,handelAddReal:b,handelEditReal:s,menus:p,handelCheck:g,otherInfo:v,elTreeRef:l}}}),A=(a("7997"),a("6b0d")),S=a.n(A);t["default"]=S()(R,[["render",f],["__scopeId","data-v-09fde31a"]])},c9d2:function(e,t,a){"use strict";a("771d"),a("1a41"),a("b02b"),a("797a");var n=a("db9d"),o=a("cf2e"),l=a("7a23"),r={class:"page-modal"},c={class:"dialog-footer"},d=Object(l["createTextVNode"])("取消"),i=Object(l["createTextVNode"])("确定");function f(e,t,a,f,u,b){var s=Object(l["resolveComponent"])("zw-form"),m=o["a"],p=n["a"];return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",r,[Object(l["createVNode"])(p,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.dialogVisible=t}),title:"新建用户",width:"30%",center:"","destroy-on-close":""},{footer:Object(l["withCtx"])((function(){return[Object(l["createElementVNode"])("span",c,[Object(l["createVNode"])(m,{onClick:t[1]||(t[1]=function(t){return e.dialogVisible=!1})},{default:Object(l["withCtx"])((function(){return[d]})),_:1}),Object(l["createVNode"])(m,{type:"primary",onClick:e.handelAddNew},{default:Object(l["withCtx"])((function(){return[i]})),_:1},8,["onClick"])])]})),default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(s,Object(l["mergeProps"])(e.modalFormConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData=t})}),null,16,["modelValue"]),Object(l["renderSlot"])(e.$slots,"default")]})),_:3},8,["modelValue"])])}var u=a("5530"),b=a("b85c"),s=(a("b64b"),a("0613")),m=a("0e3f"),p=Object(l["defineComponent"])({components:{ZwForm:m["a"]},props:{modalFormConfig:{type:Object,required:!0},editInfo:{type:Object,default:function(){return{}}},otherInfo:{type:Object,default:function(){return{}}},pageName:{type:String,required:!0}},setup:function(e){var t=Object(l["ref"])(!1),a=Object(l["ref"])({});Object(l["watch"])((function(){return e.editInfo}),(function(t){var n,o=Object(b["a"])(e.modalFormConfig.formItems);try{for(o.s();!(n=o.n()).done;){var l=n.value;a.value[l.field]=t[l.field]}}catch(r){o.e(r)}finally{o.f()}}));var n=Object(s["c"])(),o=function(){t.value=!1,Object.keys(e.editInfo).length?n.dispatch("system/editPageData",{pageName:e.pageName,id:e.editInfo.id,editData:Object(u["a"])(Object(u["a"])({},a.value),e.otherInfo)}):n.dispatch("system/addNewPageData",{pageName:e.pageName,addData:Object(u["a"])(Object(u["a"])({},a.value),e.otherInfo)})};return{dialogVisible:t,formData:a,handelAddNew:o}}}),h=a("6b0d"),j=a.n(h);t["a"]=j()(p,[["render",f]])},f010:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("5530"),o=a("7a23");function l(e,t){var a=Object(o["ref"])(),l=Object(o["ref"])({}),r=function(){l.value={},a.value&&(a.value.dialogVisible=!0),e&&e()},c=function(e){l.value=Object(n["a"])({},e),a.value&&(a.value.dialogVisible=!0),t&&t(e)};return[a,l,r,c]}}}]);
//# sourceMappingURL=chunk-4391e5fa.2a731940.js.map