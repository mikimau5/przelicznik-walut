class Calculator extends React.Component {
  state = {
    product: "electricity",
    number: "",
    prices: {
      electricity: 0.55,
      gasoline: 5.26,
      gas: 1.3
    }
  };

  handleChange = e => {
    this.setState({
      number: e.target.value
    });
  };

  handleSelect = e => {
    this.setState({
      product: e.target.value,
      number: ""
    });
  };

  insertSuffix(select) {
    if (select === "electricity") return <em> kWh </em>;
    else if (select === "gasoline") return <em> litrów </em>;
    else if (select === "gas")
      return (
        <em>
          {" "}
          m<sup>3</sup>
        </em>
      );
    else return null;
  }

  selectPrice(select) {
    const price = this.state.prices[select];
    return price;
  }
  render() {
    const price = this.selectPrice(this.state.product);

    const zloty = () => {
      let sum = Math.round(this.state.number * price * 100) / 100;
      return sum;
    };

    const dolar = () => {
      let sum = Math.round(this.state.number * price * 0.26 * 100) / 100;
      return sum;
    };

    const euro = () => {
      let sum = Math.round(this.state.number * price * 0.23 * 100) / 100;
      return sum;
    };
    const pound = () => {
      let sum = Math.round(this.state.number * price * 0.2 * 100) / 100;
      return sum;
    };

    return (
      <>
        <h1>Przelicznik walut</h1>
        <section className="navigate">
          <label>
            {" "}
            Wybierz produkt{" "}
            <select onChange={this.handleSelect} value={this.state.product}>
              <option value="electricity"> prąd </option>{" "}
              <option value="gasoline"> benzyna </option>{" "}
              <option value="gas"> gaz </option>{" "}
            </select>{" "}
          </label>{" "}
          <label>
            <input
              type="number"
              value={this.state.number}
              onChange={this.handleChange}
            />{" "}
            {this.insertSuffix(this.state.product)}{" "}
          </label>{" "}
        </section>
        <section className="result">
          <p>
            {" "}
            Wartość w złotówkach:{" "}
            <strong>{this.state.number ? zloty() : null}</strong>{" "}
          </p>{" "}
          <p>
            {" "}
            Wartość w dolarach:{" "}
            <strong>{this.state.number ? dolar() : null}</strong>{" "}
          </p>{" "}
          <p>
            {" "}
            Wartość w euro:{" "}
            <strong>{this.state.number ? euro() : null} </strong>
          </p>{" "}
          <p>
            {" "}
            Wartość w funtach:{" "}
            <strong>{this.state.number ? pound() : null} </strong>
          </p>{" "}
        </section>
      </>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
