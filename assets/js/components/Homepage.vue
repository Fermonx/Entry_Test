<template>
    <div>

        <Nav/>

        <section id="firstSection" class="container-fluid pb-5" style="">
            <div class="row d-flex justify-content-center">
                <h1 class="pt-5 pb-4">LOREM IMPUM</h1>
                <div class="pb-4 firstSectText">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet,
                    nibh auctor litora metus mus malesuada eget rhoncus fames,
                    consequat id nascetur nisi dignissim sagittis netus.
                    Ac semper lobortis turpis a fames maecenas ad per montes consequat platea,
                    rhoncus purus eleifend viverra dapibus erat arcu ullamcorper himenaeos mauris,
                    curabitur mattis non quis class dui mollis cubilia justo porttitor.
                </div>
                <div>
                    <button class="btn mt-4 buttonMain">
                        LOREM IPSUM
                    </button>
                </div>
            </div>
        </section>

        <div class="articleCounter ml-5 mt-3">{{articles.length}} Products</div>

        <section id="articlesSection">
            <div class="wrapper">
                <div class="container container-articles">
                    <div class="row d-flex articles-items">
                        <div class="col-12 col-md-3 mb-4" v-for="article of articles" >
                            <div class="articles-item is-showing">
                                <div  class="article d-flex justify-content-between"><img class=" article_image img-fluid" v-bind:src="article.img"></div>
                                <div class="descripcion-article">
                                    <p>{{article.name}}</p>
                                    <a class="btn btn-success pl-3 pr-3" style="border-radius: 0" :href="'/article/'+article.id+'/buy'">BUY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

    import Nav from './Nav';

    export default {
        name: "Homepage",
        components: {Nav},
        props: ['articles']

    }
</script>

<style>
    #firstSection {
        background-color: black;
        color: white;
        height: auto;
    }

    .firstSectText {
        text-align: center;
        font-size: 14px;
        width: 90vw;
    }

    .buttonMain {
        background-color: #8bafc7;
        color: white;
        font-size: 12px;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        padding-left: 2.5em;
        padding-right: 2.5em;
        border-radius: 5px;
    }

    .buttonMain:hover {
        background-color: #b9e1fc;
    }

    .article {
        padding: 20px;
        height: 250px;
        background-color: #ffffff;

    }

    .articles-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease-in-out;
        -webkit-box-shadow: 2px 10px 29px -5px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 2px 10px 29px -5px rgba(0, 0, 0, 0.75);
        box-shadow: 2px 10px 29px -5px rgba(0, 0, 0, 0.75);
    }

    .is-showing {
        opacity: 1;
        transform: translateY(0px);

    }

    .container-articles {
        padding: 20px 0;
    }

    .descripcion-article {
        background-color: #ffffff;
        font-size: 20px;
        padding: 8px;
        margin-bottom: 5px;
        text-align: center;
    }

    .descripcion-article h1 {
        font-size: 1.5em;
    }

    .articleCounter {
        font-size: 16px;
        color: gray;
    }


    .article_image {
        height: 100% !important;
        width: 100% !important;
    }

    @media screen and (min-width: 575px) {
        .hidden-lg {
            display: none !important;
        }

    }

    @media screen and (max-width: 576px) {
        .hidden-resp {
            display: none !important;
        }
    }


</style>
