<template>
  <div class="container about-container">
    <h1 class="title is-1">This vessel does not exist.</h1>

    <div class="content">
      <p>
        As Machine Learning becomes more mainstream and ML tools more common and user-friendly,
        artists will have new tools with which to understand their craft and create new work.
        This project did not require a deep understanding of ML or GANs,
        just basic programming skills and patience.
      </p>
      <p>
        <a href="https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA">Computerphile</a> 
        has a high-level overview of <a href="https://www.youtube.com/watch?v=Sw9r8CL98N0">Generative Adversarial Networks (GANs) here</a>.
      </p>
      <p>
        <a href="https://www.gwern.net/">Gwern's</a> 
        excellent <a href="https://www.gwern.net/Faces">Making Anime Faces With StyleGAN</a>
        introduces the original research paper,
        <a href="https://arxiv.org/abs/1812.04948">"A Style-Based Generator Architecture for Generative Adversarial Networks"</a>, 
        and explains in detail the procedure to install and run the <a href="https://github.com/NVlabs/stylegan/">StyleGAN</a> software.
      </p>
      <p>
        Approximately 40,000 large images of "vases" were downloaded from the web.  
        Rather than relying on a search engine like <a href="https://www.google.com/imghp?hl=en">Google Images</a> to procure the dataset, 
        I 
      </p>
    </div>

    <h2 class="title is-2">Methodology</h2>
    <h4 class="title is-4">Choosing a dataset</h4>
    <div class="content">
      <a href="https://github.com/NVlabs/stylegan/">StyleGAN</a> requires relatively large datasets of images.
      Datasets are usually comprised of images of the same "thing"- human faces, cars, bedrooms, cats, anime characters, etc.
      (The <a href="https://arxiv.org/abs/1812.04948">original Stylegan paper</a> used a dataset of 70,000 
      <a href="https://github.com/NVlabs/ffhq-dataset">high-quality images of human faces</a>.)

    </div>

  </div>
</template>


<style lang="scss">
.about-container {
  margin: 60px 30px;
}
</style>