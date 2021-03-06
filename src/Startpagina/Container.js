import React from 'react';
import {links} from './Links';
import'./Container.css';
import {connect} from 'react-redux';
import { MenuItem, setState } from '../Actions';

const mapStateToProps = state => {
	return {
		Midden: state.Reducer.midden,	
	}

}

const mapsDispatchToProps = (dispatch) => {
    return {
        MenuItem: (index) => dispatch(MenuItem(index)),
        setState: () => dispatch(setState()),
    }
}

class Container extends React.Component  {
	

	render() {

		console.log('rerender midden');
		const {Midden,MenuItem,setState} = this.props;
		const DropdownMenu = links.map((value, i) => {
  			return (
  				<a key={i} style={{cursor:'pointer'}} onClick={() => MenuItem(links[i].item)}><h3 className='DropdownMenu'>{links[i].name}</h3></a>
  			);
  		});
	return (
		<div className="container"> 
			<div className="row">
				<div className="col-lg-3 d-none d-lg-block d-xl-block">
					<hr/>
					{DropdownMenu}
					<hr/>
				</div>
				{Midden[0]}
				<div className="col-lg-3 d-none d-lg-block d-xl-block">
					<div className="logo apotheek Craps">
						<img className="img-fluid" alt="Responsive" src={require('../Afbeeldingen/apocrapslogo.webp')}/>
					</div>
					
					<div className="infoApotheek" style={{marginTop:'40px'}}>
						<p> <span style={{fontWeight:"700", fontSize:"120%",width:"100%"}}>Apotheek Craps</span><br/>
					<span style={{width:'100%'}}>Kapelstraat 4</span><br/>
					<span style={{width:'30%'}}>3900</span> <span style={{width:'70%'}}>OVERPELT</span> </p>
				
				
					<p><a href="https://www.google.com/maps/place/Kapelstraat+4,+3900+Overpelt,+Belgi%C3%AB/@51.194847,5.403723,16z/data=!4m5!3m4!1s0x47c12b6c18dda465:0x629ce36f40ddc21c!8m2!3d51.194847!4d5.4037228?hl=nl-NL" target="_blank" rel="noopener noreferrer"> Weergeven op plan</a></p>
				
					<p>
						
							<span style={{width:'80%'}}>Tel: 011 64 32 91</span><br/>
						
					</p>
					
					<p> <span style={{width:'100%'}}><a href="" className="myContact" data-toggle="modal" onClick={setState}> Contact</a></span><br/>
					</p>
					
							<p> <strong> Openingsuren</strong><br/>
								<span ><i>Maandag, dinsdag, 
									donderdag en 
									vrijdag</i><br/>
									09:00 tot 12:00<br/>
									14:00 tot 18:30<br/>
									<br/>
									<i>Woensdag en 
									zaterdag</i><br/>
									09:00 tot 12:00</span> </p>
					
					<p><a href="https://www.apotheeklimburg.be/#/wachtdienst/3900"> Wachtdiensten</a></p>
					</div>
				</div>

			</div>

		</div>

		);

	}
}

export default connect(mapStateToProps, mapsDispatchToProps)(Container);