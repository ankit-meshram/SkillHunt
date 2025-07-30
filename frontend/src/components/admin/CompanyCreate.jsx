import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');

    const registerNewCompany = async () => {
        try {
            if (!companyName.trim()) {
                toast.error('Please enter a valid company name.');
                return;
            }

            // 🧪 Simulated fake API response
            const fakeResponse = {
                data: {
                    success: true,
                    message: 'Company registered successfully!',
                    company: {
                        _id: String(Date.now()), // Simulated ID
                        name: companyName,
                        logo: 'https://via.placeholder.com/100',
                        createdAt: new Date().toISOString()
                    }
                }
            };


            // Simulate redirection to company's edit page
            const companyId = fakeResponse.data.company._id;
            navigate(`/admin/companies/${companyId}`);
        } catch (error) {
            toast.error('Something went wrong while registering the company.');
            console.log(error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>
                        What would you like to give your company name? You can change this later.
                    </p>
                </div>

                <Label>Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="JobHunt, Microsoft, etc."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />

                <div className='flex items-center gap-2 my-10'>
                    <Button variant="outline" onClick={() => navigate('/admin/companies')}>Cancel</Button>
                    <Button onClick={registerNewCompany}>Continue</Button>
                </div>
            </div>
        </div>
    );
};

export default CompanyCreate;
