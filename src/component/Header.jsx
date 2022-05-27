import React from 'react'

const Header = () => {
  return (
    <div><div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="isi" style={{ marginTop: "5rem" }}>
          <h1 className="fw-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>Selamat datang di Binar Car Rental.
            Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap
            melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <a href="/cari"><button type="button" class="btn tombol" style={{ marginBottom: "2rem" }}>Mulai Sewa Mobil</button></a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="gambar">
          <div className="background"></div>
          <img src="image/img_car.png" className="mobil img-fluid" alt=""/>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Header