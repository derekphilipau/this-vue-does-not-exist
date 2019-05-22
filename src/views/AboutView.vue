<template>
  <div class="container about-container">
    <h1 class="title is-1">This vessel does not exist.</h1>

    <div class="content">
      <div class="columns">
        <div class="column">
          <p>
            The history of ceramics is one of imitation and reproduction.
          </p>
          <p>
            The apprentice obtains mastery of the craft through repetition, 
            gradually improving their technique.
            Guided by a lifetime of working in  the craft, the master 
            examines each piece made by the student and throws away those deemed unsuitable.
          </p>
          <p>
            The forger creates replicas and tests them in the marketplace.  
            The connoisseur, informed by decades of experience dealing with antiques,
            judges the replicas.
            Those that are mistaken as authentic are sold, 
            and the forger goes on to create even more convincing copies.
          </p>
          <p>
            The "fake" vessels on this website have been created through a similar process
            of repetition, examination, and reinforcement.  Except in this case, 
            the entire procedure has taken place within 
            <a href="https://en.wikipedia.org/wiki/Machine_learning">machine-learning (ML)</a>
            software known as a 
            <a href="https://en.wikipedia.org/wiki/Generative_adversarial_network">Generative Adversarial Network (GAN)</a>.
          </p>
          <p>
            GANs consist of two parts: the Generator and the Discriminator.
            In a very general sense, the role of the Generator is similar to that of 
            the apprentice and the forger,  
            while the Discriminator plays the role of the Master or connoisseur.
            These two parts are <em>adversarial</em> in nature:  
            it is the Generator's goal to "trick" the Discriminator into believing an item is authentic, 
            while the Discriminator attempts to accurately classify whether items are real or fake.
          </p>
        </div>
        <div class="column is-two-fifths">
          <figure class="image">
            <img src="/img/fakes.jpg" alt="Imitation qingbai ware. Jingdezhen, China, 2008.">
            <figcaption>
              Imitation qingbai ware. Jingdezhen, China, 2008.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <h3 class="title is-3">Machine Learning & GANs</h3>
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
        "A Style-Based Generator Architecture for Generative Adversarial Networks", Karras et al 2018
        (<a href="https://arxiv.org/abs/1812.04948">paper</a>, 
        <a href="https://www.youtube.com/watch?v=kSLJriaOumA">video</a>, 
        <a href="https://github.com/NVlabs/stylegan">source</a>), 
        and explains in detail the procedure to install and run the <a href="https://github.com/NVlabs/stylegan/">StyleGAN</a> software.
      </p>
      <p>
        Approximately 40,000 large images of "vases" were downloaded from the web.  
        Rather than relying on a search engine like <a href="https://www.google.com/imghp?hl=en">Google Images</a> to procure the dataset, 
        I 
      </p>
    </div>

    <h3 class="title is-3">Methodology</h3>
    <h5 class="title is-5">Choosing a dataset</h5>
    <div class="content">
      <p>
        <a href="https://github.com/NVlabs/stylegan/">StyleGAN</a> requires relatively large datasets of images.
        Datasets are usually comprised of images of the same "thing"- human faces, cars, bedrooms, cats, anime characters, etc.
        (The <a href="https://arxiv.org/abs/1812.04948">original Stylegan paper</a> used a dataset of 70,000 
        <a href="https://github.com/NVlabs/ffhq-dataset">high-quality images of human faces</a>.)
      </p>
      <p>
        The "Originals" dataset of photos come from a variety of museum and auction house websites including:
        <a href="https://www.artcurial.com">Artcurial</a>,
        <a href="https://www.artic.edu/">Art Institute of Chicago</a>,
        <a href="https://www.artsy.net/">Artsy</a>,
        <a href="https://www.bonhams.com/">Bonhams</a>,
        <a href="https://britishmuseum.org/">The British Museum</a>,
        <a href="https://www.bukowskis.com/en">Bukowskis</a>,
        <a href="https://www.christies.com/">Christies</a>,
        <a href="https://www.dma.org/">Dallas Museum of Art</a>,
        <a href="https://www.dorotheum.com/en/">Dorotheum</a>,
        <a href="https://www.freersackler.si.edu/">Freer | Sackler</a>,
        <a href="https://www.hermitagemuseum.org">The State Hermitage Museum</a>,
        <a href="https://www.mak.at/en">MAK Vienna</a>,
        <a href="https://www.metmuseum.org/">The Metropolitan Museum of Art</a>,
        <a href="https://artsmia.org/">Minneapolis Institute of Art</a>,
        <a href="https://philamuseum.org/">Philadelphia Museum of Art</a>,
        <a href="https://www.rijksmuseum.nl/en">Rijksmuseum</a>,
        <a href="https://www.si.edu">The Smithsonian</a>,
        <a href="https://www.sothebys.com/en/">Sotheby's</a>,
        <a href="https://www.vam.ac.uk/">Victoria and Albert Museum</a>, and
        <a href="https://www.woolleyandwallis.co.uk/">Woolley & Wallis</a>.
      </p>
    </div>

    <h5 class="title is-5">Running StyleGAN</h5>
    <div class="content">
      <p>
        StyleGAN was run on an 8 vCPU, 30GB RAM
        <a href="https://jupyter.org/">Jupyter Notebook</a> (CUDA 10.0)
        instance 
        with a single NVIDIA Tesla P100 
        hosted on
        <a href="https://cloud.google.com/products/ai/">Google Cloud's AI Platform</a>.
      </p>
      <p>
        Before following the StyleGAN guide at 
        <a href="https://www.gwern.net/Faces">Making Anime Faces With StyleGAN</a>,
        I needed to upgrade Python to version 3.6 (required for StyleGAN).
      </p>
    </div>

    <h5 class="title is-5">Website</h5>
    <div class="content">
      <p>
        The website itself is a <a href="https://vuejs.org/">Vue.js</a> Single-Page Application (SPA)
        initialized with 
        <a href="https://cli.vuejs.org/">Vue CLI</a> using <a href="https://router.vuejs.org/">Vue Router</a>
        with <a href="https://bulma.io/">Bulma</a> providing a light but fully-functional CSS framework.        
        The statically-generated site files are hosted on  <a href="https://pages.github.com/">Github Pages</a>.
      </p>
      <p>
        The set of 38,200 "Original" images used for training as well as the 100,000 "Fake" generated images are 
        stored in <a href="https://aws.amazon.com/s3/">Amazon S3 buckets</a> 
        with filenames comprised of zero-padded, consecutive ID's (e.g. "0000001.jpg", "0000002.jpg", "0000003.jpg", etc.).
        To generate the randomized galleries, 
        the Vue gallery component simply selects from an array of randomized image ID's (from 1 to the maximum).
      </p>
    </div>

    <h5 class="title is-5">Next Steps</h5>
    <div class="content">
      <ul>
        <li>
          Re-scrape images from original dataset, but this time: 
          <ul>
            <li>
              Use only a white background color instead of trying to match the photo background, and 
            </li>
            <li>
              Save metadata information, most importantly the origin URL, 
              either encoded into the JPEG's IPTC/EXIF header or as a separate companion metadata file.
              This metadata should be displayed in the "Originals" section of the website,
              with links to the original URLs.
            </li>
          </ul>
        </li>
        <li>
          Create datasets for other classes of "vessels" other than vases:  cups, bowls, dishes, etc.
        </li>
        <li>
        </li>
      </ul>
      <p>
        :
      </p>
    </div>
  </div>
</template>


<style lang="scss">
.about-container {
  margin: 90px 30px;
}
</style>