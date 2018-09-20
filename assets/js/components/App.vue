<template>
    <div >
        <Homepage :articles="articlesArray"></Homepage>
    </div>
</template>

<script>

    import Homepage from './Homepage';

    export default {
        name: 'App',
        components: {Homepage},
        beforeMount: function() {
            this.articlesArray = this.$parent.articles;
        },
        data: () =>({
            articlesArray:[]
        })
    }
</script>

<style>
    html,body{
        width: 100%;
        height: 100%;
        font-family: 'Raleway', sans-serif;
    }
</style>