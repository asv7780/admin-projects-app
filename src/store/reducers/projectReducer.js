const initState = {
    projects: [
        {id: '1', title: 'Awesome, Easy, Progressive CSS3 Way', content: 'We can do this purely through'},
        {id: '2', title: 'CSS-Only Technique #1', content: 'We set a min-height which keeps it filling'},
        {id: '3', title: 'jQuery Method', content: 'This whole idea becomes a lot easier (from a CSS perspective) i'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
