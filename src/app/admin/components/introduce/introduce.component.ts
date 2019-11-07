import { Component, OnInit, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: "app-introduce",
    templateUrl: "./introduce.component.html",
    styleUrls: ["./introduce.component.scss"]
})
export class IntroduceComponent implements OnInit {

    recruitment: string;
    comp: string;
    value: number;
    options;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.setHeightOfRow2();
        this.loadingBackgroundRow1();
    }
    @HostListener("window:resize", ["$event"])
    onResize(event?) {
        this.setHeightOfRow2();
    }

    setHeightOfRow2() {
        const heightRow1 = $("#row1").css("height");
        $("#row2").css("height", `calc(${heightRow1} / 17 * 50)`);
        // console.log(`row1.height = ${$("#row1").css("height")}`);
        // console.log(`row2.height = ${$("#row2").css("height")}`);
    }

    loadingBackgroundRow1() {
        const bgArray = ["keyboard.jpg", "7.jpg"];
        const bg = bgArray[Math.floor(Math.random() * bgArray.length)];
        console.log(bg);
        $("#row1").css("background-image", `url("/assets/Imgs/${bg}")`);
    }
}
