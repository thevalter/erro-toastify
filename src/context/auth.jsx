import { createContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {api} from '../services/api';

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {

    const navigate = useNavigate();

    const login = async (username, password) => {
        
        await api.post('/login', {username, password}).then(response => {
            toast.success('Bem vindo!');
            
            sessionStorage.setItem('token', response.data.token);
    
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    
           
            navigate('/');           
        }).catch(() => {
            toast.error('Usuario ou senha invalidos')
        });
 
    }

    return (
        <LoginContext.Provider
            value={{
                authenticated: sessionStorage.getItem('token'),
                login,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}