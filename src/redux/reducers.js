import { combineReducers } from "redux";

const firstArticleData = [
    {
        title: 'Lorem, ipsum dolor.',
        contents: 'Semper risus in hendrerit gravida rutrum quisque non. Pellentesque habitant morbi tristique senectus et netus. Sodales neque sodales ut etiam sit. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Id diam vel quam elementum pulvinar etiam non. In est ante in nibh. Purus sit amet volutpat consequat mauris nunc congue nisi. Elit eget gravida cum sociis. Leo urna molestie at elementum eu facilisis sed odio morbi. Eu scelerisque felis imperdiet proin fermentum leo vel. Vitae ultricies leo integer malesuada nunc vel. Egestas diam in arcu cursus euismod quis viverra.',
        time: '1:10:39',
        timeEdit: '1:10:43',
    },
    {
        title: 'Labore et dolore magna aliqua?',
        contents: 'Cras tincidunt lobortis feugiat vivamus at augue. Arcu vitae elementum curabitur vitae nunc sed. Odio ut enim blandit volutpat maecenas volutpat blandit. Blandit turpis cursus in hac habitasse platea dictumst. Ullamcorper malesuada proin libero nunc. Sagittis orci a scelerisque purus semper eget. Aliquam eleifend mi in nulla. Curabitur vitae nunc sed velit. Odio aenean sed adipiscing diam donec adipiscing tristique. Mollis aliquam ut porttitor leo a diam sollicitudin tempor.',
        time: '3:2:29',
        timeEdit: '4:27:31',
    },
    {
        title: 'Excepteur sint occaecat cupidatat non proident.',
        contents: 'Amet aliquam id diam maecenas ultricies mi eget. Tortor at risus viverra adipiscing at in tellus integer feugiat. Volutpat odio facilisis mauris sit amet massa. Massa eget egestas purus viverra accumsan. Dignissim sodales ut eu sem. Amet mattis vulputate enim nulla aliquet porttitor lacus. Lorem ipsum dolor sit amet. Vestibulum sed arcu non odio. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Euismod in pellentesque massa placerat.',
        time: '4:13:39',
        timeEdit: '5:15:43',
    },
]

const youtubeReducer = (state = { youtube: [] }, action) => {
    switch (action.type) {
        case 'SET_YOUTUBE':
            return { ...state, youtube: action.payload };
        default:
            return state;
    }
}


const noticeReducer = (state = { notice: firstArticleData }, action) => {
    switch (action.type) {
        case 'SET_NOTICE':
            return { ...state, notice: action.payload };
        default:
            return state;
    }
}

const reducers = combineReducers({
    youtubeReducer, noticeReducer
})

export default reducers;