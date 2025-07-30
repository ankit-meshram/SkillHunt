import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from './ui/table';
import { Badge } from './ui/badge';

const AppliedJobTable = () => {
    // ✅ Dummy data
    const allAppliedJobs = [
        {
            _id: "1",
            createdAt: new Date().toISOString(),
            job: {
                title: "Frontend Developer",
                company: {
                    name: "TechCorp"
                }
            },
            status: "pending"
        },
        {
            _id: "2",
            createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
            job: {
                title: "Backend Engineer",
                company: {
                    name: "InnovateX"
                }
            },
            status: "accepted"
        },
        {
            _id: "3",
            createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
            job: {
                title: "UI/UX Designer",
                company: {
                    name: "Designify"
                }
            },
            status: "rejected"
        }
    ];

    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">You haven't applied to any jobs yet.</TableCell>
                            </TableRow>
                        ) : (
                            allAppliedJobs.map((appliedJob) => (
                                <TableRow key={appliedJob._id}>
                                    <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                    <TableCell>{appliedJob.job?.title}</TableCell>
                                    <TableCell>{appliedJob.job?.company?.name}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge
                                            className={
                                                appliedJob.status === "rejected"
                                                    ? 'bg-red-400'
                                                    : appliedJob.status === "pending"
                                                        ? 'bg-gray-400'
                                                        : 'bg-green-400'
                                            }>
                                            {appliedJob.status.toUpperCase()}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;
