import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import {
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatSliderModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// About me
import { IntroduceComponent } from "./admin/components/introduce/introduce.component";
import { ParticlesModule } from "angular-particle";


// User
import { NavComponent } from "./client/component/nav/nav-component.component";
import { HeaderComponent } from "./client/component/header/header-component.component";
import { ClientComponent } from "./client/component/client-component.component";
import { RegisterComponent } from "./client/component/section/account/register/register-component.component";
import { LoginComponent } from "./client/component/section/account/login/login-component.component";
import { FooterComponent } from "./client/component/footer/footer-component.component";
import { ProfileComponent } from "./client/component/section/account/profile/profile-component.component";
import { ProductComponent } from "./client/component/section/product/product-component.component";

// Admin
import { AdminComponent } from "./admin/components/admin-component.component";
import { AdmFooterComponent } from "./admin/components/footer/footer.component";
import { AdmHeaderComponent } from "./admin/components/header/header.component";
import { AdmNavComponent } from "./admin/components/nav/nav.component";

import { AdmCategoryComponent } from "./admin/components/section/category/category.component";
import { AdmCategoryCreateComponent } from "./admin/components/section/category/category-create/category-create.component";
import { AdmCategoryDetailsComponent } from "./admin/components/section/category/category-details/category-details.component";
import { AdmCategoryEditComponent } from "./admin/components/section/category/category-edit/category-edit.component";

import { AdmProductComponent } from "./admin/components/section/product/product.component";
import { AdmProductCreateComponent } from "./admin/components/section/product/product-create/product-create.component";
import { AdmProductDetailsComponent } from "./admin/components/section/product/product-details/product-details.component";
import { AdmProductEditComponent } from "./admin/components/section/product/product-edit/product-edit.component";

import { AdmUserComponent } from "./admin/components/section/user/usercomponent";
import { AdmUserDetailsComponent } from "./admin/components/section/user/user-details/user-details.component";
import { AdmUserEditComponent } from "./admin/components/section/user/user-edit/user-edit.component";
import { AdmUserCreateComponent } from "./admin/components/section/user/user-create/user-create.component";

import { AdmCartComponent } from "./admin/components/section/cart/cart.component";
import { AdmCartCreateComponent } from "./admin/components/section/cart/cart-create/cart-create.component";
import { AdmCartDetailsComponent } from "./admin/components/section/cart/cart-details/cart-details.component";
import { AdmCartEditComponent } from "./admin/components/section/cart/cart-edit/cart-edit.component";

import { AdmInterfaceSpecComponent } from "./admin/components/section/interface-spec/interface-spec.component";
import { AdmInterfaceSpecCreateComponent } from "./admin/components/section/interface-spec/interface-spec-create/interface-spec-create.component";
import { AdmInterfaceSpecDetailsComponent } from "./admin/components/section/interface-spec/interface-spec-details/interface-spec-details.component";
import { AdmInterfaceSpecEditComponent } from "./admin/components/section/interface-spec/interface-spec-edit/interface-spec-edit.component";
import { GeneralValidationService } from "./services/validator/general-validation.service";
import { MessagesControlComponent } from "./services/validator/components/messages-control/messages-control.component";
// const appRouters: Router = [

// ]
@NgModule({
    declarations: [
        AppComponent,

        // Client
        ClientComponent,
        NavComponent,
        HeaderComponent,
        RegisterComponent,
        LoginComponent,
        FooterComponent,
        ProfileComponent,
        ProductComponent,

        // Admin
        AdminComponent,
        AdmFooterComponent,
        AdmHeaderComponent,
        AdmNavComponent,

        AdmInterfaceSpecComponent,
        AdmInterfaceSpecCreateComponent,
        AdmInterfaceSpecDetailsComponent,
        AdmInterfaceSpecEditComponent,

        AdmCategoryComponent,
        AdmCategoryCreateComponent,
        AdmCategoryDetailsComponent,
        AdmCategoryEditComponent,

        AdmProductComponent,
        AdmProductCreateComponent,
        AdmProductDetailsComponent,
        AdmProductEditComponent,

        AdmUserComponent,
        AdmUserCreateComponent,
        AdmUserDetailsComponent,
        AdmUserEditComponent,

        AdmCartComponent,
        AdmCartCreateComponent,
        AdmCartDetailsComponent,
        AdmCartEditComponent,
        MessagesControlComponent,
        IntroduceComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        BrowserAnimationsModule,

        // Practicles
        ParticlesModule,

        // Apollo Module
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,

        // Mat
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatDividerModule,
        MatSelectModule,
        MatSliderModule
    ],
    providers: [GeneralValidationService],
    bootstrap: [AppComponent]
})

export class AppModule {

    constructor(private apollo: Apollo, private httpLink: HttpLink) {
        // Reading Environment Variables
        let GRAPHQL_BASEURI = process.env.GraphQL_URL_PATH || "https://xaproductserver.herokuapp.com/graphql-retrieve";
        if (process.env.NODE_ENV === "development") {
            GRAPHQL_BASEURI = "http://127.0.0.1:8080/graphql-retrieve";
        }
        // console.log(`GRAPHQL_BASEURI: ${GRAPHQL_BASEURI}`);
        this.apollo.create({
            link: this.httpLink.create({
                uri: GRAPHQL_BASEURI,
                // Don't forget that you can actually pass http Headers
                // directly here with the option "httpOptions"
            }),
            cache: new InMemoryCache({ dataIdFromObject: o => o.id }),
        });
    }
}
