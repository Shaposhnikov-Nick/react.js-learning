import {Link, useNavigate, useParams} from "react-router-dom";
import courses from '../data/courses'
import {useEffect} from "react";

const SingleCourse = () => {
  const params = useParams(); // хук для получения параметров пути из ссылки, например /courses/java
  const navigate = useNavigate()  // перенаправление на другую страницу
  const course = courses.find((course) => course.slug === params.slug);

  // если введен неверный путь (такого курса не существует)
  // перенаправить на другую страницу
  useEffect(() => {
    if(!course) {
      navigate('..', {relative: 'path'})
    }
  },[course, navigate])

  // или можно просто показать другой компонент
  // if(!course) {
  //   return <NotFound/>
  // }

  return (
    <>
      <h2>{course?.title}</h2>
      <h3>Id: {course?.id}</h3>
      <h3>Slug: {course?.slug}</h3>
      <Link to=".." relative="path">All courses</Link>
    </>
  )

}
export default SingleCourse;