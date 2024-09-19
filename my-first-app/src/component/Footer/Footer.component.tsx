// We will need the ContentWrapper component later - let's import it
import ContentWrapper from 'Component/ContentWrapper';


// Import the original class (we want to keep most of the functionality)
// Note that we are using the "SourceComponent" alias in the import path –
// This tells Scandi that we want to get the original Footer component
import {
    FooterComponent as SourceFooter
} from 'SourceComponent/Footer/Footer.component';


// Extend the original class (SourceFooter)
// By subclassing it, we can change some of its behavior
/** @namespace myFirstApp/Component/Footer/Component/FooterComponent */
export class FooterComponent extends SourceFooter {

    renderCopyrightContent() {
    
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

// All components, including the original Footer component, have a
// default export. Other files use this export when they want to use
// this component.
// Now, instead of providing the original component, we export our
// overridden component. Any file importing this will get the new behavior!
export default FooterComponent;