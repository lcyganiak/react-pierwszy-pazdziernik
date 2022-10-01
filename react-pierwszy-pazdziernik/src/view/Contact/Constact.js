import React, { Component } from "react";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telefon: '422888562558254',
            email: 'nielubie@react.com',
            z: 444,
            e: 555,
            propsOdRodzca: this.props.value || 'xd' // domyslne wartość propsów sposób natywne dla JS

        }
    }

componentDidMount = () => {
        // useEffect(() => {
        //     alert("Tylko Raz")
        // }, [])
        console.log('componentDidMount', this)
    }
//  const [wartoscParagrafu, setWartoscParagrafu] = useState(props.value || '')

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Rozpoczyna działanie componentDidUpdate')
    console.log(this.state, 'obecny state')
    console.log(prevState, 'stary state')
    if(prevState.telefon !== this.state.telefon) {
    if (this.state.telefon > 500000)  {
        alert("za duża liczba ")
        this.setState({
            telefon: 'nie udało się zminić numeru'
           })
    } else {
        alert("Numer zminiony")
    }

        }
  }
  componentWillUnmount = () => {

  }
  zminaTelefonu = () => {
    console.log('this.state.telefon zmina numeru ')
    // this.state = {
    //     telefon: '422888562558254',
    //     ema zminiony
    // }
    const nowyNumer = Math.floor(Math.random()* 1000000)
   this.setState({
    telefon: nowyNumer
   })
//    this.state = {
//     telefon: '000000000000000000000000000000000000000000',
//     email: 'nielubie@react.com',
//     z: 444,
//     e: 555,

// }
  }
    render = () => {

        return (
            <div>
                <h4>Jestem komponentem Klasowym </h4>
              <p>{this.state.telefon}</p>  
              <button onClick={this.zminaTelefonu}>Zmina telefonu</button>
              <p>{this.state.propsOdRodzca}</p>
            </div>
        )
    }
}
// Contact.defaultProps = {
//     propsOdRodzca: 'xd'
// } wczytywanie domyslnyuch ratość props - sposób elegancki
export default Contact


