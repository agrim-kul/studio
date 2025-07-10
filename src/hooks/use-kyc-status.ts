
'use client'

import { useState, useEffect } from 'react';
import type { UserProfile } from '@/lib/types';
import { userProfile as staticUserProfile } from '@/lib/data';

export function useKycStatus() {
    const [kycStatus, setKycStatus] = useState<UserProfile['kycStatus']>(() => {
        if (typeof window !== 'undefined') {
            const sessionStatus = sessionStorage.getItem('kycStatus') as UserProfile['kycStatus'];
            return sessionStatus || staticUserProfile.kycStatus;
        }
        return staticUserProfile.kycStatus;
    });

    useEffect(() => {
        const handleStorageChange = () => {
            const sessionStatus = sessionStorage.getItem('kycStatus') as UserProfile['kycStatus'];
             if (sessionStatus) {
                setKycStatus(sessionStatus);
            }
        };

        // Listen for custom event
        window.addEventListener('sessionStorageChange', handleStorageChange);

        // Initial check
        handleStorageChange();

        return () => {
            window.removeEventListener('sessionStorageChange', handleStorageChange);
        };
    }, []);

    return kycStatus;
}
