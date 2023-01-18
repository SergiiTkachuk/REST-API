/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "2132188875d994968ac4e4be321d1a10"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.d3e78b6a.css",
    "revision": "04d4ef077b832d6e3c4baf3ccda2ed66"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0fc950b8.js",
    "revision": "cee0c0c4b7f97f7f8e49ad9ccfe6213a"
  },
  {
    "url": "assets/js/11.b9dde3ce.js",
    "revision": "656a5ed610b75f3eb2c728cca996f75f"
  },
  {
    "url": "assets/js/12.ac69fbd3.js",
    "revision": "535aed542baecbd18a2a92ae9deda23d"
  },
  {
    "url": "assets/js/13.b8b886e6.js",
    "revision": "ad620f4f644d8b3f89254d29f5a61ff4"
  },
  {
    "url": "assets/js/14.c93c5e7e.js",
    "revision": "14a190beade816618707c580b89b9fac"
  },
  {
    "url": "assets/js/15.f53345d6.js",
    "revision": "0ea604f1ada1516498cd44afa9e058c3"
  },
  {
    "url": "assets/js/16.f975188a.js",
    "revision": "8abb55480262f4672bab17608e881b38"
  },
  {
    "url": "assets/js/17.d0413b69.js",
    "revision": "10c52b71c0568d8b095c44f3ea73f043"
  },
  {
    "url": "assets/js/18.e00f4944.js",
    "revision": "072555d0d808e9d77fa72c1fd0d4b052"
  },
  {
    "url": "assets/js/19.23b3dce4.js",
    "revision": "8943138e77dfec339bc7fea5deb3f84a"
  },
  {
    "url": "assets/js/2.f4cfd74f.js",
    "revision": "506c7a9347208a10acc8011add425824"
  },
  {
    "url": "assets/js/20.02bb5a48.js",
    "revision": "e6ccf3d9d84bcb29e93ede47b00b9e4d"
  },
  {
    "url": "assets/js/21.f28233e1.js",
    "revision": "0e183a93dba663bbc81cadd7d920cd9d"
  },
  {
    "url": "assets/js/22.03d3e247.js",
    "revision": "c74c05dca99d5ef684ad5ac6b7b0691d"
  },
  {
    "url": "assets/js/23.e314c7f9.js",
    "revision": "f2f25d18a0ebf65c5491270be2f68781"
  },
  {
    "url": "assets/js/24.2f1f41c2.js",
    "revision": "c1ed01b3b1773d548b04a6f73f1581e7"
  },
  {
    "url": "assets/js/26.6eebb66c.js",
    "revision": "c3a04e9016b9d59bd232297f93899973"
  },
  {
    "url": "assets/js/3.791aa4a3.js",
    "revision": "d7e713d08ae811869d3b730fe64d3102"
  },
  {
    "url": "assets/js/4.06972723.js",
    "revision": "8167764f3efe316255f0758f41ce09f4"
  },
  {
    "url": "assets/js/5.ab9cf220.js",
    "revision": "ef7e1aae501b9185c97e349366c5ae60"
  },
  {
    "url": "assets/js/6.7756d22b.js",
    "revision": "b2b88a5e641683dabda5924051d99a1a"
  },
  {
    "url": "assets/js/7.e368d2c3.js",
    "revision": "19cab67c43277dc11bfc9ea3a5a204ba"
  },
  {
    "url": "assets/js/8.a343a1d9.js",
    "revision": "d3e1c71082ddfe41b81ef1e59d57cc3e"
  },
  {
    "url": "assets/js/9.5fec2574.js",
    "revision": "75ca770c5dbd671d6e9dad2296fd20a8"
  },
  {
    "url": "assets/js/app.dfb89967.js",
    "revision": "3f791d2a97bb86f386ed9476ae7a7ff9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0f41187f032d5d4eb83eddf8385dac85"
  },
  {
    "url": "design/index.html",
    "revision": "77e27cf4af120391b05d409c9f517285"
  },
  {
    "url": "index.html",
    "revision": "ddbd291624b1d00d540058108ee08e42"
  },
  {
    "url": "intro/index.html",
    "revision": "b9ecd9b144529be9c0f4f2c275a99bf0"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6aebc9ec395d92a59645ff7439864a71"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "3eb1a03b956c4b899e11c14d04d53125"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ecaf031ac35bb5bd946ae0400deb213e"
  },
  {
    "url": "software/index.html",
    "revision": "dd4e07a37a8b76df33382e3e2e4a5bf2"
  },
  {
    "url": "test/index.html",
    "revision": "b3e1b15f6a39e20d1c88e17313c6bb75"
  },
  {
    "url": "use cases/index.html",
    "revision": "c19deeb07c8e7dd085f1a4a908c385e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
