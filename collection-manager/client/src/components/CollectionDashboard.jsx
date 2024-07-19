import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import SearchBar from './SearchBar';
import NoDataMessage from './atoms/NoDataMessage';

const CollectionDashboard = () => {
    const [columns, setColumns] = useState([]);
    const [collectionUrl, setCollectionUrl] = useState('');
    const [searched, setSearched] = useState(false);

    const { data: rowData, loading: dataLoading } = useApi(collectionUrl, []);

    const handleSearch = (selectedCollection, selectedColumns) => {
        setCollectionUrl(`/${selectedCollection}`);
        setColumns(selectedColumns);
        setSearched(true);
    };

    const handleReset = () => {
        setColumns([]);
        setCollectionUrl('');
        setSearched(false);
    };

    useEffect(() => {
        if (!collectionUrl) {
            setSearched(false);
        }
    }, [collectionUrl]);

    return (
        <div className="table-container px-4 mt-5">
            <SearchBar onSearch={handleSearch} onReset={handleReset} />
            <div className="table-responsive mt-5">
                {dataLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {searched && !rowData.length ? (
                            <NoDataMessage />
                        ) : (
                            <table className="table table-striped table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        {columns.map((col, index) => (
                                            <th key={index}>{col}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowData.map((row, index) => (
                                        <tr key={index}>
                                            {columns.map((col, colIndex) => (
                                                <td key={colIndex}>{row[col]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default CollectionDashboard;
