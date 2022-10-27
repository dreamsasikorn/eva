import Link from 'next/link'
export default function header() {
    return (
        <nav className='navbar'>
            <div className='container-fluid'>
                <span className='text-white p-2'>
                    Evaluate System (รายงานสรุปผลการตรวจภาพการติดตั้ง DW (ปรับปรุงบนระบบปัจจุบัน))
                </span>
                <Link href="/" className='btn btn-outline-success float-right text-white'>Back To Home</Link>
            </div>
        </nav>
    );
}