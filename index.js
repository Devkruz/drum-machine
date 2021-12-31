

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

class App extends React.Component {
       
    
          
       constructor(props) {
           super(props);

           this.state = {
              power: true,
              bank: bankOne,
              volume:0
            };
 
            this.handlePower = this.handlePower.bind(this);
            this.handleBankOne = this.handleBankOne.bind(this);
            this.handleBankTwo = this.handleBankTwo.bind(this);
            this.handleVolume = this.handleVolume.bind(this)

       };

       handlePower() {
            this.setState((state) => {
                return {
                     power: !state.power,
                };
            });
       };

       handleBankOne() {
           this.setState({
              bank: bankOne
           })
           console.log("bank one")
       };

       handleBankTwo() {
           this.setState({
              bank: bankTwo
           })
           console.log("bank two")
       };

       handleVolume(e) {
           this.setState({
                volume:e.target.value
           })
           console.log(e)
           console.log(this.state.volume)
       };

        
 
         


     render() {
           return(
                <>
                    <div className="text-center">Hello World!!</div>
                    <VolumeSlider handleVolume={this.handleVolume} volume={this.state.volume}/>
                    {/* <BankPad handleBankOne = {this.handleBankOne} handleBankTwo = {this.handleBankTwo}/> */}
                   
               </>
           )
     }
}

//drumpad component
//volume component 
class VolumeSlider extends React.Component {
       
}


//functionpad component
  //power-pad component
 class PowerPad extends React.Component {
   
       
       render() {
         return(
             <div className="toggle-wrapper">
              <div className = {this.props.power ? 'toggle toggle-on' : "toggle"} id='switch' onClick={this.props.handlePower}>
                <div className ='toggle-text-off'>OFF</div>
                <div className ='glow-comp'></div>
                <div className ='toggle-button'></div>
                <div className ='toggle-text-on'>ON</div>
             </div>
            </div>
          )
        };
   };

  //bank-pad component
  class BankPad extends React.Component {
       
           render() {
              return (
                <>
                 <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio"   onClick={this.props.handleBankOne}/>
                 <label htmlFor="toggle-on" className="btn text-white">Bank One</label>
                 <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio"  onClick={this.props.handleBankTwo}/>
                 <label htmlFor="toggle-off" className="btn text-white ">Bank Two</label>
               </>
              )
           }
  }
//display component
//root component





ReactDOM.render(<App/>, document.getElementById("root"))