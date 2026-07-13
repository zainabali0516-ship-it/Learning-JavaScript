import Link from 'next/link';
export default function StudentsPage() {
  return (
    <div>
      <h1>Students List</h1>
      <ul>
        <li><Link href="/students/101">Student Roll No: 101</Link></li>
        <li><Link href="/students/25">Student Roll No: 25</Link></li>
      </ul>
    </div>
  );
}