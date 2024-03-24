import React from 'react';
import Card from './Card';
import Employee from '../../Component/Employee';

const MainContent = ({ sidebarOpen }) => {
    return (
        <div className={`flex flex-col mt-16 top-16 bg-gray-100 justify-center items-center h-max p-0 bg-white dark:bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
            {/* <Card />
            <Card />
            <Card /> */}
            <Employee/>
        </div>
    );
}

export default MainContent;
