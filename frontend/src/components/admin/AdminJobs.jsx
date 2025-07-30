import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import AdminJobsTable from './AdminJobsTable';

const AdminJobs = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto my-10">
                <div className="flex items-center justify-between my-5">
                    <Input
                        className="w-fit"
                        placeholder="Filter by name, role"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate('/admin/jobs/create')}>New Jobs</Button>
                </div>
                <AdminJobsTable searchText={input} />
            </div>
        </div>
    );
};

export default AdminJobs;
