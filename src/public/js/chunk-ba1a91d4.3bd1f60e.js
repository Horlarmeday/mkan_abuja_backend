(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba1a91d4"],{"092a":function(t,a,e){t.exports=e.p+"img/small-logo.a0b1846b.png"},"6b61":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-register"}},[s("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[s("img",{staticStyle:{"margin-left":"30%"},attrs:{src:e("092a"),width:"100",alt:"register"}}),s("vx-card",[s("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"px-8 pt-8 register-tabs-container"},[s("div",{staticClass:"vx-card__title mb-4"},[s("h4",{staticClass:"mb-4"},[t._v("Create Account")]),s("p",[t._v("Fill the below form to create a new account.")])]),s("div",{},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",label:"Surname",name:"surname"},model:{value:t.surname,callback:function(a){t.surname=a},expression:"surname"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("surname")))])],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",label:"First Name",name:"firstname"},model:{value:t.firstname,callback:function(a){t.firstname=a},expression:"firstname"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("firstname")))])],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("vs-input",{staticClass:"w-full",attrs:{name:"othername",label:"Other Name"},model:{value:t.othername,callback:function(a){t.othername=a},expression:"othername"}})],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("vs-input",{staticClass:"w-full",attrs:{label:"Khuddam ID",name:"khuddam_no"},model:{value:t.khuddam_no,callback:function(a){t.khuddam_no=a},expression:"khuddam_no"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("small",{staticClass:"ml-2"},[t._v("Date of Birth")]),s("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"date_of_birth",label:"Date of Birth"},model:{value:t.date_of_birth,callback:function(a){t.date_of_birth=a},expression:"date_of_birth"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("date_of_birth")))])],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("small",{staticClass:"ml-2"},[t._v("Muqam")]),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",closeOnSelect:!0,name:"muqam",options:t.muqamOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.muqam,callback:function(a){t.muqam=a},expression:"muqam"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("muqam")))])],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("vs-input",{staticClass:"w-full",attrs:{label:"Number of Children",name:"numb_of_children"},model:{value:t.numb_of_children,callback:function(a){t.numb_of_children=a},expression:"numb_of_children"}})],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("small",{staticClass:"ml-2"},[t._v("Marital Status")]),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",closeOnSelect:!0,name:"marital_status",options:t.maritalOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.marital_status,callback:function(a){t.marital_status=a},expression:"marital_status"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("marital_status")))])],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("small",{staticClass:"ml-2"},[t._v("Highest Qualification")]),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",closeOnSelect:!0,name:"qualification",options:t.qualificationsOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.qualification,callback:function(a){t.qualification=a},expression:"qualification"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("qualification")))])],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("small",{staticClass:"ml-2"},[t._v("Employment Status")]),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",name:"employment_status",closeOnSelect:!0,options:t.employmentStatusOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.employment_status,callback:function(a){t.employment_status=a},expression:"employment_status"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("employment_status")))])],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",label:"Occupation",name:"occupation"},model:{value:t.occupation,callback:function(a){t.occupation=a},expression:"occupation"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("occupation")))])],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",label:"Address",name:"address",placeholder:"Address"},model:{value:t.address,callback:function(a){t.address=a},expression:"address"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("address")))])],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:11|max:11",expression:"'required|min:11|max:11'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",label:"Phone",name:"phone",placeholder:"Phone"},model:{value:t.phone,callback:function(a){t.phone=a},expression:"phone"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("phone")))])],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("small",{staticClass:"ml-2"},[t._v("Genotype")]),s("v-select",{attrs:{closeOnSelect:!0,options:t.genotypeOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.genotype,callback:function(a){t.genotype=a},expression:"genotype"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("small",{staticClass:"ml-2"},[t._v("Blood Group")]),s("v-select",{attrs:{closeOnSelect:!0,options:t.bloodGroupOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.blood_group,callback:function(a){t.blood_group=a},expression:"blood_group"}})],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full mb-2"},[s("small",{staticClass:"ml-2"},[t._v("Employment Type")]),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",name:"employment_type",closeOnSelect:!0,options:t.employmentTypeOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.employment_type,callback:function(a){t.employment_type=a},expression:"employment_type"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("employment_type")))])],1)]),s("vs-button",{staticClass:"mt-6",attrs:{type:"filled",disabled:!t.isFormValid},on:{click:t.submitData}},[t._v("Register")])],1),s("vs-divider"),s("vs-row",[s("vs-col",{attrs:{"vs-offset":"2","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"8"}},[s("small",{staticClass:"pt-8 pb-8"},[t._v("Already have an account,\n                    "),s("router-link",{attrs:{to:"/auth/login"}},[t._v("\n                      Sign in")])],1)])],1)],1)])])],1)])},i=[],l=e("fa33"),o=e("4a7a"),n=e.n(o),r=e("d6e7"),c={data:function(){return{surname:"",firstname:"",othername:"",khuddam_no:"",muqam:"",date_of_birth:"",employment_status:"",employment_type:"",occupation:"",numb_of_children:"",address:"",phone:"",blood_group:"",genotype:"",qualification:"",marital_status:"",muqamOptions:r["a"].muqamOptions,maritalOptions:r["a"].maritalOptions,qualificationsOptions:r["a"].qualificationsOptions,employmentStatusOptions:r["a"].employmentStatusOptions,employmentTypeOptions:r["a"].employmentTypeOptions,bloodGroupOptions:r["a"].bloodGroupOptions,genotypeOptions:r["a"].genotypeOptions}},components:{Datepicker:l["a"],vSelect:n.a},computed:{isFormValid:function(){return!this.errors.any()&&this.surname&&this.firstname&&this.date_of_birth&&this.employment_status&&this.occupation&&this.address&&this.phone&&this.muqam&&this.employment_type&&this.qualification}},methods:{handleError:function(t){this.$vs.loading.close(),this.$vs.notify({title:"Error",text:t.response.data,color:"danger",position:"top-center",iconPack:"feather",icon:"icon-alert-circle"})},handleSuccess:function(t){this.$vs.loading.close(),this.$vs.notify({title:"Success",text:t.data.message,color:"primary",position:"top-center",iconPack:"feather",icon:"icon-alert-circle"})},initValues:function(){this.surname="",this.firstname="",this.othername="",this.khuddam_no="",this.muqam="",this.date_of_birth="",this.employment_status="",this.employment_type="",this.occupation="",this.numb_of_children="",this.address="",this.phone="",this.blood_group="",this.genotype="",this.qualification="",this.marital_status=""},submitData:function(){var t=this;this.$validator.validateAll().then((function(a){if(a){var e={surname:t.surname,firstname:t.firstname,othername:t.othername,khuddam_no:t.khuddam_no,muqam:t.muqam.value,date_of_birth:t.date_of_birth,employment_status:t.employment_status.value,employment_type:t.employment_type.value,occupation:t.occupation,numb_of_children:t.numb_of_children,address:t.address,phone:t.phone,blood_group:t.blood_group.value,genotype:t.genotype.value,qualification:t.qualification.value,marital_status:t.marital_status.value};t.$vs.loading(),t.$store.dispatch("member/addMember",e).then((function(a){t.handleSuccess(a),t.initValues()})).catch((function(a){t.handleError(a)}))}else t.$vs.notify({title:"Error",text:"Complete all required fields",color:"danger",position:"top-center",iconPack:"feather",icon:"icon-alert-circle"})}))},checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)}}},m=c,u=(e("c689"),e("2877")),d=Object(u["a"])(m,s,i,!1,null,null,null);a["default"]=d.exports},"81a3":function(t,a,e){},c689:function(t,a,e){"use strict";var s=e("81a3"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-ba1a91d4.3bd1f60e.js.map