import { HeaderComponent as SourceHeader } from 'SourceComponent/Header/Header.component';

class Header extends SourceHeader {
    renderLogoImage() {
        return 'Hello';
    }
}

export default Header;