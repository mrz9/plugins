//无限级树插件
;$(function(){
    var Tree = function(el,options){
        this.el = el;
    }

    $.fn.TreePopup = function(options){
        return new Tree(this,options);
    } 
});