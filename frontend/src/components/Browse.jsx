import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';

const allJobs = [
    {
        _id: "job1",
        createdAt: new Date().toISOString(), // Today
        company: {
            logo: "https://via.placeholder.com/40", // Placeholder logo
            name: "TechCorp"
        },
        title: "Frontend Developer",
        description: "We are looking for a skilled frontend developer with experience in React.",
        position: 2,
        jobType: "Full-time",
        salary: 12
    },
    {
        _id: "job2",
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
        company: {
            logo: "https://via.placeholder.com/40",
            name: "InnovateX"
        },
        title: "Backend Engineer",
        description: "Join our backend team to build scalable APIs using Node.js.",
        position: 1,
        jobType: "Part-time",
        salary: 8
    },
    {
        _id: "job3",
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
        company: {
            logo: "https://via.placeholder.com/40",
            name: "DevSolutions"
        },
        title: "Full Stack Developer",
        description: "Looking for a full stack developer experienced in MERN stack.",
        position: 3,
        jobType: "Contract",
        salary: 10
    },
    // Add more job objects as needed
];


const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job} />
                            );
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Browse;