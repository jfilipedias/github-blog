import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchContainer } from './styles'

interface SearchProps {
  postsCount: number
  onSearchChange: (query: string) => void
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormData = z.infer<typeof searchFormSchema>

export function Search({ postsCount, onSearchChange }: SearchProps) {
  const { handleSubmit, register } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchChange(data: SearchFormData) {
    onSearchChange(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchChange)}>
      <div>
        <h2>Publicações</h2>

        <span>
          {postsCount} {postsCount === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>

      <label>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </label>
    </SearchContainer>
  )
}
