import { SearchContainer } from './styles'

interface SearchProps {
  postAmount: number
}

export function Search({ postAmount }: SearchProps) {
  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>

        <span>
          {postAmount} {postAmount > 1 ? 'publicações' : 'publicação'}
        </span>
      </div>

      <label>
        <input type="text" placeholder="Buscar conteúdo" />
      </label>
    </SearchContainer>
  )
}
