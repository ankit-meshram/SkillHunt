import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';

// ✅ Dummy company data
const dummyCompanies = [
    {
        _id: '1',
        name: 'TechCorp',
        email: 'hr@techcorp.com',
        location: 'Bangalore',
        createdAt: '2023-09-15T12:00:00Z'
    },
    {
        _id: '2',
        name: 'InnovateX',
        email: 'jobs@innovatex.io',
        location: 'Mumbai',
        createdAt: '2024-01-05T10:30:00Z'
    },
    {
        _id: '3',
        name: 'SoftSolutions',
        email: 'careers@softsolutions.com',
        location: 'Delhi',
        createdAt: '2022-11-20T09:15:00Z'
    }
];

const Companies = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    // Simple filter logic
    const filteredCompanies = dummyCompanies.filter(company =>
        company.name.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto my-10">
                <div className="flex items-center justify-between my-5">
                    <Input
                        className="w-fit"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <Button onClick={() => navigate("/admin/companies/create")}>
                        New Company
                    </Button>
                </div>
                <CompaniesTable companies={filteredCompanies} />
            </div>
        </div>
    );
};

export default Companies;
