(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["form-examples-vue"],{"34b5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("alert",{staticClass:"mt6",attrs:{tip:""}},[a("ul",[a("li",{staticClass:"title5"},[t._v("The "),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" component is used for validation.")]),a("li",[t._v("A "),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" is invisible and has no style by default. You can put it in a\n"),a("span",{staticClass:"code"},[t._v("w-card")]),t._v(" (or put a "),a("span",{staticClass:"code"},[t._v("w-card")]),t._v(" in it) to have some style. Alternatively,\nyou can apply colors and spaces CSS classes on it (e.g. "),a("span",{staticClass:"code"},[t._v(".blue--bg")]),t._v(", "),a("span",{staticClass:"code"},[t._v(".pa4")]),t._v(").")]),a("li",[t._v("The "),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" tag translates to a "),a("span",{staticClass:"code"},[t._v("<form>")]),t._v(" tag.")])])]),a("title-link",{attrs:{h2:""}},[t._v("How it works")]),a("div",{staticClass:"title3"},[t._v("The validation works in 3 steps:")]),a("ol",[a("li",{staticClass:"title4"},[t._v("Add one or more validator functions on the field you want validated"),a("ssh-pre",{staticClass:"body",attrs:{language:"html-vue",label:"Vue template"}},[t._v('<w-input label="First name" :validators="[validators.required]"></w-input>')]),a("ssh-pre",{staticClass:"body",attrs:{language:"js",label:"Javascript"}},[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})")])],1),a("li",{staticClass:"mt6 title4"},[t._v("Wrap the field in a "),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" and add a submit button"),a("ssh-pre",{staticClass:"body",attrs:{language:"html-vue",label:"Vue template"}},[t._v('<w-form>\n  <w-input label="First name" :validators="[validators.required]"></w-input>\n\n  <w-button type="submit">Submit</w-button>\n</w-form>')])],1),t._m(0)]),a("alert",{attrs:{tip:""}},[a("strong",[t._v("As of version 1.14.4")]),a("p",[t._v("It is also possible to trigger a particular field validation programmatically via\n"),a("code",[t._v("this.$refs.myField.validate()")]),t._v(". all the validator functions associated on this field will be\nre-run.\n")])]),a("title-link",{staticClass:"mt10",attrs:{h3:""}},[t._v("Creating a validator function")]),t._m(1),a("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n    // Other validators...\n  }\n})\n")]),a("w-divider",{staticClass:"mt12"}),a("title-link",{attrs:{h2:""}},[t._v("Basic validation")]),t._m(2),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-form v-model="valid">\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <strong>v-model:</strong>\n    <code class="ml2 mr4">\n      '+t._s("{{ valid === false ? 'false' : valid || 'null' }}")+'\n    </code>\n    <w-button type="submit" :disabled="valid === false">\n      Validate\n    </w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  valid: null,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})")]},proxy:!0}])},[a("w-form",{model:{value:t.form1.valid,callback:function(e){t.$set(t.form1,"valid",e)},expression:"form1.valid"}},[a("w-input",{attrs:{label:"First name",validators:[t.validators.required,t.validators.alphabetical]}}),a("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),a("div",{staticClass:"text-right mt6"},[a("strong",[t._v("v-model:")]),a("code",{staticClass:"ml2 mr4"},[t._v(t._s(!1===t.form1.valid?"false":t.form1.valid||"null"))]),a("w-button",{attrs:{type:"submit",disabled:!1===t.form1.valid}},[t._v("Validate")])],1)],1)],1),a("alert",{attrs:{warning:""}},[a("strong",[t._v("Heads up!")]),a("div",[t._v("The v-model value has 3 states: "),a("code",[t._v("true")]),t._v(" and "),a("code",[t._v("false")]),t._v(" for success and error, but also\n"),a("code",[t._v("null")]),t._v(" for pristine."),a("br"),t._v("\nPristine represents the moment where the form is still untouched, neither valid, nor invalid.")])]),a("alert",{attrs:{success:""}},[t._v("Even in the most advanced case, Wave UI's form validation is fairly simple, it doesn't\nrequire you to use "),a("code",[t._v("$refs")]),t._v(".\n")]),a("title-link",{attrs:{h2:""}},[t._v("Direct submission to a server")]),t._m(3),t._m(4),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-form\n  action="test.php"\n  method="post"\n  target="_blank"\n  allow-submit>\n\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[a("w-form",{attrs:{action:"test.php",method:"post",target:"_blank","allow-submit":""}},[a("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),a("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),a("div",{staticClass:"text-right mt6"},[a("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),a("alert",{attrs:{tip:""}},[t._v("To submit a form via the HTML standard way like in this example, you need to add\nthe "),a("code",[t._v("action")]),t._v(" attribute and optionally a "),a("code",[t._v("method")]),t._v(" attribute.\n")]),a("title-link",{attrs:{h2:""}},[t._v("Validate on submit, on blur, on keyup")]),t._m(5),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-form no-keyup-validation no-blur-validation>\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[a("w-form",{attrs:{"no-keyup-validation":"","no-blur-validation":""}},[a("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),a("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),a("div",{staticClass:"text-right mt6"},[a("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Reset the form")]),t._m(6),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-form v-model="valid">\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button\n      class="my1 mr2"\n      bg-color="warning"\n      type="reset">\n      Reset\n    </w-button>\n    <w-button\n      class="my1"\n      type="submit">\n      Validate\n    </w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  valid: null,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[a("w-form",{model:{value:t.form4.valid,callback:function(e){t.$set(t.form4,"valid",e)},expression:"form4.valid"}},[a("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),a("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),a("div",{staticClass:"text-right mt6"},[a("w-button",{staticClass:"my1 mr2",attrs:{"bg-color":"warning",type:"reset"}},[t._v("Reset")]),a("w-button",{staticClass:"my1",attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),a("title-link",{attrs:{h2:""}},[t._v("On validate, on success & on error events")]),a("p",{staticClass:"title5"},[t._v("These events are fired on submit.")]),t._m(7),a("alert",{attrs:{tip:""}},[t._v("The form status is always accurate (through the "),a("span",{staticClass:"code"},[t._v("v-model")]),t._v("), and the "),a("code",[t._v("error")]),t._v(" &\n"),a("code",[t._v("success")]),t._v(" events return the "),a("span",{staticClass:"code"},[t._v("errorsCount")]),t._v("."),a("br"),t._v("\nSo the only thing you could be missing at this point is the exact number of errors between the\nsubmission attempts (if you need it) since a "),a("span",{staticClass:"code"},[t._v("keyup")]),t._v(" or "),a("span",{staticClass:"code"},[t._v("blur")]),t._v(" event may trigger\nan error or success on that element. The next example introduces the "),a("code",[t._v("errors-count")]),t._v(" syncing\nfor this purpose.")]),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-alert\n  :success="success"\n  :error="error"\n  :info="!success && !error">\n  '+t._s("{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}")+"\n</w-alert>\n\n<p>\n  The form has been validated "+t._s("{{ validated }}")+' time(s).\n</p>\n\n<w-form\n  @validate="validated++;success = error = false"\n  @success="success = true"\n  @error="error = true">\n\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  success: null,\n  error: null,\n  validated: 0,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[a("w-alert",{attrs:{success:t.form5.success,error:t.form5.error,info:!t.form5.success&&!t.form5.error}},[t._v(t._s(t.form5.success||t.form5.error?t.form5.success?"Success":"Error":"The form is still pristine"))]),a("p",[t._v("The form has been validated "+t._s(t.form5.validated)+" time(s).")]),a("w-form",{on:{validate:function(e){t.form5.validated++,t.form5.success=t.form5.error=!1},success:function(e){t.form5.success=!0},error:function(e){t.form5.error=!0}}},[a("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),a("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),a("div",{staticClass:"text-right mt6"},[a("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),a("title-link",{attrs:{h2:"",slug:"advanced-validation"}},[t._v("Advanced validation with everything")]),t._m(8),t._m(9),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-card class="white--bg" content-class="pa0">\n  <div class="message-box">\n    <w-transition-fade>\n      <w-alert\n        class="my0 text-light"\n        v-if="form.submitted"\n        success\n        no-border>\n        The form is valid, ready to send it!\n      </w-alert>\n\n      <w-alert\n        class="my0 text-light"\n        v-else-if="form.valid === false"\n        error\n        no-border>\n        The form has '+t._s("{{ form.errorsCount }}")+' errors.\n      </w-alert>\n    </w-transition-fade>\n  </div>\n\n  <w-form\n    class="px8 pt2 pb12"\n    v-model="form.valid"\n    :errors-count.sync="form.errorsCount"\n    @validate="onValidate"\n    @success="onSuccess">\n\n    <w-input\n      required\n      label="First name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-input\n      class="mt3"\n      required\n      label="Last name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-input\n      class="mt3"\n      disabled\n      required\n      label="User name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-flex class="mt4" wrap align-center justify-end>\n      <w-checkbox\n        required\n        :validators="[validators.consent]">\n        I agree to the terms & conditions\n      </w-checkbox>\n\n      <div class="spacer" />\n\n      <w-button\n        class="my1 mr2"\n        bg-color="warning"\n        type="reset"\n        @click="form.submitted = form.sent = false">\n        Reset\n      </w-button>\n\n      <w-button\n        class="my1"\n        type="submit"\n        :disabled="form.valid === false"\n        :loading="form.submitted && !form.sent">\n        Validate\n      </w-button>\n    </w-flex>\n  </w-form>\n\n  <w-notification\n    v-model="form.sent"\n    success\n    transition="bounce"\n    absolute\n    plain\n    round\n    bottom>\n    The form was sent successfully!\n  </w-notification>\n</w-card>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  form: {\n    valid: null,\n    submitted: false,\n    sent: false,\n    errorsCount: 0\n  },\n  validators: {\n    required: value => !!value || 'This field is required',\n    consent: value => !!value || 'You must agree'\n  }\n}),\n\nmethods: {\n  onSuccess () {\n    setTimeout(() => (this.form.sent = true), 2000)\n  },\n  onValidate () {\n    this.form.sent = false\n    this.form.submitted = this.form.errorsCount === 0\n  }\n}")]},proxy:!0},{key:"css",fn:function(){return[t._v(".message-box {min-height: 35px;}\n")]},proxy:!0}])},[a("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[a("div",{staticClass:"message-box"},[a("w-transition-fade",[t.form6.submitted?a("w-alert",{staticClass:"my0 text-light",attrs:{success:"","no-border":""}},[t._v("The form is valid, ready to send it!")]):!1===t.form6.valid?a("w-alert",{staticClass:"my0 text-light",attrs:{error:"","no-border":""}},[t._v("The form has "+t._s(t.form6.errorsCount)+" errors.")]):t._e()],1)],1),a("w-form",{staticClass:"px8 pt2 pb12",attrs:{"errors-count":t.form6.errorsCount},on:{"update:errorsCount":function(e){return t.$set(t.form6,"errorsCount",e)},"update:errors-count":function(e){return t.$set(t.form6,"errorsCount",e)},validate:t.onValidate,success:t.onSuccess},model:{value:t.form6.valid,callback:function(e){t.$set(t.form6,"valid",e)},expression:"form6.valid"}},[a("w-input",{attrs:{required:"",label:"First name",validators:[t.validators.required]}}),a("w-input",{staticClass:"mt3",attrs:{required:"",label:"Last name",validators:[t.validators.required]}}),a("w-input",{staticClass:"mt3",attrs:{disabled:"",required:"",label:"User name",validators:[t.validators.required]}}),a("w-flex",{staticClass:"mt4",attrs:{wrap:"","align-center":"","justify-end":""}},[a("w-checkbox",{attrs:{required:"",validators:[t.validators.consent]}},[t._v("I agree to the terms & conditions")]),a("div",{staticClass:"spacer"}),a("w-button",{staticClass:"my1 mr2",attrs:{"bg-color":"warning",type:"reset"},on:{click:function(e){t.form6.submitted=t.form6.sent=!1}}},[t._v("Reset")]),a("w-button",{staticClass:"my1",attrs:{type:"submit",disabled:!1===t.form6.valid,loading:t.form6.submitted&&!t.form6.sent}},[t._v("Validate")])],1)],1),a("w-notification",{attrs:{success:"",transition:"bounce",absolute:"",plain:"",round:"",bottom:""},model:{value:t.form6.sent,callback:function(e){t.$set(t.form6,"sent",e)},expression:"form6.sent"}},[t._v("The form was sent successfully!")])],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Disabled & readonly form")]),t._m(10),a("alert",{attrs:{warning:""}},[a("strong",[t._v("Caution")]),a("div",[t._v("Wave UI will not reset the validity of the fields when you toggle the "),a("code",[t._v("disabled")]),t._v("\nor "),a("code",[t._v("readonly")]),t._v(" prop on the "),a("strong",{staticClass:"code"},[t._v("w-form")]),t._v(": the field is becoming uneditable but\nmay contain invalid data.")])]),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-button\n  :outline="!form.disabled"\n  @click="form.readonly = false;form.disabled = !form.disabled">\n  Form disabled\n</w-button>\n<w-button\n  class="ml2"\n  :outline="!form.readonly"\n  @click="form.disabled = false;form.readonly = !form.readonly">\n  Form readonly\n</w-button>\n\n<w-form\n  v-model="form.valid"\n  :disabled="form.disabled"\n  :readonly="form.readonly"\n  class="mt4">\n  <w-input\n    label="First name"\n    :validators="[validators.required, validators.alphabetical]">\n  </w-input>\n  <w-input\n    label="Last name"\n    :validators="[validators.required]"\n    class="mt3">\n  </w-input>\n\n  <w-flex justify-end class="mt4">\n    <w-button\n      type="reset"\n      bg-color="warning">\n      Reset\n    </w-button>\n    <w-button\n      type="submit"\n      :disabled="form.valid === false"\n      class="ml2">\n      Validate\n    </w-button>\n  </w-flex>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  form: {\n    valid: null,\n    disabled: false,\n    readonly: false\n  },\n  validators: {\n    required: value => !!value || 'This field is required',\n    alphabetical: value => /^[a-z \\-']+$/i.test(value) || 'This field only accepts letters.'\n  }\n})\n")]},proxy:!0}])},[a("w-button",{attrs:{outline:!t.form7.disabled},on:{click:function(e){t.form7.readonly=!1,t.form7.disabled=!t.form7.disabled}}},[t._v("Form disabled")]),a("w-button",{staticClass:"ml2",attrs:{outline:!t.form7.readonly},on:{click:function(e){t.form7.disabled=!1,t.form7.readonly=!t.form7.readonly}}},[t._v("Form readonly")]),a("w-form",{staticClass:"mt4",attrs:{disabled:t.form7.disabled,readonly:t.form7.readonly},model:{value:t.form7.valid,callback:function(e){t.$set(t.form7,"valid",e)},expression:"form7.valid"}},[a("w-input",{attrs:{label:"First name",validators:[t.validators.required,t.validators.alphabetical]}}),a("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),a("w-flex",{staticClass:"mt4",attrs:{"justify-end":""}},[a("w-button",{attrs:{type:"reset","bg-color":"warning"}},[t._v("Reset")]),a("w-button",{staticClass:"ml2",attrs:{type:"submit",disabled:!1===t.form7.valid}},[t._v("Validate")])],1)],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Asynchronous validations")]),a("p",[t._v("You may want to validate a field on server side, for this you can use an asynchronous validator.")]),a("alert",{attrs:{tip:""}},[t._v("You should first be familiar with Promises and "),a("span",{staticClass:"code"},[t._v("async")]),t._v("/"),a("span",{staticClass:"code"},[t._v("await")]),t._v(".\nIf you're not you can read about it\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",target:"_blank"}},[t._v("here")]),t._v(".")]),t._m(11),a("example",{attrs:{"content-class":"pa6"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-form(error-placeholders)\n  w-input(\n    label="Username"\n    :validators="[validators.required, validators.username]"\n    :inner-icon-right="form1.loading ? \'mdi mdi-autorenew w-icon--spin\' : \'\'"\n    autofill="off")')]},proxy:!0},{key:"js",fn:function(){return[t._v("// Here we need access to `this`, so we can't use an arrow function.\ndata () {\n  return {\n    loading: false,\n    validators: {\n      required: value => !!value || 'This field is required',\n      username: async value => {\n        // Display the spinner while loading.\n        this.loading = true\n\n        // Simulate a server call: wait for 800ms.\n        await new Promise(r => setTimeout(r, 800))\n\n        // Remove the spinner.\n        this.loading = false\n\n        // If value is not 'waveui' return true (valid field).\n        // Otherwise (||) return the error message.\n        return value !== 'waveui' || 'This username is already in use'\n      }\n    }\n  }\n}")]},proxy:!0}])},[a("w-form",{attrs:{"error-placeholders":""}},[a("w-input",{attrs:{label:"Username",validators:[t.validators.required,t.validators.username],"inner-icon-right":t.form1.loading?"mdi mdi-autorenew w-icon--spin":"",autofill:"off"}})],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mt6 title4"},[t._v("That's enough"),a("p",{staticClass:"body"},[t._v("you can let the "),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" component do the rest!"),a("br"),t._v("\nBut you might want more options, discover them in the examples bellow.\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("A validator is a custom function that tells Wave UI if the field is valid or invalid when the\nvalidation happens. It must return either "),a("span",{staticClass:"code"},[t._v("true")]),t._v(" or a string containing an error\nmessage in case of invalidaty. An empty string also works."),a("br"),t._v("\nThe current value of the field is always passed in parameter to the validator."),a("br"),a("br"),t._v("\n\nIn the following snippet, the value is converted to boolean ("),a("code",[t._v("!!")]),t._v("), and if falsy\n(e.g. empty string) the JavaScript engine will continue through the "),a("code",[t._v("||")]),t._v(" and will return\na string to Wave UI, meaning the field is invalid.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("In this example and by default, the fields are validated on "),a("span",{staticClass:"code"},[t._v("keyup")]),t._v(", on "),a("span",{staticClass:"code"},[t._v("blur")]),t._v(",\nand on "),a("span",{staticClass:"code"},[t._v("submit")]),t._v("."),a("br"),t._v("\nThe v-model on the "),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" gets updated with the form status.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mt6"},[t._v("The "),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" prevents the form submission by default - for modern usage where an AJAX\ncall is made on success ("),a("a",{attrs:{href:"#advanced-validation"}},[t._v("see the last example: Advanced validation")]),t._v(").\n"),a("br"),t._v("\nBut in case you need to send the form as is to the server, you can set the "),a("code",[t._v("allow-submit")]),t._v("\noption to "),a("span",{staticClass:"code"},[t._v("true")]),t._v(" and provide a URL via the usual "),a("code",[t._v("action")]),t._v(" attribute, and optionally\nset a "),a("code",[t._v("method")]),t._v(" attribute. Just like a normal "),a("span",{staticClass:"code"},[t._v("<form>")]),t._v(" tag."),a("br"),a("br"),t._v("\n\nThe "),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" will handle the validation and prevent the form submission\nuntil the form is valid. Once the form is valid, the form submission will not be prevented and the\ndata will be submitted to the URL set in the "),a("code",[t._v("action")]),t._v(" attribute.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mt2"},[t._v("In this example, the form data will be submitted in another tab to a fake "),a("span",{staticClass:"code"},[t._v("test.php")]),t._v(".\n")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("By default the validation happens on "),a("span",{staticClass:"code"},[t._v("keyup")]),t._v(", on "),a("span",{staticClass:"code"},[t._v("blur")]),t._v(" and on\n"),a("span",{staticClass:"code"},[t._v("submit")]),t._v(". You can disable the "),a("span",{staticClass:"code"},[t._v("keyup")]),t._v(" and "),a("span",{staticClass:"code"},[t._v("blur")]),t._v(" validations\nwith "),a("code",[t._v("no-keyup-validation")]),t._v(" and "),a("code",[t._v("no-blur-validation")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Once the form is invalid, you can reset it with a basic HTML reset button, like in this example."),a("br"),t._v("\nAlternatively, you can programmatically reset the form and all its element by setting the form\nvalue (or v-model) to "),a("code",[t._v("null")]),t._v(", like pristine.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",{staticClass:"mt1"},[a("code",[t._v("before-validate")]),t._v(" is always fired as soon as a submission is attempted (e.g. submit\nbutton click), prior validation.")]),a("li",{staticClass:"mt1"},[a("code",[t._v("validate")]),t._v(" is always fired as soon as a submission is attempted, after validation.")]),a("li",{staticClass:"mt1"},[a("code",[t._v("success")]),t._v(" is fired after submission when the validation is successful.\nYou should send the data to the server from this hook.")]),a("li",{staticClass:"mt1"},[a("code",[t._v("error")]),t._v(" is fired after submission when the validation is failing.\nYou can show an error message from this hook.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("This example shows a full form validation and lifecycle - everything you could need."),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("It handles the error and success states of the form elements on keyup, on blur and submit.")]),a("li",[t._v("It allows resetting the form.")]),a("li",[t._v("It keeps track of the form errors count at any time and displays a global message using the fired\n"),a("span",{staticClass:"code"},[t._v("w-form")]),t._v(" custom events."),a("br")]),a("li",[t._v("When the form is valid and submitted, it simulates a form sending to a backend and displays\na notification.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("You can add the "),a("code",[t._v("disabled")]),t._v(" or "),a("code",[t._v("readonly")]),t._v(" prop on the "),a("strong",{staticClass:"code"},[t._v("w-form")]),t._v(" tag to\ndisable all the fields or set them all to readonly.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("This example presents a common case: checking if a username is already in use from a user\nregistration page."),a("br"),t._v("\nIf you type exactly "),a("code",[t._v("waveui")]),t._v(" which is already taken, an error message will appear after\nconnecting to a server, via an Axios request for instance."),a("br"),t._v("\nA spinner is also displayed while the server is being requested.\n")])}],r=a("1da1"),i=(a("96cf"),a("d3b7"),{data:function(){var t=this;return{form1:{valid:null,loading:!1},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},form7:{valid:null,disabled:!1,readonly:!1},validators:{username:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form1.loading=!0,e.next=3,new Promise((function(t){return setTimeout(t,800)}));case 3:return t.form1.loading=!1,e.abrupt("return","waveui"!==a||"This username is already in use");case 5:case"end":return e.stop()}}),e)})));function a(t){return e.apply(this,arguments)}return a}(),required:function(t){return!!t||"This field is required"},alphabetical:function(t){return/^[a-z \-']+$/i.test(t)||"This field only accepts letters."},consent:function(t){return!!t||"You must agree"}}}},methods:{onSuccess:function(){var t=this;setTimeout((function(){return t.form6.sent=!0}),2e3)},onValidate:function(){this.form6.sent=!1,this.form6.submitted=0===this.form6.errorsCount}}}),o=i,l=(a("654c"),a("2877")),d=Object(l["a"])(o,n,s,!1,null,null,null);e["default"]=d.exports},"40f9":function(t,e,a){},"654c":function(t,e,a){"use strict";a("40f9")}}]);
//# sourceMappingURL=form-examples-vue.b1cf4459.js.map