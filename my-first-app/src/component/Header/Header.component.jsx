import { HeaderComponent as SourceHeader } from 'SourceComponent/Header/Header.component';

/** @namespace myFirstApp/Component/Header/Component */
export class HeaderComponent extends SourceHeader {
    renderLogoImage() {
        return 'Hello';
    }
}

export default HeaderComponent;
