import React, { useContext, useEffect, useRef, useState } from "react";
import { MdDateRange, MdOutlineMenu } from "react-icons/md";
import { SidebarContext } from "../../context/SidebarContext";
import { addDays } from "date-fns";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";
import './DataTable.css';

const ManageStaff = () => {
  const { openSidebar } = useContext(SidebarContext);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleClickOutside = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Full Name',
      selector: row => row.fullName,
      sortable: true,
    },
    {
      name: 'Height',
      selector: row => row.height,
      sortable: true,
    },
    {
      name: 'Weight',
      selector: row => row.weight,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(row)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row.id)}>Delete</button>
        </div>
      ),
    },
  ];

  const data = [
    { id: 1, fullName: 'John Doe', height: '1.75m', weight: '89kg' },
    { id: 2, fullName: 'Jane Doe', height: '1.64m', weight: '55kg' },
    { id: 3, fullName: 'Sheera Maine', height: '1.69m', weight: '74kg' },
  ];

  const handleEdit = (row) => {
    console.log('Editing:', row);
  };

  const handleDelete = (id) => {
    console.log('Deleting ID:', id);
  };

  const handleAddStaff = () => {
    // Implement add staff functionality
    console.log('Adding new staff');
  };

  return (
    <>
      <section className="content-area-top">
        <div className="area-top-l">
          <button
            className="sidebar-open-btn"
            type="button"
            onClick={openSidebar}
          >
            <MdOutlineMenu size={24} />
          </button>
          <h2 className="area-top-title">Manage Staff</h2>
        </div>
        <div className="area-top-r">
          <div
            ref={dateRangeRef}
            className={`date-range-wrapper ${
              !showDatePicker ? "hide-date-range" : ""
            }`}
            onClick={handleInputClick}
          >
            <MdDateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              showMonthAndYearPickers={false}
            />
          </div>
        </div>
      </section>

      <div className="container-fluid my-5">
        {/* Add Staff Button */}
        <div className="d-flex justify-content-between mb-3">
          <h3>User Data</h3> {/* Optional Title */}
          <button 
            className="btn btn-success" 
            onClick={handleAddStaff}
          >
            Add Staff
          </button>
        </div>

        <DataTable
          columns={columns}
          data={data}
          pagination
          bordered
          hover
          className="data-table table table-bordered"
        />
      </div>
    </>
  );
};

export default ManageStaff;