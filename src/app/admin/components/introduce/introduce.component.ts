import { Component, OnInit, DoCheck, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; @Component({
    selector: "app-introduce",
    templateUrl: "./introduce.component.html",
    styleUrls: ["./introduce.component.scss"]
})
export class IntroduceComponent implements OnInit, DoCheck {
    style: object = {};
    params: object = {};
    width = 100;
    height = 100;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // this.loadingBackgroundRow1();
        this.addHover();
        // this.setA4Side();
        this.style = {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "clip-path": "polygon(50% 4%, 97% 96%, 4% 96%)",
        };
        this.params = {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 10,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#ffffff",
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 5,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "bounce",
                    bounce: true,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: ["grab", "repulse"],
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 300,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 800,
                        size: 80,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 50,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        };
    }

    ngDoCheck() {
    }

    ngOnChange() {
    }

    @HostListener("window:resize", ["$event"])
    onResize(event?) {


    }

    setHeightOfRow2() {
        // const heightRow1 = $("#row1").css("height");
        // $("#row2").css("min-height", `calc(${heightRow1} / 17 * 50)`);
        // console.log(`row1.height = ${$("#row1").css("height")}`);
        // console.log(`row2.height = ${$("#row2").css("height")}`);
    }
    setA4Side() {
        // const width = $("body").css("width");
        // console.log(`current height: ${$("body").css("height")}`);
        // $("body").css("height", `calc(${width} / 8.5 * 11)`);
    }
    // loadingBackgroundRow1() {
    //     const bgArray = ["keyboard.jpg", "7_edited.jpg"];
    //     const bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    //     $("#row1").css("background-image", `url("/assets/Imgs/${bg}")`);
    // }
    addHover() {
        console.log("hover");
        let ref;
        $(".annotation>.item").on({
            mouseenter: (e) => {
                console.log("mouseenter");
                ref = e.target.getAttribute("ref");
                $(`polygon[ref="${ref}"]`).addClass("fill-white");
            }, mouseleave: (e) => {
                console.log("mouseleave");
                ref = e.target.getAttribute("ref");
                $(`polygon[ref="${ref}"]`).removeClass("fill-white");
            }
        });
    }
}
