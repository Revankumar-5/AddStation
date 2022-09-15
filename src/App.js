import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Addmodel from "./modal";
import React from "react";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";


class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isOpen: false,
      selectedOption: "None",
      formValues: [{ name: "", latitude: "", longitude: "", radius: "" ,position:0}],
      total: null,
      localStorage: [
        {
          name: "Select the Station",
          latitude: "",
          longitude: "",
          radius: "",
        },
        {
          name: "coimbatore",
          latitude: "11.0168",
          longitude: "176.9558",
          radius: "60000",
        },
        {
          name: "Chennai",
          latitude: "12.121",
          longitude: "25.20",
          radius: "1200",
        },
       
        {
          name: "Madurai",
          latitude: "12.121",
          longitude: "16.321",
          radius: "500",
        },
        {
          name: "Theni",
          latitude: "1.121",
          longitude: "17.321",
          radius: "500",
        },
      ],
      showCarosal: true,
      item: [],
      updatemodal: false,
      updateditem: null,
      count:0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  addFormFields() {
    $( "#form" ).sortable( {
      update:function(event,ui)
    {
      console.log($(this))
      $(this).children().each(function(index)
      {
        console.log(index);
  
      })
    }
  });
    const newcount=this.state.count+1
    this.setState({
      formValues: [
        ...this.state.formValues,
        { name: "", latitude: "", longitude: "", radius: "", position :
        newcount},
      ],
    });
    this.setState({count:newcount})
  
  }
//  sortableEnable() {
//     $( "#sortable" ).sortable();
//     $( "#sortable" ).sortable( "option", "disabled", false );
//     // ^^^ this is required otherwise re-enabling sortable will not work!
//     $( "#sortable" ).disableSelection();
//     return false;
//   }
//  sortableDisable() {
//     $( "#draggable" ).sortable("disable");
//     console.log("stoppped");

   
//   }
  removeFormFields(i,e) {
    // this.sortableDisable();
    // // console.log(e);
    // $("#form").sortable( "disable" )
 
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
  this.setState({ formValues });
    console.log(this.state.formValues);
  
  }
  handleChange(index, e) {
    // var selectedData =
    //   this.state.localStorage[
    //     this.state.localStorage
    //       .map(function (item) {
    //         return item.name;
    //       })
    //       .indexOf(e.target.value)
    //   ];
  
    const selectedData=this.state.localStorage.find((data=>data.name===e.target.value));
    console.log(selectedData);
    const found = this.state.formValues.some(
      (el) =>
        el.latitude == selectedData.latitude &&
        el.longitude == selectedData.longitude
    );
    console.log(found);
    if (!found) {
      const values={ ...selectedData,name:e.target.value}
      this.state.formValues[index]=values;
      // this.state.formValues[index].name = e.target.value;
      // this.setState({ formValues: this.state.formValues });
      // this.state.formValues[index].latitude = selectedData.latitude;
      // this.state.formValues[index].longitude = selectedData.longitude;
      // this.state.formValues[index].radius = selectedData.radius;
      // this.state.formValues[index].position = index;
      this.setState({ formValues: this.state.formValues });
    } else {
      toast(
        "Cant add station which contains Same (Radius,Longitude or latitude)"
      );
    }
  }
  AddStation = (e) => {
    var localvalues = {
      name: e.name,
      latitude: e.latitude,
      longitude: e.longitude,
      radius: e.radius,
    };

    const newlocal = JSON.parse(localStorage.getItem("station1"));
    const filtered = newlocal.filter((item) => item !== null);
    newlocal.push(localvalues);
    localStorage.setItem("station1", JSON.stringify(newlocal));
    console.log(newlocal);
    const object = Object.assign({}, ...newlocal);
    console.log(object);
    this.state.localStorage.push(object);
    this.setState({ localStorage: this.state.localStorage });
    console.log(this.state.localStorage);
  };
  componentDidMount() {
    localStorage.setItem("station1", JSON.stringify([]));
    $( "#form" ).sortable( );
   
    
    const items=this.state.formValues
    
    // {    $( "#form" ).sortable({
    //     connectWith: ".formsortable",
    //     stop: function(e, formsortable){
    //       console.log(formsortable.innerHTML)
        
    //       var item = formsortable.item[0].id
    //       var from = formsortable.sender?"not the same sortable":"same sortable";
    //       alert("dragged:" + item + " from: " + from);
    //     }
    //   }).disableSelection();
  
    // }
  }
  render() {
    return (
      <>
        <div className="container ">
          <div className="row mb-5">
            <Addmodel AddStation={(e) => this.AddStation(e)} />
          </div>
        </div>
        <div className="container" style={{ height: "auto" }}>
          <div class="container " style={{ backgroundColor: "black" }}>
            <div class="row align-items">
              <div class="col-1" style={{ color: "white" }}></div>{" "}
              <div class="col-3" style={{ color: "white" }}>
                Station Name
              </div>
              <div class="col-3" style={{ color: "white" }}>
                Latitude
              </div>
              <div class="col-3" style={{ color: "white" }}>
                Longitude
              </div>
              <div class="col-2" style={{ color: "white" }}>
                Radius (in Meters)
              </div>
            </div>
          </div>
          <br />
          <form id="form" >
            {this.state.formValues.map((element, index) => (
              <ol  class="formsortable"  data-index={index}  data-position={element.position}>
                <li style={{ listStyle: "none", margin: "0px" }}  >
                
                  <div className="container" key={index}>
                    <div class="row ">
                      <div class="col-3" style={{ color: "black" }}>
                        <i  
                          style={{ marginRight: "20px" }}
                          class="bi bi-arrow-down-up"
                        >
                          {index}
                        </i>
                        <select
                          style={{ width: "200px", height: "30px" }}
                          value={this.state.formValues[index].name}
                          onChange={(e) => this.handleChange(index, e)}
                        >
                          {this.state.localStorage.map(({ name }, indexs) => (
                            <option value={name}>{name}</option>
                          ))}
                        </select>
                      </div>
                      <div class="col-3" style={{ color: "black" }}>
                        <input
                          type="text"
                          size={20}
                          name="latitude"
                          disabled
                          value={element.latitude || ""}
                        />
                      </div>

                      <div class="col-3" style={{ color: "black" }}>
                        <input
                          type="text"
                          size={20}
                          name="longitude"
                          value={element.longitude || ""}
                          disabled
                        />
                      </div>
                      <div
                        class="col-3"
                        style={{ color: "black", display: "inline-flex" }}
                      >
                        <input
                          type="text"
                          size={16}
                          name="radius"
                          disabled
                          value={element.radius || ""}
                        />
                        <i
                          style={{ marginLeft: "10px", marginBottom: "10px" }}
                          class="bi bi-trash"
                          onClick={() => this.removeFormFields(index,element)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            ))}
          </form>
          <br />
          <div class="container bg-light">
            <div class="col-md-12 text-center">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => this.addFormFields()}
              >
                +
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <ToastContainer />
      </>
    );
  }
}
export default Modals;
