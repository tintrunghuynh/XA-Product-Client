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
    canvas: HTMLCanvasElement;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.setHeightOfRow2();
        this.loadingBackgroundRow1();
        this.drawEquilateralTriangle();
    }
    @HostListener("window:resize", ["$event"])
    onResize(event?) {
        this.setHeightOfRow2();
        this.drawEquilateralTriangle();
    }

    setHeightOfRow2() {
        // const heightRow1 = $("#row1").css("height");
        // $("#row2").css("min-height", `calc(${heightRow1} / 17 * 50)`);
        // console.log(`row1.height = ${$("#row1").css("height")}`);
        // console.log(`row2.height = ${$("#row2").css("height")}`);
    }

    loadingBackgroundRow1() {
        const bgArray = ["keyboard.jpg", "7_edited.jpg"];
        const bg = bgArray[Math.floor(Math.random() * bgArray.length)];
        $("#row1").css("background-image", `url("/assets/Imgs/${bg}")`);
    }
    drawEquilateralTriangle() {
        const container = $("#shape-container");
        const borderLeftOrRightWidth = 450;
        const borderBottomWidth = borderLeftOrRightWidth * 1.7320508;

        // centroid
        const x0 = borderLeftOrRightWidth;
        const y0 = borderBottomWidth * 2 / 3;
        // top-perk
        const x1 = 450;
        const y1 = 0;
        // left-perk
        const x2 = 0;
        const y2 = borderBottomWidth;
        // right-perk
        const x3 = borderLeftOrRightWidth * 2;
        const y3 = borderBottomWidth;
        container.attr({ });
        // container.append(`<line x1="${x1}" y1="${y1}" x2="${x0}" y2="${y0}" style="stroke:rgb(255,0,0);stroke-width:2">`);
        $(document.createElementNS("http://www.w3.org/2000/svg", "svg")).attr({
            viewBox: "0 0 100 100"
        }).appendTo("#shape-container");
    }
}
