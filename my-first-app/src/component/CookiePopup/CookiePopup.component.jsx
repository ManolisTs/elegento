import {
    CookiePopupComponent as SourceCookiePopupComponent,
} from 'SourceComponent/CookiePopup/CookiePopup.component';

import './CookiePopup.override.style';

/** @namespace myFirstApp/Component/CookiePopup/Component */
export class CookiePopupComponent extends SourceCookiePopupComponent {
    // TODO implement logic
    renderCTA() {
        return (
            <div
              block="CookiePopup"
              elem="CTA"
              onClick={ this.acceptCookies }
              onKeyDown={ this.acceptCookies }
              role="button"
              tabIndex={ 0 }
            >
                { __('accept and continue') }
            </div>
        );
    }
}

export default CookiePopupComponent;
