import React from 'react';
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
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';

// Dummy shortlisting options
const shortlistingStatus = ['Accepted', 'Rejected'];

const ApplicantsTable = ({ applicants = [] }) => {

    const statusHandler = (status, id) => {
        console.log(`Setting status to ${status} for applicant ID ${id}`);
        toast.success(`Status set to ${status} for applicant ID ${id}`);
    };

    return (
        <div>
            <Table>
                <TableCaption>A list of your recently applied users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applicants.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell>{item.applicant.fullname}</TableCell>
                            <TableCell>{item.applicant.email}</TableCell>
                            <TableCell>{item.applicant.phoneNumber}</TableCell>
                            <TableCell>
                                {item.applicant.profile?.resume ? (
                                    <a
                                        className="text-blue-600 cursor-pointer"
                                        href={item.applicant.profile.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.applicant.profile.resumeOriginalName}
                                    </a>
                                ) : (
                                    <span>NA</span>
                                )}
                            </TableCell>
                            <TableCell>{item.applicant.createdAt.split('T')[0]}</TableCell>
                            <TableCell className="float-right cursor-pointer">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-32">
                                        {shortlistingStatus.map((status) => (
                                            <div
                                                key={status}
                                                onClick={() => statusHandler(status, item._id)}
                                                className="flex w-fit items-center my-2 cursor-pointer"
                                            >
                                                <span>{status}</span>
                                            </div>
                                        ))}
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ApplicantsTable;
