import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from "reactstrap";
import { addUser } from '../../slices/userSlice';
import { useDispatch } from "react-redux";


const Cari = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [cars, setCars] = useState([]);
  const capacityField = useRef();
  const isWithDriverField = useRef();
  const availableAtDateField = useRef();
  const availableAtTimeField = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check status user login
        // 1. Get token from localStorage
        const token = localStorage.getItem("token");

        // 2. Check token validity from API
        const currentUserRequest = await axios.get(
          "http://localhost:8001/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;

        if (currentUserResponse.status) {
          dispatch(
            addUser({
                user: currentUserResponse.data.user,
                token: token,
            })
        )

          setUser(currentUserResponse.data.user);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setUser({});
  };

  const filtered = async (e) => {
    e.preventDefault();
    try {
      const dateTime = new Date(
        `${availableAtDateField.current.value} ${availableAtTimeField.current.value}`
      );

      const dataCars = await axios.get(
        `http://localhost:8001/cars/filtered?isWithDriver=${isWithDriverField.current.value}&capacity=${capacityField.current.value}&availableAt=${dateTime.toISOString()}`
      );

      const payloadData = await dataCars.data.data.filteredCars;
      console.log(dataCars);
      setCars(payloadData);
    } catch (err) {
      console.log(err);
    }
  };
  return isLoggedIn ? (
    //  hider dan navbar
    <>
      <div>
        <Navbar color="light" expand="md" light container header>
          <NavbarBrand href="/">
            <img src="image/logo.png" alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar-nav>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item me-4">
                  <a className="nav-link text-dark" href="#ourServ">
                    Our Services
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link text-dark" href="#why">
                    Why Us
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link text-dark" href="#testi">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link text-dark" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link text-dark" href="#faq">
                    Hello banh {user.username}
                  </a>
                </li>
                <button
                  type="button"
                  className="btn tomboldanger"
                  variant="danger"
                  onClick={(e) => logout(e)}
                >
                  Log out
                </button>
              </ul>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="isi" style={{ marginTop: "5rem" }}>
                <h1 className="fw-bold">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gambar">
                <div className="background"></div>
                <img
                  src="image/img_car.png"
                  className="mobil img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container">
        <div className="side">
          <Form onSubmit={(e) => filtered(e)}>
            <div className="row">
              <div className="col-md-10 form pt-1">
                <div className="row g-3 needs-validation" noValidate>
                  <div className="col-md-12 col-lg-3 col-sm-12">
                    <label for="validationCustom04" className="form-label">
                      Tipe Driver
                    </label>
                    <select className="form-select" ref={isWithDriverField}>
                      <option selected disabled value="">
                        Pilih Tipe Driver
                      </option>
                      <option value="true">Dengan sopir</option>
                      <option value="false">Tanpa sopir</option>
                    </select>
                  </div>
                  <div className="col-md-12 col-lg-3 col-sm-12">
                    <label for="validationCustom05" className="form-label">
                      Tanggal
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      ref={availableAtDateField}
                    />
                  </div>
                  <div className="col-md-12 col-lg-3 col-sm-12">
                    <label for="validationCustom04" className="form-label">
                      Waktu Jemput/Ambil
                    </label>
                    <select className="form-select" id="inputTime" ref={availableAtTimeField}>
                      <option selected disabled value="">
                        Pilih Waktu
                      </option>
                      <option value="08:00">08:00 WIB</option>
                      <option value="09:00">09:00 WIB</option>
                      <option value="10:00">10:00 WIB</option>
                      <option value="11:00">11:00 WIB</option>
                      <option value="12:00">12:00 WIB</option>
                    </select>
                  </div>
                  <div className="col-md-12 col-lg-3 col-sm-12">
                    <label for="validationCustom05" className="form-label">
                      Jumlah Penumpang(optional)
                    </label>
                    <select ref={capacityField} className="form-select">
                      <option hidden>Jumlah Penumpang</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button
                  id="load-btn"
                  className="btn tombol"
                  style={{ width: "110px", marginTop: "2.1rem" }}
                  type="submit"
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>

      {/* Card view cars */}
      <Container>
        <Row>
          {cars?.map((car) => (
            <Col md={4}>
              <Card style={{ marginTop: "2rem" }} key={car.id}>
                <img src={car.image} alt="" style={{ height: "250px" }} />
                <div className="card-body">
                  <p>
                    {car.model} / {car.manufacture}
                  </p>
                  <h5 className="card-title bold">
                    Rp {car.rentPerDay} / hari
                  </h5>
                  <p className="card-text">{car.description}</p>
                  <div className="">{car.capacity} Orang</div>
                  <div className="pt-2">{car.transmission}</div>
                  <div className="pt-2">Tahun {car.year}</div>
                  <Button variant="success" className=" w-100 mt-3">
                    Pilih Mobil
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="container">
        <div className="text">
          <div className="row" style={{ margin: "5rem 0" }}>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <a href="" className="text-dark font-weight-bold">
                <p>Our services</p>
              </a>
              <a href="" className="text-dark font-weight-bold">
                <p>Why Us</p>
              </a>
              <a href="" className="text-dark font-weight-bold">
                <p>Testimonial</p>
              </a>
              <a href="" className="text-dark font-weight-bold">
                <p>FAQ</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div>
                <p>Connect with us</p>
              </div>
              <div className="sosmed">
                <a href="">
                  <img src="image/icon_facebook.png" alt="" />
                </a>
                <a href="">
                  <img src="image/icon_instagram.png" className="pl-3" alt="" />
                </a>
                <a href="">
                  <img src="image/icon_twitter.png" className="pl-3" alt="" />
                </a>
                <a href="">
                  <img src="image/icon_mail.png" className="pl-3" alt="" />
                </a>
                <a href="">
                  <img src="image/icon_twitch.png" className="pl-3" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <p className="copyright">Copyright Binar 2022</p>
              <p>
                <img src="image/logo.png" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Cari;
