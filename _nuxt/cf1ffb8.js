(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{468:function(t,e,n){"use strict";n.r(e);n(13),n(180);var l={props:{content:Object,ratio:{type:String,default:"16by9"}},methods:{get_id:function(t){var e=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return e&&11===e[2].length?e[2]:null}}},r=n(73),component=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("b-embed",{attrs:{type:"iframe",aspect:this.ratio,src:"https://www.youtube.com/embed/"+this.get_id(this.content.fields.url)+"?rel=0?playsinline=1",allowfullscreen:""}})}),[],!1,null,null,null);e.default=component.exports}}]);