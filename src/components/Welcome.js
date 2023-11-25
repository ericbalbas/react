import React, { Component } from 'react';
import Swal from "sweetalert2";
import '../index.css';



const buttons = [
  { label: "Addition", color: "bg-blue-500", operator: "+" },
  { label: "Subtraction", color: "bg-green-500", operator: "-" },
  { label: "Multiplication", color: "bg-yellow-500", operator: "*" },
  { label: "Division", color: "bg-red-500", operator: "/" },
];

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: `let's solve!!`,
      inputText1: "",
      inputText2: "",
      // result: "",
    };
  }

  toNumber (param) {
    return parseInt(param)
  }

  changeMessage() {
    // this.message ==
    const newMessage =
      this.state.message === "Hello, World!"
        ? "I'm Learning React!!"
        : "Hello, World!";
    this.setState({ message: newMessage });
  }

  handler(param,event) {
    this.setState({ [`inputText${param}`]: event.target.value });
  }

  handleUpdateButtonClick(param) {

    
    const { inputText1, inputText2 } = this.state;
    
     if (isNaN(inputText1) || isNaN(inputText2) || !inputText1 || !inputText2) {
       this.setState({ message: "Please enter valid numbers!" });

        Swal.fire({
          title: "invalid input!!!",
          text: "Please try again!!!",
          icon: "error",
        });
       return;
     }



    const result = eval(`${inputText1} ${param} ${inputText2}`);
    const newMessage = `${inputText1} ${param} ${inputText2} = ${result}`;

      Swal.fire({
        title: "Calculation Result",
        text: newMessage,
        icon: "info",
      });

    this.setState({ message: newMessage });
  }


  render() {
    return (
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-center mb-5 block">
          {this.state.message ?? "Please input!!"}
        </h1>

        <input
          type="number"
          value={this.state.inputText}
          className="border rounded w-33 mb-5 py-2 px-2 focus:outline-none focus:border-blue-500"
          onChange={(event) => this.handler(1, event)}
          placeholder="Enter a value....."
        />
        <input
          type="number"
          value={this.state.inputText}
          className="border rounded w-33 mb-5 py-2 px-2 focus:outline-none focus:border-blue-500"
          onChange={(event) => this.handler(2, event)}
          placeholder="Enter a value....."
        />
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-5 text-sm rounded"
          onClick={() => this.handleUpdateButtonClick()}
        >
          change
        </button> */}

        <div className="flex space-x-4">
          <div className="flex space-x-4">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`hover:${button.color.replace(
                  "bg-",
                  "hover:bg-"
                )} text-sm text-white py-2 px-4 rounded ${button.color}`}
                onClick={() => this.handleUpdateButtonClick(button.operator)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;