import React from 'react';

const NoDataMessage = () => {
    return (
        <div className="alert alert-info mt-3" role="alert">
            No data available. Please refine your search criteria or try again later.
        </div>
    );
};

export default NoDataMessage;
