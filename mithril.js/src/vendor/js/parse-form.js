// Parse Form - https://github.com/AdamBrodzinski/parse-form
var ParseForm;
module.exports = ParseForm = function(e){var t=this;if(!e)return console.error("You must provide an element or selector");this.$el=$(e);this.el=this.$el[0];this.inputs=this.$el.serializeArray();for(var n=0;n<this.inputs.length;n++){var r=this.inputs[n],i=r.name,s=t.$el.find('[name="'+i+'"]');this[i]=s.val();this["$"+i]=s}};ParseForm.prototype.reset=function(){this.el.reset()}
