import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTenant = () => {
  const [tenant, setTenant] = useState({
    name: "",
    contactNo: "",
    guardianName: "",
    guardianContactNo: "",
    admissionDate: "",
    workPlace: "",
    aadhaarNo: "",
    building: "",
    roomNo: "",
    roomType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenant({ ...tenant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = tenant.admissionDate
      ? new Date(tenant.admissionDate).toISOString().split("T")[0]
      : "";

    const formattedTenant = {
    //  id: 0,
      name: tenant.name,
      contactNo: tenant.contactNo,
      guardianName: tenant.guardianName,
      guardianContactNo: tenant.guardianContactNo,
      admissionDate: formattedDate,
      workPlace: tenant.workPlace,
      aadhaarNo: tenant.aadhaarNo,
      building: tenant.building,
      roomNo: tenant.roomNo,
      roomType: tenant.roomType,
    };

    try {
      const response = await axios.post(
        "https://pg-website-backend.onrender.com/api/tenants",
        formattedTenant,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Tenant added:", response.data);
      alert("Tenant added successfully!");

      setTenant({
        name: "",
        contactNo: "",
        guardianName: "",
        guardianContactNo: "",
        admissionDate: "",
        workPlace: "",
        aadhaarNo: "",
        building: "",
        roomNo: "",
        roomType: "",
      });
    } catch (err) {
      console.error("Error adding tenant:", err.response?.data || err.message);
      alert(
        "Failed to add tenant. Server says: " +
          (err.response?.data?.error || "Unknown error")
      );
    }
  };

  return (
    <section className=" e min-h-[80vh] p-4">
    <h2 className="text-3xl mt-[2vh] font-bold mb-4 text-center text-[#222831]">Add Tenant Data</h2>
    <div className=" max-w-6xl mx-auto mt-6 p-4  rounded-lg bg-[#DFD0B8] text-[#222831] shadow-lg shadow-black/25">
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {/* {[
          { label: "Name", name: "name" },
          { label: "Contact Number", name: "contactNo" },
          { label: "Guardian Name", name: "guardianName" },
          { label: "Guardian Contact Number", name: "guardianContactNo" },
          { label: "Workplace", name: "workPlace" },
          { label: "Aadhaar Number", name: "aadhaarNo" },
          { label: "Building", name: "building" },
          { label: "Room Number", name: "roomNo" },
          { label: "Room Type", name: "roomType" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={tenant[name]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none"
            />
          </div>
        ))} */}

        {/* Admission Date using DatePicker */}
        {/* <div>
          <label className="block mb-1 font-medium">Admission Date</label>
          <DatePicker
            selected={tenant.admissionDate ? new Date(tenant.admissionDate) : null}
            onChange={(date) =>
              setTenant({
                ...tenant,
                admissionDate: date,
              })
            }
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#222831] text-white py-2 px-4 rounded hover:bg-[#393E46]"
        >
          Submit
        </button> */}

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="w-full">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={tenant.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none  placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
            placeholder="Enter tenant's name"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Contact No</label>
          <input
            type="text"
            name="contactNo"
            value={tenant.contactNo}
            onChange={handleChange}
            required
            placeholder="Enter contact number"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="w-full">
          <label className="block mb-1 font-medium">Guardian Name</label>
          <input
            type="text"
            name="guardianName"
            value={tenant.guardianName}
            onChange={handleChange}
            required
            placeholder="Enter guardian's name"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Guardian's Contact Number</label>
          <input
            type="text"
            name="guardianContactNo"
            value={tenant.guardianContactNo}
            onChange={handleChange}
            required
            placeholder="Enter guardian's contact number"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="w-full">
          <label className="block mb-1 font-medium">Workplace</label>
          <input
            type="text"
            name="workPlace"
            value={tenant.workPlace}
            onChange={handleChange}
            required
            placeholder="Enter workplace"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Aadhaar Number</label>
          <input
            type="text"
            name="aadhaarNo"
            value={tenant.aadhaarNo}
            onChange={handleChange}
            required
            placeholder="Enter Aadhaar number"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Admission Date</label>
          <DatePicker
            selected={tenant.admissionDate ? new Date(tenant.admissionDate) : null}
            onChange={(date) =>
              setTenant({
                ...tenant,
                admissionDate: date,
              })
            }
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="w-full">
          <label className="block mb-1 font-medium">Building</label>
          <select
            name="building"
            value={tenant.building}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          >
            <option value="">Select building</option>
            <option value="Single Sharing">Single Sharing</option>
            <option value="Double Sharing">Double Sharing</option>
            <option value="Triple Sharing">Triple Sharing</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Room Number</label>
          <input
            type="text"
            name="roomNo"
            value={tenant.roomNo}
            onChange={handleChange}
            required
            placeholder="Enter room number"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Room Type</label>
          {/* <input
            type="text"
            name="roomType"
            value={tenant.roomType}
            onChange={handleChange}
            required
            placeholder="Enter room type"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          /> */}
          <select
            name="roomType"
            value={tenant.roomType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none placeholder-white bg-[#948979] text-white shadow-lg shadow-black/25"
          >
            <option value="">Select Room Type</option>
            <option value="Single Sharing">Single Sharing</option>
            <option value="Double Sharing">Double Sharing</option>
            <option value="Triple Sharing">Triple Sharing</option>
          </select>
        </div>
      </div>

      

        <button
          type="submit"
          className="mt-4 font-bold bg-[#948979] border-2 border-[#5a4c37] text-white py-2 px-4 rounded hover:bg-[#393E46] w-[30%] mx-auto"
        >
          Submit
        </button>


      </form>
    </div>
    </section>
  );
};

export default AddTenant;
