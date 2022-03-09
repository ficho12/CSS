var rmsSkinSize = 1200;

pnetInitSkin = function(format) {

    raiCntCSSObj = document.createElement("link");
    raiCntCSSObj.rel = "stylesheet";
    raiCntCSSObj.type = "text/css";
    raiCntCSSObj.href = raiCntCSS;
    raiCntCSSObj.onload = ()=>{
      document.body.classList.add("raiSkinLoad");
      //console.log("raiSkinLoad");
      if (typeof raiEnvDevice != "undefined" && raiEnvDevice == "desktop") {
        if (document.querySelector("#raiSmoothLoadStyle")!=null) {
          document.querySelector("#raiSmoothLoadStyle").remove();
        }
      }
      document.body.classList.add("raiSkin1200");
    }
    document.body.appendChild(raiCntCSSObj);

    if (typeof resizeSkin === "function") {
        resizeSkin(rmsSkinSize);
    }
    //head-favicons-container
    function raiPosicionarElementos(){
        if (document.querySelector(".head.head-with-ad.is-visible .masthead-site-lead")!=null) {
            raiAlturaHeader=document.querySelector(".head.head-with-ad.is-visible .masthead-site-lead").offsetHeight

        }else if(document.querySelector(".head.head-with-ad.is-visible")!=null){
            raiAlturaHeader=document.querySelector(".head.head-with-ad.is-visible").offsetHeight
            if (document.querySelector(".head-container:not(.head-container-with-primary) + div + .page-container .head-favicons-container.is-visible")!=null) {
                raiAlturaHeader+=document.querySelector(".head-container:not(.head-container-with-primary) + div + .page-container .head-favicons-container.is-visible").offsetHeight
            }
            if (document.querySelector(".article-social-share.is-visible")!=null) {
                raiAlturaHeader+=document.querySelector(".article-social-share.is-visible").offsetHeight
            }

        }else if(document.querySelector(".head-container.m-head-masthead")!=null &&
            (document.querySelector(".head-container.m-head-masthead").offsetHeight > scrollY) ||
            (document.querySelector(".masthead-nav-brandsections")!=null && (document.querySelector(".head-container.m-head-masthead").offsetHeight+document.querySelector(".masthead-nav-brandsections").offsetHeight) > scrollY)
        ){
            raiAlturaHeader=(document.querySelector(".head-container.m-head-masthead").offsetHeight-scrollY);
            if (document.querySelector(".masthead-nav-brandsections")!=null) {
                raiAlturaHeader+=document.querySelector(".masthead-nav-brandsections").offsetHeight
            }
        }else{
            raiAlturaHeader=0
        }

        raiAlturaHeader+="px"

        if (document.querySelector("#pbnetVideo")!=null) {
            document.querySelector("#pbnetVideo").style.top=raiAlturaHeader;
        }
        if (document.querySelector("#pnetMask")!=null) {
            document.querySelector("#pnetMask").style.top=raiAlturaHeader;
        }
        if (document.querySelector("#rmsGame")!=null) {
            document.querySelector("#rmsGame").style.top=raiAlturaHeader;
        }
        if (document.querySelector("#rms_oop_skin_options")!=null) {
            document.querySelector("#rms_oop_skin_options").style.top=raiAlturaHeader;
        }
        if (document.querySelector("#rms_oop_skin_options_left")!=null) {
            document.querySelector("#rms_oop_skin_options_left").style.top=raiAlturaHeader;
        }
        if (document.getElementById('rmsWrapperParallax') != null) {
            document.getElementById('rmsWrapperParallax').style.top = raiAlturaHeader;
        }
        if (typeof rmsSiteHeader!="undefined") {
            rmsSiteHeader(parseInt(raiAlturaHeader))
        }
        if(document.querySelector(".head-container.m-head-masthead")!=null){
            raiAlturaHeaderDyn = document.querySelector(".head-container.m-head-masthead").offsetHeight;
            document.documentElement.style.setProperty("--raiHeader1", document.querySelector(".head-container.m-head-masthead").offsetHeight+"px");
            if (document.querySelector(".masthead-nav-brandsections")!=null) {
                raiAlturaHeaderDyn+=document.querySelector(".masthead-nav-brandsections").offsetHeight;
                document.documentElement.style.setProperty("--raiHeader2", document.querySelector(".masthead-nav-brandsections").offsetHeight+"px");
            }
            if (document.querySelector("#pbnetVideo2")!=null) {
                document.querySelector("#pbnetVideo2").style.top=raiAlturaHeaderDyn+"px";
            }
            if (document.querySelector("#pnetContVid")!=null) {
                document.querySelector("#pnetContVid").style.top=raiAlturaHeaderDyn+"px";
            }
            var raiHeaderAndSkin = (raiAlturaHeaderDyn+raiAlturaSkin);
            document.body.style.setProperty('padding-top',raiHeaderAndSkin+"px",'important')
        }else{
            if (document.querySelector("#pbnetVideo2")!=null) {
                document.querySelector("#pbnetVideo2").style.top=raiAlturaHeader;
            }
            if (document.querySelector("#pnetContVid")!=null) {
                document.querySelector("#pnetContVid").style.top=raiAlturaHeader;
            }
        }

        document.body.style.setProperty('background-position-y',raiAlturaHeader,'important');
        if (document.querySelector(".section-deeplinking-container.m-deeplinking-aside ~ .ad.ad-lat, .section-deeplinking-container.m-deeplinking-aside ~ .sticky-sidebar-container")!=null) {
            document.body.classList.toggle("raiTop",document.querySelector(".section-deeplinking-container.m-deeplinking-aside").getBoundingClientRect().bottom - 120 > 0);
        }else if (document.querySelector(".section-recent-aside")!=null && document.querySelector(".ad.ad-lat")!=null) {
            document.body.classList.toggle("raiTop",document.querySelector(".section-recent-aside").getBoundingClientRect().top - 120 > 0);
        }
    }

    switch (raiEnvDevice) {

        case "desktop":

            var scriptBody = document.body;
            raiScriptCertificador = document.createElement('script');
            raiScriptCertificador.type = 'text/javascript';
            raiScriptCertificador.id = "certificador_auto";
            raiScriptCertificador.src = "https://rosetta.richmediastudio.com/raiFunctions/wbl/lib.js";
            scriptBody.insertBefore(raiScriptCertificador, scriptBody.firstChild);

            if (typeof pnetHeightCab !== "undefined") {
                raiAlturaSkin=pnetHeightCab;
            }else if(document.body.style.paddingTop!=""){
                raiAlturaSkin=parseInt(document.body.style.paddingTop);
            }else{
                raiAlturaSkin=250;
            }
        function raiVW(){
            var vw = document.body.offsetWidth / 100;
            document.documentElement.style.setProperty("--1vw", vw+"px");
        }
            raiVW();
            window.addEventListener("resize",raiVW);

            document.documentElement.style.setProperty("--raiAlturaSkin", raiAlturaSkin+"px");
            raiPosicionarElementos()
            window.addEventListener("scroll",raiPosicionarElementos);

            switch (format) {
                case "fullSkinVideoReminder":
                    var sections = document.querySelector(".head-menu-sections");
                    var nuevo = document.querySelector(".head-menu-new");
                    var buscar = document.querySelector(".head-menu-search");
                    var raiLeft = document.getElementById("rms_oop_skin_options_left");

                    document.querySelector(".head-nav").addEventListener("click", function() {
                        if (sections.classList.contains("is-visible")) {
                            raiLeft.style.left = "560px";
                        } else if (nuevo.classList.contains("is-visible")) {
                            raiLeft.style.left = "640px";
                        } else {
                            raiLeft.style.left = "640px";
                        }
                    });

                    var cerrarSections = document.querySelectorAll("[href='#sections']")[2];
                    var cerrarNuevo = document.querySelectorAll("[href='#headlines']")[2];
                    var cerrarBuscar = document.querySelectorAll("[href='#search']")[2];

                    cerrarSections.addEventListener("click", function() {
                        raiLeft.style.left = "0px";
                    });

                    cerrarNuevo.addEventListener("click", function() {
                        raiLeft.style.left = "0px";
                    });

                    cerrarBuscar.addEventListener("click", function() {
                        raiLeft.style.left = "0px";
                    });
                    break;
            }

            if (format == "skinPremiumReminder" || format == "fullSkinVideoReminder") {
                if (document.getElementById("pbnetMando") != null) {
                    document.getElementById('pbnetMando').classList.add('mando-no-visible');
                }
            }
            if (document.getElementById('pbnetMando') != null) {
                document.getElementById('pbnetMando').classList.add('mando-visible-fullvideo');
            }
            if (document.getElementById('rms_oop_skin_options') != null) {
                document.getElementById('rms_oop_skin_options').classList.add('mando-visible-fullvideo')
            }
            if (document.getElementById('rms_oop_skin_options_left') != null) {
                document.getElementById('rms_oop_skin_options_left').classList.add('mando-visible-fullvideo')
            }

            var raiMutationIn=false
            if (document.querySelector(".head.head-with-ad .masthead-site-lead")!=null) {
                raiMutationElement=document.querySelector(".head.head-with-ad .masthead-site-lead")
                raiMutationIn=true
            }else if(document.querySelector(".head.head-with-ad")!=null){
                raiMutationElement=document.querySelector(".head.head-with-ad")
                raiMutationIn=true
            }

            if (raiMutationIn) {
                //mutation de class
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        const el = mutation.target;
                        raiPosicionarElementos()
                    });
                });

                observer.observe(raiMutationElement, {
                    attributes: true,
                    attributeOldValue: true,
                    attributeFilter: ['class']
                });
            }


            pnetSpecialFunction = function() {
                if (expandedSPD) {
                    if (document.getElementById('pbnetMando') != null) {
                        document.getElementById('pbnetMando').classList.remove('mando-visible-fullvideo');
                    }
                    if (document.getElementById('rms_oop_skin_options') != null) {
                        document.getElementById('rms_oop_skin_options').classList.remove('mando-visible-fullvideo');
                    }
                    if (document.getElementById('rms_oop_skin_options_left') != null) {
                        document.getElementById('rms_oop_skin_options_left').classList.remove('mando-visible-fullvideo');
                    }
                    document.body.classList.add("raiFullScreen")
                } else {
                    if (document.getElementById('pbnetMando') != null) {
                        document.getElementById('pbnetMando').classList.add('mando-visible-fullvideo');
                    }
                    if (document.getElementById('rms_oop_skin_options') != null) {
                        document.getElementById('rms_oop_skin_options').classList.add('mando-visible-fullvideo');
                    }
                    if (document.getElementById('rms_oop_skin_options_left') != null) {
                        document.getElementById('rms_oop_skin_options_left').classList.add('mando-visible-fullvideo');
                    }
                    document.body.classList.remove("raiFullScreen")
                }
            }

            pnetSpecialFunctionFVS = function() {
                if (expandedFVS) {
                    if (document.getElementById('pbnetMando') != null) {
                        document.getElementById('pbnetMando').classList.remove('mando-visible-fullvideo');
                    }
                    if (document.getElementById('rms_oop_skin_options') != null) {
                        document.getElementById('rms_oop_skin_options').classList.remove('mando-visible-fullvideo');
                    }
                    if (document.getElementById('rms_oop_skin_options_left') != null) {
                        document.getElementById('rms_oop_skin_options_left').classList.remove('mando-visible-fullvideo');
                    }
                    document.body.classList.add("raiFullScreen")
                } else {
                    if (document.getElementById('pbnetMando') != null) {
                        document.getElementById('pbnetMando').classList.add('mando-visible-fullvideo');
                    }
                    if (document.getElementById('rms_oop_skin_options') != null) {
                        document.getElementById('rms_oop_skin_options').classList.add('mando-visible-fullvideo');
                    }
                    if (document.getElementById('rms_oop_skin_options_left') != null) {
                        document.getElementById('rms_oop_skin_options_left').classList.add('mando-visible-fullvideo');
                    }
                    document.body.classList.remove("raiFullScreen")
                }
            }


            pbnetSpecialClick = function(tg) {
                //console.log(tg.className + " << CLASS --- ID >> " + tg.id);
                if (tg.tagName == "footer" || tg.className == "wrapper" || tg.id == "atlwdg-blanket" ||
                    tg.className == "ui-widget-overlay ui-front modal-contact-overlay") {
                    return false;
                } else {
                    return true;
                }
            }

            break;

        case "tablet":
            var raiTop;
            if (pnetDeviceOrientation == "portrait") {
                document.body.classList.add('raiSkinTabletPor');
                raiTop = 200;
                pnetTopOrientation(raiTop);
            } else {
                document.body.classList.add('raiSkinTabletLands');
                raiTop = 150;
                pnetTopOrientation(raiTop);
            }

            pnetChangeColor();

            break;

        case "mobile":
            var raiTop;
            if (pnetDeviceOrientation == "portrait") {
                document.body.classList.add('raiSkinMobilePor');
                raiTop = 120;
                pnetTopOrientation(raiTop);
            } else {
                document.body.classList.add('raiSkinMobileLands');
                raiTop = 90;
                pnetTopOrientation(raiTop);
            }

            pnetChangeColor();

            break;
    }

    pnetHideHeader = function(pnetDeviceType) {
        raiTop = 0;
        pnetTopOrientation(raiTop);
    };

    pnetShowHeader = function(pnetDeviceType) {
        if (pnetDeviceOrientation == "portrait" && raiEnvDevice == "mobile") {
            raiTop = 120;
        } else if (pnetDeviceOrientation == "landscape" && raiEnvDevice == "mobile") {
            raiTop = 90;
        } else if (pnetDeviceOrientation == "portrait" && raiEnvDevice == "tablet") {
            raiTop = 200;
        } else if (pnetDeviceOrientation == "landscape" && raiEnvDevice == "tablet") {
            raiTop = 150;
        }
        pnetTopOrientation(raiTop);
    };

    function pnetTopOrientation(raiTop) {
        if (document.getElementById('sections') != null) {
            document.getElementById('sections').style.top = raiTop + "px";
        }
        if (document.getElementById('headlines') != null) {
            document.getElementById('headlines').style.top = raiTop + "px";
        }
    }

    function pnetChangeColor() {
        var raiStyleBody = document.body.style.cssText.split('background-color: ')
        document.body.removeAttribute("style");
        document.body.setAttribute("style", raiStyleBody[0] + "background-color: #fff !important");
    }


}
