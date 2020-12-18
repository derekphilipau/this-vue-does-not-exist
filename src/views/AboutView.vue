<template>
  <div class="container about-container">
    <section class="section">
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
              <img src="/img/v1/forms3.jpg" alt="From a book of forms. Jingdezhen, China, 2008.">
              <figcaption>
                From a book of forms. Jingdezhen, China, 2008.
              </figcaption>
            </figure>
            <figure class="image">
              <img src="/img/v1/fakes.jpg" alt="Imitation qingbai ware. Jingdezhen, China, 2008.">
              <figcaption>
                Imitation qingbai ware. Jingdezhen, China, 2008.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
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
              excellent <em><a href="https://www.gwern.net/Faces">Making Anime Faces With StyleGAN</a></em>
              introduces the original research paper,
              <em>"A Style-Based Generator Architecture for Generative Adversarial Networks", Karras et al 2018</em>
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
                <img src="/img/v1/stylegan.jpg" alt="">
                <figcaption>
                  Samples of faces generated by StyleGan.  None of these people exist.
                </figcaption>
              </figure>
            </a>
            <a href="https://www.youtube.com/watch?v=kSLJriaOumA">        
              <figure class="image">
                <img src="/img/v1/stylegan2.jpg" alt="">
                <figcaption>
                  Video showing how styles of various coarseness can be mixed.
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h4 class="title is-4">StyleGAN 1, June 2019</h4>

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
              <img src="/img/v1/sothebys1.jpg" alt="">
              <figcaption>
                <a href="http://www.sothebys.com/en/auctions/ecatalogue/2008/masterpieces-of-chinese-precious-metalwork-early-gold-and-silver-early-chinese-white-green-and-black-wares-l08211/lot.53.html">
                  A FINE SMALL PARCEL-GILT SILVER BOWL
                </a>
              </figcaption>
            </figure>
          </div>
          <div class="column">
            <figure class="image">
              <img src="/img/v1/sothebys2.jpg" alt="">
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
          So instead I focused on museums and auction houses, where I could download entire
          image sets for "vases" and be assured of high-quality images shot against a simple backgrounds.
          Because each site is quite different, 
          I resorted to a variety of scraping tools, from home-grown shell, Python and PHP scripts to more
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
          Once I reached 9000 kimg, I was reaching my budget limit and still needed 
          enough computation time to generate samples.
          Also, from 8500-9000 kimg I noticed that progress had drastically slowed,
          and I was getting the "elephant wrinkles" that gwern describes.  Rather than 
          keep going, I hope to acquire a larger, cleaner dataset at a later date and try again.      
        </p>
        <p>
          For those of you who want to try generating samples or transfer learning, the resulting model
          at 8980 kimg is here:
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
            <ModalImage 
              imgUrl="/img/v1/trunc1.jpg"
              caption="𝜓 range: 1, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1" 
              />
          </div>
          <div class="column">
            <ModalImage 
              imgUrl="/img/v1/trunc2.jpg"
              caption="𝜓 range: 1, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1" 
              />
          </div>
        </div>
      </div>

      <h5 class="title is-5"><em>Qinghua</em> (Blue & White)</h5>
      <div class="content">
        <p>
          Interested to see the effect of using a more limited dataset to train the model,
          I created a new collection of images that only included Chinese Blue & White 
          (<em>qinghua</em>) vessels.  
          (It's possible that some Dutch Delftware and Japanese Arita-ware snuck in.)
          This new set was much smaller, only around 2,800 images.
          Using <em>transfer learning</em>, I started the 
          StyleGAN software with the original vessels .pkl model 
          (<a href="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/network-snapshot-008980.pkl">network-snapshot-008980.pkl</a>)
          and trained against the new, limited dataset of only Blue & White.
          After just one round of training I was already getting very good results,
          but I kept the training going for 10 rounds until the next network snapshot .pkl file
          was written.  Then, using the new network snapshot I generated images and videos.
        </p>

        <p>
          The Blue & White model at 8980 iterations is here:
          <a href="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/network-snapshot-009180.pkl">network-snapshot-009180.pkl</a>
        </p>
        
        <div class="columns">
          <div class="column">
            <ModalImage 
              imgUrl="/img/v1/qhtrunc1.jpg"
              caption="𝜓 range: 1, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1" 
              />
          </div>
          <div class="column">
            <ModalImage 
              imgUrl="/img/v1/qhtrunc2.jpg"
              caption="𝜓 range: 1, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1" 
              />
          </div>
        </div>
      </div>

      <h5 class="title is-5">Diverse</h5>
      <div class="content">
        <p>
          gwern's <a href="https://www.gwern.net/Faces">article</a> describes the
          𝜓/“truncation trick”, which is an important, adjustable parameter for generating images with StyleGAN.
          While most of the images on this website have 𝜓 set to 0.6 (which gives reasonable if boring results),
          more diverse and distorted images can be generated with 𝜓 at higher numbers.  The "Diverse" section
          of this website showcases images generated with 𝜓 set at either 1.0 or 1.2.
          Although there are more artifacts and unrealistic-looking results, many of the images are 
          more interesting for their artistic possibilities and unusual combination of influences.
          At times these more diverse images achieve a nostalgic, dreamlike, and painterly quality 
          that I find very interesting.
        </p>

        <ModalImage 
          imgUrl="/img/v1/diverse1.jpg"
          caption="Some favorite results from the diverse set." 
          />

        <ModalImage 
          imgUrl="/img/v1/diverse2.jpg"
          caption="Some favorite results from the diverse qinghua set." 
          />

      </div>
    </section>


    <section class="section">
      <h4 class="title is-4">StyleGAN 2, April 2020</h4>
      <div class="container">
        <div class="notification">
          <div class="content">
            <p>
              In December 2020, the Nvidia team released <a href="https://github.com/NVlabs/stylegan2">version 2 of StyleGAN</a>
              which offered better performance than version 1, and released a companion paper,
              <em><a href="https://arxiv.org/abs/1912.04958">"Analyzing and Improving the Image Quality of StyleGAN"</a></em>.
            </p>
            <p>
              Excellent article about running StyleGAN2 by Zalando Dublin here: 
              <em><a href="https://towardsdatascience.com/stylegan-v2-notes-on-training-and-latent-space-exploration-e51cf96584b3">StyleGAN v2: notes on training and latent space exploration</a></em>
            </p>
          </div>
        </div>
      </div>
      <p>&nbsp;</p>

      <h5 class="title is-5 mt-4">This Glaze Does Not Exist.</h5>

      <div class="content">
        <p>
          Out of curiosity and as a test run of StyleGAN2, I created a dataset of about 15,000 public images from <a href="https://glazy.org">Glazy</a>
          I manually removed a number of images that included hands & fingers, complex background elements, and other disqualifying characteristics.
          However, the remaining images still included a wide variation of not only colors and surfaces, but also shapes of glaze test tiles.
          I used ImageMagick convert to precisely resize the images to 512x512 pixels in dimension, 
          then used identify to verify that all images were in the correct sRGB colorspace. 
          Finally I ran StyleGAN2's dataset_tool.py to create the multi-resolution datasets.
        </p>
        <p>
          I again used <a href="https://cloud.google.com/products/ai/">Google Cloud's AI Platform</a> on a server with a single Nvidia V100 GPU.
          I encountered some issues with the server environment, my advice is to just follow the Requirements
          section of the <a href="https://github.com/NVlabs/stylegan2">StyleGAN2</a> documentation and ensure you are running the exact same versions of CUDA, CuDNN, TensorFlow, Python, etc.
          Otherwise you might spend a lot of time fixing dependencies and dealing with version conflicts like I did.
        </p>
        <p>
          I trained a new network from scratch using configuration "E":
          <code>
            python stylegan2-master/run_training.py --num-gpus=1 --data-dir=datasets --config=config-e --dataset=glaze --total-kimg=10000
          </code>
        </p>
        <p>
          Given this poor dataset, I was not optimistic.  
          But after only a few hundred iterations the results were already very promising.
          At around 800 kimg the images were already good enough as a proof of concept,
          and I stopped training.
        </p>

        <ModalImage 
          imgUrl="/img/v2/glazes.jpg"
          caption="Curated images with 𝜓 1.0 generated using the network trained for 782 iterations against the Glazy glaze test dataset." 
          />

      </div>

      <h5 class="title is-5">"This Vessel Does Not Exist" Version 2</h5>

      <div class="content">
        <p>
        </p>
        <p>
        </p>
        <p>
          I trained a new network from scratch using configuration "E":
          <code>
            python stylegan2-master/run_training.py --num-gpus=1 --data-dir=datasets --config=config-e --dataset=glaze --total-kimg=10000
          </code>
        </p>
        <p>
        </p>

        <ModalImage 
          imgUrl="/img/v2/earlyiteration.jpg"
          caption="Generated images from an early model after only 120 iterations." 
          />

        <ModalImage 
          imgUrl="/img/v2/stylemix.jpg"
          caption="Mixing styles with the StyleGAN2 10000Kimg model." 
          />

      </div>


      <h5 class="title is-5">Transfer Learning</h5>

      <div class="content">


        <ModalImage 
          imgUrl="/img/v2/greek-0.8.jpg"
          caption="Greek vessels dataset of ~2,000 images trained for 120 Kimg against the 10,000 Kimg vases model." 
          />

        <p>
          To test transfer learning against my new StyleGAN2 model, I looked for a dataset with 
          similar symmetry and color range as the vases dataset.  I happened upon 
          <a href="https://twitter.com/karim_douieb/status/1229903297378766854">this tweet by Karim Douïeb</a>
          which led me to a beautiful set of photos which were perfectly suited for my purpose,
          <a href="https://www.flickr.com/photos/coleoptera-us/albums/72157607363771409">"Beetles of the World" by Udo Schmidt</a>.
          (Licensed <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>)
        </p>

        <p>
          After just training 60 Kimg using the vases 10,000 Kimg model, StyleGAN2 was already producing beautiful 
          beetles.  After 180 Kimg the results were so good that I just stopped training.
        </p>

        <ModalImage 
          imgUrl="/img/v2/beetles_fakes010060.jpg"
          caption="Beetles dataset of ~4000 images trained for only 60 Kimg against the 10,000 Kimg vases model." 
          />

        <ModalImage 
          imgUrl="/img/v2/beetles_fakes010180.jpg"
          caption="Same Beetles dataset after training for 180 Kimg." 
          />

        <ModalImage 
          imgUrl="/img/v2/010180_psi0.8_samples.jpg"
          caption="Selected beetle samples at 180 Kimg, 𝜓 0.8" 
          />

      </div>

    </section>


    <h5 class="title is-5">Beetlevase</h5>

    <div class="content">

      <p>
      </p>

      <video autoplay loop muted playsinline>
        <source src="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/v2/beetlevase/beetlevase1.m4v" type="video/mp4">
      </video>



      <p>
      </p>

      <ModalImage 
        imgUrl="/img/v2/beetlevases.jpg"
        caption="Beetle/Vase hybrids created using transfer learning.  60 Kimg, 𝜓 1.2" 
        />

    </div>

    <section class="section">
      <h4 class="title is-4">GPT-3, July 2020</h4>
      <div class="container">
        <div class="content">
          <p>
            GPT-3 is a huge 175 billion parameter language model from OpenAI that creates responses to short textual inputs.
            To learn more about GPT-3, see <a href="https://www.gwern.net/GPT-3">gwern's article here</a>.
            I'm still waiting to get access to <a href="https://beta.openai.com/">OpenAI's GPT-3 API</a>. 
            In the meantime, I've been accessing the model via
            <a href="https://play.aidungeon.io/">AI Dungeon's</a> amazing text adventure game.
            (It's kind of like an endless "Choose Your Own Adventure" book, with various genres like Cyberpunk and Fantasy.)
            In order to access the GPT-3 model, once you join AI Dungeon you'll need to open Settings and turn on "Dragon" Mode.
          </p>
          <p>
            Here are some of the responses to my questions about Ceramics and Art.  (My input in bold.)
          </p>
          <h5 class="title is-5">Story #1</h5>
          <div style="font-family: monospace;">
            <p>
              <strong>> You say "Please tell me what kind of art I should make."</strong>
            </p>
            <p>
              I think that if we are to be great artists, then we should start by sculpting something that is dear to us. It can be something from our imagination or an object we find.
            </p>
            <p>
              <strong>> You say "What is dear to me?"</strong>
            </p>
            <p>
              That's a good question! I think that whatever you sculpt will need to be something that is dear to you on some level. Let me think of an example.
            </p>
            <p>
              You: What if we sculpt a plate?
            </p>
            <p>
              Friend: A plate? That's something we see every day. Why would we want to sculpt something ordinary like that? I think we should sculpt something more interesting!
            </p>
            <p>
              You: But not everything is interesting to look at. Not everything is pretty or exciting or funny or thrilling. Sometimes, things are just there.
            </p>
            <p>
              Friend: Maybe you're right. Maybe a plate is something that is dear to us. Not just because we use it every day, but because it's something that brings us nourishment. Something that gives us strength. Something that will hold the food that will give us energy to sculpt more! Let's sculpt a plate!
            </p>
            <p>
              You both grab some clay and get to work.
            </p>
          </div>

          <h5 class="title is-5 mt-4">Story #2</h5>
          <div style="font-family: monospace;">
            <p>
              You stare in awe at the old man. How can he be so powerful? He's not a magician. He's a potter!
            </p>
            <p>
              "No!" you cry out in anguish. "It is too terrible a magic!"
            </p>
            <p>
              The old man pauses and looks up at you for the first time. He stares at you with his dark eyes, unblinking. Then he resumes his work, speaking softly as before.
            </p>
            <p>
              "What do you think I have been doing all these years, child? Do you think I have been shaping clay during all this time? No. I have been creating life.
            </p>
            <p>
              "These are not pots I shape. The pots themselves are incidental. I am giving life to the inanimate, and that is a magic not to be undertaken lightly. It is a holy art.
            </p>  
          </div>

          <h5 class="title is-5 mt-4">Story #3</h5>
          <div style="font-family: monospace;">
            <p>
              You begin work on your new style of pottery. You create a cup with black glaze. You put it in the kiln and fire it. When you open it, the cup is gone. Only gray ash remains.
            </p>
            <p>
              You try again, making a jug with a tan glaze. You fire it and once again, it disappears.
            </p>
            <p>
              <strong>> You say "Why did the pottery disappear?"</strong>
            </p>
            <p>
              You begin again, this time making a pot with a green glaze. It, too, disappears when you put it in the kiln.
              What will you do next?
            </p>
            <p>
              <strong>> You create a new pot, but this time with a white glaze.</strong>
            </p>
            <p>
              You create a pot with a white glaze. When you put it in the kiln, it shatters.
            </p>
            <p>
              The rest of your days are spent as an accountant.
            </p>
          </div>

        </div>
      </div>
      <p>&nbsp;</p>
    </section>

    <section class="section">
      <h4 class="title is-4">This inspirational art quote does not exist.</h4>
      <div class="container">
        <div class="content">
          <p>
            After prompting the GPT-3 with real quotes by famous artists like <em>"Art is a line around your thoughts"</em> (Gustav Klimt) 
            and <em>"To be an artist is to believe in life"</em> (Henry Moore), GPT-3 responded with a wide range of its own quotes.  
            A small percentage of the generated quotes were plagiarised 
            (<em>"We don’t make mistakes, just happy little accidents."</em> – Bob Ross).  
            Most of the quotes were trite cliches like <em>"A picture speaks more than words ever can."</em>
          </p>
          <p>
            Out of about 40 responses, here are three of the more interesting quotes.  
            I have attempted to verify they are not plagiarized by searching Google for 
            the entire quotes as well as sentence fragments.
          </p>
          <div class="columns">
            <div class="column">
              <ModalImage 
                imgUrl="/img/quotes/20200731-GPT3-quotes-1.jpg"
                caption="GPT-3 Generated Inspirational Art Quote" 
                />
            </div>
            <div class="column">
              <ModalImage 
                imgUrl="/img/quotes/20200731-GPT3-quotes-2.jpg"
                caption="GPT-3 Generated Inspirational Art Quote" 
                />
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <ModalImage 
                imgUrl="/img/quotes/20200731-GPT3-quotes-3.jpg"
                caption="GPT-3 Generated Inspirational Art Quote" 
                />
            </div>
            <div class="column">
            </div>
          </div>
        </div>
      </div>
      <h5>December 2020 update</h5>
      <div class="container">
        <div class="content">
          <p>After receiving access to a trial of the OpenAI API, I rewrote my prompts
            for generating fake quotes and received some more interesting responses.
          </p>
          <p>
            Some of these quotes are partial plagiarisms or based on patterns found in real quotes.  
            For example "Art is the objectification of feeling" is attributed to Herman Melville, 
            while "Art is the objectification of feeling, and the subjectification of nature" 
            is attributed to Susanne Langer.  
            GPT-3 came up with its own version:  
            "Art is the objectification of imagination seen through the eyes of empathy."
          </p>
          <p>
            Below are some curated examples.  Click the thumbnail for larger version.  "Click to reload"
            will show a new randomized selection.
          </p>
        </div>
          <RandomGallery 
            fileExtension='jpg'
            imgBaseUrl='/img/gpt-3-quotes/'
            :idLength=2
            :minId=1
            :maxId=42
            :pageSize=10
            :initialPageSize=10
            :isInfinite="false"
            :isEmbedded="true"
            />
      </div>
    </section>

    <section class="section">
      <h4 class="title is-4">GPT-2, December 2020</h4>
      <div class="container">
        <div class="content">
          <p>
            Having been on the GPT-3 API waitlist for months, I finally just decided to fine-tune the older and smaller
            GPT-2 355M model using over 10,000 public Glazy recipes as training data.
            Although the loss was still going down after 6,000 steps, I stopped training at that point as I noticed more
            duplicates being generated and I was afraid of overfitting my relatively small dataset.
          </p>
          <p>
            As always, Gwern has a wonderful article, <a href="https://www.gwern.net/GPT-2">GPT-2 Neural Network Poetry</a>.
            For training I followed Max Woolf's article <a href="https://minimaxir.com/2019/09/howto-gpt2/">How To Make Custom AI-Generated Text With GPT-2</a>
            and used Max's wonderful <a href="https://colab.research.google.com/drive/1VLG8e7YSEwypxU-noRNhsv5dW4NfTGce">Colab Notebook</a>
          </p>
          <p>
            Sample recipe from training data:
            <pre>
RECIPE: Winokur Yellow
INGREDIENT: 53.2000	Potash Feldspar
INGREDIENT: 22.9000	Kaolin
INGREDIENT: 19.4000	Dolomite
INGREDIENT: 4.5000	Whiting
INGREDIENT: 16.9000	Zircopax
INGREDIENT: 3.5000	Tin Oxide
INGREDIENT: 1.4000	Red Iron Oxide</pre>
          </p>
          <p>
            I generated two sets of recipes, one with GPT-2 temperature set at 0.7 and one at 0.9.  The results for both
            sets were surprisingly good:  At first glance the recipes seemed "real" with proportional mixes of feldspars, 
            clays, silica, fluxes and colorants/opacifiers.  Even the total ingredient amounts added up to a reasonable
            number, usually in the range of 90-110%.  The duplication rate was about 5% for t=0.7 and 4.5% for t=0.9.
          </p>
          <p>
            Sample generated recipes (removing "RECIPE:" and "INGREDIENT:" tags):
            <pre>
Crawly Elsie's Matte-04
38.0000	EP Kaolin
28.0000	Gerstley Borate
19.0000	G-200 Feldspar
9.0000	Lepidolite
6.0000	Soda Ash
4.0000	Wollastonite

Ame-Sosa-Wenkel
38.0000	Nepheline Syenite
29.0000	Silica
12.0000	Colemanite
8.0000	Whiting
6.0000	Dolomite
5.0000	Barium Carbonate
2.0000	Bentonite
1.0000	Rutile
0.7500	Copper Carbonate

Amber Celadon
34.0000	Albany slip
20.0000	Custer Feldspar
13.0000	Silica
13.0000	Wollastonite
6.0000	Whiting
3.0000	EP Kaolin
3.0000	Gerstley Borate
3.0000	Rutile
2.0000	Red Iron Oxide

Craters
30.0000	Lithium Carbonate
30.0000	Silica
15.0000	Borax
10.0000	Zircopax
10.0000	Kaolin
5.0000	Bentonite
3.0000	Copper Carbonate</pre>
          </p>
          <p>
            Downloads:
            <br/>
            <a href="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/gpt-2/GPT-2_t0.7_no_duplicates.txt">Temperature 0.7 Generated Recipes</a>
            <br/>
            <a href="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/gpt-2/GPT-2_t0.9_no_duplicates.txt">Temperature 0.9 Generated Recipes</a>
          </p>
          <p>
            The next step was to load the GPT-2 generated recipes into Glazy in order to see their resulting analyses
            and visualize them on the Stull Chart.  I was surprised to find that, as with "real" glaze recipes, most of
            these generated recipes fell comfortably within the major Stull regions of Bright, Matte, and Semi-Matte.
            The set with temperature setting of 0.9 generated more variation.
          </p>
          <ModalImage 
            imgUrl="/img/gpt-2/StullCharts.jpg"
            caption="Generated recipes displayed in the Stull Chart." 
            />
          <p>
            Training against a subset of recipes, using only the cone 6 glazes, gave results with lower Silica and Alumina, as well as higher Boron.
          </p>
          <ModalImage 
            imgUrl="/img/gpt-2/StullChartsCone6.jpg"
            caption="Cone 6 generated recipes showing lower Silica & Alumina as well as higher levels of boron." 
            />
          <p>
            The obvious next step was to fire some of these "fake" recipes and create real glazes.
            Rather than randomly testing, I selected a few recipes that looked like they would fire to maturity
            at my chosen temperature and atmosphere, Orton cone 6 in Oxidation.  The results were all quite good,
            and I uploaded a couple to Glazy:
            <br/>
            <a href="https://glazy.org/recipes/111067">GPT-2 Yellow Textured</a>
            <br/>
            <a href="https://glazy.org/recipes/111070">GPT-2 Three's Company</a>
          </p>
          <ModalImage 
            imgUrl="/img/gpt-2/tests.jpg"
            caption="Selected generated recipes fired at Orton cone 6 in Oxidation." 
            />
          <p>
            Using <a href="https://github.com/derekphilipau/glazy-data">Glazy's public data (https://github.com/derekphilipau/glazy-data)</a>
            I attempted to associate glaze metadata (type, surface, transparency and temperature) with analyses.
          </p>
          <p>
            Input sample:
            <pre>
TYPE: Iron - Celadon
SURFACE: Glossy
TRANSPARENCY: Transparent
CONE: 9
SiO2: 66.12, Al2O3: 12.08, K2O: 3.13, Na2O: 0.84, MgO: 0.06, CaO: 12.67, Fe2O3: 0.16, CuO: 0.01, ZrO2: 0.26

TYPE: Clear
SURFACE: Glossy
TRANSPARENCY: Transparent
CONE: 8
SiO2: 53.49, Al2O3: 9.29, B2O3: 2.08, Li2O: 1.01, K2O: 0.29, Na2O: 1.11, MgO: 0.03, CaO: 0.12, BaO: 21.06, ZnO: 3.98, Fe2O3: 0.08, CuO: 0.01, ZrO2: 0.93</pre>
          </p>
          <p>
            Output sample:
            <pre>
TYPE: Glaze
SURFACE: N/A
TRANSPARENCY: N/A
CONE: 10
SiO2: 61.7, Al2O3: 8.74, B2O3: 4.26, K2O: 4.05, Na2O: 1.87, MgO: 0.52, CaO: 8.46, P2O5: 0.01, Fe2O3: 0.24, TiO2: 0.17

TYPE: Iron - Celadon - Blue
SURFACE: Glossy
TRANSPARENCY: Translucent
CONE: 9
SiO2: 61.75, Al2O3: 12.13, K2O: 3.16, Na2O: 0.98, MgO: 0.09, CaO: 10.90, Fe2O3: 0.72

TYPE: Blue - Cobalt
SURFACE: Glossy
TRANSPARENCY: Translucent
CONE: 9
SiO2: 61.44, Al2O3: 12.06, K2O: 2.75, Na2O: 0.93, MgO: 0.07, CaO: 11.31, Fe2O3: 0.72, CoO: 1.83, TiO2: 0.31

TYPE: Blue - Cobalt
SURFACE: Glossy
TRANSPARENCY: Translucent
CONE: 9
SiO2: 61.44, Al2O3: 12.06, K2O: 2.75, Na2O: 0.93, MgO: 0.07, CaO: 11.31, Fe2O3: 0.72, CoO: 2.33, TiO2: 0.31

TYPE: Specialty - Crawling
SURFACE: Glossy
TRANSPARENCY: Opaque
CONE: 6
SiO2: 51.63, Al2O3: 16.32, B2O3: 3.20, K2O: 2.63, Na2O: 2.25, MgO: 3.71, CaO: 2.96, P2O5: 0.10, Fe2O3: 0.60, CoO: 0.82, TiO2: 2.82

TYPE: Iron - Kaki, Tomato Red
SURFACE: Matte - Smooth
TRANSPARENCY: Opaque
CONE: 6
SiO2: 44.64, Al2O3: 12.17, B2O3: 3.06, K2O: 0.07, Na2O: 4.76, MgO: 3.96, CaO: 7.55, P2O5: 2.08, Fe2O3: 8.72, TiO2: 0.06</pre>
          </p>
          <p>
            Downloads: 
            <a href="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/gpt-2/gpt2_analyses3_0.9_20201213_082842.txt">Generated "fake" analyses</a>
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h4 class="title is-4">Website</h4>
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
        <p>
          The source code for this website is available on Github here:
          <a href="https://github.com/derekphilipau/this-vue-does-not-exist">https://github.com/derekphilipau/this-vue-does-not-exist</a>
        </p>
      </div>
    </section>

    <section class="section">
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
    </section>

    <section class="section">
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
    </section>


  </div>
</template>

<script>
import ModalImage from '../components/ModalImage.vue'
import RandomGallery from '../components/RandomGallery.vue'

export default {
  name: 'AboutView',
  components: {
    ModalImage,
    RandomGallery
  }
}
</script>

<style lang="scss">
.donation-link img:hover {
  opacity: 0.85;
}
.paypal-donation-link {
  padding-right: 40px;
}
</style>