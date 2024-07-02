import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaUserNinja } from 'react-icons/fa';
import { BarChart, LineChart, PieChart, ScatterChart } from '@mui/x-charts';


const AdminDashboard = () => {
    const [activeUser, setActiveUser] = useState([]);
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://furniture-server-ecru.vercel.app/users')
                .then(res => res.json())
                .then(data => setActiveUser(data));
                
            fetch('https://furniture-server-ecru.vercel.app/products')
                .then(res => res.json())
                .then(data => setProducts(data));
        }, 6000);
    }, []);

    const mainUser = activeUser.find(author => author?.users?.email === user?.email);
    const maleUser = activeUser.filter(maleauth => maleauth?.users?.gender !== 'Female');
    const FemaleUser = activeUser.filter(femaleauth => femaleauth?.users?.gender !== 'Male');
    const flashSale = products.filter(flash => flash.flashsale === true);
    const newProduct = products.filter(newp => newp?.newProduct === true);
    const categories = Array.from(new Set(products.map(product => product.category)));
    const prices = Array.from(new Set(products.map(product => product.price)));
    const gender = Array.from(new Set(activeUser.map(auth => auth.gender)));
    
    console.log(gender)
    console.log(FemaleUser?.length)
   

    return (
        <div className='grid grid-cols-4'>
            <div className="col-span-1">
                <div className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
                    <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
                        {mainUser?.role}
                    </span>
                    <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                        <img className="object-cover w-20 h-20 mt-8 mr-3 rounded-full" src={mainUser?.user?.photoURL} />
                    </div>
                    <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                        <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200" itemProp="author">
                            {mainUser?.user?.displayName}
                        </p>
                        <div className="mb-4 md:text-lg text-gray-400">
                            <p>{mainUser?.users?.email}</p>
                        </div>
                        <div className="mb-4 md:text-lg text-gray-400">
                            <p>{mainUser?.users?.gender}</p>
                        </div>
                        <div className="mb-4 md:text-lg text-gray-400">
                            <p>{mainUser?.users?.country}</p>
                        </div>
                        <div className="flex gap-4">
                            <a title="youtube url" href="https://www.youtube.com/@mcqmate" target="_blank" rel="noopener noreferrer">
                                <svg className="h-6 w-6 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5949 4.45999C21.5421 4.71353 22.2865 5.45785 22.54 6.40501C22.9982 8.12001 23 11.7004 23 11.7004C23 11.7004 23 15.2807 22.54 16.9957C22.2865 17.9429 21.5421 18.6872 20.5949 18.9407C18.88 19.4007 12 19.4007 12 19.4007C12 19.4007 5.12001 19.4007 3.405 18.9407C2.45785 18.6872 1.71353 17.9429 1.45999 16.9957C1 15.2807 1 11.7004 1 11.7004C1 11.7004 1 8.12001 1.45999 6.40501C1.71353 5.45785 2.45785 4.71353 3.405 4.45999C5.12001 4 12 4 12 4C12 4 18.88 4 20.5949 4.45999ZM15.5134 11.7007L9.79788 15.0003V8.40101L15.5134 11.7007Z" stroke="currentColor" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                            <a title="website url" href="https://mcqmate.com/" target="_blank" rel="noopener noreferrer">
                                <svg className="h-6 w-6 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <div className='flex justify-around'>
                    <div className='w-72 h-60 rounded-lg p-6 flex flex-col justify-center items-center bg-[#E3F5FF]'>
                        <p className='text-lg font-bold'>Active User</p>
                        <p className='text-gray-600 text-md font-semibold'>{activeUser?.length}</p>
                    </div>
                    <div className='w-72 h-60 rounded-lg p-6 flex flex-col justify-center items-center bg-[#E3F5FF]'>
                        <p className='text-lg font-bold'>Total Product</p>
                        <p className='text-gray-600 text-md font-semibold'>{products?.length}</p>
                    </div>
                    <div className='w-72 h-60 rounded-lg p-6 flex flex-col justify-center items-center bg-[#E3F5FF]'>
                        <p className='text-lg font-bold'>Flashsale Product</p>
                        <p className='text-gray-600 text-md font-semibold'>{flashSale?.length}</p>
                    </div>
                </div>
                <div>
                <BarChart
  xAxis={[{ scaleType: 'band', data: categories }]}
  series={[{ data: prices }]}
  width={1000}
  height={400}
/>
                </div>

<div className='flex justify-between'>
<div>
                <PieChart
  series={[
    {
      data: [
        { id: 0, value: flashSale.length, label: 'Flashsale' },
        { id: 1, value: newProduct.length, label: 'NewProduct' },
   
      ],
    },
  ]}
  width={400}
  height={200}
/>
                </div>

                <div>
                <BarChart
  xAxis={[{ scaleType: 'band', data: ['Male', 'Female'] }]}
  series={[{ data: [maleUser?.length,FemaleUser?.length] }]}
  width={500}
  height={300}
/>
                </div>
</div>

                
            </div>
        </div>
    );
}

export default AdminDashboard;