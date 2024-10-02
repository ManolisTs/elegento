import { connect } from 'react-redux';

import {
    DEFAULT_NAVIGATION_TABS_STATE,
    mapDispatchToProps,
    mapStateToProps,
    NavigationTabsContainer as SourceNavigationTabsContainer,
} from 'SourceComponent/NavigationTabs/NavigationTabs.container';

export {
    mapStateToProps,
    mapDispatchToProps,
    DEFAULT_NAVIGATION_TABS_STATE,
};

/** @namespace myFirstApp/Component/NavigationTabs/Container */
export class NavigationTabsContainer extends SourceNavigationTabsContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabsContainer);
