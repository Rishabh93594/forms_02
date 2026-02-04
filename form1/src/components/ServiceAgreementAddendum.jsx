import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ServiceAgreementAddendum = () => {
    // State management for form data
    const [formData, setFormData] = useState([
        { change: '', reason: '', date: '', acknowledgement: '' },
        { change: '', reason: '', date: '', acknowledgement: '' },
        { change: '', reason: '', date: '', acknowledgement: '' },
        { change: '', reason: '', date: '', acknowledgement: '' }
    ]);

    // Handle input changes
    const handleChange = (index, field, value) => {
        const updatedData = [...formData];
        updatedData[index][field] = value;
        setFormData(updatedData);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Service Agreement Addendum Data:', formData);
        alert('Form submitted successfully! Check console for data.');
    };

    return (
        <div className="w-full flex justify-center bg-gray-100 min-h-screen p-8 text-black font-sans">
            {/* Paper Container */}
            <form onSubmit={handleSubmit} className="bg-white w-[210mm] min-h-[297mm] shadow-lg p-[20mm] relative flex flex-col items-center">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-12 w-full">
                    <div className="flex items-center gap-4 mb-8">
                        {/* Logo image */}
                        <img src={logo} alt="Pacific Health Systems" className="h-20 object-contain" />
                    </div>

                    <h2 className="text-xl font-bold text-black mb-4">
                        Addendum to Service Agreement
                    </h2>
                    <p className="italic font-bold text-sm text-center max-w-lg">
                        This form should be completed when there are revisions to the original service agreement.
                    </p>
                </div>

                {/* Table Section */}
                <div className="w-full border-2 border-black mb-6">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 border-b border-black font-bold text-sm">
                        <div className="border-r border-black p-2 h-full flex items-center">Specific Change to be Made</div>
                        <div className="border-r border-black p-2 h-full flex items-center">Reason for Change/Type of Service</div>
                        <div className="border-r border-black p-2 h-full flex items-center">Date Change to Begin</div>
                        <div className="p-2 h-full flex items-center">Client Acknowledgement</div>
                    </div>

                    {/* Table Rows (4 large rows as per image) */}
                    {[0, 1, 2, 3].map((index) => (
                        <div key={index} className="grid grid-cols-4 border-b border-black last:border-b-0 h-32">
                            <textarea
                                className="border-r border-black p-2 resize-none outline-none focus:bg-blue-50 h-full w-full"
                                value={formData[index].change}
                                onChange={(e) => handleChange(index, 'change', e.target.value)}
                            />
                            <textarea
                                className="border-r border-black p-2 resize-none outline-none focus:bg-blue-50 h-full w-full"
                                value={formData[index].reason}
                                onChange={(e) => handleChange(index, 'reason', e.target.value)}
                            />
                            <textarea
                                className="border-r border-black p-2 resize-none outline-none focus:bg-blue-50 h-full w-full"
                                value={formData[index].date}
                                onChange={(e) => handleChange(index, 'date', e.target.value)}
                            />
                            <textarea
                                className="p-2 resize-none outline-none focus:bg-blue-50 h-full w-full"
                                value={formData[index].acknowledgement}
                                onChange={(e) => handleChange(index, 'acknowledgement', e.target.value)}
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

export default ServiceAgreementAddendum;
