<script id="tvTemplate" type="text/x-jquery-tmpl">
  <dd>
    <div class="grid_15 alpha">
      <div class="grid_3 mini-shot alpha">
        <img src="../images/${april}.png" rel="april" alt="April's Story"/>
      </div>
      <div class="grid_3 mini-shot">
        <img src="../images/${tom}.png" rel="tom" alt="Tom's Story"/>
      </div>
      <div class="grid_3 mini-shot">
        <img src="../images/${may}.png" rel="may" alt="May's Story"/>
      </div>
      <div class="grid_3 mini-shot">
        <img src="../images/${mark}.png" rel="mark" alt="Mark's Story"/>
      </div>    
      <div class="grid_3 mini-shot omega">
        <img src="../images/${julie}.png" rel="julie" alt="Julie's Story"/>
      </div>
      <div class="grid_3 mini-shot alpha">
        <img src="../images/${gene}" rel="gene" alt="Gene's Story"/>
      </div>
      <div class="grid_3 mini-shot">
        <img src="../images/${audrey}" rel="audery" alt="Audery's Story"/>
      </div> 
      <div class="grid_3 mini-shot">
        <img src="../images/${steve}" rel="steve" alt="Steve's Story"/>
      </div>
      <div class="grid_3 mini-shot">
        <img src="../images/${irene}" rel="irene" alt="Irene's Story"/>
      </div>
      <div class="grid_3 mini-shot omega">
        <img src="../images/${rich}" rel="rich" alt="Rich's Story"/>
      </div> 
      <div class="grid_11 alpha mini_logos">
        {{each logos}}
          <div class="grid_${grid}">
            <img src="${image}" alt="${alt}"/>
          </div>
        {{/each}}
      </div>                    
      <div class="grid_4 omega">
        <div class="vantage_bio">
          <h1>${name}</h1>
          {{each jobs}}
            <p>${value}</p>
          {{/each}}
        </div>
      </div>
    </div>
    <div class="grid_7 omega">
      <img src="${bigpic}" alt="${name}" width="270" height="335"/>
    </div>
  </dd>
</script>