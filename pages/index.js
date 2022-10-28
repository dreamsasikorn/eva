
import Link from 'next/link';
import Nav from '../components/layout/navbar';
import styles from '../styles/Home.module.css'
export default function Home() {

  return (
    <div>
      <Nav></Nav>
      <div className='container m-4'>
        <div className='row  d-flex justify-content-center'>

          <div className='col-md-3 col-sm-6'>
            <Link href="/reporteva005" legacyBehavior>
              <a className='btn'>
                <div className='card'>
                  <div className="card-body">
                    <p className="cardtext">
                      EVA005 : รายงานแสดงจำนวนรูปภาพที่อัพโหลดใบปิดงานติดตั้ง
                    </p>
                  </div>
                </div>
              </a>
            </Link>

          </div>

          <div className='col-md-3 col-sm-6 m-2'>
            <Link href="/reporteva005" legacyBehavior>
              <a className='btn'>
                <div className='card'>
                  <div className="card-body">
                    <p className="cardtext">
                      EVA005 : รายงานแสดงจำนวนรูปภาพที่อัพโหลดใบปิดงานติดตั้ง
                    </p>
                  </div>
                </div>
              </a>
            </Link>

          </div>

          <div className='col-md-3 col-sm-6 m-2'>
            <Link href="/reporteva005" legacyBehavior>
              <a className='btn'>
                <div className='card'>
                  <div className="card-body">
                    <p className="cardtext">
                      EVA005 : รายงานแสดงจำนวนรูปภาพที่อัพโหลดใบปิดงานติดตั้ง
                    </p>
                  </div>
                </div>
              </a>
            </Link>

          </div>

          <div className='col-md-3 col-sm-6 m-2'>
            <Link href="/reporteva005" legacyBehavior>
              <a className='btn'>
                <div className='card'>
                  <div className="card-body">
                    <p className="cardtext">
                      EVA005 : รายงานแสดงจำนวนรูปภาพที่อัพโหลดใบปิดงานติดตั้ง
                    </p>
                  </div>
                </div>
              </a>
            </Link>

          </div>

          <div className='col-md-3 col-sm-6 m-2'>
            <Link href="/reporteva005" legacyBehavior>
              <a className='btn'>
                <div className='card'>
                  <div className="card-body">
                    <p className="cardtext">
                      EVA005 : รายงานแสดงจำนวนรูปภาพที่อัพโหลดใบปิดงานติดตั้ง
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
