import { HeaderComponent as SourceHeader } from 'SourceComponent/Header/Header.component';

class HeaderComponent extends SourceHeader {
    renderLogoImage() {
        return 'Hello';
    }
}

export default HeaderComponent;