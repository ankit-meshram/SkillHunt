import React, { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar';
import ApplicantsTable from './ApplicantsTable';
import { useParams } from 'react-router-dom';

// 🔹 Dummy applicants data
const mockApplicants = {
    jobId: '123',
    applications: [
        {
            _id: 'a1',
            name: 'Alice Johnson',
            email: 'alice@example.com',
            resume: 'https://example.com/resume/alice.pdf',
            appliedAt: '2025-07-10T14:23:00Z'
        },
        {
            _id: 'a2',
            name: 'Bob Smith',
            email: 'bob@example.com',
            resume: 'https://example.com/resume/bob.pdf',
            appliedAt: '2025-07-12T09:45:00Z'
        },
        {
            _id: 'a3',
            name: 'Charlie Brown',
            email: 'charlie@example.com',
            resume: 'https://example.com/resume/charlie.pdf',
            appliedAt: '2025-07-15T17:30:00Z'
        }
    ]
};

const Applicants = () => {
    const params = useParams();
    const [applicants, setApplicants] = useState({ applications: [] });

    useEffect(() => {
        // simulate fetching from API
        const timeout = setTimeout(() => {
            setApplicants(mockApplicants);
        }, 500);

        return () => clearTimeout(timeout);
    }, [params.id]);

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <h1 className="font-bold text-xl my-5">
                    Applicants ({applicants?.applications?.length})
                </h1>
                <ApplicantsTable applicants={applicants.applications} />
            </div>
        </div>
    );
};

export default Applicants;
