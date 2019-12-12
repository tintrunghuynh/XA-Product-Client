import { Component, OnInit, DoCheck, HostListener } from "@angular/core";
import { environment } from "src/environments/environment";
import { ActivatedRoute } from "@angular/router"; @Component({
    selector: "app-introduce",
    templateUrl: "./introduce.component.html",
    styleUrls: ["./introduce.component.scss"]
})
export class IntroduceComponent implements OnInit, DoCheck {
    appName;
    style: object = {};
    params: object = {};
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        if (environment.production) {
            this.appName = "/XA-Product-Client";
        } else {
            this.appName = "";
        }
        (document.getElementsByClassName("row1")[0] as HTMLElement).style.background =
            `rgba(51, 51, 51, 0.4) url("${this.appName}/assets/Imgs/keyboard_rgb.jpg") 0% 45% / cover no-repeat`;
        this.addHover();
        this.setStyleParticles();
    }

    ngDoCheck() {
    }

    ngOnChange() {
    }

    @HostListener("window:resize", ["$event"])
    onResize(event?) {
    }

    addHover() {
        let ref;
        $(".annotation>.item").on({
            mouseenter: (e) => {
                ref = e.target.getAttribute("ref");
                $(`polygon[ref="${ref}"]`).addClass("fill-white");
            }, mouseleave: (e) => {
                ref = e.target.getAttribute("ref");
                $(`polygon[ref="${ref}"]`).removeClass("fill-white");
            }
        });
    }

    setStyleParticles() {
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
                    color: "#fff",
                    opacity: 1,
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
                        mode: ["grab"],
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
}
