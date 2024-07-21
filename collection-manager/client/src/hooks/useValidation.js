import { useState, useEffect } from 'react';

const useValidation = () => {
    const [value, setValue] = useState('');
    const [selectedCollection, setSelectedCollection] = useState('');
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [availableColumns, setAvailableColumns] = useState([]);

    useEffect(() => {
        if (!selectedCollection) {
            resetColumns();
        }
    }, [selectedCollection]);

    const resetColumns = () => {
        setShowCheckboxes(false);
        setSelectedColumns([]);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setValue(value);

        const lastAtCollectionIndex = value.lastIndexOf('@collection');
        const lastAtColnameIndex = value.lastIndexOf('@colname');
        
        if (lastAtCollectionIndex !== -1) {
            handleAtCollectionSymbol(value.substring(lastAtCollectionIndex));
        } else if (lastAtColnameIndex !== -1) {
            handleAtColnameSymbol(value.substring(lastAtColnameIndex));
        } else {
            setShowDropdown(false);
            setErrorMessage('');
            handleColumnChange(value);
        }
    };

    const handleColumnChange = (value) => {
        const match = value.match(/And\s(.+)/i);   
        if (match) {
          const columns = match[1].split(',').map(column => column.trim());
          const validColumns = columns.every(value => availableColumns.includes(value));
          validColumns && setSelectedColumns(columns);
        } else {
          setSelectedColumns([]);
        }
      };

    const handleAtCollectionSymbol = () => {
        setShowDropdown(true);
        setShowCheckboxes(false);
    };

    const handleAtColnameSymbol = () => {
        setShowDropdown(false);
        setShowCheckboxes(true);
    };

    const handleDropdownSelect = (collection) => {
        setSelectedCollection(collection);
        setValue(prev => replaceAtCollectionWithCollection(prev, collection));
        setShowDropdown(false);
        setShowCheckboxes(false);
        setErrorMessage('');
    };

    const handleCheckboxChange = (col) => {
        setSelectedColumns(prev =>
            prev.includes(col) ? prev.filter(c => c !== col) : [...prev, col]
        );

        setValue(prev => {
            return prev.includes('@colname')
                ? replaceAtColnameWithColumns(prev, [col])
                : updateValueWithColumn(prev, col);
        });
    };

    const replaceAtCollectionWithCollection = (prevValue, collection) => {
        const atIndex = prevValue.lastIndexOf('@collection');
        if (atIndex !== -1) {
            return prevValue.substring(0, atIndex) + collection + prevValue.substring(atIndex + 11);
        }
        return prevValue;
    };

    const replaceAtColnameWithColumns = (prevValue, columns) => {
        const atIndex = prevValue.lastIndexOf('@colname');
        if (atIndex !== -1) {
            return prevValue.substring(0, atIndex) + columns.join(', ')
        }
        return prevValue;
    };

    const updateValueWithColumn = (prevValue, col) => {
        if (!prevValue.includes('@colname')) {
            return prevValue + (prevValue ? ', ' : '') + col;
        }
        return prevValue;
    };

    const reset = () => {
        setValue('');
        setSelectedCollection('');
        resetColumns();
        setShowDropdown(false);
        setErrorMessage('');
    };

    const setColumns = (columns) => {
        setAvailableColumns(columns);
    };

    const validateInput = () => {
        if (!value.includes('And')) {
            setErrorMessage('Please enter a valid Query: missing And');
            return false;
        }

        const inputColumns = value.split('And')[1]?.trim().split(', ');
        if (!inputColumns || !inputColumns.every(value => availableColumns.includes(value))){
            setErrorMessage('Please enter valid Columns');
            return false;
        }

        setErrorMessage('');
        return true;
    };

    return {
        value,
        selectedCollection,
        selectedColumns,
        showDropdown,
        showCheckboxes,
        errorMessage,
        handleInputChange,
        handleDropdownSelect,
        handleCheckboxChange,
        reset,
        validateInput,
        setColumns,
        setShowCheckboxes
    };
};

export default useValidation;
