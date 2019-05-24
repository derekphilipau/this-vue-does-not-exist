<template>
  <div class="container about-container">
    <h1 class="title is-1">This vessel does not exist.</h1>

    <div class="content">
      <p>
        <em>
        Note: I am by no means a machine-learning expert.
        As extremely powerful ML tools like StyleGAN are released and become more user-friendly,
        artists will have new tools with which to understand their craft and create new work.  
        For those of you who are actually experts in 
        the fields of AI and ML, I apologize in advance for poor generalizations and oversimplifications,
        and I hope that you will notify me of any mistakes.  -<a href="http://derekau.net">Derek</a>
        </em>
      </p>
    </div>

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
            Eventually the Generator becomes a Master and can create the images on this website.
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
        I restored to a variety of scraping tools, from home-grown shell and PHP scripts to more
        powerful tools like <a href="https://scrapy.org/">Scrapy</a>.
        The output of all of my scripts is simply dumping image URL's to text files.
        Then, a set of shell scripts iterates through each URL:
      </p>
      <ol>
        <li>
          Download the image file with wget to a local file with a unique filename.
        </li>
        <li>
          Use ImageMagick convert to resize the image dimensions, DPI, colorspace, quality, etc.
        </li>
        <li>
          Store a record associating the filename with the URL in a log file.
        </li>
      </ol>
      <p>
        These sets of images were then manually reviewed, and I tried to clean up the data as best as
        possible.  About 25% of the images were removed for being unrelated (shards, paintings of vases, etc.),
        poor quality, bad angle, etc.
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

    <h5 class="title is-5">Creating the Dataset</h5>
    <div class="content">
      <p>
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
      <figure class="highlight">
        <pre>
<code>#!/bin/bash
# Download a bunch of images from a file, convert them, and save a log.
# Input file (first command argument) should have one image URL per line.

timestamp() {
  date +&quot;%s&quot;
}

filename=$1
while read url; do
  echo $url
  my_time=$(timestamp)
  ext=&quot;.jpg&quot;
  img_filename=&quot;$my_time$ext&quot;
  echo $img_filename
  # Download the image file:
  wget --no-clobber $url --append-output=wgetoutput.log --output-document=$img_filename
  # Use Image Magick to convert the downloaded file:
  # * Resize to exact dimensions of 1024 x 1024.
  # * Fill in unused space with white canvas. 
  # * Adjust image DPI, colorspace, and quality (can be lower than 90 to save space).
  convert &quot;./$img_filename&quot; -resize 1024x1024 -gravity center -extent 1024x1024 -background white -density 72 -set colorspace sRGB -quality 90 &quot;./$img_filename&quot;
  # Make a record tying the downloaded filename to the original URL:
  echo &quot;$img_filename:$url&quot; &gt;&gt; completed.txt 
  sleep 1
done &lt; $filename</code>
        </pre>
      </figure>
    </div>

    <h5 class="title is-5">Next Steps</h5>
    <div class="content">
      <ul>
        <li>
          Re-scrape images from original dataset, but this time: 
          <ul>
            <li>
              Use only a white background color instead of trying to match the photo background. 
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
          Explore Generator "Styles" with filters and develop a tool that allows artists to explore form.
          For example,  create a Blue & White vase in Glass?  Explore how mixing various materials & 
          techniques can lead to new creative possibilities.  Attempt crossbreeding with different models.
        </li>
        <li>
          Create datasets for other classes of "vessels" other than vases:  cups, bowls, dishes, etc.
        </li>
        <li>
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
        <a class="donation-link" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=VN8HBLPQG6N3E&currency_code=USD&source=url">
          <img src="/img/icon/PaypalBig.png" width="145" height="44"/>
        </a>
        <a href="https://www.patreon.com/bePatron?u=5941215">
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
.donation-link {
  padding-right: 40px;
}
</style>