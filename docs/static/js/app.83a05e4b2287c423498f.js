webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper green"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Book Manager")])],1)])])},staticRenderFns:[]},o={name:"app",components:{NavBar:a("VU/8")(null,n,!1,null,null,null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},r=a("VU/8")(o,s,!1,null,null,null).exports,l=a("/ocq"),c=a("Sazm"),u=a.n(c),d=(a("3VHS"),u.a.initializeApp({apiKey:"AIzaSyCxflHlNVDaoKegzUqBSvdtwS-jQOmwrR8",authDomain:"books-vuejs.firebaseapp.com",databaseURL:"https://books-vuejs.firebaseio.com",projectId:"books-vuejs",storageBucket:"books-vuejs.appspot.com",messagingSenderId:"1071124655712"}).firestore()),v={name:"dashboard",data:function(){return{books:[]}},created:function(){var t=this;d.collection("books").orderBy("name").get().then(function(e){e.forEach(function(e){var a={id:e.id,name:e.data().name,author:e.data().author,description:e.data().description,rating:e.data().rating,cover:e.data().cover,genre:e.data().genre};t.books.push(a)})})}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashbaord"}},[a("h3",[t._v("Dashboard")]),t._v(" "),a("ul",{staticClass:"collection with-header"},t._l(t.books,function(e){return a("li",{key:e.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[t._v(t._s(e.genre))]),a("strong",[t._v(t._s(e.author))]),t._v(" - "+t._s(e.name)+"\n      "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-book",params:{book_id:e.id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[]},m=a("VU/8")(v,p,!1,null,null,null).exports,g={name:"edit-book",data:function(){return{id:null,name:null,author:null,description:null,rating:null,cover:null,genre:null}},watch:{},methods:{fetchData:function(){console.log("fetchData()");var t=this;d.collection("books").doc(this.$route.params.book_id).get().then(function(e){e.exists&&(t.id=e.id,t.name=e.data().name,t.author=e.data().author,t.description=e.data().description,t.rating=e.data().rating,t.cover=e.data().cover,t.genre=e.data().genre)})},updateBook:function(){var t=this;d.collection("books").doc(this.$route.params.book_id).get().then(function(e){e.exists&&e.ref.update({name:t.name,author:t.author,description:t.description,rating:t.rating,cover:t.cover,gerne:t.genre}).then(function(){t.$router.push({name:"view-book",params:{book_id:t.id}})})})}},created:function(){console.log(this),this.fetchData()}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-book"}},[t.name?a("h3",[t._v(t._s(t.name))]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.updateBook(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],attrs:{type:"text",required:""},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],attrs:{type:"text",required:""},domProps:{value:t.genre},on:{input:function(e){e.target.composing||(t.genre=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cover,expression:"cover"}],attrs:{type:"text",required:""},domProps:{value:t.cover},on:{input:function(e){e.target.composing||(t.cover=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rating,expression:"rating"}],attrs:{type:"number",value:"42",min:"1",max:"5",required:""},domProps:{value:t.rating},on:{input:function(e){e.target.composing||(t.rating=e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Update")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},f=a("VU/8")(g,h,!1,null,null,null).exports,_={name:"new-book",data:function(){return{id:null,name:null,author:null,description:null,rating:null,cover:null,genre:null}},methods:{saveBook:function(){var t=this;d.collection("books").add({name:this.name,author:this.author,description:this.description,rating:this.rating,cover:this.cover,genre:this.genre}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-book"}},[t.name?a("h3",[t._v(t._s(t.name))]):a("h3",[t._v("New book")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.saveBook(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("label",[t._v("Name")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],attrs:{type:"text",required:""},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),t._v(" "),a("label",[t._v("Author")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],attrs:{type:"text",required:""},domProps:{value:t.genre},on:{input:function(e){e.target.composing||(t.genre=e.target.value)}}}),t._v(" "),a("label",[t._v("Genre")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),a("label",[t._v("Description")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cover,expression:"cover"}],attrs:{type:"text",required:""},domProps:{value:t.cover},on:{input:function(e){e.target.composing||(t.cover=e.target.value)}}}),t._v(" "),a("label",[t._v("Cover")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rating,expression:"rating"}],attrs:{type:"number",value:"42",min:"1",max:"5",required:""},domProps:{value:t.rating},on:{input:function(e){e.target.composing||(t.rating=e.target.value)}}}),t._v(" "),a("label",[t._v("Rating")])])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Add")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},C=a("VU/8")(_,b,!1,null,null,null).exports,k={name:"view-book",data:function(){return{id:null,name:null,author:null,description:null,rating:null,cover:null,genre:null}},beforeRouteEnter:function(t,e,a){d.collection("books").doc(t.params.book_id).get().then(function(t){t.exists&&a(function(e){console.log(t.id),e.id=t.id,e.name=t.data().name,e.author=t.data().author,e.description=t.data().description,e.rating=t.data().rating,e.cover=t.data().cover,e.genre=t.data().genre})})},watch:{$route:"fetchData"},methods:{fetchData:function(){console.log("fetch"),d.collection("books").doc(this.$route.params.book_id).get().then(function(t){t.exists&&(this.id=t.id,this.name=t.data().name,this.author=t.data().author,this.description=t.data().description,this.rating=t.data().rating,this.cover=t.data().cover,this.genre=t.data().genre)})},deleteBook:function(){var t=this;confirm("Are you sure?")&&d.collection("books").doc(this.$route.params.book_id).get().then(function(e){e.exists&&(e.ref.delete(),t.$router.push("/"))})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-book"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.name))])]),t._v(" "),a("li",{staticClass:"collection-item"},[a("img",{staticClass:"book-cover responsive-img",attrs:{src:t.cover,alt:"book cover"}})]),t._v(" "),a("li",{staticClass:"collection-item"},[t._l(t.rating,function(e){return a("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"},on:{click:t.logRating}})}),t._v(" "),t._l(5-t.rating,function(t){return a("i",{staticClass:"fa fa-star-o",attrs:{"aria-hidden":"true"}})})],2),t._v(" "),a("li",{staticClass:"collection-item"},[t._v(t._s(t.genre))]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v(t._s(t.author))]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v(t._s(t.description))])]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),a("button",{staticClass:"btn red",on:{click:t.deleteBook}},[t._v("Delete")]),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large",attrs:{to:{name:"edit-book",params:{book_id:t.id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},x=a("VU/8")(k,w,!1,function(t){a("QoQE")},null,null).exports;i.a.use(l.a);var y=new l.a({routes:[{path:"/",name:"dashboard",component:m},{path:"/new",name:"new-book",component:C},{path:"/edit/:book_id",name:"edit-book",component:f},{path:"/:book_id",name:"view-book",component:x}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:y,template:"<App/>",components:{App:r}})},QoQE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.83a05e4b2287c423498f.js.map