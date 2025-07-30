import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard.jsx';
import Job from './Job.jsx';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const jobsArray = [
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


const Jobs = () => {

    // const { allJobs, searchedQuery } = useSelector(store => store.job);
    // const [filterJobs, setFilterJobs] = useState(allJobs);

    // useEffect(() => {
    //     if (searchedQuery) {
    //         const filteredJobs = allJobs.filter((job) => {
    //             return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
    //                 job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
    //                 job.location.toLowerCase().includes(searchedQuery.toLowerCase())
    //         })
    //         setFilterJobs(filteredJobs)
    //     } else {
    //         setFilterJobs(allJobs)
    //     }
    // }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        jobsArray.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        jobsArray.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default Jobs;
