import ContentWrapper from 'Component/ContentWrapper';

import {
    FooterComponent as SourceFooterComponent,
} from 'SourceComponent/Footer/Footer.component';

/** @namespace myFirstApp/Component/Footer/Component */
export class FooterComponent extends SourceFooterComponent {
    // TODO implement logic
    renderCopyrightContent() {
    
        // Changed:
        // Instead of the copyright text, let's write a friendly message
        return (
            <ContentWrapper
              mix={ { block: 'Footer', elem: 'CopyrightContentWrapper' } }
              wrapperMix={ { block: 'Footer', elem: 'CopyrightContent' } }
              label=""
            >
                <span block="Footer" elem="Copyright">
                    Thank you for visiting my website. You are amazing!
                </span>
            </ContentWrapper>
        );
    }
}

export default FooterComponent;
