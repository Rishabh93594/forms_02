import React from "react";
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
    return (
        <div
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
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td style={td}>Last Name:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                        <td style={td}>First Name:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Middle Name:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                        <td style={td}>Program: ☐ NOW ☐ COMP</td>
                        <td style={td} colSpan="3"></td>
                    </tr>

                    <tr>
                        <td style={td}>Street Address:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                        <td style={td}>Services: CLS, CAI, RESPITE</td>
                        <td style={td} colSpan="3"></td>
                    </tr>

                    <tr>
                        <td style={td}>County:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                        <td style={td}>Phone:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Sex:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                        <td style={td}>Language:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                    </tr>

                    <tr>
                        <td style={td}>SSN#:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                        <td style={td}>Admission Date:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Date of Birth:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                        <td style={td}>Medicaid #:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
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
                        <td style={td} colSpan="3"><input style={input} /></td>
                        <td style={td}>Relationship:</td>
                        <td style={td} colSpan="3"><input style={input} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Address:</td>
                        <td style={td} colSpan="7"><input style={input} /></td>
                    </tr>

                    <tr>
                        <td style={td}>Phone:</td>
                        <td style={td} colSpan="7"><input style={input} /></td>
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

                    {[1, 2, 3].map(i => (
                        <tr key={i}>
                            <td style={td} colSpan="2"><input style={input} /></td>
                            <td style={td} colSpan="2"><input style={input} /></td>
                            <td style={td} colSpan="2"><input style={input} /></td>
                            <td style={td} colSpan="2"><input style={input} /></td>
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

                    {[1, 2, 3].map(i => (
                        <tr key={i}>
                            <td style={td} colSpan="2"><input style={input} /></td>
                            <td style={td} colSpan="2"><input style={input} /></td>
                            <td style={td} colSpan="2"><input style={input} /></td>
                            <td style={td} colSpan="2"><input style={input} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Form01ClientInfo;
