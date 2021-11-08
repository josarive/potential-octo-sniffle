Vue.component('name', {
    props:['p'],
    template: '<div v-on:click="{p.hide=true}" v-bind:class="{hide:p.hidden}">{{p.name}}</div>' +
        '<div v-on:click="{p.hide=false}" v-bind:class="{hide:!p.hidden}">{{p.codename}}</div>'
})


var app = new Vue ({
    el: "#app",
    data:{
        name:"",
        email:"",
        nameWarning:"",
        nameCon: false,
        emailWarning:"",
        emailCon: false,
        sub: "",
        list:[
            {
                name:"Protagonist",
                codename:"Joker",
                hidden: true
            },
            {
                name:"Anne",
                codename:"Panther",
                hidden: false
            },
            {
                name:"Ryuji",
                codename:"Skull",
                hidden:false
            }],
    },
    watch:{
        name: function(){
            if(this.name.length<2){
                this.nameWarning="Name must have at least 2 characters."
                this.sub="Not Submitted",
                this.nameCon=false
            }
            else{
                this.nameWarning="";
                this.nameCon= true
                if(this.emailCon===true){
                    this.sub="Submitted",
                    this.sub.style.color="red"
                }
            }
        },
        email: function() {
            var mail = /[^\s@]+@[^\s@]+\.co[^\s@]+/;
            if (mail.test(this.email)) {
                this.emailWarning = "";
                this.emailCon = true
                if(this.nameCon===true){
                    this.sub="Submitted"
                }
            } else {
                this.emailWarning = "Must enter valid email in format: example@domain.com";
                this.sub="Not Submitted"
                this.emailCon=false
            }
        },
    },

})