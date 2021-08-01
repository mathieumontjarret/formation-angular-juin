'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">formation-angular-juin documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-86d7287b0cb54216ee20a69e8cbdc43c"' : 'data-target="#xs-components-links-module-AppModule-86d7287b0cb54216ee20a69e8cbdc43c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-86d7287b0cb54216ee20a69e8cbdc43c"' :
                                            'id="xs-components-links-module-AppModule-86d7287b0cb54216ee20a69e8cbdc43c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-1ed3be9b9078c74e64d427c9d1eaf21c"' : 'data-target="#xs-components-links-module-ClientsModule-1ed3be9b9078c74e64d427c9d1eaf21c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-1ed3be9b9078c74e64d427c9d1eaf21c"' :
                                            'id="xs-components-links-module-ClientsModule-1ed3be9b9078c74e64d427c9d1eaf21c"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-545d571117c5b1e6a529d97292de31c2"' : 'data-target="#xs-components-links-module-LoginModule-545d571117c5b1e6a529d97292de31c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-545d571117c5b1e6a529d97292de31c2"' :
                                            'id="xs-components-links-module-LoginModule-545d571117c5b1e6a529d97292de31c2"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-010bc63084f587ee220fad2d33d4cfff"' : 'data-target="#xs-components-links-module-OrdersModule-010bc63084f587ee220fad2d33d4cfff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-010bc63084f587ee220fad2d33d4cfff"' :
                                            'id="xs-components-links-module-OrdersModule-010bc63084f587ee220fad2d33d4cfff"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-089f57fc0c5d97583879e98d324ecf63"' : 'data-target="#xs-components-links-module-PageNotFoundModule-089f57fc0c5d97583879e98d324ecf63"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-089f57fc0c5d97583879e98d324ecf63"' :
                                            'id="xs-components-links-module-PageNotFoundModule-089f57fc0c5d97583879e98d324ecf63"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplateModule.html" data-type="entity-link" >TemplateModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});