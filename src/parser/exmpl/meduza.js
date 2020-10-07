const meduza = `
<!DOCTYPE html>
<html prefix="og:http://ogp.me/ns#" lang="ru">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, minimal-ui">
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#000">
  <title data-rh="true">Новости — Meduza</title>
  <meta data-rh="true" name="description" content="Ничего лишнего, только факты"/><meta data-rh="true" name="keywords" content="новости, статья, политика, экономика, события, факты, президент, заявление, фото, видео, репортаж, опрос, тест, россия, украина, доллар, информация, интервью, реакция"/><meta data-rh="true" property="og:site_name" content="Meduza"/><meta data-rh="true" property="og:title" content="Новости — Meduza"/><meta data-rh="true" property="og:url" content="https://meduza.io"/><meta data-rh="true" property="og:locale" content="ru_RU"/><meta data-rh="true" property="fb:pages" content="375587425929352"/><meta data-rh="true" property="fb:app_id" content="944674498882174"/><meta data-rh="true" property="al:web:should_fallback" content="true"/><meta data-rh="true" name="incorrect-apple-itunes-app" content="app-id=921508170"/><meta data-rh="true" name="incorrect-google-play-app" content="app-id=io.meduza.android"/><meta data-rh="true" name="twitter:site" content="@meduzaproject"/><meta data-rh="true" name="twitter:title" content="Новости — Meduza"/><meta data-rh="true" property="al:android:package" content="io.meduza.android"/><meta data-rh="true" property="og:image" content="https://meduza.io/image/attachments/images/003/935/641/original/Ucq_nz3NCVLkgWbreTRoog.png"/><meta data-rh="true" property="og:image:width" content="1200"/><meta data-rh="true" property="og:image:height" content="630"/><meta data-rh="true" name="twitter:image" content="https://meduza.io/image/attachments/images/003/935/641/original/Ucq_nz3NCVLkgWbreTRoog.png"/><meta data-rh="true" property="vk:image" content="https://meduza.io/image/attachments/images/003/935/641/original/Ucq_nz3NCVLkgWbreTRoog.png"/>
  <link data-rh="true" rel="canonical" href="https://meduza.io"/><link data-rh="true" rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"/><link data-rh="true" rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"/><link data-rh="true" rel="apple-touch-icon" href="/apple-touch-icon-1024.png"/><link data-rh="true" rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76.png"/><link data-rh="true" rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120.png"/><link data-rh="true" rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152.png"/><link data-rh="true" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180.png"/><link data-rh="true" rel="mask-icon" href="https://meduza.io/image/attachments/images/000/017/651/original/qAvIE71BRQOTl9q96t0kRA.svg" color="B88B58"/><link data-rh="true" rel="image_src" href="https://meduza.io/image/attachments/images/003/935/641/original/Ucq_nz3NCVLkgWbreTRoog.png"/>
  
  <script>
    window.mdzCurrentDocumentTag = null;
    window.mdzLang = "ru";
    window.mdzConstants = {"DFPCodes":{"BANNER1":"div-gpt-ad-1489660843213-0","BANNER2":"div-gpt-ad-1489495611804-0","STANDARD":"div-gpt-ad-1490099604776-0","BOTTOM_MAIN_DESKTOP":"div-gpt-ad-1536657931778-0","BOTTOM_MAIN_MOBILE":"div-gpt-ad-1543925849905-0","MOBILE_SMALL":"div-gpt-ad-1584372639240-0","AFTER_MATERIAL":"div-gpt-ad-1585659975839-0","MATERIAL_SIDE":"div-gpt-ad-1553612853894-0","MATERIAL_MOBILE_BOTTOM":"div-gpt-ad-1566824910233-0","CARDS_MOBILE":"div-gpt-ad-1566823768558-0","TOP_MDZ_DESKTOP":"div-gpt-ad-1533895155452-0","TOP_MDZ_MOBILE":"div-gpt-ad-1534341184038-0","SCREEN_FIRST":"div-gpt-ad-1553613409379-0","SCREEN_SECOND":"div-gpt-ad-1553613497808-0","IN_TEXT_MOBILE":"div-gpt-ad-1553613064384-0","RIGHT_BANNER_ADAPTIVE":"div-gpt-ad-1574073961172-0"},"DFPFullCodes":{"BOTTOM_MAIN_DESKTOP":{"gpt":"div-gpt-ad-1536657931778-0","sizes":[970,250],"slot":"/65834524/Bottom_Banner"},"BOTTOM_MAIN_MOBILE":{"gpt":"div-gpt-ad-1543925849905-0","sizes":[300,250],"slot":"/65834524/Mobile_Bottom_Banner"},"MOBILE_SMALL":{"gpt":"div-gpt-ad-1584372639240-0","sizes":[[320,100],[320,50]],"slot":"/65834524/Mobile_Small"},"AFTER_MATERIAL":{"gpt":"div-gpt-ad-1585659975839-0","slot":"/65834524/After_Material","sizes":[[728,90],[970,250]]},"MATERIAL_MOBILE_BOTTOM":{"gpt":"div-gpt-ad-1566824910233-0","slot":"/65834524/Mobile_Long","sizes":[300,250]},"CARDS_MOBILE":{"gpt":"div-gpt-ad-1566823768558-0","slot":"/65834524/Mobile_Cards_Slides","sizes":[300,250]},"TOP_MDZ_DESKTOP":{"gpt":"div-gpt-ad-1533895155452-0","slot":"/65834524/Top_Banner","sizes":[970,250],"collapse":true},"TOP_MDZ_MOBILE":{"gpt":"div-gpt-ad-1534341184038-0","slot":"/65834524/Mobile_Top_Banner","sizes":[300,250],"collapse":true},"SCREEN_FIRST":{"gpt":"div-gpt-ad-1553613409379-0","slot":"/65834524/Mobile_Screen_First","sizes":[300,250]},"SCREEN_SECOND":{"gpt":"div-gpt-ad-1553613497808-0","slot":"/65834524/Mobile_Screen_Second","sizes":[300,250]},"IN_TEXT_MOBILE":{"gpt":"div-gpt-ad-1553613064384-0","slot":"/65834524/Mobile_In_Text","sizes":[300,250]},"RIGHT_BANNER_ADAPTIVE":{"gpt":"div-gpt-ad-1574073961172-0","slot":"/65834524/Right_Banner","sizes":[[300,250],[300,300],[300,600]]}},"DFPNamesByID":{"div-gpt-ad-1489660843213-0":"BANNER1","div-gpt-ad-1489495611804-0":"BANNER2","div-gpt-ad-1490099604776-0":"STANDARD","div-gpt-ad-1536657931778-0":"BOTTOM_MAIN_DESKTOP","div-gpt-ad-1543925849905-0":"BOTTOM_MAIN_MOBILE","div-gpt-ad-1584372639240-0":"MOBILE_SMALL","div-gpt-ad-1585659975839-0":"AFTER_MATERIAL","div-gpt-ad-1553612853894-0":"MATERIAL_SIDE","div-gpt-ad-1566824910233-0":"MATERIAL_MOBILE_BOTTOM","div-gpt-ad-1566823768558-0":"CARDS_MOBILE","div-gpt-ad-1533895155452-0":"TOP_MDZ_DESKTOP","div-gpt-ad-1534341184038-0":"TOP_MDZ_MOBILE","div-gpt-ad-1553613409379-0":"SCREEN_FIRST","div-gpt-ad-1553613497808-0":"SCREEN_SECOND","div-gpt-ad-1553613064384-0":"IN_TEXT_MOBILE","div-gpt-ad-1574073961172-0":"RIGHT_BANNER_ADAPTIVE"},"DFPInstances":{}};
    window.mdzCurrentFonts = ["fonts/PFRegalTextPro-Bold-v1.woff","fonts/PFRegalTextPro-BoldItalic-v1.woff","fonts/PFRegalTextPro-RegularB-v1.woff","fonts/PFRegalTextPro-RegularBItalic-v1.woff","fonts/ProximaNova-Bold-v1.woff","fonts/ProximaNova-Regular-v1.woff","fonts/ProximaNova-Semibold-v1.woff"];
    window.mdzAppState = {"route":{"history":[],"pathname":"/"},"currentUser":{"user_token":null,"daily":{"token":null,"subscribed":false,"error":false},"fcm_token":"","me":{},"lang":"ru","screen_view_type":"GRID","last_opened_material":null,"loading":false,"firebase_token":null,"feedback_token":null,"push_notifications":{},"embedded":false,"preview":false,"screen_fetching":false,"material_fetching":false,"firebase_user":null,"loginError":false,"emailSentError":false,"emailSent":false,"episodes":{},"bookmarks":null,"history":{},"data":{}}};
  </script>

  <script>
    function cacheFonts(currentFonts, key) {
      if (!window.FontFace || !currentFonts || currentFonts.length === 0) {
        return
      }
  
      const data = currentFonts.map(path => {
        const options = {}
        let name
  
        if (path.indexOf('PFRegal') > -1) {
          name = 'PF Regal'
        } else if (path.indexOf('ProximaNova') > -1) {
          name = 'Proxima Nova'
        }
  
        if (path.indexOf('PFRegalTextPro-RegularBItalic') > -1) {
          options.style = 'italic'
        } else if (path.indexOf('PFRegalTextPro-RegularB') > -1) {
          options.style = 'normal'
        } else if (path.indexOf('PFRegalTextPro-BoldItalic') > -1) {
          options.style = 'italic'
          options.weight = 'bold'
        } else if (path.indexOf('PFRegalTextPro-Bold') > -1) {
          options.weight = 'bold'
        } else if (path.indexOf('PFRegalTextPro-Medium') > -1) {
          options.style = 'normal'
          options.weight = '500'
        } else if (path.indexOf('PFRegalTextPro-MediumItalic') > -1) {
          options.style = 'italic'
          options.weight = '500'
        } else if (path.indexOf('ProximaNova-Regular') > -1) {
          options.style = 'normal'
          options.weight = '400'
        } else if (path.indexOf('ProximaNova-Semibold') > -1) {
          options.style = 'normal'
          options.weight = '600'
        } else if (path.indexOf('ProximaNova-Bold') > -1) {
          options.style = 'normal'
          options.weight = '700'
        }
  
        return { name, options, url: 'url(/${path})' }
      })
  
      const fonts = data.map(
        font => new window.FontFace(font.name, font.url, font.options)
      )
  
      if (window.mdzFontsCached) {
        fonts.forEach(f => {
          document.fonts.add(f)
        })
      } else {
        const promises = fonts.map(f => {
          f.load()
          return f.loaded
        })
  
        Promise.all(promises).then(
          () => {
            window.localStorage.setItem(key, JSON.stringify(currentFonts))
          },
          failure => {
            console.log('failed loading fonts', failure)
          }
        )
      }
    }
  
    function isFontsCached(currentFonts, key) {
      function useLocalStorage() {
        const test = 'test'
        try {
          localStorage.setItem(test, test)
          localStorage.removeItem(test)
          return true
        } catch (e) {
          return false
        }
      }
      const canUseLocalStorage = useLocalStorage()
  
      const cachedFonts =
        canUseLocalStorage && JSON.parse(localStorage.getItem(key))
      let cacheStale = false
  
      if (
        currentFonts &&
        currentFonts.length > 0 &&
        cachedFonts &&
        cachedFonts.length > 0
      ) {
        if (currentFonts.length !== cachedFonts.length) {
          cacheStale = true
        } else {
          currentFonts.forEach(fontPath => {
            if (cachedFonts.indexOf(fontPath) === -1) {
              cacheStale = true
            }
          })
        }
  
        if (cacheStale) {
          localStorage.removeItem(key)
        }
      } else {
        cacheStale = true
      }
      window.mdzFontsCached = !cacheStale
    }
  
  
    isFontsCached(window.mdzCurrentFonts, 'mdzFontsCached');
    cacheFonts(window.mdzCurrentFonts, 'mdzFontsCached');
  </script>
  <script>
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  </script>
  <script defer src="https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/6.0.4/firebase-messaging.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/6.0.4/firebase-auth.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/6.0.4/firebase-firestore.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/6.0.4/firebase-functions.js"></script>
  <script defer src="https://apis.google.com/js/api.js"></script>
  <script>
    window.addEventListener('DOMContentLoaded', function() {
      function init() {
        gapi.load('auth2', function() {
          window.gapi.auth2.init({
            client_id: "235715706362-qd31g5dd6168vi14r63q9amubu3t343j.apps.googleusercontent.com"
          });
        });
      }
      init()
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBVx0S5IGAwLdiXOdc3nAp7wmZUuqcqG7U",
        authDomain: "buoyant-song-109816.firebaseapp.com",
        databaseURL: "https://buoyant-song-109816.firebaseio.com",
        projectId: "buoyant-song-109816",
        storageBucket: "buoyant-song-109816.appspot.com",
        messagingSenderId: "999059432363"
      };
      firebase.initializeApp(config);
  
      var secondConfig = {
        apiKey: "AIzaSyBz7vFPEFN2UW9BCfkoYwZXZhJHSn8zueY",
        authDomain: "meduza-flutter.firebaseapp.com",
        databaseURL: "https://meduza-flutter.firebaseio.com",
        projectId: "meduza-flutter",
        storageBucket: "meduza-flutter.appspot.com",
        messagingSenderId: "235715706362",
        appId: "1:235715706362:web:71e63d8dd2c8c0f4aff843",
        measurementId: "G-1W11NBR87X"
      };
      const secondFirebase = firebase.initializeApp(secondConfig, 'second');
      window.secondFirebase = secondFirebase
      window.auth = secondFirebase.auth();
  
      function sendStat(path) {
        var request = new XMLHttpRequest();
  
        request.open('GET', path);
        request.send();
      }
  
      if (firebase.messaging.isSupported()) {
        var messaging = firebase.messaging();
  
        messaging.onMessage(function (payload) {
          var data = JSON.parse(payload.data.custom_notification);
  
          data.tag = data.click_action + ':' + data.title;
  
          var notification = new Notification(data.title, data);
  
          sendStat('/stat/put/push/receive/' + data.click_action.replace('https://meduza.io/', ''));
  
          notification.onclick = function () {
            sendStat('/stat/put/push/open/' + data.click_action.replace('https://meduza.io/', ''));
            window.open(data.click_action);
            notification.close();
          };
        });
      }
    });
  </script>
  <script>
  
    function useLocalStorage() {
      var test = 'test';
  
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
      return true;
      } catch (e) {
        return false;
      }
    }
    var canUseLocalStorage = useLocalStorage();
  
    window.getRoxotGroupId = function () {
      try {
        var storageKey = "roxot-gid";
        var groupId = canUseLocalStorage ? localStorage.getItem(storageKey) : null;
  
        if (groupId === null && canUseLocalStorage) {
          groupId = 1 + Math.floor(Math.random() * 10000);
          localStorage.setItem(storageKey, groupId);
        }
  
        return "" + groupId;
      } catch (e) {
        return "10001";
      }
    }
  
    window.getRoxotSectorId = function () {
      try {
        var storageKey = "roxot-sid";
        var groupId = canUseLocalStorage ? localStorage.getItem(storageKey) : null;
        
        if (groupId === null && canUseLocalStorage) {
          groupId = 1 + Math.floor(Math.random() * 100);
          localStorage.setItem(storageKey, groupId);
        }
  
        return "" + groupId;
      } catch (e) {
        return "101";
      }
    }
  
    window.getRoxotDeep = function () {
      try {
        var storageKey = "roxot-deep";
        var groupId = canUseLocalStorage ? localStorage.getItem(storageKey) : null;
        
        if (groupId === null && canUseLocalStorage) {
          groupId = 1 + Math.floor(Math.random() * 100);
          localStorage.setItem(storageKey, groupId);
        }
  
        return "" + groupId;
      } catch (e) {
        return "101";
      }
    }
  
    window.getRoxotEvent = function () {
      return "" + (1 + Math.floor(Math.random() * 100));
    }
  </script>  <script>
    var code = 'UA-54965095-1';
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', code, 'auto');
    if (window.location.search.indexOf('extension') === -1 &&
      window.location.search.indexOf('preview') === -1) {
      var options = {
        title: document.title,
        path: window.location.pathname
      };
  
      // TODO: think about this
      if (window.mdzCurrentDocumentTag) {
        options.dimension2 = window.mdzCurrentDocumentTag;
      }
  
      ga('send', 'pageview', options);
    }
  </script>  <script async src="//securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <script>
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
  
    window.mdzConstants.targetingKey = 'Test_Page';
    window.mdzConstants.targetingValue = ['false'];
  
    var advPages = [
      { target: 'Toptest970', url: '/shapito/2020/07/23/kosmicheskie-voyska-ssha-predstavili-svoy-logotip-i-zaodno-ob-yasnilis-pered-fanatami-zvezdnogo-puti' },
      { target: 'Toptest100', url: '/shapito/2020/07/22/golubyam-iz-san-frantsisko-nadoelo-byt-ptitsami-poetomu-oni-obratilis-za-professionalnoy-pomoschyu' },
      { target: 'Righttest360', url: '/shapito/2020/07/21/zhenih-v-shvetsii-nevesta-v-norvegii-priehat-nelzya-chto-delat-konechno-ustroit-svadbu-na-granitse-v-gluhom-lesu' },
      { target: 'Righttest300', url: '/shapito/2020/09/12/kto-i-zachem-eto-pridumal-igrayuschie-v-pryatki-kukly-s-prishitymi-k-litsu-rukami' },
      { target: 'Bottest', url: '/shapito/2020/09/12/iz-chego-gotovitsya-kimchhi-chto-takoe-palindrom-kto-pridumal-kokteyl-sleza-komsomolki-otvechaet-restorator' },
      { target: 'Toptestmob100', url: '/shapito/2020/07/15/memy-pro-siba-inu-doge-i-chimsa-vyshli-na-novyy-uroven-teper-v-3d' },
      { target: 'Toptestmob300', url: '/shapito/2020/07/14/chihayuschaya-krysa-v-vagone-metro-eto-novaya-rabota-benksi-o-pandemii-koronavirusa' },
      { target: 'Texttestmob', url: '/feature/2020/08/05/sibiryaki-takogo-ne-lyubyat' },
      { target: 'Test_Page', url: '/shapito/2018/06/09/v-hyperloop-ne-budet-okon-no-passazhiry-vse-ravno-smogut-videt-peyzazhi' },
      { target: 'Test_Page', url: '/shapito/2018/06/11/anonsirovana-igra-doom-eternal-prodolzhenie-doom-s-demonami-na-zemle' }
    ]
  
    advPages.map(function (item) {
      if (item.url === window.location.pathname) {
        window.mdzConstants.targetingKey = item.target;
        window.mdzConstants.targetingValue = ['true'];
      }
    });
  
    function defineAndMemoRightBanner(gt, slotName, sizes, codeName) {
      var definedSlot = gt.defineSlot(slotName, sizes, window.mdzConstants.DFPCodes[codeName]);
      window.mdzConstants.DFPInstances[codeName] = definedSlot.addService(gt.pubads());
      return window.mdzConstants.DFPInstances[codeName];
    }
  
    googletag.cmd.push(function () {
  
      if (window.mdzLang === "en") {
        googletag.pubads().setTargeting('meduzaEN', ['true']);
      }
  
      googletag.pubads().setTargeting('currentPagePath', [window.location.pathname]);
  
      googletag.pubads().enableLazyLoad({
        fetchMarginPercent: 0,  // Fetch slots within 0 viewports.
        renderMarginPercent: 0,  // Render slots within 0 viewports.
        mobileScaling: 2.0  // Double the above values on mobile.
      })
  
      googletag.pubads().enableSingleRequest();
      googletag.pubads().disableInitialLoad();
      googletag.enableServices();
  
  
  
    });
  </script>  <script type="text/javascript">
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
      m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })
      (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
  
  
    if (window.location.search.indexOf('extension') === -1) {
      ym(26750127, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
    }
  </script><link href="/styles.ded2abb34caa82467b8e.css" rel="stylesheet"></head>

<body>
  <div id="root"><div class="App-root" data-pathname="/" data-route="screen"><a class="App-skipLink" href="#maincontent">Перейти к материалам</a><div class="App-bannerTop"><div></div></div><div class="App-container"><div class="App-header" data-inapp-hide="true"><header class="Header-root" role="banner"><div class="Header-logo"><a class="Header-meduza" href="/" aria-label="Медуза. Перейти на главную страницу"><svg data-testid="svg-symbol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-module_root__2CsRW SvgSymbol-module_meduzaLogo__2Ouzp" width="544" height="115" viewBox="0 0 544 115"><path d="M59.1008614,49.65632 L59.1008614,106.01472 L84.9480411,114.24 L84.9480411,49.65632 L101.574882,49.65632 L101.574882,106.01472 L127.270909,114.24 L144.048902,91.392 L127.422062,91.392 L127.422062,35.7952 L101.726035,26.80832 L84.9480411,46.60992 L84.9480411,35.7952 L59.2520145,26.80832 L42.4740206,46.60992 L42.4740206,35.7952 L16.7779939,26.80832 L0,49.65632 L16.6268408,49.65632 L16.6268408,106.01472 L42.4740206,114.24 L42.4740206,49.65632 L59.1008614,49.65632 L59.1008614,49.65632 Z M336.61795,91.392 L336.61795,35.0336 L310.770769,26.80832 L310.770769,105.25312 L336.466796,114.24 L353.24479,94.4384 L353.24479,105.25312 L378.940817,114.24 L395.71881,91.392 L379.091969,91.392 L379.091969,35.0336 L353.24479,26.80832 L353.24479,91.392 L336.61795,91.392 L336.61795,91.392 Z M527.373159,38.08 L502.130592,26.80832 L472.202278,41.1264 L502.130592,52.39808 L461.016949,72.352 L461.016949,104.94848 L486.86413,114.24 L502.130592,94.28608 L502.130592,105.25312 L527.977771,114.24 L544,91.23968 L527.373159,91.23968 L527.373159,38.08 L527.373159,38.08 Z M177.453737,114.24 L207.079744,102.35904 L177.453737,91.23968 L177.453737,75.24608 L216.300083,56.3584 L194.231731,26.80832 L151.606557,47.37152 L151.606557,103.12064 L177.453737,114.24 L177.453737,114.24 Z M455.424284,89.56416 L423.984441,79.968 L453.459295,42.19264 L416.577937,26.80832 L397.230341,51.48416 L428.821339,61.23264 L398.741873,98.85568 L436.076687,114.24 L455.424284,89.56416 L455.424284,89.56416 Z M486.86413,91.392 L486.86413,68.84864 L502.130592,61.53728 L502.130592,91.392 L486.86413,91.392 L486.86413,91.392 Z M177.453737,41.58336 L190.452904,59.55712 L177.453737,65.80224 L177.453737,41.58336 L177.453737,41.58336 Z M222.95082,103.12064 L248.797999,114.24 L291.27202,97.18016 L291.27202,29.7024 L222.95082,0 L222.95082,26.30784 L265.424841,43.21536 L265.424841,97.33248 L248.797999,91.23968 L248.797999,43.71584 L222.95082,51.94112 L222.95082,103.12064 L222.95082,103.12064 Z" /></svg></a></div><div class="Header-menuToggle"><button class="Header-item" type="button" aria-label="Открыть меню"><svg data-testid="svg-symbol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-module_root__2CsRW SvgSymbol-module_menu__2iYFt SvgSymbol-module_isInHeader__1QHjL" width="24" height="24" viewBox="0 0 24 24"><path d="M2 21h20M2 12h20M2 3h20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /></svg></button></div><div class="Header-nav"><nav class="Header-menu"><span class="Header-item Header-isItemActive"><a class="Link-root" href="/" tabindex="0">Новости</a></span><span class="Header-item"><a class="Link-root" href="/articles" tabindex="0">Истории</a></span><span class="Header-item"><a class="Link-root" href="/razbor" tabindex="0">Разбор</a></span><span class="Header-item"><a class="Link-root" href="/games" tabindex="0">Игры</a></span><span class="Header-item"><a class="Link-root" href="/shapito" tabindex="0">Шапито</a></span><span class="Header-item"><a class="Link-root" href="/podcasts" tabindex="0">Подкасты</a></span><span class="Header-item"><a class="Link-root" href="/specials/coronavirus" tabindex="0">Коронавирус</a></span></nav><div class="Header-mobileNav"><div></div><nav class="Header-menuAdditional"><a class="Header-menuAdditionalItem" href="/pages/contacts">О «Медузе»</a><a class="Header-menuAdditionalItem" href="/specials/cometogether">Реклама</a><a class="Header-menuAdditionalItem" href="/en">Meduza in English</a></nav><div class="Header-switcher"><label data-testid="switcher" class="Switcher-module_root__1Env1 Switcher-module_dark__1IzaH Switcher-module_isInMenu__3XJYj"><div class="Switcher-module_children__147JP Switcher-module_left__2coeE"><span>Показывать по порядку</span></div><input type="checkbox" class="Switcher-module_input__jaMVF"/><span class="Switcher-module_control__1NTvY"><span class="Switcher-module_knob__3kEy5"></span></span></label></div></div></div><div class="Header-buttons"><a class="Header-item Header-itemLang" href="/en">EN</a><button class="Header-item Header-itemSearch" type="button" aria-label="Поиск"><svg data-testid="svg-symbol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-module_root__2CsRW SvgSymbol-module_search__VK6p3 SvgSymbol-module_isInHeader__1QHjL" width="16" height="16" viewBox="0 0 16 16"><g transform="translate(2 1)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" vector-effect="non-scaling-stroke"><circle cx="5.5" cy="5.5" r="5.5"/><path d="M11.37 13.442l-.995-1.272"/></g></svg></button><button class="Header-item Header-itemAuth" type="button" aria-label="Авторизация">Войти</button></div></header><div class="InfoPanel-root"><div class="InfoPanel-exchangeRates"></div><div class="InfoPanel-informer"></div><div class="InfoPanel-switcher"><label data-testid="switcher" class="Switcher-module_root__1Env1"><div class="Switcher-module_children__147JP Switcher-module_left__2coeE"><span>Показывать по порядку</span></div><input type="checkbox" class="Switcher-module_input__jaMVF"/><span class="Switcher-module_control__1NTvY"><span class="Switcher-module_knob__3kEy5"></span></span></label></div></div></div><div class="App-content" id="maincontent"><div class="Skeleton-root"><div class="Skeleton-layout"><div><div class="Skeleton-wrapper"><div class="Skeleton-section Skeleton-topic Skeleton-mobile"><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div></div><div class="Skeleton-section Skeleton-topic Skeleton-mobile"><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div></div><div class="Skeleton-section Skeleton-media Skeleton-mobile"><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div></div><div class="Skeleton-section Skeleton-media Skeleton-is1to2 Skeleton-desktop"><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div></div><div class="Skeleton-section Skeleton-media Skeleton-desktop"><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div></div><div class="Skeleton-section Skeleton-media Skeleton-is1to2 Skeleton-desktop"><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div><div class="Skeleton-card"><div class="Skeleton-animation"><span></span><span></span><span></span><span></span><span></span></div></div></div></div></div></div></div></div></div><div class="Modal-root"><div class="Modal-dismissOverlay" tabindex="-1" role="button"></div><div class="Modal-content"><svg width="100%" class="Modal-background"><defs><mask id="modalMask" x="0" y="0" width="100%" height="100%"><rect fill="white" y="0" width="100%" height="100%" x="0"></rect><svg x="50%" overflow="visible" width="12" height="12"><g transform="translate(-11 0)"><path d="M4.61852778e-14,9.76996262e-15 L9.84597532,5.80270273 C11.0992017,6.54128882 12.6546044,6.54128882 13.9078308,5.80270273 L23.7538061,9.76996262e-15 L4.61852778e-14,9.76996262e-15 Z"></path></g></svg></mask></defs><rect fill="currentColor" id="base-mask" mask="url(#modalMask)" x="0" y="0" width="100%" height="100%"></rect></svg><button class="Modal-dismiss" type="button"><svg data-testid="svg-symbol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-module_root__2CsRW SvgSymbol-module_cross__J2lCN" width="18" height="18" viewBox="0 0 18 18"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" vector-effect="non-scaling-stroke" d="M2 2l14 14M16 2L2 16" /></svg></button></div></div><div class="App-footer"><footer class="Footer-root Footer-expanded"><div class="Footer-container"><div class="Footer-nav"><div class="Footer-group Footer-rubricator"><h3 class="Footer-groupTitle">Рубрикатор</h3><ul class="Footer-groupList"><li><a class="Link-root" href="/" tabindex="0"><span>Новости</span></a></li><li><a class="Link-root" href="/articles" tabindex="0"><span>Истории</span></a></li><li><a class="Link-root" href="/razbor" tabindex="0"><span>Разбор</span></a></li><li><a class="Link-root" href="/games" tabindex="0"><span>Игры</span></a></li><li><a class="Link-root" href="/shapito" tabindex="0"><span>Шапито</span></a></li><li><a class="Link-root" href="/podcasts" tabindex="0"><span>Подкасты</span></a></li></ul></div><div class="Footer-group Footer-apps"><h3 class="Footer-groupTitle">Приложения</h3><ul class="Footer-groupList"><li><a href="https://mdza.io/jTVPVpHqgF8" target="_blank" rel="noopener noreferrer">iOS</a></li><li><a href="https://mdza.io/HFRM4ny5IRU" target="_blank" rel="noopener noreferrer">Android</a></li></ul></div><div class="Footer-group"><h3 class="Footer-groupTitle">Социальные сети</h3><ul class="Footer-groupList"><li><a href="https://www.facebook.com/themeduza" target="_blank" rel="noopener noreferrer">Facebook</a></li><li><a href="https://twitter.com/meduzaproject" target="_blank" rel="noopener noreferrer">Twitter</a></li><li><a href="https://twitter.com/shapi_to" target="_blank" rel="noopener noreferrer">Twitter Шапито</a></li><li><a href="https://vk.com/meduzaproject" target="_blank" rel="noopener noreferrer">ВКонтакте</a></li><li><a href="https://vk.com/meduza_allnews" target="_blank" rel="noopener noreferrer">ВКонтакте-Новости</a></li><li><a href="https://vk.com/shapi_to" target="_blank" rel="noopener noreferrer">ВКонтакте-Шапито</a></li><li><a href="https://www.youtube.com/c/MeduzaPro" target="_blank" rel="noopener noreferrer">Youtube</a></li><li><a href="https://instagram.com/meduzapro" target="_blank" rel="noopener noreferrer">Instagram</a></li><li><a href="https://ok.ru/meduzaproject" target="_blank" rel="noopener noreferrer">Одноклассники</a></li></ul></div><div class="Footer-group"><h3 class="Footer-groupTitle">Telegram</h3><ul class="Footer-groupList"><li><a href="https://t.me/meduzalive" target="_blank" rel="noopener noreferrer">Meduza Live</a></li><li><a href="https://t.me/meduzaevening" target="_blank" rel="noopener noreferrer">Вечерняя Медуза</a></li><li><a href="https://t.me/meduzapro" target="_blank" rel="noopener noreferrer">Срочные новости</a></li><li><a href="https://t.me/meduza_news" target="_blank" rel="noopener noreferrer">Все новости</a></li><li><a href="https://t.me/shapi_to" target="_blank" rel="noopener noreferrer">Шапито</a></li><li><a href="https://t.me/meduzaprobot" target="_blank" rel="noopener noreferrer">Бот</a></li></ul></div><div class="Footer-group Footer-notifications"><h3 class="Footer-groupTitle">Уведомления</h3><ul class="Footer-groupList"><li><a href="/rss/all" target="_blank" rel="noopener noreferrer">RSS</a></li></ul></div><div class="Footer-group"><h3 class="Footer-groupTitle">Наши проекты</h3><ul class="Footer-groupList"><li><a href="/specials/daily" target="_blank" rel="noopener noreferrer">Вечерняя Медуза</a></li><li><a href="/specials/care/" target="_blank" rel="noopener noreferrer">MeduzaCare</a></li><li><a href="https://vimeo.com/ondemand/storm2018" target="_blank" rel="noopener noreferrer">Конференции «Шторм»</a></li></ul></div><div class="Footer-group"><h3 class="Footer-groupTitle">Редакция</h3><ul class="Footer-groupList"><li><a class="Link-root" href="/pages/contacts" tabindex="0"><span>О «Медузе»</span></a></li><li><a class="Link-root" href="/pages/codex" tabindex="0"><span>Кодекс редакции</span></a></li><li><a class="Link-root" href="/specials/blog" tabindex="0"><span>Блог</span></a></li><li><a class="Link-root" href="/cards/u-menya-est-vazhnaya-informatsiya-dlya-meduzy-no-ya-boyus-ee-peredavat-kak-sdelat-eto-po-nastoyaschemu-anonimno" tabindex="0"><span>SecureDrop</span></a></li></ul></div><div class="Footer-group"><h3 class="Footer-groupTitle">Реклама</h3><ul class="Footer-groupList"><li><a class="Link-root" href="/specials/cometogether" tabindex="0"><span>Реклама на&nbsp;«Медузе»</span></a></li><li><a class="Link-root" href="/slides/prays-list-meduzy" tabindex="0"><span>Прайс-лист</span></a></li><li><a class="Link-root" href="/specials/native" tabindex="0"><span>Примеры нативной рекламы</span></a></li><li><a class="Link-root" href="/slides/tehnicheskie-trebovaniya-k-banneram-na-meduze" tabindex="0"><span>Требования к&nbsp;баннерам</span></a></li><li><a class="Link-root" href="/feature/2018/04/23/hotite-kommercheskiy-proekt-na-meduze" tabindex="0"><span>Написать в&nbsp;рекламный отдел</span></a></li></ul></div><div class="Footer-group"><h3 class="Footer-groupTitle">Персональные данные</h3><ul class="Footer-groupList"><li><a class="Link-root" href="/feature/2018/05/22/kak-my-obrabatyvaem-vashi-personalnye-dannye-kotorye-hranyatsya-na-meduze" tabindex="0"><span>Правила обработки</span></a></li><li><a class="Link-root" href="/feature/2018/05/22/kak-meduza-ispolzuet-cookie" tabindex="0"><span>Использование куки</span></a></li></ul></div></div><div class="Footer-copyright"><div class="Footer-copyrightGroup"><div class="Footer-copyrightItem"><div class="Footer-giphy">Спасибо<a href='https://giphy.com' target='_blank' rel='noopener noreferrer'>giphy</a>за гифки!</div></div><div class="Footer-tip">Нашли ошибку? Выделите ее и нажмите Ctrl+Enter</div></div><div class="Footer-copyrightGroup"><div class="Footer-copyrightItem">© <!-- -->2020<!-- --> <!-- -->Meduza</div></div></div></div></footer></div><div class="App-controls"><div class="Controls-root"><div class="Controls-control"></div></div></div><div class="FootnoteContainer-root" style="height:0px"><div class="FootnoteContainer-footnote"></div></div></div></div>
  <div class="dfp-holder"></div>

  <script>
    if (window.location.search.indexOf('inapp=true') > -1) {
      document.querySelectorAll('[data-inapp-hide="true"]').forEach(function (element) {
        element.style.display = "none";
      });
    }
  </script>
<script type="text/javascript" src="/manifest.530f539b2254535364fe.js"></script><script type="text/javascript" src="/vendor.chunk.cad37bb21faddd1a1c24.js"></script><script type="text/javascript" src="/styles.chunk.79d551c1d6c907ee43c8.js"></script><script type="text/javascript" src="/app.chunk.af97761b15e39b951fce.js"></script><script type="text/javascript" src="/fonts/fonts.chunk.5ff47385947d8907bf8f.js"></script></body>

</html>
`
module.exports = meduza