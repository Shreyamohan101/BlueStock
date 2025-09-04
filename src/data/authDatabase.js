// Predefined admin and broker accounts database
// In a real application, this would be stored securely in a backend database

export const adminAccounts = [
  {
    id: 'admin_001',
    email: 'admin@bluestock.com',
    password: 'admin123',
    name: 'Sarah Johnson',
    role: 'admin',
    department: 'Platform Management',
    permissions: ['full_access', 'user_management', 'system_config']
  },
  {
    id: 'admin_002',
    email: 'superadmin@bluestock.com',
    password: 'superadmin123',
    name: 'Michael Chen',
    role: 'admin',
    department: 'System Administration',
    permissions: ['full_access', 'user_management', 'system_config', 'data_management']
  },
  {
    id: 'admin_003',
    email: 'finance.admin@bluestock.com',
    password: 'finance123',
    name: 'Emily Rodriguez',
    role: 'admin',
    department: 'Financial Operations',
    permissions: ['financial_data', 'user_management', 'reports']
  }
];

export const brokerAccounts = [
  {
    id: 'broker_001',
    email: 'broker1@bluestock.com',
    password: 'broker123',
    name: 'David Park',
    role: 'broker',
    license: 'BSE-001234',
    firm: 'Bluestock Securities',
    specialization: 'Equity Trading'
  },
  {
    id: 'broker_002',
    email: 'broker2@bluestock.com',
    password: 'broker456',
    name: 'Lisa Thompson',
    role: 'broker',
    license: 'NSE-005678',
    firm: 'Bluestock Investment Services',
    specialization: 'Derivatives & Options'
  },
  {
    id: 'broker_003',
    email: 'senior.broker@bluestock.com',
    password: 'seniorbroker123',
    name: 'Robert Kim',
    role: 'broker',
    license: 'SEBI-009876',
    firm: 'Bluestock Capital',
    specialization: 'Portfolio Management'
  },
  {
    id: 'broker_004',
    email: 'institutional.broker@bluestock.com',
    password: 'institutional123',
    name: 'Amanda Wilson',
    role: 'broker',
    license: 'INST-001122',
    firm: 'Bluestock Institutional',
    specialization: 'Institutional Trading'
  }
];

// Authentication functions
export const validateCredentials = (email, password, role) => {
  let accountDatabase = [];
  
  switch (role) {
    case 'admin':
      accountDatabase = adminAccounts;
      break;
    case 'broker':
      accountDatabase = brokerAccounts;
      break;
    case 'user':
      // Users can register freely, so we allow any credentials for users
      return {
        isValid: true,
        user: {
          id: `user_Rs{Date.now()}`,
          email,
          name: email.split('@')[0],
          role: 'user',
          accountType: 'Individual Investor'
        }
      };
    default:
      return { isValid: false, error: 'Invalid role specified' };
  }

  // Find matching account
  const account = accountDatabase.find(acc => 
    acc.email.toLowerCase() === email.toLowerCase() && 
    acc.password === password
  );

  if (account) {
    // Remove password from returned user data
    const { password: _, ...userWithoutPassword } = account;
    return {
      isValid: true,
      user: userWithoutPassword
    };
  } else {
    // Check if email exists but password is wrong
    const emailExists = accountDatabase.find(acc => 
      acc.email.toLowerCase() === email.toLowerCase()
    );
    
    if (emailExists) {
      return { 
        isValid: false, 
        error: 'Invalid password for this account' 
      };
    } else {
      return { 
        isValid: false, 
        error: `Access denied: Email not registered as Rs{role}` 
      };
    }
  }
};

// Get all registered emails for a role (for debugging/admin purposes)
export const getRegisteredEmails = (role) => {
  switch (role) {
    case 'admin':
      return adminAccounts.map(acc => acc.email);
    case 'broker':
      return brokerAccounts.map(acc => acc.email);
    default:
      return [];
  }
};

// Check if email is registered for any role
export const checkEmailRegistration = (email) => {
  const isAdmin = adminAccounts.some(acc => acc.email.toLowerCase() === email.toLowerCase());
  const isBroker = brokerAccounts.some(acc => acc.email.toLowerCase() === email.toLowerCase());
  
  if (isAdmin) return 'admin';
  if (isBroker) return 'broker';
  return null;
};