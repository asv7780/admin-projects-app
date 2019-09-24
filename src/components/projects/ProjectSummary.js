import React from 'react';
import moment from 'moment'


const ProjectSummary = ({project}) => {
    return (
        <div>
            <div className="card blue-grey lighten-5 z-depth-0 project-summary">
                <div className="card-content black-text">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="black-text">{moment(project.createdAt.toDate()).format('lll')}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectSummary;
