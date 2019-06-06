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
            In a continuous feedback-loop, the Generator creates "fakes" that will be judged by the Discriminator
            as being "real" or "fake", and both parts improve as time goes on.  
            Eventually the Generator becomes a "Master" and can create the images on this website.
          </p>
          <p>
            As extremely powerful ML software like StyleGAN are released and become more user-friendly,
            artists will have new tools with which to understand their craft and create new work.  
          </p>
          <p>
            <em>
            Note: I am by no means a machine-learning expert.
            For those of you who are actually experts in 
            the fields of AI and ML, I apologize in advance for poor generalizations and oversimplifications,
            and I hope that you will notify me of any mistakes.  -<a href="http://derekau.net">Derek</a>
            </em>
          </p>
        </div>
        <div class="column is-two-fifths">
          <figure class="image">
            <img src="/img/forms3.jpg" alt="From a book of forms. Jingdezhen, China, 2008.">
            <figcaption>
              From a book of forms. Jingdezhen, China, 2008.
            </figcaption>
          </figure>
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
      <div class="columns">
        <div class="column">
          <p>
            <a href="https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA">Computerphile</a> 
            has a high-level overview of <a href="https://www.youtube.com/watch?v=Sw9r8CL98N0">Generative Adversarial Networks (GANs) here</a>.
          </p>
          <p>
            Perhaps the easiest way to visualize how StyleGAN works is to watch the original video: <a href="https://www.youtube.com/watch?v=kSLJriaOumA">"A Style-Based Generator Architecture for Generative Adversarial Networks"</a>.
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
            Beginning in February of 2019 with Phillip Wang's 
            <a href="http://thispersondoesnotexist.com">This Person Does Not Exist</a>,
            a number of websites sprouted up to showcase the power of StyleGAN trained on
            various image datasets:  <a href="http://thesecatsdonotexist.com/">cats</a>, 
            <a href="https://www.thiswaifudoesnotexist.net/">anime characters</a>, 
            <a href="https://thisrentaldoesnotexist.com/">Airbnb rooms</a>, 
            etc.
          </p>
        </div>
        <div class="column is-two-fifths">
          <a href="https://www.youtube.com/watch?v=kSLJriaOumA">        
            <figure class="image">
              <img src="/img/stylegan.jpg" alt="">
              <figcaption>
                Samples of faces generated by StyleGan.  None of these people exist.
              </figcaption>
            </figure>
          </a>
          <a href="https://www.youtube.com/watch?v=kSLJriaOumA">        
            <figure class="image">
              <img src="/img/stylegan2.jpg" alt="">
              <figcaption>
                Video showing how styles of various coarseness can be mixed.
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>

    <h5 class="title is-5">Creating a dataset</h5>
    <div class="content">
      <p>
        <a href="https://github.com/NVlabs/stylegan/">StyleGAN</a> requires relatively large datasets of images.
        Datasets are usually comprised of images of the same "thing"- human faces, cars, bedrooms, cats, anime characters, etc.
        (The <a href="https://arxiv.org/abs/1812.04948">original Stylegan paper</a> used a dataset of 70,000 
        <a href="https://github.com/NVlabs/ffhq-dataset">high-quality images of human faces</a>.)
      </p>
      <p>
        I focused on a single form, the <em>"vase"</em>, in order to keep the dataset relatively simple.
        Including all types  of "vessels"- cups, bowls, dishes, etc.- would have resutled in 
        far too much variation, especially if I wanted to keep the dataset less than a few
        tens of thousands of images in size.
        Vases also have an advantage in that they are usually photographed 
        from the same angle (from the front and slightly elevated).
      </p>
      <p>
        Having said that, there is a <em>huge</em> amount of variation even within vases.
        I could have limited the dataset even further by including only <em>ceramic</em>
        vases, however I'm very interested in seeing the cross-pollination between vases 
        of different materials- porcelain, glass, wood, metal, etc.
        (For an excellent example of the influence of various craft traditions upon one another, see the
        <a href="http://www.sothebys.com/en/auctions/2008/masterpieces-of-chinese-precious-metalwork-early-gold-and-silver-early-chinese-white-green-and-black-wares-l08211.html">Masterpieces of Chinese Precious Metalwork, Early Gold and Silver; Early Chinese White, Green and Black Wares</a>
        auction from Sotheby's.)
      </p>
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img src="/img/sothebys1.jpg" alt="">
            <figcaption>
              <a href="http://www.sothebys.com/en/auctions/ecatalogue/2008/masterpieces-of-chinese-precious-metalwork-early-gold-and-silver-early-chinese-white-green-and-black-wares-l08211/lot.53.html">
                A FINE SMALL PARCEL-GILT SILVER BOWL
              </a>
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img src="/img/sothebys2.jpg" alt="">
            <figcaption>
              <a href="http://www.sothebys.com/en/auctions/ecatalogue/2008/masterpieces-of-chinese-precious-metalwork-early-gold-and-silver-early-chinese-white-green-and-black-wares-l08211/lot.220.html">
                A WHITE STONEWARE PRUNUS-FLOWER BOWL TANG/FIVE DYNASTIES
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
      <p>
        I was worried of having too small of a dataset and the possibility that the StyleGAN
        software might just end up memorizing the whole thing.  
        So I ended up scraping a variety of websites until I had around 50k images.
        I bypassed Google Images for a number of reasons: 
        <ul>
          <li>
        images of "vases" are too varied, many are filled with flowers or have complicated backgrounds,
          </li>
          <li>
        <a href="https://github.com/hardikvasa/google-images-download">google-images-download</a>
        (the only reliable downloader I could find) only seems to be able to download 600 images per query,
        and breaks down after the first 100 when doing more complicated domain-based searches,
          </li>
          <li>
        I couldn't guarantee I wasn't just downloading a lot of duplicate images on each 
        variation of my search parameters.
          </li>
        </ul>
      </p>
      <p>
        Using Flickr as a source had the same issues and Google Images.  
        So instead I focused on museums and auction houses, where I could download enter
        image sets for "vases" and be assured of high-quality images shot against a simple backgrounds.
        Because each site is quite different, 
        I restored to a variety of scraping tools, from home-grown shell, Python and PHP scripts to more
        powerful tools like <a href="https://scrapy.org/">Scrapy</a>.        
        The output of all of my scripts is simply dumping image URL's to text files.
        Then, a set of shell scripts iterates through each URL:
      </p>
      <ol>
        <li>
          Download the image file with wget to a local file with a unique filename.
        </li>
        <li>
          Use ImageMagick convert to resize the image to exact dimensions of 1024 x 1024,
          fill in unused space with white canvas, 
          adjust image DPI, colorspace, and quality (can be lower than 90 to save space).
          <br/>
          <code>
            convert &quot;./$img_filename&quot; -resize 1024x1024 -gravity center -extent 1024x1024 -background white -density 72 -set colorspace sRGB -quality 90 &quot;./$img_filename&quot;
          </code>
        </li>
        <li>
          Store the original source URL as an IPTC metadata field in the image file itself
          using <a href="https://github.com/exiftool/exiftool">exiftool</a>.
        </li>
      </ol>
      <p>
        These sets of images were then manually reviewed, and I tried to clean up the data as best as
        possible.  About 20% of the images were removed for being unrelated (shards, paintings of vases, etc.),
        poor quality, bad angle, etc.
        I used <a href="https://github.com/Jetsetter/dhash">dhash</a> to quickly eliminate duplicate images.
      </p>
      <p>
        The "Originals" dataset of photos come from a variety of museum and auction house websites including:
        <a href="https://www.adriansassoon.com/">Adrian Sassoon</a>,
        <a href="https://www.artcurial.com">Artcurial</a>,
        <a href="https://www.artic.edu/">Art Institute of Chicago</a>,
        <a href="https://www.artsy.net/">Artsy</a>,
        <a href="https://www.bonhams.com/">Bonhams</a>,
        <a href="https://britishmuseum.org/">The British Museum</a>,
        <a href="https://www.bukowskis.com/en">Bukowskis</a>,
        <a href="http://www.cguardian.com">China Guardian</a>,
        <a href="https://www.christies.com/">Christies</a>,
        <a href="https://www.cmog.org">Corning Museum of Glass</a>,
        <a href="https://www.dma.org/">Dallas Museum of Art</a>,
        <a href="https://www.dorotheum.com/en/">Dorotheum</a>,
        <a href="http://doyle.com/">Doyle</a>,
        <a href="http://freemansauction.com/">Freeman's</a>,
        <a href="https://www.freersackler.si.edu/">Freer | Sackler</a>,
        <a href="https://www.harvardartmuseums.org/">Harvard Art Museums</a>,
        <a href="https://www.hermitagemuseum.org">The State Hermitage Museum</a>,
        <a href="https://chait.com">I.M. Chait</a>,
        <a href="https://www.lyonandturnbull.com/">Lyon and Turnbull</a>,
        <a href="https://www.maaklondon.com/">Maak London</a>,
        <a href="https://www.mak.at/en">MAK Vienna</a>,
        <a href="https://www.mfa.org/">Boston Museum of Fine Arts</a>,
        <a href="https://www.metmuseum.org/">The Metropolitan Museum of Art</a>,
        <a href="https://artsmia.org/">Minneapolis Institute of Art</a>,
        <a href="https://philamuseum.org/">Philadelphia Museum of Art</a>,
        <a href="https://www.phillips.com/">Phillips</a>,
        <a href="https://www.polyauction.com.hk/en/">Poly Auction</a>,
        <a href="https://www.rijksmuseum.nl/en">Rijksmuseum</a>,
        <a href="https://www.si.edu">The Smithsonian</a>,
        <a href="https://www.sothebys.com/en/">Sotheby's</a>,
        <a href="https://www.vam.ac.uk/">Victoria and Albert Museum</a>,
        <a href="https://www.woolleyandwallis.co.uk/">Woolley & Wallis</a>, and 
        <a href="https://www.wright20.com/">Wright</a>.
      </p>
      <p>
        The final, edited dataset is approximately 38,000 high-quality images.  
        However, due to the amount of variation in vases, I think it would be better to use a larger
        dataset of perhaps 100k images.
        Unfortunately I couldn't think of any more museums and auction houses with large collections.
        If you are aware of other sources for high-quality images of vases (or even other vessels),
        please <a href="http://derekau.net/about/">contact me</a>. 
      </p>
    </div>

    <h5 class="title is-5">Running StyleGAN</h5>
    <div class="content">
      <p>
        I ended up running StylGAN multiple times- first at 512x512px 
        just to test the system, then at 1024x1024px.  
        As noted in gwern's guide, perhaps the most important and time-consuming part of the
        process is obtaining a large, high-quality, clean dataset.  Due to various issues and 
        overlooked complications with the data, I ended up having to completely re-run the
        1024px model after manually combing through the images and removing as much junk as 
        I could.
      </p>
      <p>
        I initially ran StyleGAN on an 8 vCPU, 30GB RAM
        <a href="https://jupyter.org/">Jupyter Notebook</a> (CUDA 10.0)
        instance 
        with a single NVIDIA Tesla P100 
        hosted on
        <a href="https://cloud.google.com/products/ai/">Google Cloud's AI Platform</a>.
        Once the resolution reached 1024x1024 and iterations started taking more time
        (approximately 2 hours between ticks), I stopped the VM and reconfigured it to 
        use dual NVIDIA Tesla P100 GPU's.  This configuration costs more but effectively
        halves the amount of time needed.
      </p>
      <p>
        Before following the StyleGAN guide at 
        <a href="https://www.gwern.net/Faces">Making Anime Faces With StyleGAN</a>,
        I needed to upgrade Python to version 3.6.x (required for StyleGAN).
      </p>
      <p>
        As discussed in the post <a href="https://www.chrisplaysgames.com/gadgets/2019/02/26/training-at-home-and-in-the-cloud/">Training at Home, and in the Cloud</a>,
        training a StyleGAN model from scratch is time-consuming and expensive.
        Once I reached 9000 iterations, I was reaching my budget limit and still needed 
        enough computation time to generate samples.
        Also, from 8500-9000 iterations I noticed that progress had drastically slowed,
        and I was getting the "elephant wrinkles" that gwern describes.  Rather than 
        keep going, I hope to acquire a larger, cleaner dataset at a later date and try again.      
      </p>
      <p>
        For those of you who want to try generating samples or transfer learning, the resulting model
        at 8980 iterations is here:
        <a href="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/network-snapshot-008980.pkl">network-snapshot-008980.pkl</a>
      </p>
      <p>
        I'm not sure how to share the actual collection of originals due to copyright and size issues.
        The unique .tfrecord format datasets generated from the original images to be used by StyleGAN is 
        over 150G in size.
      </p>
    </div>

    <h5 class="title is-5">Generated Samples</h5>

    <div class="content">
      <p>
        The “truncation trick” with 10 random vessels with 𝜓 range: 1, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1.
        As gwern notes this illustrates "the tradeoff between diversity & quality, and the global average".
        The "global average" vessel forms the middle column of each image grid.
      </p>
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img src="/img/trunc1.jpg" alt="">
            <figcaption>
              𝜓 range: 1, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img src="/img/trunc2.jpg" alt="">
            <figcaption>
              𝜓 range: 1, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <h5 class="title is-5">Website</h5>
    <div class="content">
      <p>
        The website itself is a <a href="https://vuejs.org/">Vue.js</a> Single-Page Application (SPA)
        initialized with 
        <a href="https://cli.vuejs.org/">Vue CLI</a> using <a href="https://router.vuejs.org/">Vue Router</a>
        with <a href="https://bulma.io/">Bulma</a> providing a light but fully-functional CSS framework.  
        Infinite loading provided by the <a href="https://github.com/PeachScript/vue-infinite-loading">vue-infinite-loading</a> component.     
        Image IPTC metadata is read using <a href="https://github.com/exif-js/exif-js">exif-js</a>. 
        The statically-generated site files are hosted on  <a href="https://pages.github.com/">Github Pages</a>.
        (Because I'm using Github Pages, I've enabled vue-router's hash mode rather than the more elegant
        <a href="https://router.vuejs.org/guide/essentials/history-mode.html">history mode</a>.)
      </p>
      <p>
        Rather than bear the cost of an expensive GPU-powered server to 
        dynamically generate sampled images, like other "This X does not exist" sites I simply
        statically generated a number of images (40,000) and store the image files
        in Amazon S3.  After playing around with different StyleGAN settings, I ended up
        using the same setting as gwern for the hyperparameter 𝜓, 0.6.
      </p>
      <p>
        The set of 38,700 "Original" images used for training as well as the 40,000 "Fake" generated images are 
        stored in <a href="https://aws.amazon.com/s3/">Amazon S3 buckets</a> 
        with filenames comprised of zero-padded, consecutive ID's (e.g. "0000001.jpg", "0000002.jpg", "0000003.jpg", etc.).
        To generate the randomized galleries, 
        the Vue gallery component simply selects from an array of randomized image ID's (from 1 to the maximum).
      </p>
      <p>
        I have encoded the source URL in IPTC metadata embedded within each "Original" image.
        When the image is clicked, <a href="https://github.com/exif-js/exif-js">exif-js</a>
        reads the IPTC data and a clickable link to the original URL is displayed.
      </p>
    </div>

    <h5 class="title is-5">Next Steps</h5>
    <div class="content">
      <ul>
        <li>
          Save more metadata information about each "Original" image, including original web page with
          link to more information.
        </li>
        <li>
          Explore Generator "Styles" with filters and develop a tool that allows artists to explore form.
          For example,  create a Blue & White vase in Glass?  Explore how mixing various materials & 
          techniques can lead to new creative possibilities.  Attempt crossbreeding with different models.
        </li>
        <li>
          Expand "Vases" dataset, ideally to around 100k images.
        </li>
        <li>
          Use the original snapshot for transfer learning on subsets of Vases images, for example
          Chinese Blue & White, Copper Red Glazes, etc.
        </li>
        <li>
          Create datasets for other classes of "vessels" other than vases:  cups, bowls, dishes, etc.
        </li>
      </ul>
    </div>

    <h3 class="title is-3">Donate!</h3>
    <div class="content">
      <p>
        Creating the datasets and running the servers for this project costs weeks of time and hundreds of dollars in server fees.
        Further exploration (see "Next Steps") will require even more investment.
        To continue supporting this website as well as my other projects like
        <a href="https://glazy.org">Glazy</a>, the <a href="https://wiki.glazy.org">GLazy Wiki</a>, <a href="http://72hands.org/">72 Hands</a>, and others, 
        please consider donating via
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=VN8HBLPQG6N3E&currency_code=USD&source=url">
            Paypal
        </a>
        or
        <a href="https://www.patreon.com/bePatron?u=5941215">
            Patreon.
        </a>
      </p>
      <p>
        <a class="donation-link paypal-donation-link" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=VN8HBLPQG6N3E&currency_code=USD&source=url">
          <img src="/img/icon/PaypalBig.png" width="145" height="44"/>
        </a>
        <a class="donation-link" href="https://www.patreon.com/bePatron?u=5941215">
          <img src="/img/icon/PatreonBig.png" width="187" height="44"/>
        </a>
      </p>
    </div>

  </div>
</template>


<style lang="scss">
.about-container {
  margin: 90px 30px;
}
.donation-link img:hover {
  opacity: 0.85;
}
.paypal-donation-link {
  padding-right: 40px;
}
</style>