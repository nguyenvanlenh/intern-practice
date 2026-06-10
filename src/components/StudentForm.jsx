import { useEffect, useState } from "react"
import { getStudents } from "../service/student.service"

export const StudentForm = () => {
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
            <form onSubmit={handleSearch}>
                <div className='flex justify-center items-center'>
                    <input
                        type="text"
                        placeholder="Tìm theo tên..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className='flex gap-3'>
                        <button className='p-3 bg-[#0056EB] text-white rounded-2xl' type="submit">Search</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </div>
                </div>
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