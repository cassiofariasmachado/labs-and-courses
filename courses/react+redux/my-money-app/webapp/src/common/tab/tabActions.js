const TAB_CONSTANTS = {
    TAB_SELECTED: 'TAB_SELECTED',
    TAB_SHOWED: 'TAB_SHOWED'
}

export default TAB_CONSTANTS

export function selectTab(tabId) {
    return {
        type: TAB_CONSTANTS.TAB_SELECTED,
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(elem => tabsToShow[elem] = true)
    return {
        type: TAB_CONSTANTS.TAB_SHOWED,
        payload: tabsToShow
    }
}