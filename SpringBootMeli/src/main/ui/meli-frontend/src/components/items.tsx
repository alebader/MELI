import React from "react";
import '../assets/css/items.css';

export class Items extends React.Component<{}, {}>{
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="container">
            <ol className="ui-search-layout ui-search-layout--stack">
                <li className="ui-search-layout__item">
                    <div className="ui-search-result__wrapper">
                        <div
                            className="andes-card andes-card--flat andes-card--default ui-search-result ui-search-result--core ui-search-result--advertisement andes-card--padding-default">
                            <div className="ui-search-result__image"><a
                                href="https://click1.mercadolibre.com.ar/mclics/clicks/external/MLA/count?a=4%2FGaVrIaRajHRWgBZry2xM8DiUkX%2BusqjtthuRqLiuFtPfBV0Zw6o%2Fvr7uUCZfA2NUibM%2FZqhW27NrWSleBQ%2FjG%2BXPZG1xFP8lKesVkZcB8eBdVOwqMDlJujaeaWThdEwy6aEuFsM%2BJQrrC5gmP5e1x15hOz1ULdr%2F8ujuBMxzIQdqnt9twajXgy1psmehEeop09GEf70RDvYPm95VQ13C4fvhVb6dtIP5u3mc0G5jL6YV1DpatkeenDbSuCuTiVgI1XYDGdzfljC8VOMryMTblhf4VvFJu9HOjwXBDeoqac8pvnKAo5N%2BZPwTmpU5QPJu5cvM5wyWwkYQBYqr7lVPKjwT2N2mNqJo6fYQ6tB2z3WP%2FcMN2YhAvY8tR2SLeZFQAfMK6TG0mXlrYmsHxY1HYT671MOjtqWGNl%2F99CouCjZdSznlh4FyvEVZRWWCFUZlmrx1A7fskdFADBv41KyicWDI6coCpg7Cvxceu4F9AgTMxnzCXDFazE0Lg1y64Om3how9UPAaFLn%2BziJplkEHK8CdzeAXtLfPZxdJoL3gX8cBlz6JLlHHDqBJuojz%2Fg%2BewRCOkPHl%2Fn%2F3%2FXzwrTNQoMl%2BZ4ryKBA8u%2FA%2BMR9CruA3vy%2BXXZCxyZE5x%2FuJVpjw8fSoGe6Ovu%2BTwJ3V0B2Kda%2FdnQEOx0CXlsRxu4s9CcBuftHIriP6zeR1DOfCEe4Tlth745BMo9r655jZd04w1erLVk9rcBl%2FWzlz8ybznkOrWO18VLbhM3mTBH6O8GVBVdWCjA8VD1%2BjpzW%2BwEOkWTUnsyvHO0ZKVqMgp%2FKZ3kHjgJLY4JhjmuSnEgr8bwxiJ5nCob1uODDeqkGrn81t1HRqnJWVhJqnMidXqj4JqunFdJvvepJzLHY7xeIdN0J9A1ckHNNrP%2F142xCWnkTIJPbH39KB10PgNrMsr8Hbfdp8UZVNTe8BXtts8YWDoOUUHPGC5uvgdnkwoVDdEtJ09%2Bssoyc1%2Blg5RT9%2FtCblk9DonCeLR6qnOGIT0yX%2B9aCJuaS4EAmQhqSxyhISVNshu8jYlbtC%2FI22bvQw9c8Tgsjc9%2FfHksJal7Fry%2FKOcmMHCF3VTCT%2BOOeRVv4KbwvnT5YMqShHnYo1O3HtedAQlI6Kj6kxd%2Fdjsl8QvXjuLWcMedfcHSH73oT5FgaA6gnjyrytEcLdu0gqKtt1PqViNfCHK17HvBnOuVixiYkikUlJyfIoTzJyloj6kz%2BzGRi78BUvCFnKUNnjsJQEGNm7b0TmWbgvcgTBP34%2BDNTrHASSq%2F4ac%2BMFu9WtR0nti0%2Fi33KOq45Bs%2Bpg88KIRVq3xrDrIgAmRcP0hRRg9u0a6nHJ3vtisAiFqiTvh4AjdnC%2Bl%2Ba2rycQcH6iuDCrbgufVXO1AIJq2821R7JzU4rFkHzwAIi7gXg46ag2XWHE3dwZPs6XQYbEaNfdbQEqV%2FgDTlPlflmDozhSdJxAtQTMDJhWgPb%2BdfWvE2YPbEQtxcspg%2BBhD2KZbVqg4gWBBMGcefKiTbJdq%2Fj%2FDNNEmPwq2%2FgxwWCok3J36iwmnpX223Amf6V4GE9e9kUsFtRSQr9ke41WCajJq5rwyg%2FJOkMIfSYYx3IXoSblnclGvcMm0tsW4zYieG3sypLhNPcsI64nHXoSjNuyZqzSEuxtE3nhrrIz%2Bq%2FrDTQBUI5l2Su6uBZVWR7LyxQktRTK3St%2F0ATFXvk4N1Fprdwe%2BQ5JDuW%2BPxYmm9wQhVNSgmJST0i0r1P8%2BH%2FOWJ0oW%2BKssAkcM7UVDBNRrps4trNA0IdPy0eAaoLCy33WDD1HDhvSlxZQIvO1DFFb%2BAsIPs4vyB95npV2QpO8%2F8RoovcBYc67wbxYBxkG21XrrLsXUbjmc1W15LyHtLeaT3itCFHW3inyxK%2Fkx0qth%2F3nIC848TN800%2BWUJollAGp7QPBf%2BBVuMGrHRVH6kUJaAobSGdzCLT7eDWmx0p9XUl1GhMT4qMKDo"
                                className="ui-search-link" title="Libro Comer Y Criar - Critzmann" rel="nofollow,sponsored">
                                <div className="carousel-container arrow-visible">
                                    <div className="slick-initialized slick-slider">
                                        <div role="presentation" className="slick-list">
                                            <div className="slick-track"
                                                style={{ opacity: 1, transform: 'translate3d(0, 0, 0)', width: 225 }}>
                                                <div data-index="0" className="slick-slide slick-active"
                                                    style={{ outline: 'none', width: 160 }}><img width="160" height="160"
                                                        src="https://http2.mlstatic.com/D_NQ_NP_833669-MLA47755344596_102021-V.webp"
                                                        className="ui-search-result-image__element"
                                                        alt="Libro Comer Y Criar - Critzmann" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                            <div className="ui-search-result__content-wrapper">
                                <div className="ui-search-item__group ui-search-item__group--title"><a
                                    href="https://click1.mercadolibre.com.ar/mclics/clicks/external/MLA/count?a=4%2FGaVrIaRajHRWgBZry2xM8DiUkX%2BusqjtthuRqLiuFtPfBV0Zw6o%2Fvr7uUCZfA2NUibM%2FZqhW27NrWSleBQ%2FjG%2BXPZG1xFP8lKesVkZcB8eBdVOwqMDlJujaeaWThdEwy6aEuFsM%2BJQrrC5gmP5e1x15hOz1ULdr%2F8ujuBMxzIQdqnt9twajXgy1psmehEeop09GEf70RDvYPm95VQ13C4fvhVb6dtIP5u3mc0G5jL6YV1DpatkeenDbSuCuTiVgI1XYDGdzfljC8VOMryMTblhf4VvFJu9HOjwXBDeoqac8pvnKAo5N%2BZPwTmpU5QPJu5cvM5wyWwkYQBYqr7lVPKjwT2N2mNqJo6fYQ6tB2z3WP%2FcMN2YhAvY8tR2SLeZFQAfMK6TG0mXlrYmsHxY1HYT671MOjtqWGNl%2F99CouCjZdSznlh4FyvEVZRWWCFUZlmrx1A7fskdFADBv41KyicWDI6coCpg7Cvxceu4F9AgTMxnzCXDFazE0Lg1y64Om3how9UPAaFLn%2BziJplkEHK8CdzeAXtLfPZxdJoL3gX8cBlz6JLlHHDqBJuojz%2Fg%2BewRCOkPHl%2Fn%2F3%2FXzwrTNQoMl%2BZ4ryKBA8u%2FA%2BMR9CruA3vy%2BXXZCxyZE5x%2FuJVpjw8fSoGe6Ovu%2BTwJ3V0B2Kda%2FdnQEOx0CXlsRxu4s9CcBuftHIriP6zeR1DOfCEe4Tlth745BMo9r655jZd04w1erLVk9rcBl%2FWzlz8ybznkOrWO18VLbhM3mTBH6O8GVBVdWCjA8VD1%2BjpzW%2BwEOkWTUnsyvHO0ZKVqMgp%2FKZ3kHjgJLY4JhjmuSnEgr8bwxiJ5nCob1uODDeqkGrn81t1HRqnJWVhJqnMidXqj4JqunFdJvvepJzLHY7xeIdN0J9A1ckHNNrP%2F142xCWnkTIJPbH39KB10PgNrMsr8Hbfdp8UZVNTe8BXtts8YWDoOUUHPGC5uvgdnkwoVDdEtJ09%2Bssoyc1%2Blg5RT9%2FtCblk9DonCeLR6qnOGIT0yX%2B9aCJuaS4EAmQhqSxyhISVNshu8jYlbtC%2FI22bvQw9c8Tgsjc9%2FfHksJal7Fry%2FKOcmMHCF3VTCT%2BOOeRVv4KbwvnT5YMqShHnYo1O3HtedAQlI6Kj6kxd%2Fdjsl8QvXjuLWcMedfcHSH73oT5FgaA6gnjyrytEcLdu0gqKtt1PqViNfCHK17HvBnOuVixiYkikUlJyfIoTzJyloj6kz%2BzGRi78BUvCFnKUNnjsJQEGNm7b0TmWbgvcgTBP34%2BDNTrHASSq%2F4ac%2BMFu9WtR0nti0%2Fi33KOq45Bs%2Bpg88KIRVq3xrDrIgAmRcP0hRRg9u0a6nHJ3vtisAiFqiTvh4AjdnC%2Bl%2Ba2rycQcH6iuDCrbgufVXO1AIJq2821R7JzU4rFkHzwAIi7gXg46ag2XWHE3dwZPs6XQYbEaNfdbQEqV%2FgDTlPlflmDozhSdJxAtQTMDJhWgPb%2BdfWvE2YPbEQtxcspg%2BBhD2KZbVqg4gWBBMGcefKiTbJdq%2Fj%2FDNNEmPwq2%2FgxwWCok3J36iwmnpX223Amf6V4GE9e9kUsFtRSQr9ke41WCajJq5rwyg%2FJOkMIfSYYx3IXoSblnclGvcMm0tsW4zYieG3sypLhNPcsI64nHXoSjNuyZqzSEuxtE3nhrrIz%2Bq%2FrDTQBUI5l2Su6uBZVWR7LyxQktRTK3St%2F0ATFXvk4N1Fprdwe%2BQ5JDuW%2BPxYmm9wQhVNSgmJST0i0r1P8%2BH%2FOWJ0oW%2BKssAkcM7UVDBNRrps4trNA0IdPy0eAaoLCy33WDD1HDhvSlxZQIvO1DFFb%2BAsIPs4vyB95npV2QpO8%2F8RoovcBYc67wbxYBxkG21XrrLsXUbjmc1W15LyHtLeaT3itCFHW3inyxK%2Fkx0qth%2F3nIC848TN800%2BWUJollAGp7QPBf%2BBVuMGrHRVH6kUJaAobSGdzCLT7eDWmx0p9XUl1GhMT4qMKDo"
                                    className="ui-search-item__group__element ui-search-link" title="Libro Comer Y Criar - Critzmann"
                                    rel="nofollow,sponsored">
                                    <h2 className="ui-search-item__title">Libro Comer Y Criar - Critzmann</h2>
                                </a><a href="https://tienda.mercadolibre.com.ar/sbs-librerias"
                                    className="ui-search-official-store-item__link ui-search-link" rel="nofollow,sponsored">
                                        <p className="ui-search-official-store-label ui-search-item__group__element ui-search-color--GRAY">
                                            Vendido por SBS Librerias</p>
                                    </a></div>
                                <div className="ui-search-result__content-columns">
                                    <div className="ui-search-result__content-column ui-search-result__content-column--left">
                                        <div className="ui-search-item__group ui-search-item__group--price">
                                            <div className="ui-search-price ui-search-price--size-medium ui-search-item__group__element">
                                                <div className="ui-search-price__second-line"><span
                                                    className="price-tag ui-search-price__part"><span
                                                        className="price-tag-text-sr-only">3990 pesos</span><span
                                                            className="price-tag-amount" aria-hidden="true"><span
                                                                className="price-tag-symbol">$</span><span
                                                                    className="price-tag-fraction">3.990</span></span></span><span
                                                                        className="ui-search-price__second-line__label"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui-search-result__content-column ui-search-result__content-column--right"></div>
                                </div>
                            </div>
                            <div className="ui-search-result__bookmark">
                                <form action="/search/bookmarks/MLA1106565248" className="ui-search-bookmark" method="POST"><button
                                type ="submit" className="ui-search-bookmark__btn" aria-label="Agregar a favoritos"><svg
                                className="ui-search-icon ui-search-icon--bookmark ui-search-bookmark__icon-bookmark"
                                viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                                <use href="#bookmark"></use>
                                </svg><svg
                                className="ui-search-icon ui-search-icon--bookmark ui-search-bookmark__icon-bookmark-fill"
                                viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                                <use href="#bookmark"></use>
                                </svg></button><input type ="hidden" name="logginUrl"
                                value="https://www.mercadolibre.com/jms/mla/lgz/login?platform_id=ML&amp;go=https%3A%2F%2Flistado.mercadolibre.com.ar%2Flibros&amp;loginType=explicit" /><input
                                type ="hidden" name="_csrf" value="22GuN90J-MjxfgfV67l-Jbc53vu5bgX7MGPw" /><input type ="hidden"
                                name="method" value="add" /><input type ="hidden" name="itemId" value="MLA1106565248" />
                                </form>
                                </div>
                                </div>
                            </div>                            
                        </li>
                    </ol></div>);
    }
}