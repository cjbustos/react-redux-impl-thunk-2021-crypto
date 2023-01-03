import React from "react";
import { connect } from "react-redux";
import { actionChoiceCryptoToView, getCryptos } from "../state/actions";
import SimpleBarChart from "./SimpleBarChart";
import "./Cryptos.css";
import { TablaConInfoAdicional, Table } from "./Table";

class Cryptos extends React.Component {

  handleChange = ({ target }) => {
    this.props.setSelectedOption(target.value);
  };

  componentDidMount() {
    this.props.getCryptos();
  }

  render() {
    let { data } = this.props.cryptos;

    if (data === undefined) return null;

    return (
      <div className="container p-3">
        <div className="row">
          <div className="col-6">
            <h1>{this.props.title}</h1>
            <select value={this.props.selectedOption} onChange={this.handleChange}>
              {data.map((currElement) => (
                <option key={currElement.id} value={currElement.symbol}>
                  {currElement.symbol}
                </option>
              ))}
            </select>
            <hr />
            {data
              .filter((c) => c.symbol === this.props.selectedOption)
              .map((e) => (
                <SimpleBarChart
                  key={e.id}
                  name={e.symbol}
                  price={e.metrics.market_data.price_usd}
                />
              ))}
              <hr />
              <div>
                <h3>Render Props...</h3>
              </div>
          </div>
          <div className="col-6">
            <h3>Basic component</h3>
            <Table {...this.props} />

            <h3>Component with Wrapper</h3>
            <TablaConInfoAdicional {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

//Callback de configuración que hace que una 'prop' pueda recibir el 'state'
const mapStateToProps = (state) => ({
  //cryptos es una 'prop' que tiene el acceso a las 'cryptos' que están dentro de redux
  cryptos: state.cryptos,
  selectedOption: state.selectedOption,
});

const mapDispatchToProps = (dispatch) => ({
  //contendrá las props que me van a permitir despachar las acciones a los reducers
  getCryptos: () => {
    console.log("1) action throught middleware -> getCryptos()");
    dispatch(getCryptos());
  },
  setSelectedOption: (selectedOption) => {
    console.log("1) action setSelectedOption -> actionChoiceCryptoToView ");
    dispatch(actionChoiceCryptoToView(selectedOption));
  },
});

//export default Cryptos
//función definida por composición, acepta dos parámetros de entrada:
//uno conecta el state a las props del componente y el otro conecta las 'props'
//al método 'dispatch()' por el cual el componente emitirá las acciones.
//Conexión de redux al componente - El método "connect" es un HOC
export default connect(mapStateToProps, mapDispatchToProps)(Cryptos);
