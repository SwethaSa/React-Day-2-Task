import React from "react";
import { Rate } from "antd";

const MyCard = (props) => {
  return (
    <section className="main">
      <div className="container px-3 px-lg-4 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {props.data.map((card, i) => (
            <div className="col mb-5" key={i}>
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  {props.data[i].badge}
                </div>
                <img
                  className="productimage"
                  src={props.data[i].imageurl}
                  alt="product"
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{props.data[i].title}</h5>

                    <div>
                      <Rate
                        className="rating"
                        style={{ color: "#900C3F " }}
                        allowHalf
                        allowClear
                      >
                        {props.data[i].rating}
                      </Rate>
                    </div>
                    <div className="pricing">
                      <b className="line text-muted">
                        {props.data[i].linethrough}
                      </b>
                      <span className="price">{props.data[i].price}</span>
                    </div>

                    <div className="text-center">
                      <button
                        className="btn btn-outline-dark "
                        onClick={props.myProducts}
                      >
                        {props.data[i].button}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyCard;
