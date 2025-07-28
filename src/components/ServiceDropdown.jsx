import React, { useState } from "react";

const ServiceDropdown = () => {
  const [activeForm, setActiveForm] = useState("instantRent");
  const [formData, setFormData] = useState({});

  const handleClick = (formName) => {
    setActiveForm(formName);
    setFormData({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted ${activeForm} service!`);
    setFormData({
      pickup: "",
      dropoff: "",
      estimateTime: "",
      price: "",
      destination: "",
      driverHours: "",
      vehicleType: "",
      startLocation: "",
      endLocation: "",
      tripDays: "",
      passengers: "",
      
    });
  };

  const formFields = {
    instantRent: ["pickup", "dropoff", "estimateTime", "price"],
    privateDriver: ["pickup", "destination", "driverHours", "vehicleType"],
    longTrip: ["startLocation", "endLocation", "tripDays", "passengers"],
  };

  const renderLabel = (field) => {
    const labels = {
      pickup: "Pickup",
      dropoff: "Drop Off",
      estimateTime: "Estimate Time",
      price: "Pricing",
      destination: "Destination",
      driverHours: "Driver Hours",
      vehicleType: "Vehicle Type",
      startLocation: "Start Location",
      endLocation: "End Location",
      tripDays: "Trip Days",
      passengers: "Passengers",
    };
    return labels[field] || field;
  };

  return (
    <div className="bg-red-100 dark:bg-gray-800 rounded-xl shadow-md p-6 w-full">
      <div className="flex justify-center gap-6 mb-6 border-b pb-3">
        {[
          { name: "Instant Rent", id: "instantRent" },
          { name: "Private Driver", id: "privateDriver" },
          { name: "Long Trip", id: "longTrip" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`px-4 py-2 font-semibold rounded-t ${
              activeForm === tab.id
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {formFields[activeForm].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="text-sm font-medium mb-1 dark:text-white">
              {renderLabel(field)}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder={renderLabel(field)}
            />
          </div>
        ))}

        <div className="col-span-full flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
          >
            {activeForm === "instantRent"
              ? "Rent Now!"
              : activeForm === "privateDriver"
              ? "Book Driver"
              : "Start Trip"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceDropdown;
