import './App.css'
import { useEffect, useState } from 'react'
import { getStudents } from './service/student.service'

function App() {
  const [students, setStudents] = useState([])
  const [searchTerm, setSearchTerm] = useState('') // lưu từ khóa tìm kiếm
  const [searchQuery, setSearchQuery] = useState('') // lưu từ khóa đã submit

  useEffect(() => {
    getStudents().then(data => {
      setStudents(data)
    })
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery(searchTerm.trim())
  }

  const handleReset = () => {
    setSearchTerm('')
    setSearchQuery('')
  }

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h1>Intern Practice</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Tìm theo tên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map(student => (
            <li key={student.id}>
              {student.name} - {student.class} - {student.hobbies?.join(', ') || 'Chưa có sở thích'}
            </li>
          ))
        ) : (
          <li>Không tìm thấy</li>
        )}
      </ul>
    </div>
  )
}

export default App
