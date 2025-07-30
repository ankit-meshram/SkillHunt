import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../ui/table';
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '../ui/popover';
import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const dummyJobs = [
    {
        _id: 'job1',
        title: 'Frontend Developer',
        createdAt: '2025-07-20T09:00:00Z',
        company: { name: 'TechNova' }
    },
    {
        _id: 'job2',
        title: 'Backend Engineer',
        createdAt: '2025-07-18T11:30:00Z',
        company: { name: 'CodeCrafters' }
    },
    {
        _id: 'job3',
        title: 'Product Designer',
        createdAt: '2025-07-10T08:15:00Z',
        company: { name: 'Designify' }
    }
];

const AdminJobsTable = () => {
    const [searchText, setSearchText] = useState('');
    const [filterJobs, setFilterJobs] = useState(dummyJobs);
    const navigate = useNavigate();

    useEffect(() => {
        const filtered = dummyJobs.filter((job) => {
            if (!searchText) return true;
            return (
                job.title.toLowerCase().includes(searchText.toLowerCase()) ||
                job.company.name.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        setFilterJobs(filtered);
    }, [searchText]);

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search job or company..."
                    className="border p-2 rounded w-1/3"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <Table>
                <TableCaption>A list of your recently posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterJobs.length > 0 ? (
                        filterJobs.map((job) => (
                            <TableRow key={job._id}>
                                <TableCell>{job.company.name}</TableCell>
                                <TableCell>{job.title}</TableCell>
                                <TableCell>{job.createdAt.split('T')[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div
                                                onClick={() => navigate(`/admin/companies/${job._id}`)}
                                                className="flex items-center gap-2 w-fit cursor-pointer"
                                            >
                                                <Edit2 className="w-4" />
                                                <span>Edit</span>
                                            </div>
                                            <div
                                                onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                                                className="flex items-center w-fit gap-2 cursor-pointer mt-2"
                                            >
                                                <Eye className="w-4" />
                                                <span>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center text-gray-500">
                                No jobs found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AdminJobsTable;
