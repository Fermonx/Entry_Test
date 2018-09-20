import Vue from 'vue';
import App from './components/App.vue';
import hotEmitter from 'webpack/hot/emitter';

var vm = new Vue({
    el: '#app',
    render: h => h(App),
    data:{
        articles : null
    },
    beforeMount : function (){
        let rawData = this.$el.attributes['articulos'].value;
        this.articles =  JSON.parse(JSON.parse(rawData));
        this.window = window;
    }

});

//DEV: HMR for css
if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        hotEmitter.on('webpackHotUpdate', () => {
            document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
                link.href = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`)
            })
        })
    }
}