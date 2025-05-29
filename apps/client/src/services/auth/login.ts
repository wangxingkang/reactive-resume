import type { AuthResponseDto, LoginDto } from '@reactive-resume/dto';
import type { AxiosResponse } from 'axios';
import { Navigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useAuthStore } from '@/stores/auth';

export const login = async (data: LoginDto) => {
  const response = await axios.post<AuthResponseDto, AxiosResponse<AuthResponseDto>, LoginDto>(
    '/auth/login',
    data
  );

  return response.data;
};

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const {
    error,
    isPending: loading,
    mutateAsync: loginFn,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.status === '2fa_required') {
        void Navigate({
          to: '/auth/verify-otp',
        });

        return;
      }

      setUser(data.user);
      queryClient.setQueryData(['user'], data.user);
    }
  });

  return { login: loginFn, loading, error };
}
