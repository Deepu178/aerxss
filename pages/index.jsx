import Link from 'next/link';
export default function Homepage() {
  return (
    <div>
    <div>This is your Homepage of Nextjs</div>
    <Link href='/posts/firstpost'>First Post</Link>
    </div>
  )
}
