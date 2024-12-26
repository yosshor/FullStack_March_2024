# MVVM Pattern in React with TypeScript (& React hooks)

## Model
```typescript
interface User {
  name: string;
  email: string;
}

interface UserErrors {
  email?: string;
}
```

## ViewModel
```typescript
import { useState } from 'react';

const useUserViewModel = () => {
  const [user, setUser] = useState<User>({ name: '', email: '' });
  const [errors, setErrors] = useState<UserErrors>({});

  const validateEmail = (email: string): string => {
    return email.includes('@') ? '' : 'Invalid email';
  };

  const updateUser = (field: keyof User, value: string): void => {
    setUser(prev => ({ ...prev, [field]: value }));
    
    if (field === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value)
      }));
    }
  };

  const isValid = (): boolean => {
    return !errors.email && user.email !== '' && user.name !== '';
  };

  return {
    user,
    errors,
    updateUser,
    isValid
  };
};

export type UserViewModel = ReturnType<typeof useUserViewModel>;
```

## View
```typescript
import React from 'react';

const UserForm: React.FC = () => {
  const vm = useUserViewModel();
  
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (vm.isValid()) {
      console.log('Submit user:', vm.user);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={vm.user.name}
          onChange={(e) => vm.updateUser('name', e.target.value)}
          placeholder="Name"
          className="border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          value={vm.user.email}
          onChange={(e) => vm.updateUser('email', e.target.value)}
          placeholder="Email"
          className="border p-2 rounded"
        />
        {vm.errors.email && (
          <span className="text-red-500 text-sm">{vm.errors.email}</span>
        )}
      </div>

      <button 
        type="submit"
        disabled={!vm.isValid()}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
```

## Usage
```typescript
import UserForm from './UserForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <UserForm />
    </div>
  );
};
```

Key TypeScript Features:
- Strongly typed interfaces for User and UserErrors
- Type-safe field updates using keyof User
- Explicit return types for all functions
- Type inference for ViewModel through ReturnType utility
- React.FC type for functional components
- Event typing for form handlers