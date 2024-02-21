import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Header() {
    return (
        <Container fluid className='bg-body-secondary py-3 px-5'>
                <Row className='align-items-center'>
                    <Col lg={3}>
                        <div>
                            <Link href={"/"} className='text-decoration-none text-black'>
                                Navbar Logo
                            </Link>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <nav>
                            <ul className='d-flex justify-content-end align-items-center gap-4 mb-0'>
                                <li>
                                    <Link href={"/"} className='text-decoration-none text-black'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/contact"} className='text-decoration-none text-black'>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/login"} className='text-decoration-none text-black'>
                                        <button className='btn btn-outline-dark'>Login</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/register"} className='text-decoration-none text-black'>
                                        <button className='btn btn-outline-dark'>Register</button>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
        </Container>
    )
}