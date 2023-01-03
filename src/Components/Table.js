import React from "react";

export class Table extends React.Component {

  render() {
    
    let { selectedOption, cryptos } = this.props;
    let { data } = cryptos;

    let objArr = data
                    .filter((e) => e.symbol === selectedOption)
                    .map((d) => d.metrics.market_data)
        
    return (
      <div className="container p-3">
        <h3>HOC - Show details last 24 hs.</h3>
        <table className="table">
          <thead>
            <tr>
              <td>Close</td>
              <td>High</td>
              <td>Low</td>
              <td>Open</td>
              <td>Volume</td>
            </tr>
          </thead>
          <tbody>
              <TableFilter data={objArr} param={"ohlcv_last_24_hour"}/>
          </tbody>
        </table>
      </div>
    );
  }
}

//export default Table;

const HOCTable =
  (time) => (fondo, fondoFyH) => (logoURL) => (footer) => (Table) => {
    return class WrapperTable extends React.Component {
      render() {
        return (
          <div className={fondo}>
            {time && (
              <div className={fondoFyH}>
                Get DATA at: {new Date().toLocaleString()}
              </div>
            )}
            <Table {...this.props} />
            <img src={logoURL} width={50} className="mr-5" alt="logo" />
            <span>
              <em>{footer.author}</em>
            </span>
          </div>
        );
      }
    };
  };

/* export default HOCTable
  (true)
  ('btn btn-success p-4', 'bg-danger p-2')
  ('https://img.icons8.com/external-prettycons-lineal-color-prettycons/344/external-cryptocurrencies-crypto-and-currency-prettycons-lineal-color-prettycons.png')
  ({text: 'Copyright 2022', author: 'Carlos'})
  (Table); */

export const TablaConInfoAdicional = HOCTable(true)
  ("btn btn-success p-4", "bg-info p-2")
  ("https://img.icons8.com/external-prettycons-lineal-color-prettycons/344/external-cryptocurrencies-crypto-and-currency-prettycons-lineal-color-prettycons.png")
  ({ text: "Copyright 2021", author: "Dev by Carlos Bustos" })
  (Table);


  function TableFill(props){
    const data = props.data
    const rowWithData = data.map((element) => 
        <td key={element}>
          {element}
        </td>)
      return (<tr>{rowWithData}</tr>)
  }

  function TableFilter(props){
    //From props
    const arr = props.data
    const param = props.param

    //Inner for work
    var values = []
    var obj = {}

    for(var clave in arr){
      var element = arr[clave]
      //If obj may be null or undefined fill with str Unknown
      obj = element[param] ?? 'Unknown'
      console.log(obj);
    }

    //Get only values
    values = Object.values(obj)
    return  <TableFill data={values}/>
  }
