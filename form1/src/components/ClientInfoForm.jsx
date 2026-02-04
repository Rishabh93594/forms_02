import React, { useState } from "react";
import logo from '../assets/logo.png';

const td = {
    border: "1px solid #000",
    padding: "4px",
    fontSize: "11px",
    verticalAlign: "top",
};

const input = {
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "11px",
};

const blackRow = {
    background: "#000",
    height: "8px",
    padding: 0,
};

const centerItalic = {
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
};

const Form01ClientInfo = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        streetAddress: '',
        county: '',
        phone: '',
        sex: '',
        language: '',
        ssn: '',
        admissionDate: '',
        dob: '',
        medicaid: '',
        nextOfKin: {
            name: '',
            relationship: '',
            address: '',
            phone: ''
        },
        contacts: [
            { name: '', address: '', phone: '', relationship: '' },
            { name: '', address: '', phone: '', relationship: '' },
            { name: '', address: '', phone: '', relationship: '' }
        ],
        physicians: [
            { type: '', name: '', address: '', phone: '' },
            { type: '', name: '', address: '', phone: '' },
            { type: '', name: '', address: '', phone: '' }
        ]
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleNestedChange = (section, field, value) => {
        setFormData({ ...formData, [section]: { ...formData[section], [field]: value } });
    };

    const handleArrayChange = (section, index, field, value) => {
        const updated = [...formData[section]];
        updated[index][field] = value;
        setFormData({ ...formData, [section]: updated });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Client Information Form Data:', formData);
        alert('Form submitted successfully! Check console for data.');
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: "900px",
                margin: "auto",
                padding: "20px",
                fontFamily: "Arial, sans-serif",
                background: "#fff",
            }}
        >
            {/* HEADER */}
            <div style={{ borderBottom: "2px solid #000", paddingBottom: "10px" }}>
                <div className="flex justify-center items-center gap-4">
                    <img src={logo} alt="Pacific Health Systems" style={{ height: 80, objectFit: 'contain' }} />
                </div>
            </div>

            <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                Client Information Form
            </h3>

            {/* MAIN TABLE */}
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                <tbody>
                    <tr>
                        <td style={td}>Last Name:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.lastName} onChange={(e) => handleChange('lastName', e.target.value)} /></td>
                        <td style={td}>First Name:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.firstName} onChange={(e) => handleChange('firstName', e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Middle Name:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.middleName} onChange={(e) => handleChange('middleName', e.target.value)} /></td>
                        <td style={td}>Program: ☐ NOW ☐ COMP</td>
                        <td style={td} colSpan="3"></td>
                    </tr>

                    <tr>
                        <td style={td}>Street Address:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.streetAddress} onChange={(e) => handleChange('streetAddress', e.target.value)} /></td>
                        <td style={td}>Services: CLS, CAI, RESPITE</td>
                        <td style={td} colSpan="3"></td>
                    </tr>

                    <tr>
                        <td style={td}>County:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.county} onChange={(e) => handleChange('county', e.target.value)} /></td>
                        <td style={td}>Phone:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Sex:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.sex} onChange={(e) => handleChange('sex', e.target.value)} /></td>
                        <td style={td}>Language:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.language} onChange={(e) => handleChange('language', e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td style={td}>SSN#:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.ssn} onChange={(e) => handleChange('ssn', e.target.value)} /></td>
                        <td style={td}>Admission Date:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.admissionDate} onChange={(e) => handleChange('admissionDate', e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Date of Birth:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.dob} onChange={(e) => handleChange('dob', e.target.value)} /></td>
                        <td style={td}>Medicaid #:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.medicaid} onChange={(e) => handleChange('medicaid', e.target.value)} /></td>
                    </tr>

                    <tr><td style={blackRow} colSpan="8"></td></tr>

                    {/* NEXT OF KIN */}
                    <tr>
                        <td colSpan="8" style={{ ...td, ...centerItalic }}>
                            Next of Kin (if minor or adjudicated, parent, or legal guardian):
                        </td>
                    </tr>

                    <tr>
                        <td style={td}>Name:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.nextOfKin.name} onChange={(e) => handleNestedChange('nextOfKin', 'name', e.target.value)} /></td>
                        <td style={td}>Relationship:</td>
                        <td style={td} colSpan="3"><input style={input} value={formData.nextOfKin.relationship} onChange={(e) => handleNestedChange('nextOfKin', 'relationship', e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Address:</td>
                        <td style={td} colSpan="7"><input style={input} value={formData.nextOfKin.address} onChange={(e) => handleNestedChange('nextOfKin', 'address', e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Phone:</td>
                        <td style={td} colSpan="7"><input style={input} value={formData.nextOfKin.phone} onChange={(e) => handleNestedChange('nextOfKin', 'phone', e.target.value)} /></td>
                    </tr>

                    <tr><td style={blackRow} colSpan="8"></td></tr>

                    {/* CONTACTS */}
                    <tr>
                        <td colSpan="8" style={{ ...td, ...centerItalic }}>
                            Contacts: Support Coordination & Provider Services
                        </td>
                    </tr>

                    <tr>
                        <td style={td} colSpan="2">Name</td>
                        <td style={td} colSpan="2">Address</td>
                        <td style={td} colSpan="2">Phone</td>
                        <td style={td} colSpan="2">Relationship</td>
                    </tr>

                    {[0, 1, 2].map(i => (
                        <tr key={i}>
                            <td style={td} colSpan="2"><input style={input} value={formData.contacts[i].name} onChange={(e) => handleArrayChange('contacts', i, 'name', e.target.value)} /></td>
                            <td style={td} colSpan="2"><input style={input} value={formData.contacts[i].address} onChange={(e) => handleArrayChange('contacts', i, 'address', e.target.value)} /></td>
                            <td style={td} colSpan="2"><input style={input} value={formData.contacts[i].phone} onChange={(e) => handleArrayChange('contacts', i, 'phone', e.target.value)} /></td>
                            <td style={td} colSpan="2"><input style={input} value={formData.contacts[i].relationship} onChange={(e) => handleArrayChange('contacts', i, 'relationship', e.target.value)} /></td>
                        </tr>
                    ))}

                    <tr><td style={blackRow} colSpan="8"></td></tr>

                    {/* PHYSICIAN */}
                    <tr>
                        <td colSpan="8" style={{ ...td, ...centerItalic }}>
                            Physician and Other Professional Services
                        </td>
                    </tr>

                    <tr>
                        <td style={td} colSpan="2">Type of Specialist</td>
                        <td style={td} colSpan="2">Name</td>
                        <td style={td} colSpan="2">Address</td>
                        <td style={td} colSpan="2">Phone</td>
                    </tr>

                    {[0, 1, 2].map(i => (
                        <tr key={i}>
                            <td style={td} colSpan="2"><input style={input} value={formData.physicians[i].type} onChange={(e) => handleArrayChange('physicians', i, 'type', e.target.value)} /></td>
                            <td style={td} colSpan="2"><input style={input} value={formData.physicians[i].name} onChange={(e) => handleArrayChange('physicians', i, 'name', e.target.value)} /></td>
                            <td style={td} colSpan="2"><input style={input} value={formData.physicians[i].address} onChange={(e) => handleArrayChange('physicians', i, 'address', e.target.value)} /></td>
                            <td style={td} colSpan="2"><input style={input} value={formData.physicians[i].phone} onChange={(e) => handleArrayChange('physicians', i, 'phone', e.target.value)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Submit Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '12px 32px',
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                    Submit Form
                </button>
            </div>
        </form>
    );
};

export default Form01ClientInfo;
