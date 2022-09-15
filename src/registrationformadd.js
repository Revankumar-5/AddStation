import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from "formik";


class Addrecipies1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
    };
  }
  render() {
   
    return (
      <div className="register-form">
               <Formik
            isOpen={this.state.isOpen}
            initialValues={{
              name: "",
              latitude: "",
              longitude: "",
              radius: "",
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required("name is required")
                .matches(/^[0-9A-Za-z" ".]+$/, "No Special Character Allowed"),
              latitude: Yup.string()
                .required("latitude is required")
                .matches(/^[0-9 -]\d+([.]\d{0,})?$/, "Only Numbers  Allowed"),
              longitude: Yup.string()
                .required("longitude is required")
                .matches(/^[0-9 -]\d+([.]\d{0,})?$/, "Only Numbers  Allowed"),
              radius: Yup.string()
                .required("radius is required")
                .matches(/^\d+([.]\d{0,})?$/, "Only Numbers  Allowed"),
            })}
            onSubmit={ (e) => {
              this.props.AddStation(e);
              
            }}

          >
            {({ handleChange, setFieldValue, values }) => (
              <Form>
                <div className="container">
                  <div className="row" style={{ margin: "20px" }}>
                    Name:
                  </div>
                  <div className="row" style={{ margin: "20px" }}>
                    <Field
                      name="name"
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className="form-control"
                    />

                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="row" style={{ margin: "20px" }}>
                    Latitude:
                  </div>
                  <div className="row" style={{ margin: "20px" }}>
                    <Field
                      name="latitude"
                      id="latitude"
                      type="text"
                      className="form-control"
                      value={values.latitude}
                     
                    />
                    <ErrorMessage
                      name="latitude"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="row" style={{ margin: "20px" }}>
                    Longitude
                  </div>
                  <div className="row" style={{ margin: "20px" }}>
                    <Field
                      name="longitude"
                      id="longitude"
                      type="text"
                      className="form-control"
                      value={values.longitude}
                    
                    />
                    <ErrorMessage
                      name="longitude"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="row" style={{ margin: "20px" }}>
                    Radius(In Meter)
                  </div>
                  <div className="row" style={{ margin: "20px" }}>
                    <Field
                      name="radius"
                      id="radius"
                      type="text"
                      className="form-control"
                      value={values.radius}
                     
                     
                    />
                    <ErrorMessage
                      name="radius"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>

                <div class="col-md-12 text-center">
                  <input
                    type="submit"
                    className="btn btn-primary float-right mb-2"
                    disabled={!this.state.loading}
                    value={"INSERT"}
                  ></input>
                </div>
              </Form>
            )}
          </Formik>
      </div>
    );
  }
}
export default Addrecipies1;



