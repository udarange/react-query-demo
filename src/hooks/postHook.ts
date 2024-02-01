import {
  addPost,
  deletePost,
  getAllPosts,
  getByPostId,
  updatePost,
} from '@/services/postService'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function useAllPosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getAllPosts(),
  })
}

export function usePostById(postId?: string) {
  return useQuery({
    queryKey: ['post'],
    queryFn: () => getByPostId(postId!),
    retry: false,
    enabled: !!postId,
  })
}

export function useCreatePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => addPost(),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}

export function useUpdatePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => updatePost(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}

export function useDeletePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => deletePost(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}
