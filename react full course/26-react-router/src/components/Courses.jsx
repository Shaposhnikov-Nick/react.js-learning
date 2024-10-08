import {Link, useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string'
import courses from '../data/courses'
import {useEffect, useState} from "react";

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  if (!key && !SORT_KEYS.includes(key)) return [...courses]
  return [...courses].sort((a, b) => a[key] > b[key] ? 1 : -1)
}

const Courses = () => {
  const location = useLocation(); // хук для получения параметров из запроса, например ?sort=id
  const query = queryString.parse(location.search) // парсинг параметров из запроса в объект {sort: 'id'}
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) navigate('.')
  }, [sortKey, navigate]);

  return (
    <>
      <h2>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h2>
      {
        sortedCourses.map((course) => {
          return <div key={course.id}>
            <Link to={course.slug} className="courseLink">{course.title}</Link>
          </div>
        })
      }
    </>
  )
}

export default Courses;