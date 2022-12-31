import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>x publicações</span>
      </div>

      <label>
        <input type="text" placeholder="Buscar conteúdo" />
      </label>
    </SearchContainer>
  )
}
