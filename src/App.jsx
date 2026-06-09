import './App.css'
import { students } from './data/mock'

function App() {
  console.log(students)

  return (
    <div>
      <h1>Intern Practice</h1>
      <ul>
        {students.map(student => (
          <li key = {student.id}> {student.name} - {student.class} - {student.hobbies}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
