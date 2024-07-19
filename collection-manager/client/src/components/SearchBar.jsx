import React, { useEffect, useMemo, useState } from "react";
import useApi from "../hooks/useApi";
import useValidation from "../hooks/useValidation";
import InputField from "./atoms/InputField";
import Dropdown from "./atoms/Dropdown";
import CheckboxList from "./atoms/CheckboxList";

const SearchBar = ({ onSearch, onReset }) => {
  const [position, setPositon] = useState(null);
  const {
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
  } = useValidation();

  const { data: collections, loading: collectionsLoading } = useApi(
    "/collections",
    []
  );
  const { data: columns, loading: columnsLoading } = useApi(
    selectedCollection ? `/${selectedCollection}/columns` : null,
    []
  );

  const checkBoxList=useMemo(()=>{
    return (columns.filter(value => !selectedColumns.includes(value)))
  },[selectedColumns, columns])

  useEffect(() => {
    if (columns.length > 0) {
      setColumns(columns);
    }
  }, [columns, setColumns]);

  const handleButtonSearch = () => {
     const isValid = validateInput()
     isValid && onSearch(selectedCollection, selectedColumns);
  };

  const handleReset = () => {
    reset();
    onReset();
  };

  const handleInputWrapperChange = (e) => {
    const { value } = e.target;
    if (!value) {
      handleReset();
    }
    handleInputChange(e);
  };

  return (
    <div className="search-bar">
      <div className="banner text-center bg-primary text-white py-2">
        <h2>Collection Search - NewGen</h2>
      </div>
      <div className="px-4">
        <div className="d-flex relative">
          <InputField
            value={value}
            selectedCollection={selectedCollection}
            onChange={handleInputWrapperChange}
            setPositon={setPositon}
          />
          <div className="d-flex mt-3">
            <button className="btn btn-primary ms-2" onClick={handleButtonSearch}>
              Search
            </button>
          </div>

        </div>
        {showDropdown && !collectionsLoading && (
          <Dropdown position={position} collections={collections} onSelect={handleDropdownSelect} />
        )}
        {showCheckboxes && !columnsLoading && (
          <CheckboxList
          position={position}
            columns={checkBoxList}
            selectedColumns={selectedColumns}
            onChange={handleCheckboxChange}
            setShowCheckboxes={setShowCheckboxes}
          />
        )}
        {errorMessage && <div className="mt-3 text-danger">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default SearchBar;
