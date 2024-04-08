import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { QNA_CARD_QUERY_KEY } from './useGetQnaCard';
import { QNA_LIKE_QUERY_KEY } from './useGetQnaLike';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { del } from '@/libs/api/client';

export const useDeleteQnaLike = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError>({
    mutationFn: () => del(`api/likes/${id}`),
    onSuccess: () => {
      alert('좋아요 삭제 성공');
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_CARD_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_LIKE_QUERY_KEY] });
    },
    onError: () => {
      alert('좋아요 삭제 실패');
    },
  });
};