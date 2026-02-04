import { useState } from 'react'
import VisitLogChart from './components/VisitLogChart'
import ClientInfoForm from './components/ClientInfoForm'
import ServiceAgreementAddendum from './components/ServiceAgreementAddendum'
import PatientMedicationRecord from './components/PatientMedicationRecord'
import ServiceAgreementForm from './components/ServiceAgreementForm'
import ClientServicePlan from './components/ClientServicePlan'
import ClientVehiclePolicy from './components/ClientVehiclePolicy'
import FreedomOfChoice from './components/FreedomOfChoice'
import PhotographAuthorization from './components/PhotographAuthorization'
import AdvanceDirectives from './components/AdvanceDirectives'
import MyHumanRights from './components/MyHumanRights'
import Hipaaprivacy from './components/Hipaaprivacy'
import AbuseNeglect from './components/AbuseNeglect'
import GrievanceComplaints from './components/GrievanceComplaints'


function App() {
  const [currentForm, setCurrentForm] = useState('visit-log')

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="fixed top-0 left-0 w-full bg-slate-800 text-white p-4 shadow-md z-50 flex justify-center gap-4 flex-wrap">
        <button
          onClick={() => setCurrentForm('visit-log')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'visit-log' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Visit Log Chart
        </button>
        <button
          onClick={() => setCurrentForm('client-info')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'client-info' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Client Information Form
        </button>
        <button
          onClick={() => setCurrentForm('service-addendum')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'service-addendum' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Service Addendum
        </button>
        <button
          onClick={() => setCurrentForm('medication-record')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'medication-record' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Medication Record
        </button>
        <button
          onClick={() => setCurrentForm('service-agreement')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'service-agreement' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Service Agreement
        </button>
        <button
          onClick={() => setCurrentForm('client-service-plan')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'client-service-plan' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Client Service Plan
        </button>
        <button
          onClick={() => setCurrentForm('client-vehicle-policy')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'client-vehicle-policy' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Vehicle Policy
        </button>
        <button
          onClick={() => setCurrentForm('freedom-of-choice')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'freedom-of-choice' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Freedom of Choice
        </button>
        <button
          onClick={() => setCurrentForm('photo-auth')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'photo-auth' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Photo Auth
        </button>
        <button
          onClick={() => setCurrentForm('advance-directives')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'advance-directives' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Advance Directives
        </button>
        <button
          onClick={() => setCurrentForm('human-rights')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'human-rights' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Human Rights
        </button>
        <button
          onClick={() => setCurrentForm('hipaa-privacy')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'hipaa-privacy' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          HIPAA Privacy
        </button>
        <button
          onClick={() => setCurrentForm('abuse-neglect')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'abuse-neglect' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Abuse & Neglect
        </button>
        <button
          onClick={() => setCurrentForm('grievance-complaints')}
          className={`px-4 py-2 rounded-lg transition-colors ${currentForm === 'grievance-complaints' ? 'bg-blue-600 font-bold' : 'hover:bg-slate-700'}`}
        >
          Grievance & Complaints
        </button>
      </nav>

      <div className="pt-20">
        {currentForm === 'visit-log' && <VisitLogChart />}
        {currentForm === 'client-info' && <ClientInfoForm />}
        {currentForm === 'service-addendum' && <ServiceAgreementAddendum />}
        {currentForm === 'medication-record' && <PatientMedicationRecord />}
        {currentForm === 'service-agreement' && <ServiceAgreementForm />}
        {currentForm === 'client-service-plan' && <ClientServicePlan />}
        {currentForm === 'client-vehicle-policy' && <ClientVehiclePolicy />}
        {currentForm === 'freedom-of-choice' && <FreedomOfChoice />}
        {currentForm === 'photo-auth' && <PhotographAuthorization />}
        {currentForm === 'advance-directives' && <AdvanceDirectives />}
        {currentForm === 'human-rights' && <MyHumanRights />}
        {currentForm === 'hipaa-privacy' && <Hipaaprivacy />}
        {currentForm === 'abuse-neglect' && <AbuseNeglect />}
        {currentForm === 'grievance-complaints' && <GrievanceComplaints />}



      </div>
    </div>
  )
}

export default App
