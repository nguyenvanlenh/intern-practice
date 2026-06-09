import './App.css'
import { useState } from 'react'
function App() {
  const [students, setStudents] = useState([])
  
  const [searchTerm, setSearchTerm] = useState('') //lưu từ khóa tìm kiếm
  const [searchQuery, setSearchQuery] = useState('') //lưu kết quả tìm kiếm

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
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
      </form>

      <ul>
        {filteredStudents.length > 0 ?(
          filteredStudents.map(student => (
            <li key = {student.id}> {student.name} - {student.class} - {student.hobbies}</li>
          ))
        ) : (
          <p>Không tìm thấy</p>
        )}
      </ul>
    </div>
  )
}

export default App
