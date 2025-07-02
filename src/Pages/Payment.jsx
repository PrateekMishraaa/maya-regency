import React from 'react';
import Qr from "../assets/payment.jpg"
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
const Payment = () => {
    // Sample payment image - replace with your actual image URL
    const paymentImage = Qr;
    
    const accountDetails = [
        {
            bankName: "HDFC Bank",
            accountHolder: "Royal Collection Hotels & Resorts Pvt. Ltd.",
            bankDetails: "HDFC (Dwarka Sec-5 New Delhi)",
            accountNo: "02498140000032",
            rtgsCode: "HDFC0000249",
            branchCode: "0249"
        },
        {
            bankName: "ICICI Bank",
            accountHolder: "Royal Collection Hotels & Resorts Pvt. Ltd.",
            bankDetails: "ICICI (Dwarka Chowk), Plot No – 5A-6A, Jai Bharat Enclave, New Delhi",
            accountNo: "235505000018",
            rtgsCode: "ICIC0002355",
        },
    ];

    const styles = {
        container: {
            minHeight: '100vh',
            width: '100%',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            padding: '2rem 1rem',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        },
        
        mainCard: {
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(226, 232, 240, 0.8)'
        },
        
        noticeCard: {
            background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
            border: '2px solid #fca5a5',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2.5rem',
            position: 'relative',
            overflow: 'hidden'
        },
        
        noticeTitle: {
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            fontWeight: '800',
            color: '#dc2626',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        
        noticeText: {
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: '#374151',
            lineHeight: '1.7',
            fontStyle: 'italic'
        },
        
        contentGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'start'
        },
        
        qrSection: {
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            border: '2px solid #e2e8f0'
        },
        
        qrTitle: {
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1rem'
        },
        
        qrImageContainer: {
            position: 'relative',
            padding: '1rem',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '3px solid #e2e8f0',
            marginBottom: '1rem'
        },
        
        qrImage: {
            width: '100%',
            maxWidth: '280px',
            height: 'auto',
            borderRadius: '12px',
            display: 'block'
        },
        
        downloadButton: {
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '10px',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        
        bankSection: {
            background: 'white'
        },
        
        bankTitle: {
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            fontWeight: '800',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: '2rem',
            position: 'relative'
        },
        
        bankGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
        },
        
        bankCard: {
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '2px solid #e2e8f0',
            borderRadius: '16px',
            padding: '1.5rem',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        },
        
        bankCardHover: {
            transform: 'translateY(-4px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
            borderColor: '#3b82f6'
        },
        
        bankName: {
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            fontWeight: '700',
            color: '#3b82f6',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        
        bankDetail: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
        },
        
        detailRow: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem'
        },
        
        detailLabel: {
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.025em'
        },
        
        detailValue: {
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: '#1e293b',
            fontWeight: '500',
            wordBreak: 'break-all'
        },
        
        importantValue: {
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #bfdbfe',
            fontFamily: 'monospace',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            position: 'relative'
        },
        
        copyHint: {
            fontSize: '0.7rem',
            color: '#64748b',
            marginTop: '0.25rem',
            fontStyle: 'italic'
        },
        
        securityNote: {
            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
            border: '2px solid #86efac',
            borderRadius: '12px',
            padding: '1rem',
            marginTop: '2rem',
            textAlign: 'center'
        },
        
        securityText: {
            fontSize: '0.9rem',
            color: '#15803d',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap'
        }
    };

    const copyToClipboard = (text) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                // Create a temporary notification
                const notification = document.createElement('div');
                notification.textContent = 'Copied to clipboard!';
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 0.75rem 1rem;
                    border-radius: 8px;
                    font-weight: 600;
                    z-index: 1000;
                    animation: slideIn 0.3s ease;
                `;
                document.body.appendChild(notification);
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 2000);
            }).catch(() => {
                alert('Copied: ' + text);
            });
        } else {
            // Fallback for older browsers
            alert('Copied: ' + text);
        }
    };

    const downloadQR = () => {
        const link = document.createElement('a');
        link.href = paymentImage;
        link.download = 'payment-qr-code.jpg';
        link.click();
    };

    // Media query handling
    const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;
    const isMediumScreen = typeof window !== 'undefined' && window.innerWidth >= 768;

    return (
       <>
       <Navbar/>
        <div style={styles.container}>
            <div style={styles.mainCard}>
                
                {/* Important Notice */}
                <div style={styles.noticeCard}>
                    <h2 style={styles.noticeTitle}>
                        ⚠️ Important Payment Notice
                    </h2>
                    <p style={styles.noticeText}>
                        Payments should only be made using the official account details and QR code provided below. 
                        We do not accept cash deposits or physical payments. The company is not responsible for 
                        any payments made to unauthorized accounts or individuals. Please verify all payment 
                        details before transferring funds.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div style={{
                    ...styles.contentGrid,
                    ...(isLargeScreen ? { gridTemplateColumns: '400px 1fr' } : {}),
                    ...(isMediumScreen && !isLargeScreen ? { gridTemplateColumns: '1fr' } : {})
                }}>
                    
                    {/* QR Code Section */}
                    <div style={styles.qrSection}>
                        <h3 style={styles.qrTitle}>📱 Scan to Pay</h3>
                        
                        <div style={styles.qrImageContainer}>
                            <img 
                                src={paymentImage} 
                                alt="Payment QR Code - Scan with your banking app" 
                                style={styles.qrImage}
                                onError={(e) => {
                                    // Fallback if image fails to load
                                    e.target.style.display = 'none';
                                    const fallback = document.createElement('div');
                                    fallback.style.cssText = `
                                        width: 280px;
                                        height: 280px;
                                        background: linear-gradient(135deg, #64748b 0%, #475569 100%);
                                        border-radius: 12px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        color: white;
                                        font-weight: 600;
                                        text-align: center;
                                        font-size: 1rem;
                                    `;
                                    fallback.textContent = 'QR Code\n(Payment Scanner)';
                                    e.target.parentNode.appendChild(fallback);
                                }}
                            />
                        </div>
                        
                        <p style={{ 
                            fontSize: '0.9rem', 
                            color: '#64748b',
                            fontWeight: '500',
                            marginBottom: '1rem',
                            lineHeight: '1.5'
                        }}>
                            Scan this QR code with any UPI app like Google Pay, PhonePe, Paytm, or your banking app
                        </p>
                        
                        <button 
                            onClick={downloadQR}
                            style={styles.downloadButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'none';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            📥 Download QR Code
                        </button>
                    </div>

                    {/* Bank Details Section */}
                    <div style={styles.bankSection}>
                        <h2 style={styles.bankTitle}>
                            🏦 Official Bank Account Details
                        </h2>
                        
                        <div style={{
                            ...styles.bankGrid,
                            ...(isMediumScreen ? { gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' } : {})
                        }}>
                            {accountDetails.map((account, index) => (
                                <div
                                    key={index}
                                    style={styles.bankCard}
                                    onMouseEnter={(e) => {
                                        Object.assign(e.currentTarget.style, styles.bankCardHover);
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'none';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                    }}
                                >
                                    <h3 style={styles.bankName}>
                                        🏛️ {account.bankName}
                                    </h3>
                                    
                                    <div style={styles.bankDetail}>
                                        <div style={styles.detailRow}>
                                            <span style={styles.detailLabel}>Account Holder</span>
                                            <span style={styles.detailValue}>{account.accountHolder}</span>
                                        </div>
                                        
                                        <div style={styles.detailRow}>
                                            <span style={styles.detailLabel}>Bank Details</span>
                                            <span style={styles.detailValue}>{account.bankDetails}</span>
                                        </div>
                                        
                                        <div style={styles.detailRow}>
                                            <span style={styles.detailLabel}>Account Number</span>
                                            <div 
                                                style={{...styles.detailValue, ...styles.importantValue}}
                                                onClick={() => copyToClipboard(account.accountNo)}
                                                onMouseEnter={(e) => {
                                                    e.target.style.background = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)';
                                                    e.target.style.transform = 'scale(1.02)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.background = 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)';
                                                    e.target.style.transform = 'none';
                                                }}
                                            >
                                                {account.accountNo}
                                                <div style={styles.copyHint}>Click to copy</div>
                                            </div>
                                        </div>
                                        
                                        <div style={styles.detailRow}>
                                            <span style={styles.detailLabel}>RTGS/IFSC Code</span>
                                            <div 
                                                style={{...styles.detailValue, ...styles.importantValue}}
                                                onClick={() => copyToClipboard(account.rtgsCode)}
                                                onMouseEnter={(e) => {
                                                    e.target.style.background = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)';
                                                    e.target.style.transform = 'scale(1.02)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.background = 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)';
                                                    e.target.style.transform = 'none';
                                                }}
                                            >
                                                {account.rtgsCode}
                                                <div style={styles.copyHint}>Click to copy</div>
                                            </div>
                                        </div>
                                        
                                        {account.branchCode && (
                                            <div style={styles.detailRow}>
                                                <span style={styles.detailLabel}>Branch Code</span>
                                                <span style={styles.detailValue}>{account.branchCode}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Security Note */}
                <div style={styles.securityNote}>
                    <p style={styles.securityText}>
                        🔒 All transactions are secure and monitored for your protection
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
       </>
    );
};

export default Payment;