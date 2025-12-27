import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Info } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { authAPI } from '../../api/auth.api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const demoCredentials = authAPI.getDemoCredentials();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (demoEmail, demoPassword) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
    setError('');
    setIsLoading(true);

    try {
      await login(demoEmail, demoPassword);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Demo login failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-slate-50 to-accent-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-white text-center">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">M</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-primary-100">Sign in to manage your maintenance operations</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Demo Info */}
            <div className="p-4 rounded-lg bg-accent-50 border border-accent-200">
              <div className="flex gap-3">
                <Info className="text-accent-600 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-accent-900 uppercase mb-2">Demo Mode</p>
                  <p className="text-xs text-accent-800 mb-3">Use demo credentials below until backend is ready:</p>
                  <div className="space-y-2">
                    {demoCredentials.map((cred, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleDemoLogin(cred.email, cred.password)}
                        className="w-full text-left p-2 bg-white rounded border border-accent-200 hover:bg-accent-100 transition-colors text-xs"
                      >
                        <p className="font-mono font-medium text-accent-900">{cred.email}</p>
                        <p className="text-accent-700">Pass: {cred.password} ({cred.user.role})</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Or enter manually</span>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3 text-slate-400" size={20} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3 text-slate-400" size={20} />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary-600 rounded border-slate-300" />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : <>
                Sign In <ArrowRight size={18} />
              </>}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Don't have an account?</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <Link
              to="/signup"
              className="w-full border-2 border-primary-200 text-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
            >
              Create Account
            </Link>
          </form>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-slate-600 mt-6">
          © 2024 Maintenance ERP. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
