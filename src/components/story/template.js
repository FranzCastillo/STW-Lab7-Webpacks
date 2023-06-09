const template = `
<div class="container" id="container">
    <div class="jumbotron text-center">
        <h1 id="title"></h1>
    </div>
    <div class="row">
        <div class="col-sm-auto" id="content">

        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <h2 id="question"></h2>
        </div>
        <div class="col-sm-3" id="option1">
            <a id="option1_link">
                <figure>
                    <img class="img" id="option1_img">
                    <figcaption class="caption"><h3 id="option1_caption"></h3></figcaption>
                </figure>
            </a>
        </div>
        <div class="col-sm-3" id="option2">
            <a id="option2_link">
                <figure>
                    <img class="img" id="option2_img">
                    <figcaption class="caption"><h3 id="option2_caption"></h3></figcaption>
                </figure>
            </a>
        </div>
        <a href="../index/index.html" id="salir">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12" id="texto">
                        Salir
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
`;

export default template;