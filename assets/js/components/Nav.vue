<template>
    <div>
        <nav class="navbar navbar-light bg-light navbar-expand-lg nav-fixed" style="z-index: 9;">

            <a class=" col-5" href="/"><img src="/images/logo_yeeply.png" alt="Yeeply Logo"></a>
            <button id="menu-toggler" class="navbar-toggler navbar-toggler-right menu-icon" style="outline: 0 none; border: none; color: #000000;" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <label for="menuBars">MENU</label><i class="fas fa-bars" id="menuBars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <div class="navbar-nav navbar-center" id="main-menu" style="left: auto; text-align: center; margin: 0 auto;">
                    <a class="nav-item nav-link" href="#">ENTRAR</a>
                    <a class="nav-item nav-link" href="#">ENTRAR</a>
                    <a class="nav-item nav-link" href="#">ENTRAR</a>
                    <a class="nav-item btn buttonMainNav" href="#">LOREM IPSUM</a>
                </div>


            </div>

        </nav>
    </div>
</template>

<script>
    export default {
        name: "Homepage"
    }
</script>

<style>
    .navbar {
        z-index: 9;
    }

    .navbar-center
    {
        left: auto;
        text-align: center;
        margin: 0 auto;
    }

    button.navbar-toggler{
        outline: 0 none;
        border: none;
        color: #000000;
    }

    button.navbar-toggler:focus {
        outline: 0 none;
        border: none;
    }

    .buttonMainNav{
        background-color: #8bafc7;
        color: white;
    }

    .buttonMainNav:hover{
        background-color: #b9e1fc;
        color: white;
    }

    img{
        height: 2em;
        width: 6em;
    }
</style>