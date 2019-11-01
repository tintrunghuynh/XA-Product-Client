import { Component, OnInit } from "@angular/core";
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

    }

}
