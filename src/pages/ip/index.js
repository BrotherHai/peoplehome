import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { ipdesign, meta } from "../../content_option";
import { Link } from "react-router-dom";
export const Ip = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Ip | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
          <Link to="/portfolios">返回上一页</Link>

            <h1 className="display-4 mb-4"> Ip </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {ipdesign.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};