import React from 'react'

const Why = () => {
  return (
    <div className="container" id="why">
    <div className="mt-5">
      <h2 className="fw-bold mid">Why Us?</h2>
      <p className="mt-3 mid">Mengapa harus pilih Binar Car Rental?</p>
      <div className="kartu tengah">
        <div className="row">
          <div className="col-md-3 col-sm-5">
            <div className="card ">
              <div className="card-body">
                <img src="image/icon_complete.png" className="mb-2" alt=""/>
                <h3 className="font-weight-bold">Mobil Lengkap</h3>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5">
            <div className="card">
              <div className="card-body">
                <img src="image/icon_price.png" className="mb-2" alt=""/>
                <h3 className="font-weight-bold">Mobil Lengkap</h3>
                <p className="card-text">Harga murah dan bersaing,
                  bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5">
            <div className="card">
              <div className="card-body">
                <img src="image/icon_24hrs.png" className="mb-2" alt=""/>
                <h3 className="font-weight-bold">Mobil Lengkap</h3>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop.
                  Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5">
            <div className="card">
              <div className="card-body">
                <img src="image/icon_professional.png" className="mb-2" alt=""/>
                <h3 className="font-weight-bold">Mobil Lengkap</h3>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur,
                  ramah dan selalu tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Why