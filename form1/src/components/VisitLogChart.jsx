import React, { useState } from 'react';
import logo from '../assets/logo.png';

const VisitLogChart = () => {
    // Create an array for the rows to render
    const rows = Array.from({ length: 25 });

    // State management for form data
    const [formData, setFormData] = useState(
        rows.map(() => ({ date: '', name: '', title: '', purpose: '' }))
    );

    // Handle input changes
    const handleChange = (index, field, value) => {
        const updatedData = [...formData];
        updatedData[index][field] = value;
        setFormData(updatedData);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Visit Log Chart Data:', formData);
        alert('Form submitted successfully! Check console for data.');
    };

    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black">
            {/* Paper Container */}
            <form onSubmit={handleSubmit} className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center gap-4 mb-2">
                        {/* Logo image */}
                        <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain" />
                    </div>

                    <h2 className="text-xl font-bold uppercase mt-6 mb-2 text-black border-b-2 border-transparent">
                        Visit Log Chart
                    </h2>
                </div>

                {/* Table Section */}
                <div className="w-full border-2 border-black mb-6">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 border-b border-black font-bold text-center text-sm">
                        <div className="col-span-2 border-r border-black p-1">Date</div>
                        <div className="col-span-4 border-r border-black p-1">Name</div>
                        <div className="col-span-2 border-r border-black p-1">Title</div>
                        <div className="col-span-4 p-1">Purpose of Visit</div>
                    </div>

                    {/* Table Rows */}
                    {rows.map((_, index) => (
                        <div key={index} className="grid grid-cols-12 border-b border-black text-sm h-8">
                            <input
                                className="col-span-2 border-r border-black p-1 focus:bg-blue-50 outline-none h-full w-full"
                                type="text"
                                value={formData[index].date}
                                onChange={(e) => handleChange(index, 'date', e.target.value)}
                            />
                            <input
                                className="col-span-4 border-r border-black p-1 focus:bg-blue-50 outline-none h-full w-full"
                                type="text"
                                value={formData[index].name}
                                onChange={(e) => handleChange(index, 'name', e.target.value)}
                            />
                            <input
                                className="col-span-2 border-r border-black p-1 focus:bg-blue-50 outline-none h-full w-full"
                                type="text"
                                value={formData[index].title}
                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                            />
                            <input
                                className="col-span-4 p-1 focus:bg-blue-50 outline-none h-full w-full"
                                type="text"
                                value={formData[index].purpose}
                                onChange={(e) => handleChange(index, 'purpose', e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200"
                    >
                        Submit Form
                    </button>
                </div>

            </form>
        </div>
    );
};

export default VisitLogChart;
