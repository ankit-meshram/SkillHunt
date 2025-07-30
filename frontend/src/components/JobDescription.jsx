import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';

const dummyUser = { _id: "user123" };

const dummyJob = {
    _id: jobId,
    title: "Frontend Developer",
    postion: 2,
    jobType: "Full-time",
    salary: 12,
    location: "Remote",
    description: "We are looking for a frontend developer with strong React skills.",
    experience: 2,
    applications: [{ applicant: "user123" }, { applicant: "user456" }],
    createdAt: new Date().toISOString()
};
const JobDescription = () => {
    const params = useParams();
    const jobId = params.id;

    // Dummy user and job

    const [singleJob, setSingleJob] = useState(null);
    const [isApplied, setIsApplied] = useState(false);

    useEffect(() => {
        // Simulate API call
        setSingleJob(dummyJob);
        setIsApplied(dummyJob.applications.some(app => app.applicant === dummyUser._id));
    }, [jobId]);

    const applyJobHandler = () => {
        if (!isApplied) {
            setIsApplied(true);
            setSingleJob(prev => ({
                ...prev,
                applications: [...prev.applications, { applicant: dummyUser._id }]
            }));
            alert("Successfully applied for the job!");
        }
    };

    if (!singleJob) return <div>Loading...</div>;

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{singleJob.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className='text-blue-700 font-bold' variant="ghost">{singleJob.postion} Positions</Badge>
                        <Badge className='text-[#F83002] font-bold' variant="ghost">{singleJob.jobType}</Badge>
                        <Badge className='text-[#7209b7] font-bold' variant="ghost">{singleJob.salary} LPA</Badge>
                    </div>
                </div>
                <Button
                    onClick={applyJobHandler}
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob.experience} yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob.salary} LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob.applications.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob.createdAt.split("T")[0]}</span></h1>
            </div>
        </div>
    );
};

export default JobDescription;
