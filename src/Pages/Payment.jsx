import React from 'react';
import Navbar from '../Components/Navbar';
import Money from "../assets/payment.jpg";
import Footer from '../Components/Footer';

const Payment = () => {
    const accountDetails = [
        {
            bankName: "HDFC Bank Account Details",
            accountHolder: "Royal Collection Hotels & Resorts Pvt. Ltd.",
            bankDetails: "HDFC (Dwarka Sec-5 New Delhi)",
            accountNo: "02498140000032",
            rtgsCode: "HDFC0000249",
            BranchCode: "0249"
        },
        {
            bankName: "ICICI Bank Account Details",
            accountHolder: "Royal Collection Hotels & Resorts Pvt. Ltd.",
            bankDetails: "ICICI (Dwarka Chowk), Plot No – 5A-6A, Jai Bharat Enclave, New Delhi",
            accountNo: "235505000018",
            rtgsCode: "ICIC0002355",
        },
    ];

    return (
        <>
            <Navbar />
            <section className="min-h-screen w-full px-4 py-10 bg-gradient-to-br from-gray-100 to-white">
                <div className="max-w-7xl mx-auto rounded-xl p-6 md:p-10 bg-red-100 shadow-xl border border-red-300">
                    <p className="uppercase font-extrabold text-xl md:text-2xl mb-4 text-red-700 tracking-wide">Important Notice</p>
                    <p className='italic font-medium text-sm md:text-base text-justify text-gray-800 leading-relaxed'>
                        Payments should only be made using the official account number and scanner provided below. We do not accept cash deposits or physical payments. The company is not responsible for any payments made to other accounts, scanners, or individuals. Please ensure all payments are directed through the official methods only.
                    </p>

                    <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10">
                        <div className="bg-white p-4 rounded-xl shadow-lg w-full lg:w-1/2 flex items-center justify-center">
                            <img src={Money} alt="QR Code" className='h-64 w-auto object-contain' />
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg w-full lg:w-[60%]">
                            <h2 className='text-gray-800 font-bold font-extrabold text-2xl md:text-3xl uppercase text-center mb-6'>
                                Bank Account Details
                            </h2>

                            <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-6'>
                                {accountDetails.map((item, index) => (
                                    <div
                                        key={index}
                                        className='w-full md:w-[48%] bg-gray-50 hover:bg-gray-100 rounded-3xl transition rounded-lg p-4 border border-gray-300 shadow-sm text-left'
                                    >
                                        <h3 className='font-bold text-red-600 text-lg md:text-xl mb-2'>{item.bankName}</h3>
                                        <p className='text-sm mb-1'><span className='font-semibold text-gray-700'>Account Holder:</span> {item.accountHolder}</p>
                                        <p className='text-sm mb-1'><span className='font-semibold text-gray-700'>Bank Details:</span> {item.bankDetails}</p>
                                        <p className='text-sm mb-1'><span className='font-semibold text-gray-700'>Account No:</span> {item.accountNo}</p>
                                        <p className='text-sm mb-1'><span className='font-semibold text-gray-700'>RTGS Code:</span> {item.rtgsCode}</p>
                                        {item.BranchCode && (
                                            <p className='text-sm'><span className='font-semibold text-gray-700'>Branch Code:</span> {item.BranchCode}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Payment;
