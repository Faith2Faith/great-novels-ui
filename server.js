import express from 'express'
import path from 'path'
import { getAllAuthors, getAuthorByIdOrName } from './controllers/authors'
import { getAllGenres, getGenreById } from './controllers/genres'
import { getAllNovels, getNovelByIdOrTitle } from './controllers/novels'

const app = express()

app.use(express.static('public'))

app.get('/api/authors', getAllAuthors)
app.get('/api/authors/:identifier', getAuthorByIdOrName)

app.get('/api/genres', getAllGenres)
app.get('/api/genres/:id', getGenreById)

app.get('/api/novels', getAllNovels)
app.get('/api/novels/:identifier', getNovelByIdOrTitle)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(3000, () => {
  console.log('Listening on port 3000...') // eslint-disable-line no-console
})
